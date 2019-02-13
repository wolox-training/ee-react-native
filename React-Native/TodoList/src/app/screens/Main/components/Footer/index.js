import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.removeLabel} onPress={() => this.props.onRemoveCompleted()}>Clean completed items</Text>
      </View>
    )
  }
}