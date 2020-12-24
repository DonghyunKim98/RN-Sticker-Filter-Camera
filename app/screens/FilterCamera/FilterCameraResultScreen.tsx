import React, {useState} from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Grayscale} from 'react-native-color-matrix-image-filters';
import FilterBtns from './FilterBtns';
import {titles} from '../../static/FilterCamera/FilterBtnValue';
import {filterStyleValue} from '../../static/FilterCamera/FilterValue';

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
	},
	footer: {
		flex: 1,
	},
	filterBtn: {
		backgroundColor: "#DDDDDD",
		width: 80,
		height: '70%',
		padding: 10,
	},
});

function FilterCameraResultScreen({route}) {
	const [filterValue, setFilterValue] = useState(filterStyleValue.default);
	const {photoUri = ''}: { photoUri: string } = route.params;
	const FilterBtnClickListener = () : void => {
		setFilterValue(filterStyleValue.BlackAndWhite);
	};

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Grayscale>
					<Image
						style={styles.img}
						source={{
							uri: `${photoUri}`,
						}}
					/>
				</Grayscale>
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
