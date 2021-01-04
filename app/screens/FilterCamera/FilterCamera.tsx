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
					headerTitle: '필터 적용하기',
				}}
			/>
		</Stack.Navigator>
	);
}

export default FilterCamera;
