import React from 'react';
import { render, screen } from '../../test-utils';

import { Breadcrumbs } from '../Breadcrumbs';
import { Crumb } from './Crumb';

describe('<Crumb />', () => {
  it('renders', () => {
    render(
      <Breadcrumbs>
        <Crumb url="/">test 1</Crumb>
        <Crumb url="/living" isCurrentPage>
          test 2
        </Crumb>
      </Breadcrumbs>
    );
    expect(screen.getByText('test 1')).toBeInTheDocument();
    expect(screen.getByText('test 2')).toBeInTheDocument();
  });
});
