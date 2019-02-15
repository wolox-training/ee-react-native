import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class Footer extends Component {
  handleRemove = () => this.props.onRemoveCompleted()

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.removeLabel} onPress={this.handleRemove}>Clean completed items</Text>
      </View>
    )
  }
}

export default Footer;
