// import defaults from 'lodash/defaults';

import React, {ChangeEvent, PureComponent} from 'react';
import {LegacyForms, Select, Segment, InlineFieldRow, InlineField} from '@grafana/ui';
import {QueryEditorProps, SelectableValue} from '@grafana/data';
import {DataSource} from './datasource';
import {MyDataSourceOptions, MyQuery} from './types';
import {find} from 'lodash';
import {HierarchyNode} from "d3-hierarchy";

const {Input} = LegacyForms;

type Props = QueryEditorProps<DataSource, MyQuery, MyDataSourceOptions>;

interface States {
    isMetricOptionsLoading: boolean,
    metricOptions?: HierarchyNode<SelectableValue>,
    metricChoice:Array<HierarchyNode<SelectableValue>>,
    metric?: HierarchyNode<SelectableValue>,
    type: SelectableValue<'metrics' | 'node_core' | 'jobs'>
    users?: string | string[],
    jobs?: string | string[],
    nodes?: string | string[],
}

export class QueryEditor extends PureComponent<Props, States> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isMetricOptionsLoading: false,
            metricChoice:[],
            type: {label: 'metrics'}
        }
    }

    onQueryTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {onChange, query} = this.props;
        onChange({...query, queryText: event.target.value});
    };

    loadMetrics() {
        const {datasource, query} = this.props;
        return datasource.metricFindQuery_v2({query: '', format: 'string'}, undefined).then(
            (result) => {
                debugger
                const leaves = result.leaves();

                const foundMetric = find(leaves, (metric) => metric.data.value === query.metric);
                const metricChoice=[];
                if (foundMetric){
                    let item: HierarchyNode<SelectableValue>|null = foundMetric;
                    while(item&&(item.data.name!=='root')){
                        metricChoice[item.depth-1] = item;
                        item = item.parent;
                    }
                }
                this.setState({metric: foundMetric,metricChoice});

                return result;
            },
            (response) => {
                this.setState({
                    metric: undefined,
                    metricOptions: undefined,
                    metricChoice:[],
                });
                throw new Error(response.statusText);
            }
        )
    }

    refreshMetricOptions() {
        this.setState({isMetricOptionsLoading: true});
        this.loadMetrics()
            .then((metricOptions) => {
                this.setState({metricOptions});
            })
            .finally(() => {
                this.setState({isMetricOptionsLoading: false});
            });
    }

    componentDidMount(): void {
        const {query} = this.props;
        this.setState({type: {label:query.type},users: query.users, jobs: query.jobs, nodes: query.nodes})
        this.refreshMetricOptions();
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<States>, snapshot?: any): void {
        if ((this.state.metric !== prevState.metric) || (this.state.users !== prevState.users) || (this.state.jobs !== prevState.jobs) || (this.state.nodes !== prevState.nodes) || (this.state.type !== prevState.type)) {
            const {onChange, onRunQuery, query} = this.props;
            const {metric, type, users, jobs, nodes} = this.state;
            onChange({
                ...query, type: (type as any).label,
                metric: metric ? metric.data.value : undefined,
                users,
                jobs,
                nodes
            });
            onRunQuery();
        }
    }
    renderMetric(data:HierarchyNode<SelectableValue>,metricChoice:Array<HierarchyNode<SelectableValue>>):any{
        return <>
            <Segment
                value={metricChoice[data.depth]?{label:metricChoice[data.depth].data.name,value:metricChoice[data.depth]}:{label:'',value:undefined}}
                options={data.children?data.children.map(d=>({label:d.data.name,value:d})):[]}
                onChange={(metric:SelectableValue<HierarchyNode<SelectableValue>>) => {
                    metricChoice = metricChoice.slice(0,data.depth);
                    let _metric = undefined;
                    if (metric&&metric.value) {
                        metricChoice[data.depth] = metric.value;
                        if(metric.value.data.value)
                            _metric = metric.value; // leaf
                    }
                    this.setState({metric:_metric,metricChoice});
                }}
            />
            {metricChoice[data.depth]&&metricChoice[data.depth].children&&this.renderMetric(metricChoice[data.depth],metricChoice)}</>
    }
    render() {
        // const query = defaults(this.props.query, defaultQuery);
        // const { _type } = query;
        // const {isMetricOptionsLoading,metricOptions,metric,type,users,jobs,nodes} = this.state;
        const {metricChoice, metricOptions, type, users, jobs, nodes} = this.state;

        return (
            <>
                <InlineFieldRow>
                    <InlineField label="Query type: ">
                        <Select
                                value={type}
                                options={[{label: 'metrics'}, {label: 'node_core'}, {label: 'jobs'}]}
                                onChange={(type: SelectableValue<'metrics' | 'node_core' | 'jobs'>) => {
                                    this.setState({type})
                                }}
                        />
                    </InlineField>
                    {((type.label === 'metrics') && metricOptions) ? <InlineField label="Metrics">{this.renderMetric(metricOptions,metricChoice)}</InlineField> : ''}
                </InlineFieldRow>
                <InlineFieldRow>
                    <InlineField label="Nodes">
                        <Input prefix={'Nodes: '}
                                      value={(nodes as string) ?? ''}
                                      onChange={(e) => {
                                          this.setState({nodes: e.target.value})
                                      }}/>
                    </InlineField>
                    <InlineField label="Users">
                        <Input prefix={'Users: '}
                                      value={(users as string) ?? ''}
                                      onChange={(e) => {
                                          this.setState({users: e.target.value})
                                      }}/>
                    </InlineField>
                    <InlineField label="Jobs">
                        <Input prefix={'Jobs: '}
                               value={jobs ?? ''}
                               onChange={(e) => {
                                   this.setState({jobs: e.target.value})
                               }}/>
                    </InlineField>
                </InlineFieldRow>
            </>
        );
    }
}
