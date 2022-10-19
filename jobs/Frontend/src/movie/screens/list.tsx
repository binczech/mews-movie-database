import {
  Col, Form, Input, Pagination, Row,
} from 'antd';
import { debounce, noop } from 'lodash/fp';
import React, {
  ChangeEvent,
  FunctionComponent, memo, useCallback, useMemo, useState,
} from 'react';

import { Content, Divider, Loader } from 'layout';
import { MoviePreview } from 'movie/components';

import { useSearchMoviesQuery } from '../model';
import { initialSearchMovieParams } from '../types';

const PAGE_SIZE = 20;
const WAIT_TIME = 1000;

const ListBase: FunctionComponent = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchParams, setSearchParams] = useState(initialSearchMovieParams);
  const {
    isError,
    isLoading,
    isSuccess,
    isUninitialized,
    data,
  } = useSearchMoviesQuery(searchParams, { skip: searchValue.length < 3 });

  const onPageChange = useCallback((page: number) => {
    setSearchParams((current) => ({ ...current, page }));
  }, []);

  const onQueryChange = useCallback((query: string) => {
    setSearchParams((current) => ({ ...current, query }));
  }, []);

  const onQueryChangeDebounced = useMemo(() => debounce(WAIT_TIME)(onQueryChange), [onQueryChange]);

  const onSearchValueChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    onQueryChangeDebounced(event.target.value);
  }, [onQueryChangeDebounced]);

  return (
    <Content>
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
      <Divider />
      {isSuccess && (
        <div>
          <Row>
            <Col>
              <Row gutter={16}>
                {data.results?.map((x) => (
                  <MoviePreview
                    key={x.id}
                    goToMovie={noop}
                    movie={x}
                  />
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      )}
      {isLoading && (
        <Loader loading withoutChildren />
      )}
      {(isUninitialized || isError) && (
        <span>No movies were found.</span>
      )}
    </Content>
  );
};

export const List = memo(ListBase);
