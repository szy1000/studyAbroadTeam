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
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
      <Text>s</Text>
      {/*<Link />*/}
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
