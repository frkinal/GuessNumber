import {colors} from '@utils';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 10,
    width: '100%',
    alignSelf: 'center',
  },
  input: {
    height: 35,
    flex: 1,
    paddingLeft: 10,
    backgroundColor: colors.white,
    color: colors.black,
    borderRadius: 10,
  },
  rightIcon: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 5,
  },
  activity: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
