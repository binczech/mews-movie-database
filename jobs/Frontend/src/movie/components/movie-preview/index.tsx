import { Col } from 'antd';
import { isUndefined } from 'lodash/fp';
import React, { FunctionComponent, memo, useCallback } from 'react';

import { Movie } from '../../types';
import { MovieImage } from '../movie-image';

interface Props {
    movie: Movie;
    goToMovie(movieId: number): void;
}

const MoviePreviewBase: FunctionComponent<Props> = ({
  movie,
  goToMovie,
}) => {
  const { id, title, poster_path } = movie;
  const goToDetail = useCallback(() => {
    if (!isUndefined(id)) goToMovie(id);
  }, [goToMovie, id]);

  return (
    <Col
      xs={24}
      sm={12}
      md={8}
      lg={6}
      xl={4}
      xxl={8}
      onClick={goToDetail}
    >
      {title ?? 'Title is missing'}
      <MovieImage posterPath={poster_path} />
    </Col>
  );
};

export const MoviePreview = memo(MoviePreviewBase);
