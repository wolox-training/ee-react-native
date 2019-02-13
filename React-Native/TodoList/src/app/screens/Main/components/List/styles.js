import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  removeButton: {
    color: 'red',
    fontSize: 28
  },
  buttonsContainer: {
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: 'lightblue',
    flexDirection: 'row'
  },
  todoName: {
    marginLeft: 10,
    fontSize: 20
  }
});

export default styles;
