import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import FilterBtns from './FilterBtns';

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
		zIndex: 1,
	},
	filter: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		zIndex: 2,
		backgroundColor: '#000000',
		opacity: 0.7,
	},
	footer: {
		flex: 1,
	},
	filterBtn: {
		width: 80,
		height: '70%',
		margin: 10,
	},
});

const titles = ["흑백", "필터 버튼 2번", "필터 버튼 3번", "필터 버튼 4번", "필터 버튼 5번", "필터 버튼 6번", "필터 버튼 7번"];

function FilterCameraResultScreen({route}) {
	const {photoUri = ''}: { photoUri: string } = route.params;
	const FilterBtnClickListener = () : void => {
		console.log("필터 버튼!");
	};

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Image
					style={styles.img}
					source={{
						uri: `${photoUri}`,
					}}
				/>
				<View style={styles.filter}/>
			</View>
			<ScrollView
				style={styles.footer}
				horizontal={true}
			>
				<FilterBtns
					titles={titles}
					style={styles.filterBtn}
					onPressFunc={FilterBtnClickListener}
				/>
			</ScrollView>
		</View>
	);
}

export default FilterCameraResultScreen;
