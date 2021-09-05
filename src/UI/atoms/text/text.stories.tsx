import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from './index';

export default {
    component: Text,
    title: 'Text',
    
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => <Text {...args} />

export const Default = Template.bind({});
Default.args = {
  
};
