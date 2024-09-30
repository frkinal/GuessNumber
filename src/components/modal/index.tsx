import React from 'react';
import {View, Modal as RNModal, TouchableWithoutFeedback} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import style from './style';
import {ModalProps} from '@components/types';
export const Modal: React.FC<ModalProps> = props => {
  const {modalVisible, changeModalVisible, children, modalProps} = props;
  return (
    <RNModal
      {...modalProps}
      visible={modalVisible}
      animationType="fade"
      transparent>
      <TouchableWithoutFeedback onPress={changeModalVisible}>
        <View style={style.container}>
          <TouchableWithoutFeedback>
            <View style={style.inner_container}>
              <View style={style.header_container}>
                <View style={style.header} />
              </View>
              <BlurView
                style={style.blurViewStyle}
                blurType="light"
                blurRadius={10}
                overlayColor={'rgba(255, 255, 255, 0.1)'}>
                <View>{children}</View>
              </BlurView>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </RNModal>
  );
};
