import React, { ReactNode } from 'react';
import {
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { styles } from './styles';
import { Background } from '../Background';

type ModalViewProps = ModalProps & {
  children: ReactNode;
  closeModal: () => void;
};

export function ModalView({ children, closeModal, ...rest }: ModalViewProps) {
  return (
    <Modal transparent animationType={'slide'} {...rest} statusBarTranslucent>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.bar} />
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
