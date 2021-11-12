import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Text } from './Text';

describe('<Text />', () => {
  it('renders', () => {
    render(<Text>test</Text>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
