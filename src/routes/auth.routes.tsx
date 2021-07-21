import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Welcome, Login, SignUp } from "../utils/screens"

function AuthRoutes(){

    const Stack = createStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="welcome" screenOptions={{headerShown: false}}>
                <Stack.Screen name="welcome" component={Welcome} />
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="signup" component={SignUp} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AuthRoutes;