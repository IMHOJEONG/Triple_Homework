import React from 'react';
import { Texts, TextsProps } from '../../molecules/texts';

interface TextsParagraphProps {
    strongText?: React.ReactText;
    text?: React.ReactText;
    display?: string;
    flexDirection?: ('row' | 'row-reverse' | 'column' | 'column-reverse');
    width?: string;
    padding?: string;
    children?: React.ReactElement<TextsProps>[] | React.ReactElement<TextsProps>;
}

export const TextsParagraph = ({
    text, strongText, display,
    width,
    padding,
    flexDirection,
    children,
    ...props
}: TextsParagraphProps) => {

    return (
        <div style={{
            width,
            display,
            flexDirection,
            padding
        }}>
            { children }
            {/* <Texts
                strongText="350만 명"
                text="의 사용자"
            >
            </Texts>
            <Texts
                strongText="21만 개"
                text="의 리뷰"
            >
            </Texts>
            <Texts
                strongText="650만 개"
                text="의 저장"
            >
            </Texts> */}
        </div>
    );
}