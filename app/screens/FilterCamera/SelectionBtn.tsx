import React from 'react';
import {View, Button} from 'react-native';

interface ButtonProps {
	title: string,
	style: object,
    onPressFunc: Function,
}

function SelectionBtn({title, style, onPressFunc}: ButtonProps) {
	return (
		<View style={style}>
			<Button
				title={title}
				onPress={() => onPressFunc()}
			/>
		</View>
	);
}

export default SelectionBtn;
