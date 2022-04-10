import { ACTION_CHOICES } from '../types';

const ANDROID_ACTION_CHOICES: ACTION_CHOICES[] = [
  {
    key: 'boot',
    name: 'Boot',
    value: 'boot'
  },
  {
    key: 'shutdown',
    name: 'Shutdown',
    value: 'shutdown'
  },
  {
    key: 'wipe',
    name: 'Wipe Data',
    value: 'wipe'
  },
  {
    key: 'debug',
    name: 'Open with debug flag',
    value: 'debug'
  },
  {
    key: 'logcat',
    name: 'Open with logcat flag',
    value: 'logcat'
  },
  {
    key: 'logcat_standalone',
    name: 'Standalone Logcat Window',
    value: 'standalone'
  }
];

export { ANDROID_ACTION_CHOICES };
