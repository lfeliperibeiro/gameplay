import { Image, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import DicordSVG from '../../assets/discord.svg';

const { CDN_IMAGE } = process.env;

type Props = {
  guildId: string;
  iconId: string | null;
};

export function GuildIcon({ guildId, iconId }: Props) {
  return (
    <View style={styles.container}>
      {iconId ? (
        <Image
          source={{
            uri: `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`,
          }}
          style={styles.image}
          resizeMode={'cover'}
        />
      ) : (
        <DicordSVG width={40} height={40} />
      )}
    </View>
  );
}
