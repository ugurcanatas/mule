export interface RGBColor {
  red: number;
  green: number;
  blue: number;
}

export enum ColorNamesEnum {
  RED_500 = 'RED_500',
  PINK_500 = 'PINK_500',
  INDIGO_500 = 'INDIGO_500',
  AMBER_500 = 'AMBER_500',
  YELLOW_500 = 'YELLOW_500'
}

export type RGBColorObject = {
  [K in ColorNamesEnum]: RGBColor;
};
