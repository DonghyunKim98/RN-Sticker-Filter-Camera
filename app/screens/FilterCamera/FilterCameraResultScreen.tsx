import React, {useState} from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Cool, Grayscale, Polaroid, Sepia, Tint, Warm} from 'react-native-color-matrix-image-filters';
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

const TintedFilterImage = (imgSrc) => (
	<Tint amount={0.5}>
		<Image
			style={styles.img}
			source={{
				uri: `${imgSrc}`,
			}}
		/>
	</Tint>
);

const WarmFilterImage = (imgSrc) => (
	<Warm>
		<Image
			style={styles.img}
			source={{
				uri: `${imgSrc}`,
			}}
		/>
	</Warm>
);

const CoolFilterImgae = (imgSrc) => (
	<Cool>
		<Image
			style={styles.img}
			source={{
				uri: `${imgSrc}`,
			}}
		/>
	</Cool>
);

const PolaroidFilterImage = (imgSrc) =>(
	<Polaroid>
		<Image
			style={styles.img}
			source={{
				uri: `${imgSrc}`,
			}}
		/>
	</Polaroid>
);

const SepiaFilterImage = (imgSrc) =>(
	<Sepia>
		<Image
			style={styles.img}
			source={{
				uri: `${imgSrc}`,
			}}
		/>
	</Sepia>
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
	const FilterBtnClickListener = (title: string) : void => {
		let newPhoto;

		switch (title) {
			case "흑백":
				newPhoto = GrayscaledImage(photoUri);
				break;
			case "Tint":
				newPhoto = TintedFilterImage(photoUri);
				break;
			case "Warm":
				newPhoto = WarmFilterImage(photoUri);
				break;
			case "Cool":
				newPhoto = CoolFilterImgae(photoUri);
				break;
			case "Polaroid":
				newPhoto = PolaroidFilterImage(photoUri);
				break;
			case "Sepia":
				newPhoto = SepiaFilterImage(photoUri);
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
