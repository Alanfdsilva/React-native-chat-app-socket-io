import React, { useState } from "react";

import * as S from './styles';
import { TextInputProps } from "react-native";

type Props = TextInputProps & {
    label?: string;
  }  

export function Input ({label,...rest}: Props) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <S.Container>
            {
                !!label ? (
                    <S.Label>{label}</S.Label>
                ) : null
            }
            <S.InputContainer  
            focused={isFocused}
            >
                <S.Input 
                    style={{
                    flex: 1,
                    }}
                    focused={isFocused}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    {...rest}
                />  
            </S.InputContainer>
      </S.Container>
    )
}