import React from "react";
import {FlatList, View} from "react-native";
import {styles} from "./styles";
import {Guild, GuildProps} from "../../components/Guild";
import {ListDivider} from "../../components/ListDivider";

type Props = {
    handleGuildSelect: (guild: GuildProps) => void
}


export function Guilds({handleGuildSelect}: Props) {
    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '2',
            name: 'Galera do game',
            icon: 'image.png',
            owner: false
        }
    ]
    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={item => item.id}
                data={guilds}
                renderItem={({item}) => (
                    <Guild
                        data={item}
                        onPress={() => handleGuildSelect(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider/>}
                style={styles.guilds}
            />
        </View>
    )
}