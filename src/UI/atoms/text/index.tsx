import React from 'react';

export interface TextProps {
    
    /**
     * fontsize
     */
    fontSize?: string;
    /**
     * position
     */
    position?: ('static' | 'relative' | 'absolute' | 'sticky' | 'fixed');

    /**
     * color
     */
    color?: string;

    /**
     * top
     */
    top?: string;

    /**
     * width
     */
    width?: string;

    /**
     * textAlign
     */
    textAlign?: ('start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent');

    /**
     * lineHeight
     */
    lineHeight?: string;
    /**
     * children
     */
    children: (React.ReactText | React.ReactElement<HTMLBRElement>)[]
    | React.ReactText | React.ReactElement<HTMLBRElement>;
}

export const Text = ({
    width,
    textAlign,
    fontSize,
    lineHeight,
    position,
    top,
    color,
    children
}: TextProps
) => {
    return (
        <div style={{
            width,
            textAlign,
            position,
            fontSize,
            top,
            color,
            lineHeight
        }}>
            {children}
        </div>
    )
}