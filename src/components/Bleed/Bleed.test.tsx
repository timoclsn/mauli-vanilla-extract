import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Box } from '../Box';
import { Bleed } from './Bleed';
import { Container } from '../Container';

describe('<Bleed />', () => {
  it('renders', () => {
    render(
      <Container>
        <Bleed>
          <Box>test</Box>
        </Bleed>
      </Container>
    );
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
