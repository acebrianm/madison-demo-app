import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import FastImage from 'react-native-fast-image';

import { StackParamList } from '../..';
import { Picture } from '../../api/pictures/types';
import { pictureDetailStyles } from './PictureDetail.styles';

type PictureDetailRouteProp = RouteProp<StackParamList, 'PictureDetail'>;

type Props = {
  route: PictureDetailRouteProp;
};

const PictureDetail = ({ route }: Props) => {
  const isDarkMode = useColorScheme() === 'dark';

  const picture: Picture = route.params.picture;

  return (
    <SafeAreaView style={pictureDetailStyles.root}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <FastImage
        resizeMode={FastImage.resizeMode.contain}
        style={pictureDetailStyles.image}
        source={{ uri: picture.download_url }}
      />
    </SafeAreaView>
  );
};

export default PictureDetail;
