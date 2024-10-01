import {colors} from '@utils';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    width: '100%',
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
    backgroundColor: colors.lightGray,
    borderRadius: 5,
    marginBottom: 5,
  },
  content_container: {
    width: '80%',
    height: '100%',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    color: colors.black,
  },
  content: {
    fontSize: 14,
    color: colors.gray,
  },
});
