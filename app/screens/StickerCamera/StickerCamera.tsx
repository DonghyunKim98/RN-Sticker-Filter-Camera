import React, {useState} from 'react';
import {
	Image,
	View,
	StyleSheet,
	Text,
	ImageBackground,
} from 'react-native';
import Draggable from 'react-native-draggable';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {stickerCameraOptions} from '../../static/imagePickerOption';
import {LaunchCamera, LaunchGallery} from './../../utils/imagePicker';

const sampleSticker = require('../../assets/images/smile.png');

// sample code from https://reactnative.dev/docs/permissionsandroid
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

const StickerCamera = () => {
	const [photoUri, setPhotoUri] = useState<string>('');

	const onOpenCameraClick = (): void => {
		LaunchCamera(stickerCameraOptions)
			.then((newUri) => {
				setPhotoUri(newUri);
			});
	};

	const onOpenGalleryClick = (): void => {
		LaunchGallery(stickerCameraOptions)
			.then((newUri) => {
				setPhotoUri(newUri);
			});
	};

	return (
		<View style={styles.container}>
			{/* outermost container */}

			<View>
				<TouchableOpacity
					style={styles.buttonStyle}
					onPress={onOpenGalleryClick}
				>
					<Text>gallery</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.buttonStyle}
					onPress={onOpenCameraClick}
				 	title="camera"
				>
					<Text>camera</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.imageContainer}>
				{photoUri !== '' ? (
					<ImageBackground
						style={styles.imageStyle}
						source={{
							uri: `${photoUri}`,
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
