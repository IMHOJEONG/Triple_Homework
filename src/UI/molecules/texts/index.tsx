import React from 'react';
import { StrongText, StrongTextProps } from '../../atoms/strongText';
import { Text, TextProps } from '../../atoms/text';

export interface TextsProps {
    display?: string;
    justifyContent?: string;
    alignItems?: string;
    height?: string;
    fontSize?: string;
    children?: (React.ReactElement<StrongTextProps>
        | React.ReactElement<TextProps>) [] | React.ReactElement | React.ReactElement[];
}

export const Texts = ({
    display,
    justifyContent,
    alignItems,
    height,
    fontSize,
    children
}: TextsProps) => {

    return (
        <div style={{
            display,
            justifyContent,
            height,
            alignItems,
            fontSize,
        }}>
            {children}
        </div>
    );
}