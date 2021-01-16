import React from 'react';
import {View, StyleSheet} from 'react-native';
import {faCamera, faImages} from '@fortawesome/free-solid-svg-icons';
import {stickerCameraOptions} from '../../static/imagePickerOption';
import {LaunchCamera, LaunchGallery} from '../../utils/imagePicker';
import SelectionBtn from '../SelectionBtn';
import HeaderBar from '../HeaderBar';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#e8c0c0",
	},
	content: {
		position: 'relative',
		height: 100,
		top: '30%',
		left: '50%',
		transform: [{translateX: -50}],
		justifyContent: 'flex-start',
	},
	btn: {
		width: 81,
		height: 81,
		borderRadius: 50,
		backgroundColor: "#ffffff",
		margin: 10,
		alignItems: 'center',
	},
	btnIcon: {
		marginTop: '20%',
		color: '#707070',
	},
});

function StickerCameraSelction({navigation}) {
	const CameraBtnClickListener = () : void => {
		LaunchCamera(stickerCameraOptions)
			.then((res) => {
				navigation.navigate('Result', {
					res,
				});
			})
			.catch((err) => {
				Error(err);
			});
	};

	const GalleryBtnClickListener = () : void => {
		LaunchGallery(stickerCameraOptions)
			.then((res) => {
				navigation.navigate('Result', {
					res,
				});
			})
			.catch((err) => {
				Error(err);
			});
	};

	return (
		<View style={styles.container}>
			<HeaderBar
				title="Choose your photo"
			/>
			<View style={styles.content}>
				<SelectionBtn
					style={styles.btn}
					btnStyle={styles.btnIcon}
					onPressFunc={CameraBtnClickListener}
					icon={faCamera}
					iconColor={'#707070'}
					iconSize={40}
				/>
				<SelectionBtn
					style={styles.btn}
					btnStyle={styles.btnIcon}
					onPressFunc={GalleryBtnClickListener}
					icon={faImages}
					iconColor={'#707070'}
					iconSize={40}
				/>
			</View>
		</View>
	);
}

export default StickerCameraSelction;
