import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

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
