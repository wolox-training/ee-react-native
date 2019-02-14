import { StyleSheet } from 'react-native';
import { PADDING_BOOK, BOOK_SIZE } from '../../../../../constants/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: PADDING_BOOK,
    paddingVertical: 10
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: PADDING_BOOK,
    height: BOOK_SIZE,
    width: BOOK_SIZE
  },
  image: {
    borderRadius: 45,
    height: BOOK_SIZE,
    width: BOOK_SIZE
  },
  bookTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  bookAuthor: {
    fontSize: 15,
    fontStyle: 'italic'
  }
});

export default styles;
