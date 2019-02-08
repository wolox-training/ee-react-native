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
import Header from './components/Header';
import Input from './components/Input';
import List from './components/List';
import Footer from './components/Footer';
import todoActions from '../../../redux/Todo/actions';
import styles from './styles';

class Main extends Component {

  // Chequear esto, todavía no hice nada para que el input me llene ese item que pido
  addItem = item => {
    this.props.addItem(item);
  }

  removeItem = index => {
    this.props.removeItem(index);
  }

  removeCompleted = () => {
    this.props.removeCompleted();
  }

  toggleCheckedItem = index => {
    this.props.toggleCheckedItem(index);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Input
          onSubmit={this.addItem}
          placeholder={'Type a todo, then hit enter to add it to the list'}
        />
        <List
          items={this.props.todos}
          onRemoveItem={this.removeItem}
          onToggleItem={this.toggleCheckedItem}
        />
        <Footer onRemoveCompleted={this.removeCompleted}/>
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
