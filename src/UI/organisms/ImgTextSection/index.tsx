import React from 'react';
import { ImageText, ImageTextProps } from '../../molecules/imgText';

interface ImgTextSectionProps {
    strongText?: React.ReactText;
    text?: React.ReactText;
    children?: React.ReactElement<ImageTextProps>
    | React.ReactElement<ImageTextProps>[];
    display?: string;
    padding?: string;
    justifyContent?: string;
}

export const ImgTextSection = ({
    display,
    padding,
    justifyContent,
    children
}: ImgTextSectionProps) => {
    return (
        <div style={{
            display,
            padding,
            justifyContent
        }}>
            { children }
        </div>
    );
}