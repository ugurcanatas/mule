const { iosRuntimeList } = require('../../src/ios/functions');

describe('Below tests should mock when current process is successful', () => {
  test('Inquirer object keys should be type name message and choices', async () => {
    const response = await iosRuntimeList();
    const keys = Object.keys(response);
    expect(keys).toEqual(['type', 'name', 'message', 'choices']);
  });

  test('Expect choices to be an array', async () => {
    const response = await iosRuntimeList();
    expect(!!response.choices?.length).toBe(true);
    expect(Array.isArray(response.choices)).toBe(true);
  });
});

describe('Below tests should mock any error situation', () => {
  test('Expect to receive error message which contains "Command failed" when passing an empty string to the function', async () => {
    await expect(async () => {
      await iosRuntimeList('');
    }).rejects.toThrowError(/Command failed/);
  });
});
