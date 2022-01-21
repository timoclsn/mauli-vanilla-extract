import React from 'react';
import { render, screen } from '../../test-utils';

import { Box } from '../Box';
import { Cover } from './Cover';

describe('<Cover />', () => {
  it('renders', () => {
    render(
      <Box>
        <Box background="gray5">background</Box>
        <Cover>
          <Box background="indigo5">cover</Box>
        </Cover>
      </Box>
    );
    expect(screen.getByText('background')).toBeInTheDocument();
    expect(screen.getByText('cover')).toBeInTheDocument();
  });
});
