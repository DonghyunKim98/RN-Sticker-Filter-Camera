import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {Text, TouchableOpacity} from 'react-native';

interface ButtonProps {
	style: object,
	onPressFunc: Function,
	icon : IconDefinition,
}

function SelectionBtn({style, onPressFunc, icon}: ButtonProps) {
	return (
		<TouchableOpacity
			onPress={onPressFunc}
			style={style}
		>
			<FontAwesomeIcon icon={icon}/>
		</TouchableOpacity>
	);
}

export default SelectionBtn;
