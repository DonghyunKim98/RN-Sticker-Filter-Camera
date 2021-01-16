import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import {sticker} from "../../assets";

interface ButtonProps {
	titles: Array<sticker>,
	btnStyle: object,
	onPressFunc: Function,
}

const styles = StyleSheet.create({
	logo: {
		marginTop: "auto",
		marginBottom: "auto",
		width: 104,
		height: 104,
	},
});

function StickerBtns({titles, btnStyle, onPressFunc}: ButtonProps) {
	const stickerBtnComponents = [];

	titles.map((title) => stickerBtnComponents.push(
		<TouchableOpacity
			key={title.title}
			onPress={() => { onPressFunc(title.image); }}
			style={btnStyle}
		>
			<Image source={title.image} style={styles.logo}/>
		</TouchableOpacity>,
	));
	return (
		<>
			{stickerBtnComponents}
		</>
	);
}

export default React.memo(StickerBtns);
