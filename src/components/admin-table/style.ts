import { colors } from '@utils';
import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#f4f4f4',
    padding: 10,
  },
  headerText: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
  accordionContainer: {
    marginBottom: 10,
  },
  accordionHeader: {
    backgroundColor: colors.primary,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
  },
  accordionTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    height: 150,
  },
});
