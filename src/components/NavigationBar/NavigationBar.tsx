import ClayButton from '@clayui/button';
import ClayLink from '@clayui/link';
import ClayNavigationBar from '@clayui/navigation-bar';
import React, {ReactElement, ReactPropTypes, useState} from 'react';
import { ButtonProps } from '../Button/Button';

export interface NavigationProps{
    children?: ReactElement<any,string>[] | ReactElement<any,string>
    active: any
}

const NavigationBar = (props:NavigationProps) => {
	
	return (
		<ClayNavigationBar triggerLabel="" >
            {props.children||<div></div>}
		</ClayNavigationBar>
	);
}

export default NavigationBar;