import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Avatar } from '../Avatar';
import { useAuth } from '../../hooks/auth';
import { RectButton } from 'react-native-gesture-handler';
import { SignOut } from '../SignOut';
import { ModalView } from '../ModalView';

export function Profile() {
  const [openModal, setOpenModal] = useState(false);
  const { user, signOut } = useAuth();

  function handleOpenModal() {
    setOpenModal(true);
  }
  function handleCloseModal() {
    setOpenModal(false);
  }
  return (
    <View style={styles.container}>
      <RectButton onPress={handleOpenModal}>
        <Avatar urlImage={user.avatar} />
      </RectButton>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>{user.firstName}</Text>
        </View>
        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
      <ModalView visible={openModal} signOut>
        <SignOut cancel={handleCloseModal} confirm={signOut} />
      </ModalView>
    </View>
  );
}
