import React from 'react';
import DiscordImg from '../../assets/discord.png';
import {Image, Text, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";

type ButtonIconProps = {
  title: string;
}

export function ButtonIcon({title}: ButtonIconProps) {
  return (

      <TouchableOpacity style={styles.container} activeOpacity={.8}>
        <View style={styles.iconWrapper}>
          <Image source={DiscordImg} style={styles.icon}/>
        </View>
        <Text style={styles.title}>
          {title}
        </Text>
      </TouchableOpacity>

  )
}