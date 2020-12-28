import React, {useState} from 'react';
import {StyleSheet, Image, View, Button} from 'react-native';
import Slider from '@react-native-community/slider';
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
	sliderBar: {
		position: 'absolute',
		zIndex: 2,
		top: '70%',
		width: '100%',
		height: '10%',
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

function FilterCameraResultScreen({route, navigation}) {
	const {photoUri = ''}: { photoUri: string } = route.params;
	const [imgValue, setImgValue] = useState({
		img: <Image
			style={styles.img}
			source={{
				uri: `${photoUri}`,
			}}
		/>,
		filter: 'default',
		amount: 0,
	});
	const [isTintFilter, setIsTintFilter] = useState(false);

	React.useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<Button
					title="저장"
					onPress={submitBtnClickListener}
				/>
			),
		});
	}, [navigation]);

	const submitBtnClickListener = () => {
		console.log(imgValue);
	};
	const FilterBtnClickListener = (title: string) : void => {
		const newPhotoValue = imgValue;

		newPhotoValue.filter = `${title}`;
		setIsTintFilter(false);
		switch (title) {
			case "흑백":
				newPhotoValue.img = GrayscaledImage(photoUri, styles.img);
				break;
			case "Tint":
				newPhotoValue.img = TintedFilterImage(photoUri, styles.img);
				newPhotoValue.amount = 0.5;
				setIsTintFilter(true);
				break;
			case "Warm":
				newPhotoValue.img = WarmFilterImage(photoUri, styles.img);
				break;
			case "Cool":
				newPhotoValue.img = CoolFilterImgae(photoUri, styles.img);
				break;
			case "Polaroid":
				newPhotoValue.img = PolaroidFilterImage(photoUri, styles.img);
				break;
			case "Sepia":
				newPhotoValue.img = SepiaFilterImage(photoUri, styles.img);
				break;
			default:
				newPhotoValue.img = (
					<View style={styles.content}>
						{imgValue.img}
					</View>
				);
				newPhotoValue.filter = 'default';
				break;
		}
		setImgValue({...newPhotoValue});
	};

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				{imgValue.img}
			</View>
			{
				isTintFilter &&
				<Slider
					style={styles.sliderBar}
					thumbTintColor= {'white'}
					minimumTrackTintColor={'black'}
					maximumTrackTintColor={'black'}
					minimumValue={0}
					maximumValue={2}
					value={0.75}
				/>
			}
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
