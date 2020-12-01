import { PermissionsAndroid } from 'react-native';
export const requestCameraPermission = async () => {
    try {
      const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
      const hasPermission =  await PermissionsAndroid.check(permission);
      if(hasPermission) return true;
      const granted = await PermissionsAndroid.request(
        permission,
        {
          title: "돌하르방에게 카메라를 허락해주세요!",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
    } catch (err) {
      console.warn(err);
    }
};