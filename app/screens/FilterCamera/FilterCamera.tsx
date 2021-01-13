import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FilterCameraSelctionScreen from './FilterCameraSelectionScreen';
import FilterCameraResultScreen from './FilterCameraResultScreen';

function FilterCamera() {
	const Stack = createStackNavigator();

	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Selection"
				component={FilterCameraSelctionScreen}
				options={{title: '사진 선택하기'}}
			/>
			<Stack.Screen
				name="Result"
				component={FilterCameraResultScreen}
				options={{
					headerTitle: 'Choose your filter',
					headerStyle: {
						backgroundColor: "#4c4c4c",
						height: 59,
					},
					headerTintColor: '#fff',
					headerTitleStyle: {
						fontFamily: "NanumPenScript-Regular",
						fontSize: 30,
						fontStyle: "normal",
						lineHeight: 29,
						letterSpacing: 0,
						color: "#ffffff",
					},
				}}
			/>
		</Stack.Navigator>
	);
}

export default FilterCamera;
