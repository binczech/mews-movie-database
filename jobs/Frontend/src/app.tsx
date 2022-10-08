import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { AppLayout } from 'layout';

import { store } from './model/store';
import { OurRoutes } from './routes';

import 'antd/dist/antd.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export const App: FunctionComponent = () => (
  <Provider store={store}>
    <BrowserRouter>
      <AppLayout>
        <OurRoutes />
      </AppLayout>
    </BrowserRouter>
  </Provider>
);
