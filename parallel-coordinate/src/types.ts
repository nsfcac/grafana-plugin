type Align = 'left' | 'right' | 'none';
type SeriesSize = 'sm' | 'md' | 'lg';
type ColorBy = 'node' | 'metric';

export interface SimpleOptions {
  violinEnable: boolean;
  violinWidth: number;
  violinResolution: number;
  lineOpacity: number;
  axisTitleAngle: number;
  axisDisplay: Align;
  showSeriesCount: boolean;
  seriesCountSize: SeriesSize;
  colorLegend: string[];
  colorContinous: string;
  colorBy: ColorBy
}

