import React from 'react';
import { render, screen } from '../../test-utils';

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
