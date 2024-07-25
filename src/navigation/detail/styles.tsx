import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screenView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 20,
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
