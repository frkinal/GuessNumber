import {colors} from '@utils';
import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
  },
  welcome_container: {
    width: '90%',
    alignSelf: 'center',
    height: '20%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeTextContainer: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome_text: {
    fontSize: 24,
    color: colors.black,
  },
  form_container: {
    width: '100%',
    height: '80%',
    alignItems: 'center',
  },
  form_item_container: {
    width: '70%',
    marginVertical: 10,
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
});
