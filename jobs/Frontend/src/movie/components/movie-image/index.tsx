import React, { FunctionComponent, memo } from 'react';

import { Image } from './index.styled';

interface Props {
    posterPath?: string | null;
}

const MovieImageBase: FunctionComponent<Props> = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <Image>
      <img
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt=""
      />
    </Image>
  );
};

export const MovieImage = memo(MovieImageBase);
