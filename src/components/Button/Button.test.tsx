import React from 'react';
import { render, screen } from '../../test-utils';

import { Button } from './Button';

describe('<Button />', () => {
  it('renders', () => {
    render(<Button>test</Button>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
