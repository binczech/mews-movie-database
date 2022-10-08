import { Layout } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import React, { FunctionComponent, memo, PropsWithChildren } from 'react';

import { Title } from '../title';

const AppLayoutBase: FunctionComponent<PropsWithChildren<{}>> = ({ children }) => (
  <Layout>
    <Header>
      <Title isSiteTitle text="Device Checker" />
    </Header>
    <Content>
      {children}
    </Content>
  </Layout>
);

export const AppLayout = memo(AppLayoutBase);
