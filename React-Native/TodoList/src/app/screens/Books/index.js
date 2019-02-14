import React, { Component } from 'react';
import { View } from 'react-native';

import List from './components/List';
import styles from './styles';

import books from '../../../../books';

class Books extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Book list'
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <List
          items={books}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
};

export default Books;
