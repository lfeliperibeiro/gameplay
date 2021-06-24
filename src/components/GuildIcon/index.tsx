import { Image} from "react-native";
import React from "react";
import {styles} from "./styles";



export function GuildIcon() {
    return (
        <Image
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3dsocSazJKYhsOZpCkQyinr3C4kkXfVpj2haD9fKvqCR_pJy2_m47Qgu_re42Imr4S9U&usqp=CAU'}}
            style={styles.image}
            resizeMode={'cover'}
        />
    )
}
