import * as React from 'react';
import {Text, View, Button, StyleSheet, PermissionsAndroid} from 'react-native';
import {requestCameraPermission} from '../../utils/camerPermission';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const styles = StyleSheet.create({
	container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    margin: 40,
  },
  mainButtonStyle: {},
  space: {
    margin: 10,
  },
});

const Home = ({navigation}) => {
  const navigateToFilterScreen = () => {
    navigation.navigate('FilterCamera');
  };

  const navigateToStickerScreen = () => {
    navigation.navigate('StickerCamera');
  };

  return (
    <View style={styles.container}>
      {/* title */}
      <Text style={styles.title}>돌하르방 카메라</Text>

      {/* button 1 : filter camera  */}
      <Button
        style={styles.mainButtonStyle}
        onPress={() => {
          navigateToFilterScreen();
        }}
        title={'필터 카메라'}
      />
      {/* 버튼과 버튼 사이를 띄워두고 싶은데 어떻게 해야하지 ...? */}
      <View style={styles.space} />
      {/* button 2 : sticker camera */}
      <Button
        onPress={() => navigateToStickerScreen()}
        title={'스티커 카메라'}
      />
      {/* 임시 버튼 => Permission을 구하는 버튼입니다. */}
      <Button
        title={'Camera Permission'}
        onPress={() => requestCameraPermission()}
			/>
    </View>
  );
};



export default Home;
