import React from 'react';
import {Button, View} from 'react-native';

interface ButtonProps {
    title: string,
    style: object,
    onPressFunc: Function,
}
function FilterBtn({title, style, onPressFunc}: ButtonProps) {
	return (
		<View style={style}>
			<Button
				title={title}
				onPress={() => onPressFunc()}
			/>
		</View>
	);
}

export default FilterBtn;
