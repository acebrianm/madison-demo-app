import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, StatusBar, useColorScheme, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getPictures } from '../api/pictures';
import { setPictures } from '../state/reducers';
import { RootState } from '../state/store';

const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const pictures = useSelector((state: RootState) => state.pictures.pictures);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPictures = async () => {
      if (pictures?.length === 0) {
        const res = await getPictures();
        dispatch(setPictures(res.data));
      }
    };

    fetchPictures();
  }, [pictures, dispatch]);

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
