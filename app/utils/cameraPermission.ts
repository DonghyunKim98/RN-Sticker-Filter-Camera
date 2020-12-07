import {PermissionsAndroid} from 'react-native';
import {permissionMessage} from '../static/permissionMessage';

export const requestCameraPermission = async (): Promise<boolean | any> => {
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
		throw new Error("Asking camera permission failed.");
	}
};
