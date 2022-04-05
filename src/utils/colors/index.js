const COLOR_NAMES = {
  RED_500: 'RED_500',
  PINK_500: 'PINK_500',
  INDIGO_500: 'INDIGO_500',
  AMBER_500: 'AMBER_500'
};

const RGB_COLORS = {
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
  }
};

const RGB_BG_PREFIXES = ['\x1b[48;2;', '\x1b[0m'];
const RGB_FG_PREFIXES = ['\x1b[38;2;', '\x1b[0m'];

module.exports = { RGB_COLORS, RGB_BG_PREFIXES, RGB_FG_PREFIXES, COLOR_NAMES };
