import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Box } from '../Box';
import { Stack } from './Stack';

describe('<Stack />', () => {
  it('renders', () => {
    render(
      <Stack>
        <Box>test 1</Box>
        <Box>test 2</Box>
      </Stack>
    );
    expect(screen.getByText('test 1')).toBeInTheDocument();
    expect(screen.getByText('test 2')).toBeInTheDocument();
  });
});
