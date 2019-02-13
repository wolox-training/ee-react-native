import React, { Component } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import styles from './styles';

export default class List extends Component {
  bookPlaceholder = 'https://www.rulistings.com/Content/PlaceholderIcons/book_placeholder.png'

  renderItem = item => {
    return (
      <View key={item.id} style={styles.horizontalContainer}>
        <Image
          style={styles.image}
          source={{uri: !item.image_url ? this.bookPlaceholder : item.image_url}}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.bookTitle}>{item.title}</Text>
          <Text style={styles.bookAuthor}>{item.author}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          {this.props.items.map(this.renderItem)}
        </View>
      </ScrollView>
    );
  }
}
