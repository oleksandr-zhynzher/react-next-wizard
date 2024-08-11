import React from 'react';

import { HeadingLevel } from '../constants';

export interface TitleWithDescriptionProperties {
  title: string;
  titleCx?: string;
  titleLevel?: HeadingLevel;
  description?: string;
}

export const TitleWithDescription: React.FC<TitleWithDescriptionProperties> = ({
  title,
  titleCx = '',
  description,
  titleLevel = HeadingLevel.h4,
}) => {
  const HeadingTag = titleLevel as keyof React.JSX.IntrinsicElements;

  return (
    <>
      <HeadingTag className={`text-xl mb-2 ${titleCx}`}>{title}</HeadingTag>
      {description && (
        <p className='text-sm text-gray-600 text-red-500'>{description}</p>
      )}
    </>
  );
};
