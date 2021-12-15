import React, {useRef, useEffect, useState, useCallback} from 'react';
import {DataFrame, PanelData, PanelProps} from '@grafana/data';
import {SimpleOptions} from 'types';
import {css, cx} from 'emotion';
import { stylesFactory, useTheme} from '@grafana/ui';
import {List} from '@grafana/ui'
import {Violin, ViolinData} from './Violin'

import * as d3 from 'd3';
import {ScaleLinear} from "d3-scale";
import {axisHistogram} from "./ulti";
import { DimensionControl } from 'dimensionControl';
import {Drawer} from "./drawer";
import {CollapseNode} from "./collapseNode";

interface Props extends PanelProps<SimpleOptions> {
}

interface Dimension {
    range: [number,number] | [undefined, undefined],
    scale: ScaleLinear<any, any, any>,
    brush: any,
    single?:boolean,
    order: number,
    key: string,
    active: number[],
    el: { brush: SVGGElement | null },
    enable?:boolean,
    tickFormat?: Function
}

export const SimplePanel: React.FC<Props> = ({options, data, width, height}) => {
    const theme = useTheme();
    const styles = getStyles();
    const foregroundRef = useRef<HTMLCanvasElement>(null);
    const backgroundRef = useRef<HTMLCanvasElement>(null);
    const highlightRef = useRef<HTMLCanvasElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);
    const axisHide = options.axisDisplay === 'none';
    const axisIsLeft = options.axisDisplay === 'left';
    const colorScheme = options.colorLegend;
    // const colorContinous = options.colorContinous;
    const [dataIn, setDataIn] = useState<PanelData>();
    const predataIn = usePrevious(dataIn);
    const [datas, setDatas] = useState(new Array());
    const [filteredData, setFilteredData] = useState(new Array());
    const [violinData, setViolinData] = useState<Record<string,ViolinData[]>>({});
    const [nodeLists, setNodeLists] = useState(new Map());
    const [nodeList, setnodeList] = useState(new Map());
    const [dimensions, setDimensions] = useState<Dimension[]>([]);
    const [selectedService, setselectedService] = useState('');
    const [highlight, setHighlight] = useState<undefined|any[]>(undefined);
    const predimensions = usePrevious(dimensions);
    const {violinEnable,violinResolution,violinWidth} = options;
    const previolinresolution = usePrevious(violinResolution);
    //
    // function draw (context:CanvasRenderingContext2D){
    //   context.fillStyle = '#000000'
    //   context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    // }
    useEffect(() => {
        graphicopt.height = height;
        graphicopt.width = width;
        if (data !=predataIn){
            const newdata = handleData();
            setFilteredData(newdata);
            generateViolindata(newdata,violinResolution);
            setDataIn(data);
            filterData();
        }
        dimensions.forEach((d: Dimension) => {
            d.scale = d.scale.range([graphicopt.height - graphicopt.margin.bottom, graphicopt.margin.top]);
            d.brush
                .extent([[-10, 0], [10, graphicopt.heightG()]])
                .on(".brush", null)
                .on("brush end", () =>{
                if (d.el.brush) {
                    const scale = dimensions[d.order].scale;
                    const selection = d3.brushSelection(d.el.brush);
                    if (selection && selection.length === 2) {
                        // dimControl.active = selection.map(scale.invert, scale).sort((a,b)=>a-b);
                        dimensions[d.order].active = (selection as any[]).map((d: (number|[number,number]), i: number) => scale.invert(d + scale.range()[1])).sort((a: number, b: number) => a - b);
                    } else {
                        dimensions[d.order].active = [];
                    }
                    filterData();
                }
            });
            if (d.el.brush) {
                d3.select(d.el.brush)
                    .call(d.brush)
            }
        });
        if(dimensions!==predimensions)
                dimensions.forEach((d: Dimension) => {
                    if (d.el.brush) {
                        if (d.active.length)
                            d3.select(d.el.brush)
                            .call(d.brush.move, d.active.map(e=>d.scale(e)- d.scale.range()[1]).reverse());
                    }
                });

        render(filteredData);

        if (previolinresolution!==violinResolution){
            generateViolindata(filteredData,violinResolution);
        }

    }, [width, height, data, options.lineOpacity, options.colorBy,dimensions,predimensions,filteredData,selectedService])
    useEffect(()=>{
        if(highlightRef.current){
            const contxt = highlightRef.current.getContext('2d');
            if(contxt)
                contxt.lineWidth = 4;
        }
        if(foregroundRef.current){
            const contxt = foregroundRef.current.getContext('2d');
            if(contxt)
                contxt.lineWidth = 1;
        }
    },[highlightRef.current,foregroundRef.current])
    useEffect(()=>{
        // if(highlightRef.current){
        //     const contxt = highlightRef.current.getContext('2d');
        //     if(contxt)
        //         contxt.lineWidth = 4;
        // }
        render(highlight,highlightRef.current,1)
    },[highlight]);

    const filterData = function(){
        let _data = datas;
        let _nodeList = nodeLists;
        const actives = dimensions.filter(d=>d.active.length);
        if (actives.length) {
            _nodeList = new Map();
            _data = datas.filter(d => {
                let condition = true;
                actives.find(dim => {
                    const val = d[dim.key];
                    condition = condition && ((val >= dim.active[0]) && (val <= dim.active[1]));
                    return !condition;
                });
                if (condition)
                    _nodeList.set(d.id, true);
                return condition;
            })
        }
        setFilteredData(_data);
        setnodeList(_nodeList);
        generateViolindata(_data,violinResolution);
    };
    function generateViolindata(data:Record<string, number>[],resolution:number) {
        // violinData
        data = data ?? datas;
        const violinData:Record<string,ViolinData[]> = {};
        // let max = -Infinity;
        dimensions.forEach(dim=>{
            const arr :number[] = [];
            data.forEach((d:Record<string, number>)=>arr.push(d[dim.key]));
            violinData[dim.key] = [axisHistogram(dim.key,[dim.range[0]??0,dim.range[1]??0],arr,resolution)];
            // if (max<violinData[dim.key][0])
            //     max = violinData[dim.key][0]
        });
        setViolinData(violinData);
    }
    const getColor = (d: Record<string, any>)=>{
        if(options.colorBy==='node')
            return color(d.id)
        else
            return d[selectedService]?colorm(d[selectedService]):'black'
    }
    function render(data = new Array(),canvas= foregroundRef.current,lineOpacity=options.lineOpacity) {
        // const canvas = foregroundRef.current;
        if (canvas) {
            const context = canvas.getContext('2d')
            //Our first draw
            if (context) {
                context.clearRect(0, 0, graphicopt.width, graphicopt.height);
                const activedim = dimensions.filter(d=>d.enable);
                let line = d3.line<number|null|undefined>()
                    .y(function (d, i) {
                        return activedim[i].scale(d as number);
                    })
                    .x(function (d, i) {
                        return dimPos(activedim[i].order);
                    })
                    .curve(d3.curveMonotoneX)
                    .defined(d =>typeof d === 'number')
                    .context(context);
                const filterList = new Array();
                data.forEach(d => {
                    if (d.outlier) {
                        filterList.push(d);
                        return;
                    }
                    context.beginPath();
                    line(activedim.map(dim => d[dim.key]));
                    // context.lineWidth = 1;
                    const _color = getColor(d);
                    const c = d3.color(_color?(''+_color):'#fff');
                    if (c){
                        c.opacity = lineOpacity;
                    }
                    context.strokeStyle = ''+c;
                    context.stroke();
                });
                filterList.forEach(d => {
                    context.beginPath();
                    line(dimensions.map(dim => d[dim.key]));
                    // context.lineWidth = 1;
                    context.strokeStyle = "#f0f";
                    context.stroke();
                });
            }
        }
    }

    const graphicopt = {
        margin: {top: 25, right: 10, bottom: 20, left: 100},
        width,
        height,
        scalezoom: 1,
        elHeight: 30,
        widthView: function () {
            return this.width * this.scalezoom
        },
        heightView: function () {
            return this.height * this.scalezoom
        },
        widthG: function () {
            return this.widthView() - this.margin.left - this.margin.right
        },
        heightG: function () {
            return this.heightView() - this.margin.top - this.margin.bottom
        },
        centerX: function () {
            return this.margin.left + this.widthG() / 2;
        },
        centerY: function () {
            return this.margin.top + this.heightG() / 2;
        },
        animationTime: 1000
    };

    const handleData = () => {
        const drawData = new Map();
        const datas = new Array();
        let nodeLists = new Map();
        let dimensionObject: Record<string,Dimension> = {};

        function getDim(range: [number,number], order: number, dim: string): Dimension {
            const scale = d3.scaleLinear().domain(range).range([graphicopt.height - graphicopt.margin.bottom, graphicopt.margin.top]);
            const brush = d3.brushY()
                .extent([[-10, 0], [10, graphicopt.heightG()]])
                .on("brush end", () => {
                if (dimControl.el.brush) {
                    const scale = dimensions[dimControl.order].scale;
                    const selection = d3.brushSelection(dimControl.el.brush);
                    if (selection && selection.length === 2) {
                        // dimControl.active = selection.map(scale.invert, scale).sort((a,b)=>a-b);
                        dimensions[dimControl.order].active = (selection as any[]).map((d: number, i: number) => scale.invert(d + scale.range()[1])).sort((a: number, b: number) => a - b);
                    } else {
                        dimensions[dimControl.order].active = [];
                    }
                    filterData();
                }
            });

            const dimControl: Dimension = {
                range,
                single:range[0]===range[1],
                enable: !(range[0]===range[1] || range[0]===Infinity),
                scale,
                brush,
                order,
                key: dim,
                active: new Array<number>(),
                el: {brush: null},
                tickFormat: undefined
            };
            return dimControl;
        }

        function handleDataWithname(serie: DataFrame) {
            const dim = serie.refId ?? '';
            const times = serie.fields.find(e => e.name.trim().toLowerCase() === 'time');
            const values = serie.fields.find(e => e.name === 'value');
            const nodeids = serie.fields.find(e => e.name === 'name');
            const dimTarget:( Dimension | undefined ) = dimensionObject[dim];
            let range: [number, number] = dimTarget?[dimTarget.range[0]??Infinity,dimTarget.range[1]??-Infinity]:[Infinity, -Infinity];
            if (nodeids && nodeids.values && times && times.values && values && values.values) {
                const nodeid = nodeids.values.toArray();
                nodeid.forEach((id, i) => {
                    if (!drawData.has(id)) {
                        drawData.set(id, new Map());
                    }
                    const val = values.values.get(i);
                    if (!drawData.get(id).has(times.values.get(i))) {
                        const item = {time: times.values.get(i), id};
                        datas.push(item);
                        nodeLists.set(id, true);
                        // color(id)
                        drawData.get(id).set(times.values.get(i), item);
                    }
                    drawData.get(id).get(times.values.get(i))[dim] = val;
                    if (val < range[0])
                        range[0] = val;
                    if (val > range[1])
                        range[1] = val;
                })
            }
            if (!dimTarget) // new Dimension
            {
                dimensionObject[dim] = getDim(range, _dimensions.length, dim);
                _dimensions.push(dimensionObject[dim]);
            }else{
                dimTarget.range = range;
                dimTarget.scale.domain(range);
                dimTarget.single = range[0]===range[1];
                dimTarget.enable = !(dimTarget.single || range[0]===Infinity);
            }
        }
        function handleDataWithnames(serie: DataFrame) {
            const times = serie.fields.find(e => e.name.trim().toLowerCase() === 'time');
            if (times) {
                serie.fields.filter(e => e.type === 'number').forEach(d => {
                    if(d.labels) {
                        let dim = d.name;
                        let id = '';
                        if (dim==='value'){
                            let str = Object.values(d.labels)[0].split('|');
                            id = str[0].trim();
                            dim = str[1].trim();
                        }else{
                            id = Object.values(d.labels)[0].replace('|','').trim();
                        }
                        if (!drawData.has(id)) {
                            drawData.set(id, new Map());
                        }
                        const dimTarget: (Dimension | undefined) = dimensionObject[dim];
                        let range: [number, number] = dimTarget ? [dimTarget.range[0] ?? Infinity, dimTarget.range[1] ?? -Infinity] : [Infinity, -Infinity];
                        d.values.toArray().forEach((val, i) => {
                            if (!drawData.get(id).has(times.values.get(i))) {
                                const item = {time: times.values.get(i), id};
                                datas.push(item);
                                nodeLists.set(id, true);
                                // color(id);
                                drawData.get(id).set(times.values.get(i), item);
                            }
                            drawData.get(id).get(times.values.get(i))[dim] = val;
                            if (val!==null) {
                                if (val < range[0])
                                    range[0] = val;
                                if (val > range[1])
                                    range[1] = val;
                            }
                        });
                        if (!dimTarget) // new Dimension
                        {
                            dimensionObject[dim] = getDim(range, _dimensions.length, dim);
                            _dimensions.push(dimensionObject[dim]);
                        } else {
                            dimTarget.range = range;
                            dimTarget.scale.domain(range);
                            dimTarget.single = range[0]===range[1];
                            dimTarget.enable = !dimTarget.single;
                        }
                    }else if(d.name.split('|').length===2){
                        let str = d.name.split('|');
                        let id = str[1].trim();
                        let dim = str[0].trim();

                        if (!drawData.has(id)) {
                            drawData.set(id, new Map());
                        }
                        const dimTarget: (Dimension | undefined) = dimensionObject[dim];
                        let range: [number, number] = dimTarget ? [dimTarget.range[0] ?? Infinity, dimTarget.range[1] ?? -Infinity] : [Infinity, -Infinity];
                        d.values.toArray().forEach((val, i) => {
                            if (!drawData.get(id).has(times.values.get(i))) {
                                const item = {time: times.values.get(i), id};
                                datas.push(item);
                                nodeLists.set(id, true);
                                // color(id);
                                drawData.get(id).set(times.values.get(i), item);
                            }
                            drawData.get(id).get(times.values.get(i))[dim] = val;
                            if (val!==null) {
                                if (val < range[0])
                                    range[0] = val;
                                if (val > range[1])
                                    range[1] = val;
                            }
                        });
                        if (!dimTarget) // new Dimension
                        {
                            dimensionObject[dim] = getDim(range, _dimensions.length, dim);
                            _dimensions.push(dimensionObject[dim]);
                        } else {
                            dimTarget.range = range;
                            dimTarget.scale.domain(range);
                            dimTarget.single = range[0]===range[1];
                            dimTarget.enable = !dimTarget.single;
                        }
                    }
                })
            }
        }
        const _dimensions:Dimension[] = [];
        data.series.forEach((serie) => {
            debugger
            if (serie.fields.find(e => e.name === 'name'))
                handleDataWithname(serie);
            else
                handleDataWithnames(serie)
        });
        const timeRange: [number,number] |[undefined,undefined] = d3.extent(datas, d => d.time);
        if (timeRange[0]!==undefined && timeRange[1]!==undefined){
            const timeDim = getDim(timeRange, -1, 'time');
            timeDim.tickFormat = (d: number) => new Date(d).toLocaleString();
            timeDim.enable = true;
            _dimensions.push(timeDim);
        }
        _dimensions.sort((a, b) => a.order - b.order).forEach((d,i)=>d.order = i);
        setDimensions(_dimensions);
        setDatas(datas);
        setNodeLists(nodeLists);
        if(!_dimensions.find(d=>d.key===selectedService))
            if(_dimensions[1])
                setselectedService(_dimensions[1].key);
        return datas;
    };

    // let {datas, nodeLists, dimPos} = handleData();
    const currentDim = dimensions.filter(d=>d.enable);
    const dimPos = d3.scaleLinear().domain([0, currentDim.length - 1]).range([graphicopt.margin.left, graphicopt.widthG()]);

    const dimRef = useCallback((node,el,scale,brush) => {
        if (node !== null) {
            el.brush = node;
            // scale.range([graphicopt.height - graphicopt.margin.bottom, graphicopt.margin.top]);
            // brush.extent([[-10, 0], [10, graphicopt.heightG()]])
            // d3.select(node).call(brush);
        }
    }, []);

    let color = d3.scaleOrdinal().range(colorScheme).domain([...nodeLists.keys()]);

    const selectedDim = dimensions.find(d=>d.key===selectedService);
    // @ts-ignore
    let colorm = d3.scaleSequential<number>().interpolator(d3.interpolateSpectral).domain(((selectedDim?selectedDim.range:[0,0]) as Iterable<number>).slice().reverse());
    const {axisTitleAngle} = options;
    let _axisTitleAngle = axisTitleAngle;
    let axisTitleAlign: 'middle'|'start'|'end' = 'middle';
    if (axisTitleAngle){
        if(axisTitleAngle>90){
            axisTitleAlign = 'end';
            _axisTitleAngle = 180-_axisTitleAngle;
        }else{
            axisTitleAlign = 'start';
            _axisTitleAngle = -_axisTitleAngle;
        }
    }
    return (
        <div
            className={cx(
                styles.wrapper,
                css`
          width: ${width}px;
          height: ${height}px;
          position: relative;
        `
            )}
        >
            <canvas
                ref={backgroundRef}
                className={cx(
                    css`
          width: ${width}px;
          height: ${height}px;        `
                )}
                width={width}
                height={height}/>
            <canvas
                ref={foregroundRef}
                className={cx(
                    css`
          width: ${width}px;
          height: ${height}px;        `
                    ,styles.svg)}
                style={{opacity:highlight?0.25:1}}
                width={width}
                height={height}/>
            <canvas
                ref={highlightRef}
                style={{display:highlight?'block':'none'}}
                className={cx(
                    css`
          width: ${width}px;
          height: ${height}px;        `
                    ,styles.svg)}
                width={width}
                height={height}/>
            <svg
                className={styles.svg}
                width={width}
                height={height}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox={`0 0 ${width} ${height}`}
                ref={svgRef}
            >
                {Object.values(dimensions).filter(d=>d.enable).map(({range, scale, brush, order, key, active, tickFormat, el}) => (
                    <g key={key} className="axis" ref={node=>dimRef(node,el,scale,brush)}
                       transform={`translate(${dimPos(order)},${graphicopt.margin.top})`}>
                        <text style={{textAnchor: axisTitleAlign}} dy={-10} fill={theme.palette.white} transform={`rotate(${_axisTitleAngle})`}>{key}</text>
                        <line x1="0" x2="0" y1="0" y2={graphicopt.heightG()} stroke={theme.palette.white}/>
                        {(!axisHide) && scale.ticks(5).map(a => <g key={a}
                            transform={`translate(0,${(scale(a)??0) - graphicopt.margin.top})`}>
                            <text x={axisIsLeft ? -8 : 8}
                                  fill={theme.palette.white}
                                  dy={5}
                                  style={{textAnchor: axisIsLeft ? 'end' : 'start'}}>{tickFormat ? tickFormat(a) : a}</text>
                            <line stroke={theme.palette.white} x2={axisIsLeft ? -6 : 6}/>
                        </g>)}
                        {/*{violinEnable&&key!=='time'&&<Violin direction={"v"} height={graphicopt.heightG()} single_w={violinWidth} customrange={[range[0]??0,range[1]??0]} color={()=>'rgba(223,223,223,0.79)'} data={violinData[key]} />}*/}
                        {violinEnable&&<Violin style={{pointerEvents:'none'}} direction={"v"} height={graphicopt.heightG()} single_w={violinWidth} customrange={[range[0]??0,range[1]??0]} color={()=>'rgba(223,223,223,0.79)'} data={violinData[key]} />}
                    </g>))}
            </svg>
            <Drawer open={true} className={styles.legend}>
                <div style={{minWidth:250}}>
                <List
                    items={[...nodeList.keys()]}
                    renderItem={(item, index) => <CollapseNode getColor={getColor} item={item} items={filteredData}
                    onMouseOver={(d:any)=>setHighlight([d])} onMouseLeave={()=>setHighlight(undefined)}/>}>
                </List>
                </div>
            </Drawer>
            <DimensionControl
                className={styles.dimControl}
                changeDim={(dims: Dimension[])=>{setDimensions(dims.slice())}}
                dimension={dimensions}
                colorBy={options.colorBy}
                onSelected={(s:string)=>setselectedService(s)}
                selected={selectedService}
            />
        </div>
    );
};

const getStyles = stylesFactory(() => {
    return {
        wrapper: css`
      position: relative;
    `,
        legend: css`
      position: absolute;
      top: 0;
      left: 0;
      overflow-y:auto;
      height: 50%;
    `,
        dimControl: css`
      position: absolute;
      top: 50%;
      left: 0;
      overflow-y:auto;
      height: 50%;
    `,
        legendColor: css`
      width: 10px;
      height: 10px;
      margin-right:2px;
      display: inline-block;
    `,
        svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
        textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
    };
});

// Hook
function usePrevious(value:any) {
    // The ref object is a generic container whose current property is mutable ...
    // ... and can hold any value, similar to an instance property on a class
    const ref = useRef();
    // Store current value in ref
    useEffect(() => {
        ref.current = value;
    }, [value]); // Only re-run if value changes
    // Return previous value (happens before update in useEffect above)
    return ref.current;
}
