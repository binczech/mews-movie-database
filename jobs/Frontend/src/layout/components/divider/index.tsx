import { Divider as AntDivider } from 'antd';
import React, { FunctionComponent, memo } from 'react';

interface Props {
    noMarginTop?: boolean;
}

const DividerBase: FunctionComponent<Props> = (props) => {
  const { noMarginTop = true } = props;

  return (
    <AntDivider style={{ marginTop: noMarginTop ? 0 : undefined }} />
  );
};

export const Divider = memo(DividerBase);
