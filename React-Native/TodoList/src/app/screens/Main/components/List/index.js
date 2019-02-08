import React, { Component } from 'react'
import { ScrollView, Text, View, Checkbox } from 'react-native'
import styles from './styles';

export default class List extends Component {
  renderTodo = item => {
    <View key={item.id}>
      <Text>{item.text}</Text>
        <Checkbox
          checked={item.completed}
          onPress={() => this.props.onRemoveItem(item.id)}
        />
    </View>
  }

  render() {
    const { items } = this.props
    return (
      <ScrollView style={styles.container}>
        {items.map(this.renderTodo)}
      </ScrollView>
    )
  }
}
