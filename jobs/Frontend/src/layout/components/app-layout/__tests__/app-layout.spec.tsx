import { render, RenderResult } from '@testing-library/react';
import React from 'react';

import { AppLayout } from '..';

describe('AppLayout', () => {
  const setup = (): RenderResult => render(
    <AppLayout>
      <div>Some child</div>
    </AppLayout>,
  );
  it('should match the snapshot', () => {
    expect(setup().container).toMatchSnapshot();
  });
});
