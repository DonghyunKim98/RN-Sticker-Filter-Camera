import React, {useCallback, useState} from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import Slider from '@react-native-community/slider';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {GrayscaledImage, TintedFilterImage, WarmFilterImage, CoolFilterImgae, PolaroidFilterImage, SepiaFilterImage} from '../../static/FilterCamera/FilterValue';
import FilterBtns from './FilterBtns';
import {filterTitles} from '../../static/FilterCamera/FilterBtnValue';
import sliderProp from './../../static/FilterCamera/SliderValue';

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
		top: '55%',
		width: '100%',
		height: '10%',
	},
	footer: {
		flex: 1,
		marginTop: 20,
		marginBottom: 20,
	},
	filterBtn: {
		width: 104,
		height: '100%',
		marginRight: 10,
		backgroundColor: "#ffffff",
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: "#707070",
	},
	filterBtnText: {
		fontFamily: "NanumPenScript-Regular",
		fontSize: 25,
		fontStyle: "normal",
		color: "#707070",
		textAlign: "center",
		marginTop: 20,
	},
	submitBtn: {
		width: '100%',
		height: 59,
		backgroundColor: "#e8c0c0",
	},
	submitBtnText: {
		fontFamily: "NanumPenScript-Regular",
		fontStyle: "normal",
		width: '100%',
		height: 38,
		fontSize: 40,
		letterSpacing: 0,
		textAlign: 'center',
		color: "#707070",
	},
});

function FilterCameraResultScreen({route}) {
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
	const submitBtnClickListener = () => {
		console.log(imgValue);
	};

	const FilterBtnClickListener = useCallback((title: string, amount?: number): void => {
		const newImgValue = {...imgValue};

		newImgValue.filter = `${title}`;
		switch (title) {
			case filterTitles.grayScale:
				newImgValue.img = GrayscaledImage(imgUri, styles.img);
				break;
			case filterTitles.tint:
				newImgValue.img = TintedFilterImage(imgUri, styles.img, amount);
				newImgValue.amount = amount;
				break;
			case filterTitles.warm:
				newImgValue.img = WarmFilterImage(imgUri, styles.img);
				break;
			case filterTitles.cool:
				newImgValue.img = CoolFilterImgae(imgUri, styles.img);
				break;
			case filterTitles.polaroid:
				newImgValue.img = PolaroidFilterImage(imgUri, styles.img);
				break;
			case filterTitles.sepia:
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
	}, [imgUri, imgValue]);

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				{imgValue.img}
			</View>
			{
				imgValue.filter === "Tint" &&
				<Slider
					style={styles.sliderBar}
					thumbTintColor={sliderProp.thumbTintColor}
					minimumTrackTintColor={sliderProp.minimumTrackTintColor}
					maximumTrackTintColor={sliderProp.maximumTrackTintColor}
					minimumValue={sliderProp.minimumValue}
					maximumValue={sliderProp.maximumValue}
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
					titles={filterTitles}
					btnStyle={styles.filterBtn}
					textStyle={styles.filterBtnText}
					onPressFunc={FilterBtnClickListener}
				/>
			</ScrollView>
			<TouchableOpacity
				onPress={() => submitBtnClickListener()}
				style={styles.submitBtn}
			>
				<Text style={styles.submitBtnText}>Apply filter!</Text>
			</TouchableOpacity>
		</View>
	);
}

export default FilterCameraResultScreen;
