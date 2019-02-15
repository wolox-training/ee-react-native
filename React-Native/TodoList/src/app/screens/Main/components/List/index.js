import React, { Component } from 'react';
import { ScrollView, Text, View, CheckBox } from 'react-native';
import styles from './styles';

class List extends Component {
  renderTodo = item => {
    return (
      <View key={item.id} style={styles.horizontalContainer}>
        <Text style={styles.todoName}>{item.text}</Text>
        <View style={styles.buttonsContainer}>
          <CheckBox
            value={item.completed}
            onValueChange={() => this.props.onToggleItem(item.id)}
          />
          <Text
            style={styles.removeButton}
            onPress={() => this.props.onRemoveItem(item.id)}
          >
            &times;
          </Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.props.items.map(this.renderTodo)}
      </ScrollView>
    );
  }
}

export default List;
