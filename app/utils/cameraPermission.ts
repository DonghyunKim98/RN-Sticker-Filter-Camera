import {PermissionsAndroid} from 'react-native';
import {permissionMessage} from '../static/permissionMessage';

export const androidPermission = async (permissionCode : String) => {
	try {
		let permission;

		if (permissionCode === "CAMERA") {
			permission = PermissionsAndroid.PERMISSIONS.CAMERA;
		} else if (permissionCode === "EXTERNAL_STORAGE") {
			permission = PermissionsAndroid.PERMISSIONS.EXTERNAL_STORAGE;
		} else if (permissionCode === "READ_EXTERNAL_STORAGE") {
			permission = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
		} else {
			throw new Error('해당 permission은 존재하지 않습니다.');
		}
		const hasPermission = await PermissionsAndroid.check(permission);

		if (hasPermission) {
			return;
		} else {
			await PermissionsAndroid.request(
				permission,
				permissionMessage,
			);
			return;
		}
	} catch (err) {
		throw new Error('Asking storage permission failed.');
	}
};
