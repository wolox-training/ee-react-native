import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

class BookDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.item.title : 'A Nested Details Screen'
    };
  };

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('item', 'Not book received');
    return (
      <View style={styles.detailContainer}>
        {item.title && <Text>{`Title: ${item.title}`}</Text>}
        {item.author && <Text>{`Author: ${item.author}`}</Text>}
        {item.genre && <Text>{`Genre: ${item.genre}`}</Text>}
        {item.publisher && <Text>{`Publisher: ${item.publisher}`}</Text>}
        {item.year && <Text>{`Year: ${item.year}`}</Text>}
      </View>
    );
  }
}

export default BookDetail;
