import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Texts } from './index';

export default {
    component: Texts,
    title: 'Texts',
    
} as ComponentMeta<typeof Texts>;

const Template: ComponentStory<typeof Texts> = args => <Texts {...args} />

export const Default = Template.bind({});
Default.args = {
  
};
