import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {TailwindProvider} from 'tailwind-rn';
import CustomersScreen from './screens/CustomersScreen';
import utilities from './tailwind.json';

export default function App() {
  return (
    // @ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <CustomersScreen />
      </NavigationContainer>
    </TailwindProvider>
  );
}

