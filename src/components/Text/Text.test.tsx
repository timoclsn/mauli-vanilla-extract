import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Text } from './Text';

describe('<Text />', () => {
  it('renders', () => {
    render(<Text>test</Text>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  it('renders truncated', () => {
    render(<Text truncate>test</Text>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
