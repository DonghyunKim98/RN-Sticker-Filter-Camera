import React, {useState} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {filterCameraOptions} from '../../static/imagePickerOption';
import {LaunchCamera, LaunchGallery} from '../../utils/imagePicker';
import FilterCamerBtn from './FilterCamerBtn';

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

function FilterCameraSelctionScreen() {
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
				<FilterCamerBtn
					title="카메라"
					style={styles.btn}
					onPressFunc={CameraBtnClickListener}
				/>
				<FilterCamerBtn
					title="갤러리"
					style={styles.btn}
					onPressFunc={GalleryBtnClickListener}
				/>
				<FilterCamerBtn
					title="제출"
					style={styles.btn}
					onPressFunc={SubmitBtnClickListener}
				/>
			</View>
		</View>
	);
}

export default FilterCameraSelctionScreen;
