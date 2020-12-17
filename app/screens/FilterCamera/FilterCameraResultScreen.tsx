import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import FilterBtn from './FilterBtn';

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
	},
	filterBtn: {
		width: 'same-as-height',
		height: '50%',
		margin: 10,
	},
});

function FilterCameraResultScreen({route}) {
	const {photoUri = ''}: { photoUri: string } = route.params;
	const FilterBtnClickListener = () : void => {
		console.log("필터 버튼!");
	};

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
			<ScrollView
				style={styles.footer}
				horizontal={true}
			>
				<FilterBtn
					title={'필터 버튼 1번'}
					style={styles.filterBtn}
					onPressFunc={FilterBtnClickListener}
				/>
				<FilterBtn
					title={'필터 버튼 2번'}
					style={styles.filterBtn}
					onPressFunc={FilterBtnClickListener}
				/>
				<FilterBtn
					title={'필터 버튼 3번'}
					style={styles.filterBtn}
					onPressFunc={FilterBtnClickListener}
				/>
			</ScrollView>
		</View>
	);
}

export default FilterCameraResultScreen;
