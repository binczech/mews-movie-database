import {
  Col, Form, Input, Pagination, Row,
} from 'antd';
import React, { FunctionComponent, memo } from 'react';

import { useSearchMoviesQuery } from 'movie/model';

interface Props {}

const ActionBarBase: FunctionComponent<Props> = (props) => {
  const {} = props;

  const {
    isError,
    isLoading,
    isSuccess,
    isUninitialized,
    data,
  } = useSearchMoviesQuery(searchParams, { skip: searchValue.length < 3 });

  return (
    <Row justify="space-between" gutter={16}>
      <Col>
        <Form.Item
          label="Search movie:"
          status={isLoading ? 'validating' : undefined}
          hasFeedback={isLoading}
        >
          <Input
            value={searchValue}
            onChange={onSearchValueChange}
          />
        </Form.Item>
      </Col>
      {isSuccess && data.total_pages && (
      <Col>
        <Pagination
          pageSize={PAGE_SIZE}
          current={searchParams.page}
          total={data.total_pages}
          onChange={onPageChange}
          showSizeChanger={false}
          showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
        />
      </Col>
      )}
    </Row>
  );
};

export const ActionBar = memo(ActionBarBase);
