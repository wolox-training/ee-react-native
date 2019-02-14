import React, { Component } from 'react';
import { View, Text } from 'react-native';

import List from './components/List';
import styles from './styles';

import books from '../../../../books';

class Books extends Component {
  render() {
    return (
      <View style={styles.container}>
        <List
          items={books}
        />
      </View>
    );
  }
};

export default Books;
