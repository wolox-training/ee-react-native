import { StyleSheet } from 'react-native';
import { LIGHTBLUE, RED } from '../../../../../constants/colors';
import { PADDING_BARS } from '../../../../../constants/dimensions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: LIGHTBLUE,
    padding: PADDING_BARS
  },
  removeLabel: {
    textAlign: 'center',
    color: RED
  }
});

export default styles;
