import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface ButtonProps {
    titles: object,
	btnStyle: object,
	textStyle: object,
    onPressFunc: Function,
}


function FilterBtns({titles, btnStyle, textStyle, onPressFunc}: ButtonProps) {
	const FilterBtnComponents = [];

	console.log("렌더링중!");
	for (const title in titles) {
		FilterBtnComponents.push(
			<TouchableOpacity
				key={title}
				onPress={() => { titles[title] === "Tint" ? onPressFunc(titles[title], 0.5) : onPressFunc(titles[title]); }}
				style={btnStyle}
			>
				<Text style={textStyle}>{titles[title]}</Text>
			</TouchableOpacity>,
		);
	}

	return (
		<>
			{FilterBtnComponents}
		</>
	);
}

export default React.memo(FilterBtns);
