import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {faCamera, faMagic, faStickyNote} from '@fortawesome/free-solid-svg-icons';
import SelectionBtn from '../SelectionBtn';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	body: {
		width: '100%',
		height: '100%',
		zIndex: 1,
		backgroundColor: '#4c4c4c',
	},
	header: {
		position: 'absolute',
		width: 300,
		height: 180,
		top: '10%',
		left: '50%',
		transform: [{translateX: -150}],
		borderRadius: 96,
		backgroundColor: '#ffffff',
	},
	title: {
		fontFamily: "NanumPenScript-Regular",
		fontSize: 50,
		fontStyle: "normal",
		color: "#707070",
		textAlign: "center",
	},
	content: {
		position: 'absolute',
		height: 80,
		top: '50%',
		left: '50%',
		transform: [{translateX: -50}],
		justifyContent: 'flex-start',
	},
	btn: {
		width: 81,
		height: 81,
		borderRadius: 50,
		backgroundColor: "#ffffff",
		margin: 10,
		alignItems: 'center',
	},
	btnIcon: {
		marginTop: '30%',
		color: '#707070',
	},
	fotter: {
		position: 'absolute',
		width: 170,
		height: 20,
		left: '30%',
		bottom: '7%',
		fontFamily: 'NanumPenScript-Regular',
		fontSize: 20,
		textAlign: 'center',
		color: '#ffffff',
	}
});

const Home = ({navigation}) => {
	const navigateToFilterScreen = () => {
		navigation.navigate('FilterCamera', {screen: 'FilterCameraSelectionScreen'});
	};

	const navigateToStickerScreen = () => {
		navigation.navigate('StickerCamera');
	};

	return (
		<View style={styles.container}>
			<View style={styles.body}>
				<View style={styles.header}>
					<Text style={styles.title}>{'Capture\n Your\n Moment'}</Text>
				</View>
				<View style={styles.content}>
					<SelectionBtn
						style={styles.btn}
						btnStyle={styles.btnIcon}
						onPressFunc={navigateToFilterScreen}
						icon={faMagic}
						iconColor={'#707070'}
						iconSize={30}
					/>
					<SelectionBtn
						style={styles.btn}
						btnStyle={styles.btnIcon}
						onPressFunc={navigateToStickerScreen}
						icon={faStickyNote}
						iconColor={'#707070'}
						iconSize={30}
					/>
				</View>
				<Text style={styles.fotter}>{'Made by FORIF 🧡'}</Text>
			</View>
		</View>
	);
};

export default Home;
