import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Box } from './Box';

describe('<Box />', () => {
  it('renders', () => {
    render(<Box>test</Box>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
