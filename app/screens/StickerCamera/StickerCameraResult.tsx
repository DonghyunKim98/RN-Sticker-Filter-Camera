import React, { useState } from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import Draggable from 'react-native-draggable';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import HeaderBar from '../HeaderBar';
import StickerBtns from './StickerBtns';
import {stickerImages} from "../../assets";

const sampleSticker = require('../../assets/images/smile.png');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		height: '100%',
	},
	sampleImageStyle: {
		width: 80,
		height: 80,
	},
	imageContainer: {
		flex: 4,
		backgroundColor: 'yellow',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100%',
	},
	imageStyle: {
		height: '100%',
		width: '100%',
	},
	stickerContainerStyle: {
		zIndex: 1,
		backgroundColor: 'blue',
	},
	content: {
		flex: 4,
	},
	footer: {
		flex: 1,
		marginTop: 20,
		marginBottom: 20,
	},
	stickerBtn: {
		width: 104,
		height: '100%',
		marginRight: 10,
		backgroundColor: "#ffffff",
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: "#707070",
	},
	stickerBtnText: {
		fontFamily: "NanumPenScript-Regular",
		fontSize: 25,
		fontStyle: "normal",
		color: "#707070",
		textAlign: "center",
		marginTop: 20,
	},
	submitBtn: {
		width: '100%',
		height: 59,
		backgroundColor: "#e8c0c0",
	},
	submitBtnText: {
		fontFamily: "NanumPenScript-Regular",
		fontStyle: "normal",
		width: '100%',
		height: 38,
		fontSize: 40,
		letterSpacing: 0,
		textAlign: 'center',
		color: "#707070",
	},
});

const StickerCamera = ({route}) => {
	const {uri} = route.params.res;
	const [stickerUri,setStickerUri] = useState(sampleSticker);

	function StickerBtnClickListener(newUri) {
		setStickerUri(newUri);
	}

	return (
		<View style={styles.container}>
			<HeaderBar
				title={"Choose your sticker!"}
			/>
			<View style={styles.imageContainer}>
				{uri !== '' ? (
					<ImageBackground
						style={styles.imageStyle}
						source={{
							uri: `${uri}`,
						}}>
						<Draggable x={150} y={300}>
							<Image style={styles.sampleImageStyle} source={stickerUri}/>
						</Draggable>
					</ImageBackground>
				) : (
					<Text>이미지 없음</Text>
				)}
			</View>
			<ScrollView
				style={styles.footer}
				horizontal={true}
			>
				<StickerBtns
					titles={stickerImages}
					btnStyle={styles.stickerBtn}
					onPressFunc={StickerBtnClickListener}
				/>
			</ScrollView>
			<TouchableOpacity
				onPress={() => console.log("submit!")}
				style={styles.submitBtn}
			>
				<Text style={styles.submitBtnText}>Apply Sticker!</Text>
			</TouchableOpacity>
		</View>
	);
};

export default StickerCamera;
