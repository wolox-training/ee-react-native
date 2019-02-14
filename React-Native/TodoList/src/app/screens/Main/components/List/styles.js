import { StyleSheet } from 'react-native';
import { RED, LIGHTBLUE } from '../../../../../constants/colors';

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
    color: RED,
    fontSize: 28
  },
  buttonsContainer: {
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: LIGHTBLUE,
    flexDirection: 'row'
  },
  todoName: {
    marginLeft: 10,
    fontSize: 20
  }
});

export default styles;
