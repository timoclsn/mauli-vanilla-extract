import React from 'react';
import { render, screen } from '../../test-utils';

import { Box } from '../Box';
import { Container } from './Container';

describe('<Container />', () => {
  it('renders', () => {
    render(
      <Container>
        <Box>test</Box>
      </Container>
    );
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
