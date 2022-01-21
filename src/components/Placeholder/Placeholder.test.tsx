import React from 'react';
import { render, screen } from '../../test-utils';

import { Box } from '../Box';
import { Placeholder } from './Placeholder';

describe('<Cover />', () => {
  it('renders', () => {
    render(
      <Box>
        test
        <Placeholder />
      </Box>
    );
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
