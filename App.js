/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {StyleSheet, useColorScheme, Image, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Header, Text, Icon, SearchBar, Badge} from 'react-native-elements';
import Swiper from 'react-native-swiper';
import Link from './src/components/Link/link';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const [value, setValue] = useState('');
  const isDarkMode = useColorScheme() === 'dark';
  const cards = [
    {
      text: 'Card One',
      name: 'One',
      image: require('./src/assets/images/banner1.png'),
    },
    {
      text: 'Card One2',
      name: 'One2',
      image: require('./src/assets/images/banner2.png'),
    },
  ];
  const backgroundStyle = {
    // backgroundColor: 'red',
  };

  return (
    <SafeAreaProvider style={backgroundStyle}>
      <Header
        placement="left"
        // backgroundColor="#e6fffe"
        backgroundColor="transparent"
        leftComponent={
          <View
            style={{flexDirection: 'row', alignItems: 'center', height: 30}}>
            <Icon name="location" type="evilicon" color="#000" />
            <Text style={{color: '#000'}}>南京</Text>
          </View>
        }
        centerComponent={
          <SearchBar
            lightTheme
            round
            placeholder="请输入"
            containerStyle={{
              padding: 0,
              width: '100%',
              borderTopWidth: 0,
              borderBottomWidth: 0,
              backgroundColor: 'transparent',
            }}
            inputContainerStyle={{
              backgroundColor: '#fff',
              height: 30,
            }}
            onChangeText={e => setValue(e)}
            value={value}
          />
        }
        rightComponent={
          <View>
            <Icon name="message1" type="antdesign" color="#000" />
            <Badge
              status="error"
              value={value >= 99 ? '99+' : value}
              containerStyle={{
                position: 'absolute',
                right: -4,
                top: -4,
              }}
            />
          </View>
        }
      />
      <View style={{height: 195}}>
        <Swiper
          dotStyle={{backgroundColor: 'transparent'}}
          activeDotColor="transparent"
          // dot={
          //   <View
          //     style={{
          //       display: 'none',
          //       backgroundColor: 'rgba(0,0,0,.2)',
          //       width: 5,
          //       height: 5,
          //       borderRadius: 4,
          //       marginLeft: 3,
          //       marginRight: 3,
          //       marginTop: 3,
          //       marginBottom: 3,
          //     }}
          //   />
          // }
          height={195}
          style={styles.wrapper}>
          <Image
            style={styles.item}
            source={require('./src/assets/images/banner1.png')}
          />
          <Image
            style={styles.item}
            source={require('./src/assets/images/banner2.png')}
          />
        </Swiper>
      </View>

      <Text>s</Text>
      <Text>s</Text>
      {/*<Link />*/}
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // height: 200,
  },
  item: {
    width: '100%',
    resizeMode: 'contain',
    flex: 1,
  },
});

export default App;
