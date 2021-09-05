import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StrongText } from './index';

export default {
    component: StrongText,
    title: 'StrongText',
    
} as ComponentMeta<typeof StrongText>;

const Template: ComponentStory<typeof StrongText> = args => <StrongText {...args} />

export const Default = Template.bind({});
Default.args = {
  
};
