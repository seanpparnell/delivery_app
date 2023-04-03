import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {TailwindProvider} from 'tailwind-rn';
import RootNavigator from './navigator/RootNavigator';
// import CustomersScreen from './screens/CustomersScreen';
// import OrdersScreen from './screens/OrdersScreen';
import utilities from './tailwind.json';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: "https://southernpines.stepzen.net/api/zealous-peacock/__graphql",
  cache: new InMemoryCache(),
})

export default function App() {

  // const client = ...

client
.query({
  query: gql`
    query GetLocations {
      locations {
        id
        name
        description
        photo
      }
    }
  `,
})
.then((result) => console.log(result));

  return (
    // @ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}

