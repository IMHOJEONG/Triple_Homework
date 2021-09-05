import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextsParagraph } from './index';

export default {
    component: TextsParagraph,
    title: 'TextsParagraph',
    
} as ComponentMeta<typeof TextsParagraph>;

const Template: ComponentStory<typeof TextsParagraph> = args => <TextsParagraph {...args} />

export const Default = Template.bind({});
Default.args = {
  
};
