import { Roboto_400Regular, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto";
import AppLoading from 'expo-app-loading';
import React from 'react';
import "react-native-gesture-handler";

import { AuthProvider } from "./src/context/AuthContext";
import Routes from './src/routes';


export default function App() {

  let [fontsLoaded] = useFonts({Roboto_700Bold, Roboto_400Regular});

  if(!fontsLoaded){ 
    return <AppLoading/>
  }
  return(
    <AuthProvider>
      <Routes />
    </AuthProvider>
    )
}
