declare const TITLE_ELE_LIST: [1, 2, 3, 4, 5];

type TitleLevel = typeof TITLE_ELE_LIST[number];

export interface TitleProps {
    isSiteTitle?: boolean;
    text: string;
    level?: TitleLevel;
    testId?: string;
  }
