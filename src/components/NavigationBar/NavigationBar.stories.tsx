import React from 'react';
import useState from 'storybook-addon-state';
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NavigationBar from ".";
import ClayLink from "@clayui/link";
import ClayNavigationBar from "@clayui/navigation-bar";
import { act } from 'react-dom/test-utils';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/NavigationBar",
  component: NavigationBar,
} as ComponentMeta<typeof NavigationBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NavigationBar> = (args) => <NavigationBar {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const [active, setActive] = useState("active","Item 1");
HelloWorld.args = {
  children:[ 
    <ClayNavigationBar.Item active={active === 'Item 1'}>
    <ClayLink
        href="#"
        onClick={(event) => {
            
            event.preventDefault();
            setActive("Item 1");
            console.log(active)
        }}
    >
        Item 1
    </ClayLink>
    </ClayNavigationBar.Item>,
    <ClayNavigationBar.Item active={active === 'Item 2'}>
        <ClayLink
             href="#"
             onClick={(event) => {
                 event.preventDefault();
                 setActive('Item 2');
                 console.log(active)
             }}
        >
            Item 2
        </ClayLink>
    </ClayNavigationBar.Item>
  ],active: active
};
