import React, {useState} from 'react';
import {Image, View, Button, StyleSheet, Text} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {
	requestCameraPermission,
	requestReadStoragePermission,
} from '../../utils/cameraPermission';
import {stickerCameraOptions} from '../../static/imagePickerOption';

// sample code from https://reactnative.dev/docs/permissionsandroid
const styles = StyleSheet.create({
	buttonStyle: {
		padding: 10,
		marginBottom: 5,
	},
	imageStyle: {
		width: 100,
		height: 200,
	},
});

const StickerCamera = () => {
	const [photoUri, setPhotoUri] = useState<string>('');

	const onOpenCameraClick = (): void => {
		ImagePicker.launchCamera(stickerCameraOptions, (response) => {
			console.log(response);
			if (response.error != null) {
				if (response.error.match('Permissions')) {
					requestCameraPermission();
				}
			} else {
				setPhotoUri(response.uri);
			}
		});
	};

	const onOpenGalleryClick = (): void => {
		ImagePicker.launchImageLibrary(stickerCameraOptions, (response) => {
			// move this to another file later
			requestReadStoragePermission();
			console.log(response);

			if (response.error != null) {
				console.log(`error = ${response.error}`);
			} else {
				setPhotoUri(response.uri);
			}
		});
	};

	return (
		<View>
			<View style={styles.buttonStyle}>
				<Button onPress={onOpenGalleryClick} title="gallery" />
			</View>
			<View style={styles.buttonStyle}>
				<Button onPress={onOpenCameraClick} title="camera" />
			</View>
			{photoUri !== '' ? (
				<Image
					style={styles.imageStyle}
					source={{
						uri: `${photoUri}`,
					}}
				/>
			) : (
				<Text>이미지 없음</Text>
			)}
		</View>
	);
};

export default StickerCamera;
