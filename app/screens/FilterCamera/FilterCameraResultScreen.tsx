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
	const {imgUri = ''}: { imgUri: string } = route.params;
	const [imgValue, setImgValue] = useState({
		img: <Image
			style={styles.img}
			source={{
				uri: `${imgUri}`,
			}}
		/>,
		filter: 'default',
		amount: 0.5,
	});

	React.useLayoutEffect(() => {
		const submitBtnClickListener = () => {
			console.log(imgValue);
		};

		navigation.setOptions({
			headerRight: () => (
				<Button
					title="저장"
					onPress={submitBtnClickListener}
				/>
			),
		});
	}, [navigation, imgValue]);


	const FilterBtnClickListener = (title: string, amount?: number) : void => {
		const newImgValue = {...imgValue};

		newImgValue.filter = `${title}`;
		switch (title) {
			case "흑백":
				newImgValue.img = GrayscaledImage(imgUri, styles.img);
				break;
			case "Tint":
				newImgValue.img = TintedFilterImage(imgUri, styles.img, amount);
				newImgValue.amount = amount;
				break;
			case "Warm":
				newImgValue.img = WarmFilterImage(imgUri, styles.img);
				break;
			case "Cool":
				newImgValue.img = CoolFilterImgae(imgUri, styles.img);
				break;
			case "Polaroid":
				newImgValue.img = PolaroidFilterImage(imgUri, styles.img);
				break;
			case "Sepia":
				newImgValue.img = SepiaFilterImage(imgUri, styles.img);
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
				imgValue.filter === "Tint" &&
				<Slider
					style={styles.sliderBar}
					thumbTintColor= {'white'}
					minimumTrackTintColor={'black'}
					maximumTrackTintColor={'black'}
					minimumValue={0}
					maximumValue={2}
					value={imgValue.amount}
					onSlidingComplete={(value) => {
						FilterBtnClickListener("Tint", value);
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
