import { RGB_COLORS, RGB_BG_PREFIXES, RGB_FG_PREFIXES, ColorNamesEnum } from './colors';

type TColors = {
  color: ColorNamesEnum
  backgroundColor: ColorNamesEnum
  text: string;
}

class Colors implements TColors {
  backgroundColor: ColorNamesEnum;
  color: ColorNamesEnum;
  text: string;

  constructor(backgroundColor = ColorNamesEnum.AMBER_500, color = ColorNamesEnum.INDIGO_500) {
    this.color = color;
    this.backgroundColor = backgroundColor;
    this.text = '';
  }

  setText(text: string) {
    this.text = text;
    return this;
  }

  getText() {
    return this.text;
  }

  setForegroundColor(color: ColorNamesEnum) {
    this.color = color;
    return this;
  }

  setBackgroundColor(backgroundColor: ColorNamesEnum) {
    this.backgroundColor = backgroundColor;
    return this;
  }

  setColorToText() {
    const rgbNewPrefix = `${RGB_COLORS[this.backgroundColor].red};${RGB_COLORS[this.backgroundColor].green
      };${RGB_COLORS[this.backgroundColor].blue}m`;
    this.text = `${RGB_FG_PREFIXES[0]}${rgbNewPrefix}${this.text}${RGB_FG_PREFIXES[1]}`;
    return this;
  }

  setBackgroundToText() {
    const rgbNewPrefix = `${RGB_COLORS[this.color].red};${RGB_COLORS[this.color].green};${RGB_COLORS[this.color].blue
      }m`;
    this.text = `${RGB_BG_PREFIXES[0]}${rgbNewPrefix}${this.text}${RGB_BG_PREFIXES[1]}`;
    return this;
  }
}

export {
  Colors
}
