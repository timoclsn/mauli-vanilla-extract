import React from 'react';
import { render, screen } from '../../test-utils';

import { Card } from './Card';

describe('<Card />', () => {
  it('renders', () => {
    render(<Card>test</Card>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
