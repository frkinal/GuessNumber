import {colors} from '@utils';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  timerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  head: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
    color: colors.gray,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 10,
    width: '80%',
    marginBottom: 20,
    backgroundColor: colors.white,
    fontSize: 18,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: colors.gray,
    fontWeight: 'bold',
  },
});
