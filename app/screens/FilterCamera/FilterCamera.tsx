import React, {useState} from 'react';
import {Image, Text, View, Button, StyleSheet} from 'react-native';
import {filterCameraOptions} from '../../static/imagePickerOption';
import {LaunchCamera, LaunchGallery} from './../../utils/imagePicker';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	content: {
		flex: 4,
	},
	footer: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	img: {
		width: 100,
		height: 200,
	},
	btn: {},
});

function FilterCamera() {
	const [photoUri, setPhotoUri] = useState<string>('');
	const CameraBtnClickListener = (): void => {
		LaunchCamera(filterCameraOptions)
			.then((newUri) => {
				setPhotoUri(newUri);
			})
			.catch((err) => {
				Error(err);
			});
	};

	const GalleryBtnClickListener = (): void => {
		LaunchGallery(filterCameraOptions)
			.then((newUri) => {
				setPhotoUri(newUri);
			})
			.catch((err) => {
				Error(err);
			});
	};

	const SubmitBtnClickListener = () => {
		console.log('제출!');
	};

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				{photoUri !== '' ? (
					<Image
						style={styles.img}
						source={{
							uri: `${photoUri}`,
						}}
					/>
				) : (
					<Text>사진이 아직 없어요!</Text>
				)}
			</View>
			<View style={styles.footer}>
				<Button
					title="카메라"
					style={styles.btn}
					onPress={() => {
						CameraBtnClickListener();
					}}
				/>
				<Button
					title="갤러리"
					style={styles.btn}
					onPress={() => {
						GalleryBtnClickListener();
					}}
				/>
				<Button
					title="제출"
					style={styles.btn}
					onPress={() => {
						SubmitBtnClickListener();
					}}
				/>
			</View>
		</View>
	);
}

export default FilterCamera;
