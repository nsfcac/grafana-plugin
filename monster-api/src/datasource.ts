import {
  DataFrame,
  DataQueryRequest,
  DataQueryResponse,
  DataSourceApi,
  DataSourceInstanceSettings, FieldConfig,
  TableData,
  ArrayVector,
  FieldType, guessFieldTypeForField, SelectableValue
} from '@grafana/data';
import { getBackendSrv, getTemplateSrv } from '@grafana/runtime';
import { MyQuery, MyDataSourceOptions, VariableQuery } from './types';
import {  isArray } from 'lodash';
import * as d3 from 'd3';
import {HierarchyNode} from "d3-hierarchy";

export class DataSource extends DataSourceApi<MyQuery, MyDataSourceOptions> {
  url: string;
  constructor(instanceSettings: DataSourceInstanceSettings<MyDataSourceOptions>) {
    super(instanceSettings);
    // this.url = instanceSettings.jsonData.path === undefined ? '' : instanceSettings.jsonData.path;
    this.url = instanceSettings.url === undefined ? '' : instanceSettings.url;
    if (this.url[this.url.length-1]!=='/')
      this.url = this.url+'/'
  }

  async query(options: DataQueryRequest<MyQuery>): Promise<DataQueryResponse> {
    // const { range } = options;
    // const from = range!.from.valueOf();
    // const to = range!.to.valueOf();
    const request = this.processTargets(options);
    options.scopedVars = { ...options.scopedVars };

    // console.log(getTemplateSrv().replace(``, options.scopedVars))
    // Return a constant for each query.
    // const data = options.targets.map(target => {
    //   const query = defaults(target, defaultQuery);
    //   return new MutableDataFrame({
    //     refId: query.refId,
    //     fields: [
    //       { name: 'Time', values: [from, to], type: FieldType.time },
    //       { name: 'Value', values: [1, 1], type: FieldType.number },
    //     ],
    //   });
    // });

    return this.doRequest({
      url: `${this.url}query`,
      data: request,
      method: 'POST',
    }).then((entry) => {
      if (typeof entry.data === 'string')
        entry.data = JSON.parse(entry.data.replace(/NaN/g,'null'));
      entry.data = entry.data.map(convertTableToDataFrame);
      return entry;
    });
  }

  async testDatasource() {
    const errorMessageBase = 'Data source is not working';

    try {
      const response = await this.doRequest({
        url: this.url,
        method: 'GET',
      });

      if (response.status === 200) {
        return { status: 'success', message: 'Data source is working', title: 'Success' };
      }

      return {
        message: response.statusText ? response.statusText : errorMessageBase,
        status: 'error',
        title: 'Error',
      };
    } catch (err) {
      if (typeof err === 'string') {
        return {
          status: 'error',
          message: err,
        };
      }

      let message = err.statusText ?? errorMessageBase;
      if (err.data?.error?.code !== undefined) {
        message += `: ${err.data.error.code}. ${err.data.error.message}`;
      }

      return { status: 'error', message, title: 'Error' };
    }
  }
  processTargets(options: DataQueryRequest<MyQuery>) {
    options.targets = options.targets
        // .filter((target) => {
        //   // remove placeholder targets
        //   return target.metric !== undefined;
        // })
        .map((target) => {
          // if (target.payload.trim() !== '') {
          //   if (typeof target.payload === 'string') {
          //     target.payload = target.payload.replace((getTemplateSrv() as any).regex, (match) =>
          //         this.cleanMatch(match, options)
          //     );
          //   }
          //
          //   target.payload = JSON.parse(target.payload);
          // }
          //
          // if (typeof target.target === 'string') {
          //   target.target = getTemplateSrv().replace(target.target.toString(), options.scopedVars, 'regex');
          // }
          if(target.metric&&target.metric.trim()==='')
             delete target.metric;

          if (target.users && (!isArray(target.users)))
            target.users = getTemplateSrv().replace(target.users, options.scopedVars).split(',').map(d=>d.trim().replace(/\{|\}/g,''))
          if (target.jobs && (!isArray(target.jobs)))
            target.jobs = getTemplateSrv().replace(target.jobs, options.scopedVars).split(',').map(d=>d.trim().replace(/\{|\}/g,''))
          if (target.nodes && (!isArray(target.nodes)))
            target.nodes = getTemplateSrv().replace(target.nodes, options.scopedVars).split(',').map(d=>d.trim().replace(/\{|\}/g,''))
          return target;
        });

    return options;
  }
  doRequest(options: any) {
    // options.withCredentials = this.withCredentials;
    // options.headers = this.headers;

    return getBackendSrv().datasourceRequest(options);
  }
  metricFindQuery_v2(variableQuery: VariableQuery, options?: any, type?: string): Promise<HierarchyNode<SelectableValue>> {
    const interpolated =
        variableQuery.format === 'json'
            ? JSON.parse(getTemplateSrv().replace(variableQuery.query, undefined, 'json'))
            : {
              type,
              target: getTemplateSrv().replace(variableQuery.query, undefined, 'regex'),
            };
    return this.doRequest({
      url: `${this.url}search`,
      data: interpolated,
      method: 'POST',
    }).then(this.mapToTextValue);
  }
  mapToTextValue(result: any) {
    return d3.hierarchy(result.data);
  }
}

function convertTableToDataFrame(table: TableData): DataFrame {
  const fields = table.columns.map((c) => {
    // TODO: should be Column but type does not exists there so not sure whats up here.
    const { text, type, label, ...disp } = c as any;
    return {
      name: text, // rename 'text' to the 'name' field
      config: (disp || {}) as FieldConfig,
      values: new ArrayVector(),
      labels: label?{name:label}:undefined,
      type: type && Object.values(FieldType).includes(type as FieldType) ? (type as FieldType) : FieldType.other,
    };
  });

  if (!isArray(table.rows)) {
    throw new Error(`Expected table rows to be array, got ${typeof table.rows}.`);
  }

  for (const row of table.rows) {
    for (let i = 0; i < fields.length; i++) {
      fields[i].values.buffer.push(row[i]);
    }
  }

  for (const f of fields) {
    if (f.type === FieldType.other) {
      const t = guessFieldTypeForField(f);
      if (t) {
        f.type = t;
      }
    }
  }

  return {
    fields,
    refId: table.refId,
    meta: table.meta,
    name: table.name,
    length: table.rows.length,
  };
}
