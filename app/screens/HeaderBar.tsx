import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// React-Native 가 제공하는 HeaderBar에서는
// 뒤로 가기 버튼을 (HeaderLeft) 를 삭제할 수 없어서
// 직접 커스터마이징 함

const styles = StyleSheet.create({
	content: {
		width: '100%',
		height: 50,
		backgroundColor: '#4c4c4c',
	},
	title: {
		fontFamily: "NanumPenScript-Regular",
		fontStyle: "normal",
		fontSize: 30,
		letterSpacing: 0,
		color: "#ffffff",
		textAlign: 'center',
	}
});

function HeaderBar({title}: {title:string}) {
	return (
		<View style={styles.content}>
			<Text style={styles.title}>
				{title}
			</Text>
		</View>
	);
}

export default HeaderBar;
