import React, { Component } from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

class Input extends Component {
  state = {
    text: ''
  }

  onChangeText = text => this.setState({ text });

  onSubmitEditing = () => {
    const { text } = this.state;
    if (!text) return;
    this.props.onSubmit(text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <TextInput
        style={styles.input}
        value={this.state.text}
        placeholder={this.props.placeholder}
        onChangeText={this.onChangeText}
        onSubmitEditing={this.onSubmitEditing}
      />
    )
  }
}

export default Input;
