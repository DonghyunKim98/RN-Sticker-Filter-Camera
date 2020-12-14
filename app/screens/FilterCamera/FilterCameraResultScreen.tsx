import React from 'react';
import {StyleSheet, Image, View, Text, Button} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	content: {
		flex: 4,
	},
	img: {
		width: '100%',
		height: '100%',
	},
	footer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	filterBtn: {

	},
});

function FilterCameraResultScreen({route}) {
	const {photoUri = ''}: { photoUri: string } = route.params;

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				{photoUri !== '' ? (
					<Image
						style={styles.img}
						source={{
							uri: `${photoUri}`,
						}}
					/>) : (
					<Text>사진이 없어요!!</Text>
				)}
			</View>
			<View style={styles.footer}>
				<Button
					title={'필터 버튼 1번'}
					style={styles.filterBtn}
				/>
				<Button
					title={'필터 버튼 2번'}
					style={styles.filterBtn}
				/>
				<Button
					title={'필터 버튼 3번'}
					style={styles.filterBtn}
				/>
			</View>
		</View>
	);
}

export default FilterCameraResultScreen;
