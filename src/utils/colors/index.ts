import { ColorNamesEnum, RGBColorObject } from '../types';

const RGB_COLORS: RGBColorObject = {
  RED_500: {
    red: 244,
    green: 67,
    blue: 54
  },
  PINK_500: {
    red: 233,
    green: 30,
    blue: 89
  },
  INDIGO_500: {
    red: 67,
    green: 81,
    blue: 181
  },
  AMBER_500: {
    red: 255,
    green: 193,
    blue: 7
  },
  YELLOW_500: {
    red: 255,
    green: 193,
    blue: 7
  }
};

const RGB_BG_PREFIXES = ['\x1b[48;2;', '\x1b[0m'];
const RGB_FG_PREFIXES = ['\x1b[38;2;', '\x1b[0m'];

export { RGB_COLORS, RGB_BG_PREFIXES, RGB_FG_PREFIXES, ColorNamesEnum };
