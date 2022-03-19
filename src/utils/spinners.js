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

const fontTypes = {
  bold: [1, 22],
  dim: [2, 22],
  italic: [3, 23]
};

const colors = {
  YELLOW: [33, 89],
  PURPLE: [22, 0],
  RED: [31, 89]
};
const generateColor = (message, colorName) => {
  const [first, second] = colors[colorName];
  return `\x1b[${first}m${message}\x1b[${second}m`;
};

// const generateTextStyle = (message, style) => {
//   fontTypes[style];
// };

class Spinner {
  constructor({ message, type = 'dotsLine' }) {
    this.message = message;
    this.type = type;
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
    !!this.message && process.stdout.write(generateColor(this.message, 'RED')); // `\x1b[34m${this.message}\x1b[0m`;
    let counter = 0;
    this.spinnerInterval = setInterval(() => {
      if (!symbols[counter]) {
        counter = 0;
      }
      readline.cursorTo(process.stdout, this.message.length + 1 || 0);
      process.stdout.write(generateColor(`${symbols[counter]}`, 'RED'));
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
