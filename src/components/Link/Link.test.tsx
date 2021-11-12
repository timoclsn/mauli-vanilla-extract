import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Link } from './Link';

describe('<Link />', () => {
  it('renders', () => {
    render(<Link>test</Link>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
