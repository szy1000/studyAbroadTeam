/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {StyleSheet, useColorScheme, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Header, Text, Icon, SearchBar, Badge} from 'react-native-elements';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const [value, setValue] = useState('');
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider style={backgroundStyle}>
      <Header
        placement="left"
        // backgroundColor="transparent"
        leftComponent={
          <View
            style={{flexDirection: 'row', alignItems: 'center', height: 30}}>
            <Icon name="location" type="evilicon" color="#fff" />
            <Text style={{color: '#fff'}}>南京</Text>
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
            <Icon name="message1" type="antdesign" color="#fff" />
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


    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
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
