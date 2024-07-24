import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screenView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  listItem: {
    marginBottom: 10,
  },
  input: {
    height: 50,
    width: '100%',
    margin: 12,
    borderWidth: 2,
    borderColor: '#007bff',
    padding: 10,
    borderRadius: 10,
    fontSize: 18,
    color: '#333333',
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  pressableView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  thumbnailPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Placeholder background color
  },
  titleText: {
    color: '#333333',
    textAlign: 'center',
    fontSize: 18,
  },
});
