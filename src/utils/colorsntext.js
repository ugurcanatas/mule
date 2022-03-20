const colors = {
  BLACK: [30, 39],
  YELLOW: [33, 89],
  PURPLE: [22, 0],
  RED: [31, 89]
};
const rgbBackgroundPrefixes = ['\x1b[48;2;', '\x1b[0m'];
const rgbForegroundPrefixes = ['\x1b[38;2;', '\x1b[0m'];

const rgbFixColors = {
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

class Colors {
  constructor(text, backgroundColor = 'AMBER_500', color = 'INDIGO_500') {
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
    const rgbNewPrefix = `${rgbFixColors[this.backgroundColor].red};${
      rgbFixColors[this.backgroundColor].green
    };${rgbFixColors[this.backgroundColor].blue}m`;
    this.text = `${rgbForegroundPrefixes[0]}${rgbNewPrefix}${this.text}${rgbForegroundPrefixes[1]}`;
    return this;
  }

  setBackgroundToText() {
    const rgbNewPrefix = `${rgbFixColors[this.color].red};${rgbFixColors[this.color].green};${
      rgbFixColors[this.color].blue
    }m`;
    this.text = `${rgbBackgroundPrefixes[0]}${rgbNewPrefix}${this.text}${rgbBackgroundPrefixes[1]}`;
    return this;
  }
}

module.exports = { Colors };
