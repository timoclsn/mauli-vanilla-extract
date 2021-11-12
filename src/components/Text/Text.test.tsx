import React from 'react';
import { render, screen } from '../../test-utils';

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
