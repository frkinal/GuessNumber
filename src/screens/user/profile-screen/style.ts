import {StyleSheet} from 'react-native';
import {colors} from '@utils';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  profile_text: {
    fontSize: 20,
    color: colors.primary,
    marginLeft: 5,
  },
  render_item_container: {
    width: '90%',
    alignSelf: 'center',
  },
  header_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: '2%',
  },
  header_text: {
    fontSize: 15,
    color: colors.gray,
  },
  profile_container: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10%',
  },
});
