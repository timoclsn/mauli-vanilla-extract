import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Heading } from './Heading';
import { HeadingLevel } from './HeadingLevel';

describe('<Heading />', () => {
  it('renders', () => {
    render(
      <HeadingLevel>
        <Heading>test</Heading>
      </HeadingLevel>
    );
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  it('should throw error if not decendent of HeadingLevel component', () => {
    const originalError = console.error;
    console.error = jest.fn();

    const heading = () => {
      render(<Heading>test</Heading>);
    };

    expect(heading).toThrow();

    console.error = originalError;
  });

  it('should throw error if nested more than 4 times', () => {
    const originalError = console.error;
    console.error = jest.fn();

    const nestedHeadings = () => {
      render(
        <HeadingLevel>
          <Heading>Level 1</Heading>
          <HeadingLevel>
            <Heading>Level 2</Heading>
            <HeadingLevel>
              <Heading>Level 3</Heading>
              <HeadingLevel>
                <Heading>Level 4</Heading>
                <HeadingLevel>
                  <Heading>Level 5</Heading>
                </HeadingLevel>
              </HeadingLevel>
            </HeadingLevel>
          </HeadingLevel>
        </HeadingLevel>
      );
    };

    expect(nestedHeadings).toThrow();

    console.error = originalError;
  });
});
