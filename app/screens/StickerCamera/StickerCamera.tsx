import React, {useState} from 'react';
import {Image, View, Button, StyleSheet, Text} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Draggable from 'react-native-draggable';

import {androidPermission} from '../../utils/cameraPermission';
import {stickerCameraOptions} from '../../static/imagePickerOption';

const sampleSticker = require('../../assets/images/smile.png');

// sample code from https://reactnative.dev/docs/permissionsandroid
const styles = StyleSheet.create({
	buttonStyle: {
		padding: 10,
		marginBottom: 5,
	},
	imageStyle: {
		width: '100%',
		height: '100%',
	},
	sampleImageStyle: {
		width: 30,
		height: 30,
	},
	stickerContainerStyle: {
		zIndex: 0,
		elevation: 3,
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
			<View style={styles.stickerContainerStyle}>
				{/* <Draggable
					x={75}
					y={100}
					renderSize={56}
					renderColor="black"
					renderText="A"
					isCircle
					shouldReverse
					// eslint-disable-next-line no-alert
					onShortPressRelease={() => alert('touched!!')}
				/> */}
				{/* <Draggable x={200} y={300} renderColor="red" renderText="B" /> */}
				{/* <Draggable /> */}
				<Draggable x={50} y={300}>
					<Image style={styles.sampleImageStyle} source={sampleSticker} />
				</Draggable>
			</View>
		</View>
	);
};

export default StickerCamera;
