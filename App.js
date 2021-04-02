import { BlogProvider } from './src/context/BlogContext';
import IndexScreen from './src/screens/IndexScreen';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const navigator = createStackNavigator(
  {
  Index: IndexScreen
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
    <BlogProvider > 
      <App />
    </BlogProvider>
  )
}

