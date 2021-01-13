import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface ButtonProps {
	title: string,
	style: object,
    onPressFunc: Function,
}

function SelectionBtn({title, style, onPressFunc}: ButtonProps) {
	return (
		<TouchableOpacity
			onPress={onPressFunc}
			style={style}
		>
			<Text>{title}</Text>
		</TouchableOpacity>
	);
}

export default SelectionBtn;
