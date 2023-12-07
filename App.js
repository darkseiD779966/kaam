import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from "./screens/Screen1"
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import Role from "./screens/Role";
import Login from "./screens/Login";
import LanguageChoosing from './screens/LanguageChoosing';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator
        initialRouteName="Screen1"
        screenOptions={{
          headerTitleStyle: {
            color: 'rgba(81, 99, 144, 1)',
            fontSize:22
          },
        }}
      >
      <Stack.Screen name="Screen1" component={Screen1} options={{ headerTitle: '', headerShown: false }}/>
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen3" component={Screen3} />
      <Stack.Screen name="Choose your role" component={Role} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Choose your Language" component={LanguageChoosing} />
    </Stack.Navigator>
      </NavigationContainer>
      )

      }
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
        text:{
          color:'blue'
        }
});
