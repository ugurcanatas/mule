import { GenericIOS, IOSDeviceActionFn } from './types';
import { exec, ExecException } from 'child_process';
import { createSortedEmulatorList, createNewDeviceList } from './utils';
import {
  SCRIPT_PREFIX,
  SCRIPT_PREFIX_IOS,
  IOS_RUNTIME_PROPS,
  IOS_DEVICE_PROPS
} from '../constants';
import { Spinner } from '../utils/spinners';

const spinner = new Spinner();

const errorHandler = (
  reject: ((reason: any) => void) | null,
  error: ExecException | string | null
) => {
  spinner.stopSpinner();
  reject && reject(error);
  console.error(error);
};

const iosRuntimeList = (scriptPrefix: string = SCRIPT_PREFIX) =>
  new Promise((resolve, reject) => {
    spinner.setMessage('Getting runtime environments').startSpinner();
    exec(`sh ${scriptPrefix}/runtime_list_ios.sh`, (err, stdout, stderr) => {
      if (err || stderr) {
        errorHandler(reject, err || stderr);
        return;
      }
      const { runtimes }: { runtimes: GenericIOS[] } = JSON.parse(stdout);
      resolve({
        ...IOS_RUNTIME_PROPS,
        choices: runtimes.map(runtime => ({
          key: runtime.identifier,
          name: runtime.name,
          value: runtime.identifier
        }))
      });
      spinner.stopSpinner();
    });
  });

const iosEmulatorList = (runtimeKey: string) =>
  new Promise((resolve, reject) => {
    spinner.setMessage('Finding IOS simulators').startSpinner();
    exec(`sh ${SCRIPT_PREFIX}/emu_list_ios.sh`, (err, stdout, stderr) => {
      if (err || stderr) {
        errorHandler(reject, err);
        return;
      }
      const { devices } = JSON.parse(stdout);
      const sortedList = createSortedEmulatorList(devices, runtimeKey);
      const choices = createNewDeviceList(sortedList);

      resolve({
        ...IOS_DEVICE_PROPS,
        choices
      });
      spinner.stopSpinner();
    });
  });

const iosDeviceAction: IOSDeviceActionFn = (type, udid, state, filteredActionResults) => {
  spinner.setMessage(`Starting selected ${type} process`).startSpinner();
  exec(
    `osascript ${SCRIPT_PREFIX_IOS}/${type}.applescript ${udid} ${state} ${filteredActionResults}`,
    (err, stdout, stderr) => {
      if (err || stderr) {
        errorHandler(null, err || stderr);
        return;
      }
      process.stdout.write(stdout);
    }
  );
  spinner.stopSpinner();
};

export { iosRuntimeList, iosEmulatorList, iosDeviceAction };