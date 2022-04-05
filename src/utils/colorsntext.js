const { RGB_COLORS, RGB_BG_PREFIXES, RGB_FG_PREFIXES, COLOR_NAMES } = require('./colors');

const { AMBER_500, INDIGO_500 } = COLOR_NAMES;

class Colors {
  constructor(text, backgroundColor = AMBER_500, color = INDIGO_500) {
    this.text = text;
    this.color = color;
    this.backgroundColor = backgroundColor;
  }

  setText(text) {
    this.text = text;
    return this;
  }

  getText() {
    return this.text;
  }

  setForegroundColor(color) {
    this.color = color;
    return this;
  }

  setBackgroundColor(backgroundColor) {
    this.backgroundColor = backgroundColor;
    return this;
  }

  setColorToText() {
    const rgbNewPrefix = `${RGB_COLORS[this.backgroundColor].red};${
      RGB_COLORS[this.backgroundColor].green
    };${RGB_COLORS[this.backgroundColor].blue}m`;
    this.text = `${RGB_FG_PREFIXES[0]}${rgbNewPrefix}${this.text}${RGB_FG_PREFIXES[1]}`;
    return this;
  }

  setBackgroundToText() {
    const rgbNewPrefix = `${RGB_COLORS[this.color].red};${RGB_COLORS[this.color].green};${
      RGB_COLORS[this.color].blue
    }m`;
    this.text = `${RGB_BG_PREFIXES[0]}${rgbNewPrefix}${this.text}${RGB_BG_PREFIXES[1]}`;
    return this;
  }
}

module.exports = { Colors };
