import React from 'react';

export interface ImageProps {
  
  /**
   * Width
   */
  width?: string;
  /**
   * height
   */
  height?: string;
  /**
   * padding
   */
  padding?: string;

  /**
   * margin
   */
  margin?: string;
  /**
   * img src
   */
  src: string;

  /**
   * img alt
   */
  alt: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Image = ({

  width,
  height,
  src,
  alt,
  padding,
  margin,
  ...props
}: ImageProps) => {


  return (
    <img
      src={src}
      style={{
        width, padding,
        height, margin
      }}
      alt={alt}
      {...props}
    >
    </img>
  );
};
