import React from 'react';
import {
	Image,
	View,
	StyleSheet,
	Text,
	ImageBackground,
} from 'react-native';
import Draggable from 'react-native-draggable';

const sampleSticker = require('../../assets/images/smile.png');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonStyle: {
		width: '100%',
		padding: 20,
	},
	sampleImageStyle: {
		width: 30,
		height: 30,
	},
	imageContainer: {
		flex: 1,
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
});

const StickerCamera = ({route}) => {
	const {uri} = route.params.res;

	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				{uri !== '' ? (
					<ImageBackground
						style={styles.imageStyle}
						source={{
							uri: `${uri}`,
						}}>
						<Draggable x={150} y={300}>
							<Image style={styles.sampleImageStyle} source={sampleSticker} />
						</Draggable>
					</ImageBackground>
				) : (
					<Text>이미지 없음</Text>
				)}
			</View>
		</View>
	);
};

export default StickerCamera;
