import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './state/store';
import { Picture } from './api/pictures/types';
import Home from './screens/Home/Home';
import PictureDetail from './screens/PictureDetail/PictureDetail';
import { typography } from './theme';

export type StackParamList = {
  Home: undefined;
  PictureDetail: { picture: Picture };
};

const Stack = createStackNavigator<StackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerTitleStyle: typography.titleBlack }}
            />
            <Stack.Screen
              name="PictureDetail"
              component={PictureDetail}
              options={({ route }) => ({
                headerTitle: route.params.picture.author,
                headerTitleStyle: typography.titleBlack,
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
