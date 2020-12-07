import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home/Home';
import StickerCamera from './screens/StickerCamera/StickerCamera';
import FilterCamera from './screens/FilterCamera/FilterCamera';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Camerabang 📸'}}
        />
        <Stack.Screen
          name="FilterCamera"
          component={FilterCamera}
          options={{title: 'Filter Camera'}}
        />
        <Stack.Screen
          name="StickerCamera"
          component={StickerCamera}
          options={{title: 'Sticker Camera'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
