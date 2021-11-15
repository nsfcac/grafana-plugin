# grafana-plugin #

Grafana plugin is a part of [Integrated Visualizing, Monitoring, and Managing HPC Systems](https://idatavisualizationlab.github.io/HPCC/)
![HPCC snapshot](./thumbnail/HPCC-webapp.PNG)

Currently, there are 4 visulization developed as Grafana plugin:
1. [Parallel coordinate](./parallel-coordinate/dist)
2. [Spiral layout](./spiral-layou/dist)
3. [Sankey](./sankey/dist)
4. [Stream-net](./stream-net/dist) (aka. PowerMap)


While Parallel coordinate and Spiral layout only requires Health metric, Sanke and Stream-net need job informations.

## Prerequisite ## 
Grafana-plugin require [Grafana v8.0.3](https://grafana.com/grafana/download/8.0.3)

[For Linus](https://grafana.com/grafana/download/8.0.3?platform=linux), [For Windown](https://grafana.com/grafana/download/8.0.3?platform=windows), [For Windown](https://grafana.com/grafana/download/8.0.3?platform=mac), [For Docker](https://grafana.com/grafana/download/8.0.3?platform=docker)
Note that plugines are signed for http://localhost:5000 . Therefore, please make sure that Grafana will run as port 5000

## Getting Started ##
Download plugin you want to install 
1. [Parallel coordinate](./parallel-coordinate.zip)
2. [Spiral layout](./spiral-layout.zip)
3. [Sankey](./sankey.zip)
4. [Stream-net](./stream-net.zip)

Unzip plugin(s) at grafana plugin folder

```
unzip my-plugin-0.2.0.zip -d YOUR_PLUGIN_DIR/my-plugin
```

`YOUR_PLUGIN_DIR` can be `C:\Program Files\GrafanaLabs\grafana\data\plugins` in Windows and `/var/lib/grafana/plugins` in Linus. Make sure after unzip the plugin folder will have structure as:
```
|-- plugins
    |-- parallel-coordinate
        |-- dist
    |-- spiral-layout
        |-- dist
    |-- sankey
        |-- dist
    |-- stream-net
        |-- dist        
```

## How to open an example dashboard  ##

Download example dashboard [here](./dashboard/HPC Viz-1637011356411.json) 
Follow the step in following picture
![Dashboard import steps](./thumbnail/dashboard.png)
