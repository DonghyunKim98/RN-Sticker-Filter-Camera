
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

export const filterCameraOptions = {
	storageOptions: {
		skipBackup: true,
		path: './images',
	},
	permissionDenied: {
		title: '카메라 허용이 거부됐습니다.',
		text: '돌하르방은 카메라가 필요해요 ㅠㅠ.',
		reTryTitle: '다시!',
		okTitle: 'OK',
	},
};
