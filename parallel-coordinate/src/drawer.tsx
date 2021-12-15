import React from "react";
import {getTheme, IconButton, stylesFactory} from "@grafana/ui";
import {GrafanaTheme} from "@grafana/data";
import * as d3 from "d3";
import {css, cx} from "emotion";

interface Props {
    open?: boolean,
    title?: string
}

interface States {
    open: boolean
}

export class Drawer extends React.Component<Props  & React.HTMLAttributes<HTMLDivElement>, States>{
    constructor(props:Props) {
        super(props);
        this.state={
            open: !!props.open
        }
    }
    onOpen=()=>{
        const open = !this.state.open;
        this.setState({open})
    }
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const styles = getStyles(getTheme());
        const {open} = this.state;
        return <div className={cx(this.props.className,styles.wapper)}>
            {
            open?(<>{this.props.title&&<h5>{this.props.title}</h5>}
                <div className={styles.innerHolder} style={{height: this.props.title?'calc(100% - 20px)':'100%'}}>
                {this.props.children}
                </div></>):''
            }
            <IconButton className={styles.drawButton} name={open?'arrow-left':'arrow-right'} size={'xl'} onClick={this.onOpen}/>
        </div>;
    }
}

const getStyles = stylesFactory((theme: GrafanaTheme) => {
    let wapper_color = d3.color(theme.colors.bg1);
    if(wapper_color)
        wapper_color.opacity = 0.7;


    return {
        wapper: css`
        background-color: ${''+wapper_color};
        padding: 10px;
        `,
        innerHolder:css`
        overflow: auto;
       
        margin-right: 12px
        `,
        tableCell:css`
         padding-left: 5px;
         padding-right: 5px;
         `,
        drawButton: css`
        position: absolute;
        top: 50%;
        right: 0;
        // transform: translateX(50%)
        `
    }
})
