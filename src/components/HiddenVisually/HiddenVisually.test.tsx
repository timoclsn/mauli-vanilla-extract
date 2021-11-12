import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Box } from '../Box';
import { HiddenVisually } from './HiddenVisually';

describe('<HiddenVisually />', () => {
  it('renders', () => {
    render(
      <HiddenVisually>
        <Box>test</Box>
      </HiddenVisually>
    );
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
