import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface ButtonProps {
    titles: object,
	btnStyle: object,
	textStyle: object,
    onPressFunc: Function,
}


function StickerBtns({titles, btnStyle, textStyle, onPressFunc}: ButtonProps) {
	const stickerBtnComponents = [];

	for (const title in titles) {
		stickerBtnComponents.push(
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
			{stickerBtnComponents}
		</>
	);
}

export default React.memo(StickerBtns);
