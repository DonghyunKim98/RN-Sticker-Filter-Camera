import ImagePicker, {ImagePickerOptions} from 'react-native-image-picker';
import {androidPermission} from './cameraPermission';

export const LaunchCamera = (option: ImagePickerOptions): Promise<string | any> => (
	new Promise((resolve, reject) => {
		ImagePicker.launchCamera(option, (res) => {
			if (!res.error && !res.didCancel) {
				const ret = {uri: res.uri, path: res.path};

				resolve(ret);
			} else if (res.didCancel) {
				reject('Canceled');
			} else if (res.error.match('Permissions')) {
				androidPermission('CAMERA');
				reject('Permission denied');
			} else reject(res.error);
		});
	})
);

export const LaunchGallery = (option: ImagePickerOptions): Promise<string | any> => (
	new Promise((resolve, reject) => {
		ImagePicker.launchImageLibrary(option, (res) => {
			if (!res.error && !res.didCancel) {
				const ret = {uri: res.uri, path: res.path};

				resolve(ret);
			} else if (res.didCancel) {
				reject('Canceled');
			} else if (res.error.match('Permissions')) {
				androidPermission('CAMERA');
				reject('Permission denied');
			} else reject(res.error);
		});
	})
);
