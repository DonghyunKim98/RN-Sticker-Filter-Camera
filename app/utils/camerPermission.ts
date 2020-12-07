import {PermissionsAndroid} from 'react-native';
import {permissionMessage} from '../static/permissionMessage';

export const requestCameraPermission = async () => {
	try {
		const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
		const hasPermission = await PermissionsAndroid.check(permission);

		if (hasPermission) return true;
		await PermissionsAndroid.request(
			permission,
			permissionMessage,
		);
	} catch (err) {
		console.warn(err);
	}
};
