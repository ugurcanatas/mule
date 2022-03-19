const readline = require('readline');

const spinnerOptions = {
  lines: {
    type: 'lines',
    intervalTime: 80,
    symbols: ['◐', '◓', '◑', '◒']
  }
};

class Spinner {
  constructor({ message, type = 'lines' }) {
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
    !!this.message && process.stdout.write(`\x1b[34m${this.message}\x1b[0m`);
    let counter = 0;
    this.spinnerInterval = setInterval(() => {
      if (!symbols[counter]) {
        counter = 0;
      }
      readline.cursorTo(process.stdout, this.message.length + 1 || 0);
      process.stdout.write(`${symbols[counter]}`);
      counter = counter === symbols.length ? 0 : counter + 1;
    }, intervalTime);
  }

  stopSpinner() {
    process.stdout.write('\n');
    this.spinnerInterval && clearInterval(this.spinnerInterval);
    this.spinnerInterval = null;
    this.message = '';
  }
}

module.exports = {
  Spinner
};
