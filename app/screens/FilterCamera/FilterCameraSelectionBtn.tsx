import React from 'react';
import {Button} from 'react-native';

interface ButtonProps {
    title: string,
    style: object,
    onPressFunc: Function,
}

function FilterCameraSelectionBtn({title, style, onPressFunc}: ButtonProps) {
	return (
		<Button
			title={title}
			style={style}
			onPress={() => onPressFunc()}
		/>
	);
}

export default FilterCameraSelectionBtn;
