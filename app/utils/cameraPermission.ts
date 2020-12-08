import {PermissionsAndroid} from 'react-native';
import {permissionMessage} from '../static/permissionMessage';

export const requestWriteStoragePermission = async (): Promise<boolean | any> => {
	try {
		const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
		const hasPermission = await PermissionsAndroid.check(permission);

		if (hasPermission) {
			return true;
		} else {
			await PermissionsAndroid.request(
				permission,
				permissionMessage,
			);
			return false;
		}
	} catch (err) {
		throw new Error("Asking storage permission failed.");
	}
};

export const requestCameraPermission = async () => {
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

export const requestReadStoragePermission = async () => {
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
