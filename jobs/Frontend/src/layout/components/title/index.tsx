import { Typography } from 'antd';
import React, { FunctionComponent, memo } from 'react';

import { TitleWrapper } from './index.styled';
import { TitleProps } from './title-props';

const TitleBase: FunctionComponent<TitleProps> = (props) => {
  const {
    isSiteTitle,
    level = 3,
    text,
    testId,
  } = props;
  return (
    <TitleWrapper
      isSiteTitle={isSiteTitle}
      data-testid={testId}
    >
      <Typography.Title level={level}>
        {text}
      </Typography.Title>
    </TitleWrapper>
  );
};

export const Title = memo(TitleBase);
