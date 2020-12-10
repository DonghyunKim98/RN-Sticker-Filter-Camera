import ImagePicker from 'react-native-image-picker';
import {androidPermission} from './cameraPermission';

export const LaunchCamera = (option): string | any => {
	let retUri: string = '';

	ImagePicker.launchCamera(option, (res) => {
		if (res.error != null) {
			if (res.error.match('Permissions')) {
				androidPermission('CAMERA');
			}
		} else {
			retUri = res.uri;
		}
	});
	return retUri;
};

export const LaunchGallery = (option): string | any => {
	let retUri: string = '';

	ImagePicker.launchImageLibrary(option, (res) => {
		if (res.error != null) {
			if (res.error.match('Permissions')) {
				androidPermission('READ_EXTERNAL_STORAGE');
			}
		} else {
			retUri = res.uri;
		}
	});
	return retUri;
};
