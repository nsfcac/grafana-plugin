import React, {CSSProperties} from 'react';
import * as d3 from 'd3';
import {ScaleLinear, ScalePoint} from "d3-scale";
import {Area} from "d3-shape";
import _ from 'lodash'

export interface ViolinData  {
    axis: string,
    arr: ([number,number]|[number,number,number])[],
    median?: number,
    outlier?: number[],
    q1?: number|null,
    q3?: number|null,
    max?:number,
    min?:number,
}
interface MixArray<T> extends Array<T>{
    total?: number,
    offset?: number
}
type ViolinState = {
    svg: React.RefObject<SVGSVGElement>
    arr: ViolinData[],
    xNum: ScaleLinear<any,any,any>,
    h: ScaleLinear<any,any,any>,
    createviolin: Area<any>,
    gpos: ScalePoint<any> | (()=>number),
};
type ViolinProp = {
    data: ViolinData[],
    margin: {top: number, right: number, bottom: number, left: number},
    width: number,
    height: number,
    scalezoom: number,
    direction: 'h' |'v',
    dotRadius: 2,
    showOutlier:boolean,
    color:(()=>string) | ((d:any)=>string),
    stroke:string,
    opt:{
        method : 'DensityEstimator', // epsilon is learning rate (10 = default)
        resolution : 50, // resolution
        dataformated: boolean
    },
    isStack:false,
    middleAxis: any,
    customrange: [number,number] | [0,1],
    single_w: number,
    rangeY?: [number,number],
    style?: CSSProperties
}


export class Violin extends React.Component<ViolinProp, ViolinState>{
    widthView(){return this.props.width*this.props.scalezoom}
    heightView(){return this.props.height*this.props.scalezoom}
    widthG(){return this.widthView()-this.props.margin.left-this.props.margin.right}
    heightG(){return this.heightView()-this.props.margin.top-this.props.margin.bottom}
    public static defaultProps: ViolinProp= {
        data: [],
        margin: {top: 0, right: 0, bottom: 0, left: 0},
        width: 200,
        height: 10,
        scalezoom: 1,
        direction: 'h',
        dotRadius: 2,
        showOutlier:true,
        color:()=>'#00000029',
        stroke:'black',
        middleAxis: {},
        customrange: [0,1],
        opt:{
            method : 'DensityEstimator', // epsilon is learning rate (10 = default)
            resolution : 50, // resolution
            dataformated: true
        },
        isStack:false,
        single_w:100,
    }
    constructor(props:ViolinProp) {
        super(props);
        this.state = {
            svg: React.createRef(),
            arr: props.data,
            xNum: d3.scaleLinear(),
            h: d3.scaleLinear(),
            createviolin: d3.area(),
            gpos: d3.scalePoint().padding(0.5),
        };
        this.state.createviolin
            .x0((d)=>(this.state.xNum(-d[1])))
            .x1((d)=>(this.state.xNum(d[1])) )
            .y((d)=>(this.state.h(d[0])))
    }

    componentDidMount() {
        this.setState({arr:this.handleData()});
    }
    componentDidUpdate(prevProps: Readonly<ViolinProp>, prevState: Readonly<ViolinState>, snapshot?: any): void {
        if((prevProps.height!==this.props.height)||(prevProps.width!==this.props.width)||(prevProps.single_w!==this.props.single_w)||(prevProps.margin!==this.props.margin)){
            let gpos = this.state.gpos;
            if(this.props.direction === 'v') {
                this.state.h.range([this.heightG(),0]);
                if (this.props.isStack){
                    gpos = ()=>0
                    this.setState({gpos});
                }else{
                    gpos = d3.scalePoint().padding(0.5).domain(this.props.data.map((d,i)=>d.axis+i))
                        .range([-this.widthG()/2,this.widthG()/2]);
                    this.setState({gpos});
                }
                this.state.createviolin.curve(d3.curveMonotoneY);
            }else {
                this.state.h.range([0, this.widthG()]);
                gpos=d3.scalePoint().padding(0.5).domain(this.props.data.map((d,i)=>d.axis+i))
                    .range([this.heightG(),0]);
                this.setState({gpos});
                this.state.createviolin.curve(d3.curveMonotoneX)
            }
            let xNumrange = (this.props.single_w || ('get' in gpos ? (gpos as ScalePoint<any>).step() : 0))/2;
            if (this.props.isStack)
                if (this.props.data.length===1)
                    xNumrange = xNumrange*2;
                else
                    xNumrange = this.widthG()/this.props.data.length;
            this.setState({xNum:this.state.xNum.range(this.props.direction === 'v'?[0,xNumrange]:[xNumrange,0])});
        }
        if(prevProps.direction!==this.props.direction){
            this.handleDirection();
        }else
        if(prevProps.data!==this.props.data){
            this.setState({arr:this.handleData()});
        }
    }

