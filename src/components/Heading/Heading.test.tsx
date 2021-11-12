import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Heading } from './Heading';
import { HeadingLevel } from './HeadingLevel';

describe('<Heading />', () => {
  it('renders', () => {
    render(
      <HeadingLevel>
        <Heading>test</Heading>
      </HeadingLevel>
    );
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
