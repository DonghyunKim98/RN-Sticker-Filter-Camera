import React, {useState} from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {GrayscaledImage, TintedFilterImage, WarmFilterImage, CoolFilterImgae, PolaroidFilterImage, SepiaFilterImage} from '../../static/FilterCamera/FilterValue';
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
	const FilterBtnClickListener = (title: string) : void => {
		let newPhoto;

		switch (title) {
			case "흑백":
				newPhoto = GrayscaledImage(photoUri, styles.img);
				break;
			case "Tint":
				newPhoto = TintedFilterImage(photoUri, styles.img);
				break;
			case "Warm":
				newPhoto = WarmFilterImage(photoUri, styles.img);
				break;
			case "Cool":
				newPhoto = CoolFilterImgae(photoUri, styles.img);
				break;
			case "Polaroid":
				newPhoto = PolaroidFilterImage(photoUri, styles.img);
				break;
			case "Sepia":
				newPhoto = SepiaFilterImage(photoUri, styles.img);
				break;
			default:
				newPhoto = (
					<View style={styles.content}>
						{img}
					</View>
				);
				break;
		}
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