    private handleDirection() {
        if (this.props.direction == "v") {
            this.state.createviolin
                .x0((d) => {
                    return (this.state.xNum(-d[1]))
                })
                .x1((d) => {
                    return (this.state.xNum(d[1]))
                })
                .y((d) => {
                    return (this.state.h(d[0]))
                })
            if (this.props.isStack)
                this.state.createviolin.x0((d) => {
                    return (this.state.xNum(d[2]))
                }).x1((d) => {
                    return (this.state.xNum(d[1]))
                })
            // // .curve(d3.curveCatmullRom);
            // circleoption = function (d){
            //     return {
            //         r: graphicopt.dotRadius,
            //         // cy: h(d),
            //     }
            // };
        } else {
            this.state.createviolin
                .y0((d) => {
                    return (this.state.xNum(d[1]))
                })
                .y1((d) => {
                    return (this.state.xNum(-d[1]))
                })
                .x((d) => {
                    return (this.state.h(d[0]))
                });
            if (this.props.isStack)
                this.state.createviolin.y1((d) => {
                    return (this.state.xNum(d[2]))
                })
            // .curve(d3.curveCatmullRom);
            // circleoption = function (d){
            //     return {
            //         r: graphicopt.dotRadius,
            //         // cx: h(d),
            //     }
            // };
        }
    }

    handleData(){
        const {data} = this.props;
        let gpos = this.state.gpos;
        if(this.props.direction === 'v') {
            this.state.h.range([this.heightG(),0]);
            if (this.props.isStack){
                gpos = ()=>0
                this.setState({gpos});
            }else{
                gpos = d3.scalePoint().padding(0.5).domain(this.props.data.map((d,i)=>d.axis+i))
                    .range([-this.widthG()/2,this.widthG()/2]);
                this.setState({gpos});
            }
            this.state.createviolin.curve(d3.curveMonotoneY);
        }else {
            this.state.h.range([0, this.widthG()]);
            gpos=d3.scalePoint().padding(0.5).domain(this.props.data.map((d,i)=>d.axis+i))
                .range([this.heightG(),0]);
            this.setState({gpos});
            this.state.createviolin.curve(d3.curveMonotoneX)
        }
        let xNumrange = (this.props.single_w || ('get' in gpos ? (gpos as ScalePoint<any>).step() : 0))/2;
        if (this.props.isStack)
            if (this.props.data.length===1)
                xNumrange = xNumrange*2;
            else
                xNumrange = this.widthG()/this.props.data.length;
        this.state.xNum.range(this.props.direction === 'v'?[0,xNumrange]:[xNumrange,0]);
        let sumstat : ViolinData[] =[];
        if (this.props.opt.dataformated){
            this.state.h.domain(this.props.customrange||[0,1]);

            sumstat = data;
        }
        // TODO calculate
        // else {
        //     this.state.h.domain(d3.extent<ViolinData>(_.flatten<ViolinData>(data),d=>d.arr));
        //     kde = kernelDensityEstimator(kernelEpanechnikov(.2), h.ticks(graphicopt.opt.resolution));
        //     sumstat = data.map(d => kde(d));
        // }
        if (this.props.rangeY){
            this.state.xNum.domain(this.props.rangeY);
        }else{
            let maxNum = 0;
            sumstat.forEach((s,i)=>{
                const allBins = sumstat[i].arr;
                const kdeValues = allBins.map(function (a) {
                    return a[1]
                });
                const biggest = d3.max(kdeValues)??0;
                if (biggest > maxNum) {
                    maxNum = biggest
                }
            });
            this.state.xNum.domain([0, maxNum]);
        }
        if (this.props.isStack) {
            let temp: Record<number|string,MixArray<{id:number,value:number}>> ={};
            let min=Infinity,max=-Infinity;
            sumstat = data.map(d=>({axis:d.axis,arr:[]}));
            data.forEach((d:ViolinData,i)=>d.arr.forEach(e=>{
                if (!temp[e[0]]) {
                    temp[e[0]] = [];
                    if (min > e[0])
                        min = e[0];
                    if (max < e[0])
                        max = e[0];
                }
                temp[e[0]].push({id:i,value:e[1]});
                temp[e[0]].total = temp[e[0]].total??0 + e[1];
                temp[e[0]].offset = -(temp[e[0]].total??0)/2;
            }));
            Object.keys(temp).forEach((i:string)=>{
                temp[i].forEach((d,di)=>{
                    let y0 = temp[i].offset??0;
                    let y1 = (temp[i].offset??0)+d.value;
                    sumstat[d.id].arr.push([+i,y0,y1]);
                    temp[i].offset = y1
                })
            });
            sumstat.forEach(s=>s.arr.sort((a,b)=>a[0]-b[0]));
        }
        return sumstat
    }
    render() {
        const {style} = this.props;
        return <>{this.state.arr.map((d:ViolinData,i)=><g className={"violin"} transform={`translate(${this.props.margin.left},${this.props.margin.top+d.axis?this.state.gpos(d.axis+i):0})`} style={style}>
            <g className="gvisaxis" style={{stroke:'black'}}>
                {this.props.direction==='v'?<line className="laxis" style={this.props.middleAxis} x1={0} x2={0} y1={this.state.h.range()[0]} y2={this.state.h.range()[1]}/>:
                    <line className="laxis" style={this.props.middleAxis} x1={0} x2={this.state.h(1)} y1={0} y2={0}/>
                }
                <path style={{stroke:this.props.stroke, strokeWidth: 0.2, fill: this.props.color(d.axis)}}
                      d={''+this.state.createviolin(d.arr)}
                />
                {d.median!==undefined ? <rect className="median" width={2}  height={8} x={this.state.h(d.median)}  y={-4}/>:''}
            </g>
        </g>)}</>
    }

}
