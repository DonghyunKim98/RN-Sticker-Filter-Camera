import React from 'react';
import {View, StyleSheet} from 'react-native';
import {faCamera, faImages} from '@fortawesome/free-solid-svg-icons';
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
		margin: 10,
	},
});

function FilterCameraSelctionScreen({navigation}) {
	const CameraBtnClickListener = () : void => {
		LaunchCamera(filterCameraOptions)
			.then((imgUri) => {
				navigation.navigate('Result', {
					imgUri,
				});
			})
			.catch((err) => {
				Error(err);
			});
	};

	const GalleryBtnClickListener = () : void => {
		LaunchGallery(filterCameraOptions)
			.then((imgUri) => {
				navigation.navigate('Result', {
					imgUri,
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
					style={styles.btn}
					onPressFunc={CameraBtnClickListener}
					icon={faCamera}
				/>
				<SelectionBtn
					style={styles.btn}
					onPressFunc={GalleryBtnClickListener}
					icon={faImages}
				/>
			</View>
		</View>
	);
}

export default FilterCameraSelctionScreen;
