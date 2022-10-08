import React, { FunctionComponent, memo } from 'react';

import { Content } from 'layout';

const ListBase: FunctionComponent = () => (
  <Content>
    TODO
  </Content>
);

export const List = memo(ListBase);
