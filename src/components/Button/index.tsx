import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import { styles } from './styles';

type ButtonIconProps = RectButtonProps & {
  title: string;
  cancel?: boolean;
  cancelContainer?: boolean;
};

export function Button({
  title,
  cancel,
  cancelContainer,
  ...rest
}: ButtonIconProps) {
  return (
    <RectButton
      style={[
        styles.container,
        cancel && styles.cancel,
        cancelContainer && styles.cancelContainer,
      ]}
      {...rest}
    >
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
}
