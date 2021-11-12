import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Card } from './Card';

describe('<Card />', () => {
  it('renders', () => {
    render(<Card>test</Card>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
