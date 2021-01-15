import React, {useCallback, useState, useRef} from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import Slider from '@react-native-community/slider';
import CameraRoll from "@react-native-community/cameraroll";
import {captureRef} from 'react-native-view-shot';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {GrayscaledImage, TintedFilterImage, WarmFilterImage, CoolFilterImgae, PolaroidFilterImage, SepiaFilterImage} from '../../static/FilterCamera/FilterValue';
import FilterBtns from './FilterBtns';
import {filterTitles} from '../../static/FilterCamera/FilterBtnValue';
import sliderProp from './../../static/FilterCamera/SliderValue';
import HeaderBar from '../HeaderBar';


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
	const {uri = ''}: { uri: string, path: string } = route.params.res;
	const imgRef = useRef();
	const [imgValue, setImgValue] = useState({
		img: <Image
			style={styles.img}
			source={{
				uri: `${uri}`,
			}}
		/>,
		filter: 'default',
		amount: 0.5,
	});
	const submitBtnClickListener = async () => {
		const curUri = await captureRef(imgRef, {
			format: 'jpg',
		});

		CameraRoll.saveToCameraRoll(`${curUri}`);
	};

	const FilterBtnClickListener = useCallback((title: string, amount?: number): void => {
		const newImgValue = {...imgValue};

		newImgValue.filter = `${title}`;
		switch (title) {
			case filterTitles.grayScale:
				newImgValue.img = GrayscaledImage(uri, styles.img);
				break;
			case filterTitles.tint:
				newImgValue.img = TintedFilterImage(uri, styles.img, amount);
				newImgValue.amount = amount;
				break;
			case filterTitles.warm:
				newImgValue.img = WarmFilterImage(uri, styles.img);
				break;
			case filterTitles.cool:
				newImgValue.img = CoolFilterImgae(uri, styles.img);
				break;
			case filterTitles.polaroid:
				newImgValue.img = PolaroidFilterImage(uri, styles.img);
				break;
			case filterTitles.sepia:
				newImgValue.img = SepiaFilterImage(uri, styles.img);
				break;
			default:
				newImgValue.filter = 'default';
				break;
		}
		setImgValue({...newImgValue});
	}, [uri, imgValue]);

	return (
		<View style={styles.container}>
			<HeaderBar
				title={"Choose your filter"}
			/>
			<View style={styles.content} ref={imgRef} collapsable={false}>
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
