import React from 'react';
import { render, screen } from '../../test-utils';

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
