import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, useColorScheme, Text } from 'react-native';

const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>Hello World</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
