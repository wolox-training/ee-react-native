import { createStackNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

import Main from './screens/Main';
import Books from './screens/Books';
import BookDetail from './screens/BookDetail';

const BooksNavigator = createStackNavigator({
  BooksMain: { screen: Books },
  Detail: { screen: BookDetail }
});

const TopTabNavigator = createMaterialTopTabNavigator({
    Home: { screen: Main },
    Books: { screen: BooksNavigator }
  }
);

const RootStack = createStackNavigator({
  Root: {
    screen: TopTabNavigator,
    navigationOptions: ({ navigation }) => ({
      title: 'Todo App (and books too)',
      headerStyle: {
        backgroundColor: '#ADD8E6'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    })
  }
});

export default createAppContainer(RootStack);
