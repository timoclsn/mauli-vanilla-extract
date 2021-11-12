import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Label } from './Label';

describe('<Label />', () => {
  it('renders', () => {
    render(<Label>test</Label>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
