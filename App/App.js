import * as React from 'react';
import { View, Text,TouchableOpacity,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeComp from "./components/HomeComp";
import OrderComp from "./components/OrderComp";


function HomeScreen({navigation}) {
  return (
     <HomeComp navigation={navigation}/>
  );
}


function OrderScreen({route,navigation}) {
  return (
    <OrderComp navigation={navigation} route={route} />
  );
}

const Stack = createStackNavigator();

function App() {

    <StatusBar backgroundColor="#fff" barStyle="dark-content"/>


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{header: () => null}} />
        <Stack.Screen name="Order" component={OrderScreen}  options={{header: () => null}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;