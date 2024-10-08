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
  profile: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content_container: {
    width: '60%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  balanceContainer: {
    width: '25%',
    height: '100%',
  },
  balance: {
    fontSize: 14,
    color: colors.black,
  },
  username: {
    fontSize: 16,
    color: colors.black,
  },

  email: {
    fontSize: 14,
    color: colors.gray,
  },
  totalScore: {
    fontSize: 14,
    color: colors.gray,
  },
});
