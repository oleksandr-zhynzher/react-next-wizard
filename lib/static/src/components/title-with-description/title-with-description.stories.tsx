// TitleWithDescription.stories.tsx

import { Meta, StoryFn } from '@storybook/react';
import { expect, within } from '@storybook/test';
import React from 'react';

import { HeadingLevel } from '../constants';
import {
  TitleWithDescription,
  TitleWithDescriptionProperties,
} from './title-with-description';

export default {
  title: 'Components/TitleWithDescription',
  component: TitleWithDescription,
  argTypes: {
    titleLevel: {
      control: {
        type: 'select',
        options: [
          HeadingLevel.h1,
          HeadingLevel.h2,
          HeadingLevel.h3,
          HeadingLevel.h4,
          HeadingLevel.h5,
          HeadingLevel.h6,
        ],
      },
    },
  },
} as Meta;

const Template: StoryFn<TitleWithDescriptionProperties> = (
  arguments_: TitleWithDescriptionProperties,
) => <TitleWithDescription {...arguments_} />;

export const Default = Template.bind({});
const defaultTitle = 'Default Title';
const defaultDescription = 'This is a default description.';

Default.args = {
  title: defaultTitle,
  description: defaultDescription,
  titleLevel: HeadingLevel.h4,
};
Default.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  await expect(canvas.getByText(defaultTitle)).toBeInTheDocument();
  await expect(canvas.getByText(defaultDescription)).toBeInTheDocument();
};

export const CustomTitleLevel = Template.bind({});
const customTitle = 'Custom Title Level';

CustomTitleLevel.args = {
  title: customTitle,
  description: 'This description uses a custom heading level.',
  titleLevel: HeadingLevel.h2,
};

export const LongDescription = Template.bind({});
LongDescription.args = {
  title: 'Title with Long Description',
  description:
    'This is a very long description to test how the component handles it. It should wrap correctly and display all the text without any overflow issues.',
  titleLevel: HeadingLevel.h4,
};

export const EmptyDescription = Template.bind({});
EmptyDescription.args = {
  title: 'Title with No Description',
  description: '',
  titleLevel: HeadingLevel.h4,
};

// Interaction tests
Default.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  await expect(canvas.getByText('Default Title')).toBeInTheDocument();
  await expect(
    canvas.getByText('This is a default description.'),
  ).toBeInTheDocument();
};

CustomTitleLevel.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);
  await expect(canvas.getByText(customTitle)).toBeInTheDocument();
  await expect(
    canvas.getByText('This description uses a custom heading level.'),
  ).toBeInTheDocument();
  const heading = canvas.getByText(customTitle);
  await expect(heading.tagName).toBe('H2');
};

LongDescription.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);
  await expect(
    canvas.getByText('Title with Long Description'),
  ).toBeInTheDocument();
  const longDescription =
    'This is a very long description to test how the component handles it. It should wrap correctly and display all the text without any overflow issues.';
  await expect(canvas.getByText(longDescription)).toBeInTheDocument();
};
