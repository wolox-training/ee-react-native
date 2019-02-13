import React, { Component } from 'react';
import { View, Text } from 'react-native';

class BookDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.title : 'A Nested Details Screen'
    };
  };

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>{'Title: '}{navigation.getParam('title', 'Non title')}</Text>
        <Text>{'Author: '}{navigation.getParam('author', 'Non author')}</Text>
        <Text>{'Genre: '}{navigation.getParam('genre', 'Non genre')}</Text>
        <Text>{'Publisher: '}{navigation.getParam('publisher', 'Non publisher')}</Text>
        <Text>{'Year: '}{navigation.getParam('year', 'Non year')}</Text>
      </View>
    );
  }
}

export default BookDetail;

/*
  author: "Andy Weir",
          title: "The Martian",
          genre: "fiction",
          publisher: "Crown Publishing Group",
          year: "2011",
          image_url: "http://wolox-training.s3.amazonaws.com/uploads/41DNuJfahyL._SX322_BO1_204_203_200_.jpg"
*/
