import React, { ReactNode } from 'react';
import { Modal, ModalProps, View } from 'react-native';
import { styles } from './styles';
import { Background } from '../Background';

type ModalViewProps = ModalProps & {
  children: ReactNode;
};

export function ModalView({ children, ...rest }: ModalViewProps) {
  return (
    <Modal transparent animationType={'slide'} {...rest}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            <View style={styles.bar} />
            {children}
          </Background>
        </View>
      </View>
    </Modal>
  );
}
