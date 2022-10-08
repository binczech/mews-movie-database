import React, { FunctionComponent, memo } from 'react';
import { Routes } from 'react-router-dom';

import { movieRoutes } from 'movie';

const OurRoutesBase: FunctionComponent = () => (
  <Routes>
    {movieRoutes}
  </Routes>
);

export const OurRoutes = memo(OurRoutesBase);
