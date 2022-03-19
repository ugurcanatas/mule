const IOS_ACTION_IDENTIFIERS = {
  DEFAULT_ACTION: 'DEFAULT_ACTION',
  CUSTOM_ACTION: 'CUSTOM_ACTION'
};

const IOS_ACTION_CHOICES = [
  {
    key: 'boot',
    name: 'Boot',
    value: {
      type: 'boot',
      identifier: IOS_ACTION_IDENTIFIERS.DEFAULT_ACTION
    }
  },
  {
    key: 'shutdown',
    name: 'Shutdown',
    value: {
      type: 'shutdown',
      identifier: IOS_ACTION_IDENTIFIERS.DEFAULT_ACTION
    }
  },
  {
    key: 'erase',
    name: 'Erase',
    value: {
      type: 'erase',
      identifier: IOS_ACTION_IDENTIFIERS.DEFAULT_ACTION
    }
  },
  {
    key: 'send_link',
    name: 'Send Link',
    value: {
      type: 'send_link',
      identifier: IOS_ACTION_IDENTIFIERS.CUSTOM_ACTION
    }
  }
];

const IOS_RUNTIME_PROPS = {
  type: 'list',
  name: 'iosRuntime',
  message: 'Select an IOS Runtime'
};

const IOS_DEVICE_PROPS = {
  type: 'list',
  name: 'iosDevice',
  message: 'Select an IOS Device'
};

module.exports = {
  IOS_ACTION_CHOICES,
  IOS_RUNTIME_PROPS,
  IOS_DEVICE_PROPS,
  IOS_ACTION_IDENTIFIERS
};
