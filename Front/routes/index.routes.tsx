import React from "react";

import { NavigationContainer, useNavigation } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../pages/Home";
import { Login } from "../pages/Auth";

import { Header } from "../components/Header";


const Stack = createNativeStackNavigator();

export function Routes() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name={"Home"} 
                    component={Home} 
                    options={{
                        headerShown: false,
                    }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}