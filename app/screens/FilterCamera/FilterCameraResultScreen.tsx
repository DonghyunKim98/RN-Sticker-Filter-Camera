import React, {useState} from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Grayscale} from 'react-native-color-matrix-image-filters';
import FilterBtns from './FilterBtns';
import {titles} from '../../static/FilterCamera/FilterBtnValue';

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
		backgroundColor: "#DDDDDD",
		width: 80,
		height: '70%',
		padding: 10,
	},
});

const GrayscaledImage = (imgSrc) => (
	<Grayscale>
		<Image
			style={styles.img}
			source={{
				uri: `${imgSrc}`,
			}}
		/>
	</Grayscale>
);

function FilterCameraResultScreen({route}) {
	const {photoUri = ''}: { photoUri: string } = route.params;
	const [img, setImg] = useState(
		<Image
			style={styles.img}
			source={{
				uri: `${photoUri}`,
			}}
		/>,
	);
	const FilterBtnClickListener = () : void => {
		const newPhoto = GrayscaledImage(photoUri);

		setImg(newPhoto);
	};

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				{img}
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
