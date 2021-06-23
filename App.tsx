import "react-native-gesture-handler";
import React from 'react';
import {useFonts, Roboto_400Regular, Roboto_700Bold} from "@expo-google-fonts/roboto"
import AppLoading from 'expo-app-loading';

import Routes from './src/routes/routes.stack';

export default function App() {

  let [fontsLoaded] = useFonts({Roboto_700Bold, Roboto_400Regular});

  if(!fontsLoaded){ 
    return <AppLoading/>
  }
   return <Routes />
}
