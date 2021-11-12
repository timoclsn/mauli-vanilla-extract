import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Skeleton } from './Skeleton';
import { Box } from '../Box';

describe('<Skeleton />', () => {
  it('renders', () => {
    render(
      <Box>
        test
        <Skeleton circle size="64px" />
      </Box>
    );
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
