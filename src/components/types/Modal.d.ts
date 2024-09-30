import {ModalProps as RNModalProps} from 'react-native';
export interface ModalProps {
  modalProps?: RNModalProps;
  children: React.ReactNode;
  modalVisible: boolean;
  changeModalVisible?: () => void;
  isBottom?: boolean;
}
