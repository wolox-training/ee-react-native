import { StyleSheet } from 'react-native';
import { SKYBLUE, WHITE } from '../../../../../constants/colors';
import { PADDING_BARS } from '../../../../../constants/dimensions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: SKYBLUE,
    padding: PADDING_BARS
  },
  title: {
    textAlign: 'center',
    color: WHITE,
  },
});

export default styles;
