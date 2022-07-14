import readline from 'readline';
import { Colors } from './colorsntext'
import { ColorNamesEnum } from './colors'

type TSpinnerOpts = {
  [key in string]: {
    type: 'dotsLine' | 'halfCircles'
    intervalTime: number
    symbols: string[]
  }
}

type TSpinner = {
  message: string
  type: TSpinnerOpts[keyof TSpinnerOpts]['type']
  colorConfiguration: {
    baseForegroundColor: ColorNamesEnum
    baseBackgroundColor: ColorNamesEnum
  }
  spinnerInterval?: NodeJS.Timer
}

const spinnerOptions: TSpinnerOpts = {
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

const generateColor = (message: string, colorConfiguration: TSpinner['colorConfiguration']) => {
  const { baseBackgroundColor, baseForegroundColor } = colorConfiguration;
  const colorsConfig = new Colors(baseBackgroundColor, baseForegroundColor);
  const { text } = colorsConfig.setText(message).setColorToText().setBackgroundToText();
  return text;
};

class Spinner implements TSpinner {
  message: string;
  type: TSpinnerOpts[keyof TSpinnerOpts]['type']
  colorConfiguration: { baseForegroundColor: ColorNamesEnum; baseBackgroundColor: ColorNamesEnum; };
  spinnerInterval?: NodeJS.Timer

  constructor(
    message: string,
    type: TSpinnerOpts[keyof TSpinnerOpts]['type'] = 'dotsLine',
    colorConfiguration: TSpinner['colorConfiguration'] = {
      baseForegroundColor: ColorNamesEnum.AMBER_500,
      baseBackgroundColor: ColorNamesEnum.RED_500
    }
  ) {
    this.message = message;
    this.type = type;
    this.colorConfiguration = colorConfiguration;
  }

  setMessage(message: string) {
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
    this.spinnerInterval = undefined;
    this.message = '';
  }
}

export {
  Spinner
}
