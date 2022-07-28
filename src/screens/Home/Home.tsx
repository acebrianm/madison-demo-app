import { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback, useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { useDispatch, useSelector } from 'react-redux';

import { StackParamList } from '../..';
import { getPictures } from '../../api/pictures';
import { Picture } from '../../api/pictures/types';
import { setPictures } from '../../state/reducers';
import { RootState } from '../../state/store';
import { homeStyles } from './Home.styles';

type HomeProps = StackNavigationProp<StackParamList, 'PictureDetail'>;

type Props = {
  navigation: HomeProps;
};

const Home = ({ navigation }: Props) => {
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

  const renderItem = useCallback(
    ({ item }: { item: Picture }) => (
      <TouchableHighlight
        style={homeStyles.imageContainer}
        onPress={() => navigation.navigate('PictureDetail', { picture: item })}
      >
        <FastImage style={homeStyles.image} source={{ uri: item.download_url }} />
      </TouchableHighlight>
    ),
    [navigation],
  );

  return (
    <SafeAreaView style={homeStyles.root}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <FlatList
        data={pictures}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        initialNumToRender={14}
        columnWrapperStyle={homeStyles.columnWrapper}
        getItemLayout={(data, index) => ({
          length: 100,
          offset: 100 * index,
          index,
        })}
      />
    </SafeAreaView>
  );
};

export default Home;
