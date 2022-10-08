import { Spin } from 'antd';
import React, { FunctionComponent, memo, PropsWithChildren } from 'react';

import { LoaderWrapper } from './index.styled';
import { LoaderProps } from './loader-props';

const LoaderBase: FunctionComponent<PropsWithChildren<LoaderProps>> = (props) => {
  const {
    children,
    loading,
    message,
    withoutChildren,
  } = props;

  return loading ? (
    <Spin tip={message ?? 'Loading...'}>
      <LoaderWrapper withoutChildren={withoutChildren}>
        {children}
      </LoaderWrapper>
    </Spin>
  ) : (
    <div>
      {children}
    </div>
  );
};

export const Loader = memo(LoaderBase);
