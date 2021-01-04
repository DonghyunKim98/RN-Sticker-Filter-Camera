import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface ButtonProps {
    titles: object,
    style: object,
    onPressFunc: Function,
}


function FilterBtns({titles, style, onPressFunc}: ButtonProps) {
	const FilterBtnComponents = [];

	for (const title in titles) {
		FilterBtnComponents.push(
			<TouchableOpacity
				key={title}
				onPress={() => { titles[title] === "Tint" ? onPressFunc(titles[title], 0.5) : onPressFunc(titles[title]); }}
				style={style}
			>
				<Text>{titles[title]}</Text>
			</TouchableOpacity>,
		);
	}

	return (
		<>
			{FilterBtnComponents}
		</>
	);
}

export default FilterBtns;
