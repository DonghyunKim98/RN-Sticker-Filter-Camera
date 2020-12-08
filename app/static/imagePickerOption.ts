
// 스티커 카메라에 적용하는 옵션
export const stickerCameraOptions = {
	storageOptions: {
		skipBackup: true,
		path: './images',
	},
	permissionDenied: {
		title: 'Permission Denied',
		text: 'Camera permission must be granted to use this feature.',
		reTryTitle: 'Retry',
		okTitle: 'OK',
	},
};
