import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  removeButton: {
    color: 'red',
    fontSize: 28
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    justifyContent: 'center',
    marginHorizontal: 15,
    height: 90,
    width: 90
  },
  image: {
    borderRadius: 45,
    height: 90,
    width: 90
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
