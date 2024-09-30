import {colors} from '@utils';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  inner_container: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    maxHeight: 550,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '2%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  header_container: {
    width: '100%',
    height: 30,
    position: 'absolute',
    backgroundColor: colors.white,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  header: {
    width: 50,
    height: 5,
    backgroundColor: colors.gray,
    borderRadius: 5,
  },
  blurViewStyle: {
    position: 'absolute',
    top: 30,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
