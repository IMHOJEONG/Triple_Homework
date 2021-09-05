import React from 'react';

export interface StrongTextProps {
    /**
     * display
     */
    display?: string;
    
    /**
     * text 
     */
    children?: (React.ReactText | React.ReactElement)[] | React.ReactText | React.ReactElement;
}

export const StrongText = ({
    display,
    children
}: StrongTextProps) => {
    return (
        <strong style={{
            display
        }}>
            {children}    
        </strong>
    );
}