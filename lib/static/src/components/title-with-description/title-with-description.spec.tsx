// src/components/common/TitleWithDescription.test.tsx

import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';

import { HeadingLevel } from '../constants';
import { TitleWithDescription } from './title-with-description';

describe('TitleWithDescription', () => {
  it('renders the title and description correctly', () => {
    render(
      <TitleWithDescription
        title='Test Title'
        description='Test Description'
      />,
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('uses the default heading level if none is provided', () => {
    render(
      <TitleWithDescription
        title='Default Heading Level'
        description='Description'
      />,
    );
    const heading = screen.getByText('Default Heading Level');
    expect(heading.tagName).toBe('H4');
  });

  it('uses a custom heading level if provided', () => {
    render(
      <TitleWithDescription
        title='Custom Heading Level'
        description='Description'
        titleLevel={HeadingLevel.h2}
      />,
    );
    const heading = screen.getByText('Custom Heading Level');
    expect(heading.tagName).toBe('H2');
  });

  it('renders correctly with a long description', () => {
    const longDescription =
      'This is a very long description to test how the component handles it. It should wrap correctly and display all the text without any overflow issues.';
    render(
      <TitleWithDescription
        title='Long Description'
        description={longDescription}
      />,
    );
    expect(screen.getByText('Long Description')).toBeInTheDocument();
    expect(screen.getByText(longDescription)).toBeInTheDocument();
  });
});
