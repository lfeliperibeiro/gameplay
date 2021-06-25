import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { Avatar } from '../Avatar';
import { theme } from '../../global/styles/theme';

export type MemberProps = {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
};

type Props = {
  data: MemberProps;
};

export function Member(props: Props) {
  const isOnline = props.data.status === 'online';
  return (
    <View style={styles.container}>
      <Avatar urlImage={props.data.avatar_url} />
      <View>
        <Text style={styles.title}>{props.data.username}</Text>
        <View style={styles.status}>
          <View
            style={[
              styles.bulletStatus,
              {
                backgroundColor: isOnline
                  ? theme.colors.on
                  : theme.colors.primary,
              },
            ]}
          />
          <Text style={styles.nameStatus}>
            {isOnline ? 'Disponível' : 'Ocupado'}
          </Text>
        </View>
      </View>
    </View>
  );
}
