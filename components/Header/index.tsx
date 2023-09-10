import React from "react";
import { TouchableOpacityProps } from "react-native";

import * as S from './styles'

import { Ionicons } from '@expo/vector-icons'; 

type Props = TouchableOpacityProps & {
    title: string;
    navigate: () => void;
}

export function Header({title, navigate ,...rest}: Props) {
    return (
        <S.Container>
            <S.ContentContainer {...rest} onPress={navigate}>
                <Ionicons name="arrow-back-sharp" size={24} color="black" />
                <S.Title>
                    {title}
                </S.Title>
            </S.ContentContainer>
        </S.Container>
    )
}