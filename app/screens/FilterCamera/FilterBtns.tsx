import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface ButtonProps {
    titles: Array<string>,
    style: object,
    onPressFunc: Function,
}


function FilterBtns({titles, style, onPressFunc}: ButtonProps) {
	const FilterBtnComponents = titles.map((title) => (
		<TouchableOpacity
			key={title}
			onPress={() => { title === "Tint" ? onPressFunc(title, 0.5) : onPressFunc(title); }}
			style={style}
		>
			<Text>{title}</Text>
		</TouchableOpacity>
	));

	return (
		<>
			{FilterBtnComponents}
		</>
	);
}

export default FilterBtns;
