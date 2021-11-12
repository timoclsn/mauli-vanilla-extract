import React from 'react';
import { render, screen } from '../../test-utils';

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
