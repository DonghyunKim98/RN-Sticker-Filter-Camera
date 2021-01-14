import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface ButtonProps {
	style: object,
	onPressFunc: Function,
	icon : IconDefinition,
	btnStyle: object,
}

function SelectionBtn({style, btnStyle, onPressFunc, icon}: ButtonProps) {
	return (
		<TouchableOpacity
			onPress={onPressFunc}
			style={style}
		>
			<FontAwesomeIcon
				icon={icon}
				style={btnStyle}
				size={40}
			/>
		</TouchableOpacity>
	);
}

export default SelectionBtn;
