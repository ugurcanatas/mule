const { runtimeListsMockData: runtimeChoices, devices } = require('./mocks/runtimeList');
const { iosRuntimeList, iosEmulatorList } = require('../../src/ios/functions');
const { createSortedEmulatorList } = require('../../src/ios/utils');

/**
 * IOS RUNTIME LIST TESTS
 */
describe('Below tests should mock when current process is successful', () => {
  test('Inquirer object keys should be type name message and choices', async () => {
    const response = await iosRuntimeList();
    expect(response).toMatchSnapshot();
    const keys = Object.keys(response);
    expect(keys).toEqual(['type', 'name', 'message', 'choices']);
  });

  test('Expect choices to be an array', async () => {
    const response = await iosRuntimeList();
    expect(!!response.choices.length).toBe(true);
    expect(Array.isArray(response.choices)).toBe(true);
  });

  test('Expect single choice to contain correct value after resolving', async () => {
    const response = await iosRuntimeList();
    response.choices.filter(choice => {
      const { key, value, name } = choice;
      expect(key).toMatch(/com.apple.CoreSimulator/);
      expect(value).toMatch(/com.apple.CoreSimulator/);
      expect(name).toMatch(/^iOS|macOS|tvOS|watchOS/);
    });
  });
});

describe('Below tests should mock any error situation', () => {
  test('Expect to receive error message which contains "Command failed" when passing an empty string to the function', async () => {
    await expect(async () => {
      await iosRuntimeList('');
    }).rejects.toThrowError(/Command failed/);
  });
});

/**
 * IOS EMULATOR LIST TESTS
 */

describe('Below tests should mock when ios emulator list process is successful', () => {
  test('iosEmulatorList response should consist ios emulators', async () => {
    const response = await iosEmulatorList(runtimeChoices[0].key);
    expect(response).toMatchSnapshot();
    const keys = Object.keys(response);
    expect(keys).toEqual(['type', 'name', 'message', 'choices']);

    const { choices } = response;
    expect(Array.isArray(choices)).toEqual(true);
    expect(!!choices.length).toBe(true);

    choices.forEach(choice => {
      expect(typeof choice.value).toBe('object');
      expect(Object.keys(choice.value)).toEqual(['deviceName', 'deviceUDID', 'deviceState']);
    });
  });
});

describe('test utility functions', () => {
  test('createSortedEmulatorList fn should throw TypeError', async () => {
    expect(() => createSortedEmulatorList([], '')).toThrowError(
      new Error(`Cannot read properties of undefined (reading 'filter')`)
    );
  });

  test('createSortedEmulatorList fn should throw TypeError even with second parameter', async () => {
    expect(() => createSortedEmulatorList([], '076869A0-6B83-4225-88E3-26AF42D03209')).toThrowError(
      new Error(`Cannot read properties of undefined (reading 'filter')`)
    );
  });

  test('createSortedEmulatorList fn should throw an error with empty runtime key parameter', async () => {
    expect(() => createSortedEmulatorList(devices, '')).toThrowError(
      new Error(`Cannot read properties of undefined (reading 'filter')`)
    );
  });

  test('createSortedEmulatorList fn should return device list', async () => {
    const result = createSortedEmulatorList(devices, 'com.apple.CoreSimulator.SimRuntime.iOS-15-0');
    expect(Array.isArray(result)).toBe(true);
  });
});
