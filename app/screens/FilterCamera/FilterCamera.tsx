import React from 'react';
import {Button} from 'react-native';
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
					headerRight: () => (
						<Button
							onPress={() => console.log('저장 되었습니다!')}
							title="저장"
							color='blue'
						/>
					),
				}}
			/>
		</Stack.Navigator>
	);
}

export default FilterCamera;
