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
		amount: 0.5,
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
		const newImgValue = imgValue;

		newImgValue.filter = `${title}`;
		setIsTintFilter(false);
		switch (title) {
			case "흑백":
				newImgValue.img = GrayscaledImage(photoUri, styles.img);
				break;
			case "Tint":
				newImgValue.img = TintedFilterImage(photoUri, styles.img, imgValue.amount);
				setIsTintFilter(true);
				break;
			case "Warm":
				newImgValue.img = WarmFilterImage(photoUri, styles.img);
				break;
			case "Cool":
				newImgValue.img = CoolFilterImgae(photoUri, styles.img);
				break;
			case "Polaroid":
				newImgValue.img = PolaroidFilterImage(photoUri, styles.img);
				break;
			case "Sepia":
				newImgValue.img = SepiaFilterImage(photoUri, styles.img);
				break;
			default:
				newImgValue.img = (
					<View style={styles.content}>
						{imgValue.img}
					</View>
				);
				newImgValue.filter = 'default';
				break;
		}
		setImgValue({...newImgValue});
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
					value={imgValue.amount}
					onValueChange={value=>{
						const newImgValue = imgValue;
						newImgValue.img=TintedFilterImage(imgValue.img,styles.img,value);
						newImgValue.amount=value;
						setImgValue({...newImgValue});
					}}
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
