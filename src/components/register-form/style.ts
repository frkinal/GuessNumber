import {colors} from '@utils';
import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
  },
  form_container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    marginTop: 30,
  },
  form_item_container: {
    width: '70%',
    marginBottom: 5,
  },
  form_item_text: {
    fontSize: 16,
    color: colors.black,
  },
  form_item_desc: {
    fontSize: 12,
    color: colors.gray,
  },
  forgot_password: {
    fontSize: 12,
    color: colors.gray,
    textAlign: 'right',
  },
  button_container: {
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  register_text: {
    fontSize: 14,
    color: colors.black,
  },
  register_text_bold: {
    fontSize: 14,
    color: colors.primary,
  },
  render_item_container: {
    width: 130,
    height: 40,
    borderRadius: 5,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
