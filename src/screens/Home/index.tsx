import React, { useCallback, useState } from 'react';
import { AsyncStorage, FlatList, View } from 'react-native';
import { styles } from './styles';
import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment, AppointmentProps } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { Loading } from '../../components/Loading';

export function Home() {
  const [category, setCategory] = useState('');
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }
  function handleAppointmentDetails(guildSelected: AppointmentProps) {
    navigation.navigate('AppointmentDetails', { guildSelected });
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }

  async function loadAppointment() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

    if (category) {
      setAppointments(storage.filter((item) => item.category === category));
    } else {
      setAppointments(storage);
    }

    setLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      loadAppointment();
    }, [category]),
  );

  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>
      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      {loading ? (
        <Loading />
      ) : (
        <>
          <ListHeader
            title={'Partidas Agendadas'}
            subtitle={`Total ${appointments.length}`}
          />

          <FlatList
            data={appointments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Appointment
                data={item}
                onPress={() => handleAppointmentDetails(item)}
              />
            )}
            style={styles.matches}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 69 }}
            ItemSeparatorComponent={() => <ListDivider />}
          />
        </>
      )}
    </View>
  );
}
