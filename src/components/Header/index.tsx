import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

type AppointmentDetailsProps = {
  title: string;
  action?: ReactNode;
};

export function Header({ title, action }: AppointmentDetailsProps) {
  const navigation = useNavigation();
  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <LinearGradient
      style={styles.container}
      colors={[theme.colors.secondary100, theme.colors.secondary40]}
    >
      <BorderlessButton onPress={handleGoBack}>
        <Feather name={'arrow-left'} size={24} color={theme.colors.heading} />
      </BorderlessButton>
      <Text style={styles.title}>{title}</Text>

      {action && <View>{action}</View>}
    </LinearGradient>
  );
}
