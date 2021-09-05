import React from 'react';
import { ImageProps } from '../../atoms/image';
import { Text } from '../../atoms/text';
import { TextsProps } from '../texts';

export interface ImageTextProps {
    display?: string;
    width?: string;
    children?: (React.ReactElement<ImageProps> | 
        React.ReactElement<TextsProps> )[];
}

export const ImageText = ({
    display,
    children,
    width,
    ...props
}: ImageTextProps) => {

    return (
        <div style={{
            width,
            display
        }}>
            { children }
        </div>
    );
}