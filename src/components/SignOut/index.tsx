import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../Button';
import { styles } from './styles';

type SignOutProps = {
  confirm: () => void;
  cancel: () => void;
};

export function SignOut({ cancel, confirm }: SignOutProps) {
  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Deseja sair do Game</Text>
        <Text style={styles.red}>Play</Text>
        <Text style={styles.title}>?</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title={'Não'} cancel onPress={cancel} />
        <View style={{ paddingHorizontal: 5 }} />
        <Button title={'Sim'} cancelContainer onPress={confirm} />
      </View>
    </View>
  );
}
