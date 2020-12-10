import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	content: {
		flex: 4,
	},
	footer: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	btn: {},
});


function FilterCamera(): React.ReactNode {
	const GalleryBtnClickListener = () => {
		console.log("갤러리!");
	};

	const CameraBtnClickListener = () => {
		console.log("카메라!");
	};

	const SumbitBtnClickListener = () => {
		console.log("제출!");
	};

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Text>
					{`필터카메라`}
				</Text>
			</View>
			<View style={styles.footer}>
				<Button
					title="카메라"
					style={styles.btn}
					onPress={() => {
						CameraBtnClickListener();
					}}
				/>
				<Button
					title="갤러리"
					style={styles.btn}
					onPress={() => {
						GalleryBtnClickListener();
					}}
				/>
				<Button
					title="제출"
					style={styles.btn}
					onPress={() => {
						SumbitBtnClickListener();
					}}
				/>
			</View>
		</View>
	);
}

export default FilterCamera;