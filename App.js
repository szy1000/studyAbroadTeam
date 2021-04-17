/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {StyleSheet, useColorScheme, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Header, SearchBar} from 'react-native-elements';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider style={backgroundStyle}>
      <Header
        placement="left"
        leftComponent={{icon: 'menu', color: '#fff'}}
        centerComponent={
          <View
            style={{width: '100%', height: 50, backgroundColor: 'blue'}}
            // onChangeText={this.updateSearch}
            value="sss">
            <SearchBar
              style={{
                backgroundColor: 'transparent',
              }}
              placeholder="Type Here..."
              // onChangeText={this.updateSearch}
              value=""
            />
          </View>
        }
        rightComponent={{icon: 'home', color: '#fff'}}
      />

      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
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
