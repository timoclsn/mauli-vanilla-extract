import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { List } from './List';
import { ListItem } from '../ListItem';

describe('<List />', () => {
  it('renders', () => {
    render(
      <List type="greek">
        <ListItem>test 1</ListItem>
        <ListItem>test 2</ListItem>
      </List>
    );
    expect(screen.getByText('test 1')).toBeInTheDocument();
    expect(screen.getByText('test 2')).toBeInTheDocument();
  });
});
