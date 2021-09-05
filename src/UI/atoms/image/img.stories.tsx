import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Image } from './index';

export default {
    component: Image,
    title: 'Img',
    
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = args => <Image {...args} />

export const Default = Template.bind({});
Default.args = {
  
};
