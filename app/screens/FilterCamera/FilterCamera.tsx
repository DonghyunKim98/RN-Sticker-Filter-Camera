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
				options={{headerShown: false}}
			/>
			<Stack.Screen
				name="Result"
				component={FilterCameraResultScreen}
				options={{headerShown: false}}
			/>
		</Stack.Navigator>
	);
}

export default FilterCamera;
