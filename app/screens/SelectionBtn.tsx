import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface ButtonProps {
	style: object,
	btnStyle: object,
	onPressFunc: Function,
	icon : IconDefinition,
	iconColor: string,
	iconSize: number,
}

function SelectionBtn({style, btnStyle, onPressFunc, icon, iconColor, iconSize}: ButtonProps) {
	return (
		<TouchableOpacity
			onPress={onPressFunc}
			style={style}
		>
			<FontAwesomeIcon
				icon={icon}
				size={iconSize}
				color={iconColor}
				style={btnStyle}
			/>
		</TouchableOpacity>
	);
}

export default SelectionBtn;
