const { Colors } = require('./colorsntext');
const { COLOR_NAMES } = require('./colors');
const readline = require('readline');

const spinnerOptions = {
  halfCircles: {
    type: 'halfCircles',
    intervalTime: 80,
    symbols: ['◐', '◓', '◑', '◒']
  },
  dotsLine: {
    type: 'dotsLine',
    intervalTime: 100,
    symbols: ['.', '..', '...', '....']
  }
};

const generateColor = (message, colorConfiguration) => {
  const { baseBackgroundColor, baseForegroundColor } = colorConfiguration;
  const colorsConfig = new Colors(baseBackgroundColor, baseForegroundColor);
  const { text } = colorsConfig.setText(message).setColorToText().setBackgroundToText();
  return text;
};

class Spinner {
  constructor(
    message,
    type = 'dotsLine',
    colorConfiguration = {
      baseForegroundColor: COLOR_NAMES.AMBER_500,
      baseBackgroundColor: COLOR_NAMES.RED_500
    }
  ) {
    this.message = message;
    this.type = type;
    this.colorConfiguration = colorConfiguration;
  }

  setMessage(message) {
    this.message = message;
    return this;
  }

  getSpinnerDataByType() {
    const { intervalTime, symbols } = spinnerOptions[this.type];
    return {
      intervalTime,
      symbols
    };
  }

  startSpinner() {
    const { intervalTime, symbols } = this.getSpinnerDataByType();
    !!this.message && process.stdout.write(generateColor(this.message, this.colorConfiguration));
    let counter = 0;
    this.spinnerInterval = setInterval(() => {
      if (!symbols[counter]) {
        counter = 0;
      }
      readline.cursorTo(process.stdout, this.message.length + 1 || 0);
      process.stdout.write(generateColor(`${symbols[counter]}`, this.colorConfiguration));
      counter = counter === symbols.length ? 0 : counter + 1;
    }, intervalTime);
  }

  stopSpinner() {
    this.message = ' \n';
    process.stdout.write(this.message);
    this.spinnerInterval && clearInterval(this.spinnerInterval);
    this.spinnerInterval = null;
    this.message = '';
  }
}

module.exports = {
  Spinner
};
