/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Input from './components/Input';
import List from './components/List';
import Footer from './components/Footer';
import todoActions from '../../../redux/Todo/actions';
import styles from './styles';

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Input
          onSubmit={this.props.addItem}
          placeholder={'Type a todo, then hit enter to add it to the list'}
        />
        <List
          items={this.props.todos}
          onRemoveItem={this.props.removeItem}
          onToggleItem={this.props.toggleCheckedItem}
        />
        <Footer onRemoveCompleted={this.props.removeCompleted}/>
      </View>
    );
  }
}

const mapStateToProps = store => ({
  todos: store.todo.todos
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(todoActions.addItem(item)),
  removeItem: index => dispatch(todoActions.removeItem(index)),
  removeCompleted: () => dispatch(todoActions.removeCompleted()),
  toggleCheckedItem: index => dispatch(todoActions.toggleCheckedItem(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
