import "./App.css";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./screens/Main";
import Callback from "./screens/Callback";
const Stack = createNativeStackNavigator();

const linking = {
  config: {
    screens: {
      Main: "",
      Callback: "callback",
    },
  },
};

function App() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="Callback" component={Callback} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
