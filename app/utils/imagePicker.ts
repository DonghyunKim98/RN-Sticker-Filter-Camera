import ImagePicker from 'react-native-image-picker';
import {androidPermission} from './cameraPermission';

export const LaunchCamera = (option): Promise<string | any> => {
	return new Promise((resolve, reject) => {
		ImagePicker.launchCamera(option, (res) => {
			if (res.error != null) {
				if (res.error.match('Permissions')) {
					androidPermission('CAMERA');
					reject('Permission denied');
				}
			} else {
				resolve(res.uri);
			}
		});
	});
};

export const LaunchGallery = (option): Promise<string | any> => {
	return new Promise((resolve, reject) => {
		ImagePicker.launchImageLibrary(option, (res) => {
			if (res.error != null) {
				if (res.error.match('Permissions')) {
					androidPermission('CAMERA');
					reject('Permission denied');
				}
			} else {
				resolve(res.uri);
			}
		});
	});
};
