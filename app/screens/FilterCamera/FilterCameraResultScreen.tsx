import React, {useState} from 'react';
import {StyleSheet, Image, View, Button} from 'react-native';
import Slider from '@react-native-community/slider';
import {ScrollView} from 'react-native-gesture-handler';
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
		const createHeaderBtn = () => (
			<Button
				title="저장"
				onPress={submitBtnClickListener}
			/>
		);

		navigation.setOptions({
			headerRight: () => createHeaderBtn(),
		});
	}, [navigation, imgValue]);


	const FilterBtnClickListener = (title: string, amount?: number) : void => {
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
					thumbTintColor= {sliderProp.thumbTintColor}
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
					style={styles.filterBtn}
					onPressFunc={FilterBtnClickListener}
				/>
			</ScrollView>
		</View>
	);
}

export default FilterCameraResultScreen;
