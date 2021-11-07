/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable,
  Alert,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() != 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() != 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            height:700,
            justifyContent: "center",
          }}>
          <Text id="Teste" style={styles.text}>A</Text>
          <View style={styles.views}>
          <Pressable title="7" style={styles.numbers}><Text>7</Text></Pressable>
          <Pressable title="8" style={styles.numbers}><Text>8</Text></Pressable>
          <Pressable title="9" style={styles.numbers}><Text>9</Text></Pressable>
          </View>
          <View style={styles.views}>
          <Pressable title="4" style={styles.numbers}><Text>4</Text></Pressable>
          <Pressable title="5" style={styles.numbers}><Text>5</Text></Pressable>
          <Pressable title="6" style={styles.numbers}><Text>6</Text></Pressable>
          </View>
          <View style={styles.views}>
          <Pressable title="1" style={styles.numbers}><Text>1</Text></Pressable>
          <Pressable title="2" style={styles.numbers}><Text>2</Text></Pressable>
          <Pressable title="3" style={styles.numbers}><Text>3</Text></Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
  views:{
    flexDirection: "row",
    justifyContent: "center",
  },
  numbers: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 22,
    backgroundColor:'#f2f2f2',
    borderRadius: 4,
    borderWidth: 2,
    elevation: 3,
  },
  text: {
    color: 'white',
    alignSelf:"center",
  },
});

export default App;
