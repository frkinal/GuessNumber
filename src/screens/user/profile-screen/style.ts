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
  contentContainer: {
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
  inner_content_container: {
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
