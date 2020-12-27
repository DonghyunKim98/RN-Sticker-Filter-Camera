import React from 'react';
import {View, StyleSheet} from 'react-native';
import {filterCameraOptions} from '../../static/imagePickerOption';
import {LaunchCamera, LaunchGallery} from '../../utils/imagePicker';
import SelectionBtn from './SelectionBtn';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	content: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	btn: {
		backgroundColor: "#DDDDDD",
		padding: 10,
	},
});

function FilterCameraSelctionScreen({navigation}) {
	const CameraBtnClickListener = () : void => {
		LaunchCamera(filterCameraOptions)
			.then((photoUri) => {
				navigation.navigate('Result', {
					photoUri,
				});
			})
			.catch((err) => {
				Error(err);
			});
	};

	const GalleryBtnClickListener = () : void => {
		LaunchGallery(filterCameraOptions)
			.then((photoUri) => {
				navigation.navigate('Result', {
					photoUri,
				});
			})
			.catch((err) => {
				Error(err);
			});
	};

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<SelectionBtn
					title="카메라"
					style={styles.btn}
					onPressFunc={CameraBtnClickListener}
				/>
				<SelectionBtn
					title="갤러리"
					style={styles.btn}
					onPressFunc={GalleryBtnClickListener}
				/>
			</View>
		</View>
	);
}

export default FilterCameraSelctionScreen;
