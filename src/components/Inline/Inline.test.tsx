import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Box } from '../Box';
import { Inline } from './Inline';

describe('<Inline />', () => {
  it('renders', () => {
    render(
      <Inline>
        <Box>test 1</Box>
        <Box>test 2</Box>
      </Inline>
    );
    expect(screen.getByText('test 1')).toBeInTheDocument();
    expect(screen.getByText('test 2')).toBeInTheDocument();
  });
});
