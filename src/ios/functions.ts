import { GenericIOS, IOSDeviceActionFn, UpdatedDevicesList } from './types';
import { exec, ExecException } from 'child_process';
import { createSortedEmulatorList, createNewDeviceList } from './utils';
import { SCRIPT_PREFIX, SCRIPT_PREFIX_IOS } from '../constants';
import { Spinner } from '../utils/spinners';
import { IOS_ANSWERS_ENUM, IOS_MESSAGES_ENUM, GenericQuestion, GenericQuestionFN } from './types';

const spinner = new Spinner();

const errorHandler = (
  reject: ((reason: any) => void) | null,
  error: ExecException | string | null
) => {
  spinner.stopSpinner();
  reject && reject(error);
  console.error(error);
};

const iosRuntimeList: GenericQuestionFN<Pick<GenericIOS, 'key' | 'name' | 'value'>> = () =>
  new Promise((resolve, reject) => {
    spinner.setMessage('Getting runtime environments').startSpinner();
    exec(`sh ${SCRIPT_PREFIX}/runtime_list_ios.sh`, (err, stdout, stderr) => {
      if (err || stderr) {
        errorHandler(reject, err || stderr);
        return;
      }
      const { runtimes }: { runtimes: GenericIOS[] } = JSON.parse(stdout);

      const question: GenericQuestion<Pick<GenericIOS, 'key' | 'name' | 'value'>> = {
        type: 'list',
        name: IOS_ANSWERS_ENUM.iosRuntime,
        message: IOS_MESSAGES_ENUM.iosRuntime,
        choices: runtimes.map(runtime => ({
          key: runtime.identifier,
          name: runtime.name,
          value: runtime.identifier
        }))
      };

      resolve(question);
      spinner.stopSpinner();
    });
  });

const iosEmulatorList: GenericQuestionFN<UpdatedDevicesList> = <T extends string | undefined>(
  runtimeKey: T
) =>
  new Promise((resolve, reject) => {
    spinner.setMessage('Finding IOS simulators').startSpinner();
    exec(`sh ${SCRIPT_PREFIX}/emu_list_ios.sh`, (err, stdout, stderr) => {
      if (err || stderr) {
        errorHandler(reject, err);
        return;
      }
      const { devices } = JSON.parse(stdout);
      const sortedList = createSortedEmulatorList(devices, runtimeKey as string);
      const choices = createNewDeviceList(sortedList);

      const question: GenericQuestion<UpdatedDevicesList> = {
        type: 'list',
        name: 'iosDevice',
        message: IOS_MESSAGES_ENUM.iosDevice,
        choices
      };
      resolve(question);

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
