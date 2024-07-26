import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screenView: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  thumbnail: {
    width: '100%',
    height: 150, // Adjust the height as needed
    resizeMode: 'contain', // Adjust the resize mode as needed
  },
  thumbnailPlaceholder: {
    width: '100%',
    height: 150, // Match the height of the thumbnail
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  darkGrayText: {
    color: '#333', // Dark gray color
  },
});
