import {ControlledCollapse, List, stylesFactory} from "@grafana/ui";
import React, {useEffect, useState} from "react";
import {css} from "emotion";

interface Props {
    getColor: Function,
    item: string,
    items: Array<any>,
    onMouseLeave: Function,
    onMouseOver: Function,
}

export const CollapseNode: React.FC<Props>=({getColor,item,items,onMouseOver,onMouseLeave})=>{
    const styles = getStyles();
    const [open, setOpen] = useState(false);
    const [_list, set_List] = useState<any[]>([]);
    const [list, setList] = useState<any[]>([]);
    useEffect(()=>{
        set_List(items.filter(d=>d.id===item));
        if (open){
            setList(_list)
        }else{
            setList([])
        }
    },[items]);

    return <ControlledCollapse isOpen={open} onToggle={(isOpen:boolean)=>{
        if (isOpen){
            setList(_list)
        }else{
            setList([])
        }
        setOpen(isOpen)
    }}
                               label={<><span className={styles.legendColor}
    style={{backgroundColor: ''+getColor({id:item})}}/>{item}</>} key={item}>
        <List
            items={list}
            renderItem={(item, index) => <div key={index} onMouseOver={()=>onMouseOver(item)} onMouseLeave={()=>{onMouseLeave()}}
            ><span className={styles.legendColor}
                                                                   style={{backgroundColor: ''+getColor(item)}}/>{new Date(item.time).toLocaleString()}
                 </div>
            }>
        </List>
    </ControlledCollapse>
}

const getStyles = stylesFactory(() => {
    return {
        legendColor: css`
      width: 10px;
      height: 10px;
      margin-right:2px;
      display: inline-block;
    `
    }
})
