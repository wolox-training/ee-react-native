import React, { Component } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import styles from './styles';
import { BOOK_DETAIL } from '../../../../../constants/routes';

const bookPlaceholder = 'https://www.rulistings.com/Content/PlaceholderIcons/book_placeholder.png';

class List extends Component {
  goToDetails = item => () => {
    this.props.navigation.navigate(BOOK_DETAIL, item);
  }

  renderItem = item => {
    return (
      <View key={item.id} style={styles.horizontalContainer}>
        <Image
          style={styles.image}
          source={{uri: !item.image_url ? bookPlaceholder : item.image_url}}
        />
        <View style={styles.rightContainer}>
          <Text
            style={styles.bookTitle}
            onPress={this.goToDetails(item)}
          >
            {item.title}</Text>
          <Text style={styles.bookAuthor}>{item.author}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.props.items.map(this.renderItem)}
      </ScrollView>
    );
  }
}

export default List;
