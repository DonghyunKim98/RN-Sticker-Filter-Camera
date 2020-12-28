import React, {useState} from 'react';
import {
	Image,
	View,
	Button,
	StyleSheet,
	Text,
	ImageBackground,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Draggable from 'react-native-draggable';

import {androidPermission} from '../../utils/cameraPermission';
import {stickerCameraOptions} from '../../static/imagePickerOption';

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
		ImagePicker.launchCamera(stickerCameraOptions, (response) => {
			console.log(response);
			if (response.error != null) {
				if (response.error.match('Permissions')) {
					androidPermission('CAMERA');
				}
			} else {
				setPhotoUri(response.uri);
			}
		});
	};

	const onOpenGalleryClick = (): void => {
		ImagePicker.launchImageLibrary(stickerCameraOptions, (response) => {
			// move this to another file later
			androidPermission('READ_EXTERNAL_STORAGE');
			console.log(response);

			if (response.error != null) {
				console.log(`error = ${response.error}`);
			} else {
				setPhotoUri(response.uri);
			}
		});
	};

	return (
		<View style={styles.container}>
			{/* outermost container */}

			<View style={styles.buttonStyle}>
				<Button onPress={onOpenGalleryClick} title="gallery" />
				<Button onPress={onOpenCameraClick} title="camera" />
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
