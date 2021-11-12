import React from 'react';
import { render, screen } from '../../test-utils';

import { Box } from './Box';

describe('<Box />', () => {
  it('renders', () => {
    render(<Box>test</Box>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
