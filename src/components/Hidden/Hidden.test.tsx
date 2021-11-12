import React from 'react';
import { render, screen } from '../../test-utils';

import { Box } from '../Box';
import { Hidden } from './Hidden';

describe('<Hidden />', () => {
  it('renders with below prop', () => {
    render(
      <Hidden below="640px">
        <Box>test</Box>
      </Hidden>
    );
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  it('renders with above prop', () => {
    render(
      <Hidden above="1280px">
        <Box>test</Box>
      </Hidden>
    );
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
