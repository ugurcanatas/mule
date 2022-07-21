interface TYPE_GENERIC_PROMPT<T = {} | []> {
  type: string;
  name: string;
  message: string;
  choices?: T;
}

enum IOS_ACTION_IDENTIFIERS {
  DEFAULT_ACTION = 'DEFAULT_ACTION',
  CUSTOM_ACTION = 'CUSTOM_ACTION'
}

enum OS_TYPE_ENUM {
  IOS = 'IOS',
  ANDROID = 'ANDROID'
}

export interface ACTION_CHOICES<T = {} | ''> {
  key: string;
  name: string;
  value: T;
}

type IOS_ACTION_VALUE = { type: string; identifier: IOS_ACTION_IDENTIFIERS };

type TYPE_IOS_ACTION_CHOICES = ACTION_CHOICES<IOS_ACTION_VALUE>[];

type GenericPromptResult<KEY extends string, RESULT> = {
  [k in KEY]: RESULT;
};

export {
  TYPE_IOS_ACTION_CHOICES,
  IOS_ACTION_IDENTIFIERS,
  TYPE_GENERIC_PROMPT,
  OS_TYPE_ENUM,
  GenericPromptResult
};
