import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImageText } from './index';

export default {
    component: ImageText,
    title: 'ImageText',
    
} as ComponentMeta<typeof ImageText>;

const Template: ComponentStory<typeof ImageText> = args => <ImageText {...args} />

export const Default = Template.bind({});
Default.args = {
  
};
