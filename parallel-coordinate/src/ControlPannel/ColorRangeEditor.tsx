import React, {useState} from 'react';
import { StandardEditorProps } from '@grafana/data';
import * as chromatic from 'd3-scale-chromatic';

type colorChoice = 'RdYlBu'|'RdYlGn'|'Spectral'|'Turbo'|'Cool'|'Warm'|'Plasma'|'Viridis'|'Inferno'
export const invertType={
    'RdYlBu':true,
    'RdYlGn':true,
    'Spectral':true,
}
export const ColorRangeEditor: React.FC<StandardEditorProps<colorChoice>> = ({ value,item, onChange }) => {
    // return <>{value.map((c,i)=><div style={{display:'inline-block'}}><ColorPicker key={i} color={c} onChange={(val) => {value[i]=val; onChange(value)}} /></div>)}</>;
    const stringCh = `interpolate${value}`;
    const [open, setOpen] = useState(false);
    // // @ts-ignore
    // console.log(chromatic[stringCh][11].slice(),chromatic[stringCh][11].slice().reverse())
    // @ts-ignore
    // const colorFunc = chromatic[`interpolate${d}`];
    return <div style={{position:'relative'}}><div onClick={()=>setOpen(!open)}><ColorRangeSelect colorType={chromatic[stringCh]} invert={invertType[value]}/></div>
    {/*{open?<div>*/}
    {/*    <ul>*/}
    {/*        {['RdYlBu','RdYlGn','Spectral','Turbo','Cool','Warm','Plasma','Viridis','Inferno'].map(d=><li key={d}><ColorRangeSelect colorType={colorFunc} invert={invertType[d]}/></li>)}*/}
    {/*    </ul>*/}
    {/*</div>:''}*/}
    </div>
};

interface proprs extends React.HTMLAttributes<HTMLDivElement>{
    colorType: Function,
    invert?: boolean
}
export const ColorRangeSelect: React.FC<proprs> = (props) => {
    // return <>{value.map((c,i)=><div style={{display:'inline-block'}}><ColorPicker key={i} color={c} onChange={(val) => {value[i]=val; onChange(value)}} /></div>)}</>;
    const width = 400;
    const height = 10;
    function ramp(color:Function, n = 256) {
        const canvas = createContext(n, 1);
        const context = canvas.getContext("2d");
        const invert = props.invert;
        if(context){
            for (let i = 0; i < n; ++i) {
                if(invert)
                context.fillStyle = color((n-i-1) / (n - 1));
                else
                context.fillStyle = color(i / (n - 1));
                context.fillRect(i, 0, 1, 1);
            }
        }
        return canvas;
    }
    function createContext(width:number, height:number) {
        var canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        return canvas;
    }

    return <svg viewBox={`0 0 ${width} ${height}`}>
        <image preserveAspectRatio={'none'} href={ramp(props.colorType).toDataURL()} width={width} height={height}/>
    </svg>
};
