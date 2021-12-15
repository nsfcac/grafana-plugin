import {ScaleLinear} from "d3-scale";
import React from 'react';
import * as d3 from 'd3';
import {css} from 'emotion';
import { GrafanaTheme } from '@grafana/data';
import {stylesFactory, getTheme} from "@grafana/ui";
import {Drawer} from "./drawer";

interface Dimension {
    range: [number,number] | [undefined, undefined],
    scale: ScaleLinear<any, any, any>,
    brush?: any,
    order: number,
    key: string,
    active?: number[],
    enable?:boolean,
    el?: { brush: SVGGElement | null },
    tickFormat?: Function
}

interface Props {
    dimension: Dimension[],
    changeDim: Function,
    onSelected: Function,
    colorBy: string,
    selected: string
}

interface States {
    
}

export class DimensionControl extends React.Component<Props  & React.HTMLAttributes<HTMLDivElement>, States>{
    render(){
        const dimensions = this.props.dimension;
        const styles = getStyles(getTheme());
        return <Drawer className={this.props.className} open={true}><div >
            <table>
                <thead>
                    <tr>
                        <th className={styles.tableCell}>Name</th>
                        <th className={styles.tableCell}>Min</th>
                        <th className={styles.tableCell}>Max</th>
                        <th className={styles.tableCell}>Single</th>
                        <th className={styles.tableCell}>Enable</th>
                        {(this.props.colorBy=='metric')?'Color By':''}
                    </tr>
                </thead>
                <tbody>
                {dimensions.map((d,i)=><tr key={i}>
                    <td className={styles.tableCell}>{d.key}</td>
                    <td className={styles.tableCell} style={{textAlign: 'end'}}>{d.tickFormat ? d.tickFormat(d.range[0]) : d.range[0]!==undefined?d3.format('.2f')(d.range[0]):'-'}</td>
                    <td className={styles.tableCell} style={{textAlign: 'end'}}>{d.tickFormat ? d.tickFormat(d.range[1]) : d.range[1]!==undefined?d3.format('.2f')(d.range[1]):'-'}</td>
                    <td className={styles.tableCell} style={{textAlign: 'center'}}>{(d.range[0]===d.range[1])?'Yes':'No'}</td>
                    <td className={styles.tableCell}><input type="checkbox" checked={d.enable} onClick={()=>{d.enable= !d.enable;
                        dimensions.filter(d=>d.enable).forEach((d,i)=>d.order=i);
                    this.props.changeDim(dimensions)}}/> </td>
                    {(this.props.colorBy=='metric')?<td className={styles.tableCell}><input type="radio" name={'pColor'} value={d.key} checked={d.key===this.props.selected} onClick={()=>{
                        this.props.onSelected(d.key)}}/> </td>:''}
                </tr>)}
                </tbody>
            </table>
        </div>
        </Drawer>
    }
}
const getStyles = stylesFactory((theme: GrafanaTheme) => {
    return {
        tableCell:css`
         padding-left: 5px;
         padding-right: 5px;
         `
    }
})
