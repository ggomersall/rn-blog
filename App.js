import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import React from 'react';
import ShowScreen from './src/screens/ShowScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const navigator = createStackNavigator(
  {
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen,
  Edit: EditScreen
  },
  {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blog',
    headerStyle: {
      backgroundColor: 'lightblue'
    },
    headerTitleStyle: {
      color: 'black'
    },
    cardStyle: {
      backgroundColor: 'lightblue'
    }
  },
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider> 
      <App />
    </Provider>
  )
}

