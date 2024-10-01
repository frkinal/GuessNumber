import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
  image_container: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    width: '100%',
    height: 525,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  innerContainer: {
    width: Dimensions.get('window').width,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
