import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Box } from '../Box';
import { Hidden } from './Hidden';

describe('<Hidden />', () => {
  it('renders', () => {
    render(
      <Hidden below="640px">
        <Box>test</Box>
      </Hidden>
    );
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
