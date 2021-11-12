import React from 'react';
import { render, screen } from '../../test-utils';

import { Link } from './Link';

describe('<Link />', () => {
  it('renders', () => {
    render(<Link>test</Link>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
