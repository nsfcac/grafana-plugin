import _ from 'lodash';
import * as d3 from 'd3';
import {histogram} from 'd3-array';
import {Bin} from "d3";
import * as ss from "simple-statistics"

export function axisHistogram(text:string ='',range:[number,number],d: number[],resolution=100,outlierMultiply=0){
    d = d.filter(e=>e)
    if (d.length) {
        var scale = d3.scaleLinear().domain(range);
        var _histogram = histogram()
            .domain(range)
            // .thresholds(d3.range(0,20).map(d=>scale(d)))    // Important: how many bins approx are going to be made? It is the 'resolution' of the violin plot
            .thresholds(scale.ticks(resolution))    // Important: how many bins approx are going to be made? It is the 'resolution' of the violin plot
            .value(d => d);
        let hisdata = _histogram(d);

        let start=-1,startcheck=true,end= hisdata.length-1;
        let sumstat = hisdata.map((d:Bin<number,number>, i: number):[number,number] => {
            let temp:[number,number] = [d.x0??0 + ((d.x1??0) - (d.x0??0)) / 2, (d || []).length];
            if (startcheck && temp[1]===0)
                start = i;
            else {
                startcheck = false;
                if (temp[1]!==0)
                    end = i;
            }
            return temp});
        let min:number|undefined = +Infinity,max:number|undefined =-Infinity;
        if (start===end){
            sumstat = new Array<[number,number]>();
            min=undefined;
            max=undefined;
        }else{
            sumstat = sumstat.filter((d:number[],i:number)=>{
                if (i>=start&&i<=(end+1))
                {
                    if((min as number)>d[1])
                        min=d[1];
                    if((max as number)<d[1])
                        max=d[1];
                    return true;
                }
                return false;
            });
            if(start>=0){
                sumstat = [...sumstat]
            }
        }
        let r = {
            axis: text,
            q1: ss.quantile(d, 0.25),
            q3: ss.quantile(d, 0.75),
            min,max,
            median: ss.median(d),
            outlier: new Array<number>(),
            arr: sumstat
        };
        if (outlierMultiply){
            if (d.length>4)
            {
                const iqr = r.q3-r.q1;
                // console.log('Outliers: ',d.filter(e=>e>(r.q3+outlierMultiply*iqr)||e<(r.q1-outlierMultiply*iqr)).length);
                r.outlier = _.uniq(d.filter(e=>e>(r.q3+outlierMultiply*iqr)||e<(r.q1-outlierMultiply*iqr)));
                // console.log('Unquie points: ',r.outlier.length);
            }else{
                r.outlier =  _.uniq(d);
            }
        }else
            r.outlier = []
        return r;
    }else{
        return  {
            axis: text,
            min: undefined,
            max: undefined,
            q1: undefined,
            q3: undefined,
            median: undefined,
            outlier: new Array<number>(),
            arr: new Array<[number,number]>(),
        };
    }
}
