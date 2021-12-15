import React from 'react';
import { ColorPicker } from '@grafana/ui';
import { StandardEditorProps } from '@grafana/data';


export const LegendEditor: React.FC<StandardEditorProps<string[]>> = ({ value,item, onChange }) => {
    return <>{value.map((c,i)=><div style={{display:'inline-block'}}><ColorPicker key={i} color={c} onChange={(val) => {value[i]=val; onChange(value)}} /></div>)}</>;
};
