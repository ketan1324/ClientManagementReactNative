import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Welcome from './src/screens/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './src/screens/Homepage';
import Verification from './src/screens/Verification';
import GenericBodyCard from './src/GenericComponent/GenericBodyCard';
import { Users } from './src/screens/Users';
import { Accounts } from './src/screens/Account';
const axios = require('axios');


const Stack = createNativeStackNavigator();

const UserComponent = ({navigation}) => {
  return (
    <GenericBodyCard>
      <Users navigation={navigation}/>
    </GenericBodyCard>
  )
}
const AccountComponent = ({navigation}) => {
  return (
    <GenericBodyCard>
      <Accounts navigation={navigation}/>
    </GenericBodyCard>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="welcome" component={Welcome}
          options={
            {
              headerShown: true,
              headerBackButtonMenuEnabled:true
            }
          }
        />
        <Stack.Screen name="login" component={Login}
          options={
            {
              headerShown: true,
              headerBackButtonMenuEnabled:true
              
            }
          }
        />
        <Stack.Screen name="signup" component={Signup}
          options={
            {
              headerShown: true,
              headerBackButtonMenuEnabled:true

            }
          }

        />
        <Stack.Screen name="homepage" component={
          Homepage

        }
          options={
            {
              headerShown: true,
              headerBackButtonMenuEnabled:true

            }
          }
        />

        <Stack.Screen name="Verification" component={Verification}
          options={
            {
              headerShown: true,
              headerBackButtonMenuEnabled:true

            }
          }
        />
        <Stack.Screen name="Users" component={
          UserComponent}
          options={
            {
              headerShown: true,
              headerBackButtonMenuEnabled:true

            }
          }
        />
        <Stack.Screen name="Accounts" component={
          AccountComponent}
          options={
            {
              headerShown: true,
              headerBackButtonMenuEnabled:true

            }
          }
        />

      </Stack.Navigator>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
