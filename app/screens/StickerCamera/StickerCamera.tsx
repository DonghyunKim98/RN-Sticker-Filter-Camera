import React, {useState} from 'react';
import {
	Image,
	View,
	Button,
	StyleSheet,
	PermissionsAndroid,
	Text,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

// sample code from https://reactnative.dev/docs/permissionsandroid
const requestCameraPermission = async () => {
	try {
		const granted = await PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.CAMERA,
			{
				title: 'Cool Photo App Camera Permission',
				message:
					'Cool Photo App needs access to your camera ' +
					'so you can take awesome pictures.',
				buttonNeutral: 'Ask Me Later',
				buttonNegative: 'Cancel',
				buttonPositive: 'OK',
			},
		);

		if (granted === PermissionsAndroid.RESULTS.GRANTED) {
			console.log('You can use the camera');
		} else {
			console.log('Camera permission denied');
		}
	} catch (err) {
		console.warn(err);
	}
};

const requestReadStoragePermission = async () => {
	try {
		const granted = await PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
			{
				title: 'Permission to read storage files',
				message: 'Cool Photo App needs access to your storage ',
				buttonNeutral: 'Ask Me Later',
				buttonNegative: 'Cancel',
				buttonPositive: 'OK',
			},
		);

		if (granted === PermissionsAndroid.RESULTS.GRANTED) {
			console.log('You can read the external storage');
		} else {
			console.log('read external storage permission denied');
		}
	} catch (err) {
		console.warn(err);
	}
};

const options = {
	storageOptions: {
		skipBackup: true,
		path: './images',
	},
	permissionDenied: {
		title: 'Permission Denied',
		text: 'Camera permission must be granted to use this feature.',
		reTryTitle: 'Retry',
		okTitle: 'OK',
	},
};

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
		ImagePicker.launchCamera(options, (response) => {
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
		ImagePicker.launchImageLibrary(options, (response) => {
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
