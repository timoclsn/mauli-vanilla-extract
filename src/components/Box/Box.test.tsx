import React from 'react';
import { render, screen } from '../../test-utils';

import { Box } from './Box';

describe('<Box />', () => {
  it('renders', () => {
    render(<Box>test</Box>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  it('renders with color mode context', () => {
    render(
      <Box contextualBackground="highlight">
        <Box contextualColor="primary">test</Box>
      </Box>
    );
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
