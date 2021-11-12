import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Box } from '../Box';
import { Inset } from './Inset';

describe('<Inset />', () => {
  it('renders', () => {
    render(
      <Inset>
        <Box>test</Box>
      </Inset>
    );
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
