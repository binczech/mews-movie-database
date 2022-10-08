import React from 'react';
import { Route } from 'react-router-dom';

import { List } from './screens';

export const movieRoutes = [
  (
    <Route
      key="movie-list"
      path="/movies"
      element={<List />}
    />
  ),
  (
    <Route
      key="default"
      path="*"
      element={<List />}
    />
  ),
];
