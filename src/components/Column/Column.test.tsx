import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Box } from '../Box';
import { Columns } from '../Columns';
import { Column } from './Column';

describe('<Column />', () => {
  it('renders', () => {
    render(
      <Columns space="4x" collapseBelow="640px">
        <Column width="1/3">
          <Box>test 1</Box>
        </Column>
        <Column>
          <Box>test 2</Box>
        </Column>
      </Columns>
    );
    expect(screen.getByText('test 1')).toBeInTheDocument();
    expect(screen.getByText('test 2')).toBeInTheDocument();
  });
});
