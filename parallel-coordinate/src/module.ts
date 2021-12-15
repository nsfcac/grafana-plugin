import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './SimplePanel';
import { LegendEditor } from './ControlPannel/LegendEditor';
import {ColorRangeEditor} from "./ControlPannel/ColorRangeEditor";

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions(builder => {
  const builders = builder
      .addBooleanSwitch({
        path: 'violinEnable',
        name:'Violin Enable',
          category:['Violin'],
        defaultValue: true
      }).addNumberInput({
        path: 'violinWidth',
        name:'Violin Width',
          category:['Violin'],
        defaultValue: 20,
          showIf:(d)=>d.violinEnable
      }).addNumberInput({
          path: 'violinResolution',
          name:'Violin Resolution',
          category:['Violin'],
          defaultValue: 20,
          showIf:(d)=>d.violinEnable
      }).addSliderInput({
        path: 'lineOpacity',
        name:'Line Opacity',
        defaultValue: 0.5,
        settings: {min:0,
        max:1,
        step: 0.01}
      })
      .addSelect({
          path: 'axisDisplay',
          name: 'Axis display',
          defaultValue: 'left',
          settings:{
              options: [{value: 'none',label:'Hidden'},
                  {value: 'left',label:'Left'},
                  {value: 'right',label:'Right'}]
          }
      }).addSliderInput({
          path: 'axisTitleAngle',
          name:'Title Angle',
          defaultValue: 0,
          settings: {min:0,
              max:180,
              step: 1}
      }).addSelect({
          path: 'colorBy',
          name: 'Color by',
          defaultValue: 'node',
          category: ['Color Legend'],
          settings:{
              options: [{value: 'node',label:'Node name'},
                  {value: 'metric',label:'Metrics'}]
          }
      }).addCustomEditor({
          id: 'colorLegend',
          path: 'colorLegend',
          name: 'Color Legend',
          editor: LegendEditor,
          category: ['Color Legend'],
          defaultValue: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"],
          showIf:(d)=>d.colorBy ==='node'
      }).addCustomEditor({
          id: 'colorContinous',
          path: 'colorContinous',
          name: 'Color Legend',
          editor: ColorRangeEditor,
          category: ['Color Legend'],
          defaultValue: 'RdYlBu',
          showIf:(d)=>d.colorBy ==='metric'
      });
    // d3.schemeCategory10.forEach((c,i)=>{
    //     builders .addColorPicker({
    //         path: `c${i}`,
    //         name: `${i+1}${(i===0)?'st':((i===1)?'nd':((i===2)?'rd':'th'))} color`,
    //         category: ['Color Scheme'],
    //         defaultValue: c
    //     })
    //     ;
    // })
    return builders;
});
