import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StickerCameraSelctionScreen from './StickerCamerSelction';
import StickerCameraResultScreen from './StickerCameraResult';

function StickerCamera() {
	const Stack = createStackNavigator();

	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Selection"
				component={StickerCameraSelctionScreen}
				options={{headerShown: false}}
			/>
			<Stack.Screen
				name="Result"
				component={StickerCameraResultScreen}
				options={{headerShown: false}}
			/>
		</Stack.Navigator>
	);
}

export default StickerCamera;
