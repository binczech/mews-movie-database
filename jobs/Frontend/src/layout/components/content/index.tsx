import React, { FunctionComponent, memo, PropsWithChildren } from 'react';

import { ContentProps } from './context-props';
import { Container } from './index.styled';

const ContentBase: FunctionComponent<PropsWithChildren<ContentProps>> = (props) => {
  const {
    limitedWidth,
    children,
  } = props;

  return (
    <Container limitedWidth={limitedWidth}>
      {children}
    </Container>
  );
};

export const Content = memo(ContentBase);
