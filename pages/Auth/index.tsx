import React, { useState } from "react";

import * as S from './styles'
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { DefaultNavigationProps } from "../../dtos/Navigation";

export function Login() {
    const [name, setName] = useState('');
    const [authError, setAuthError] = useState('');

    const navigation = useNavigation<DefaultNavigationProps>()
    
    function handleOpenChat() {
        if(name.trim() !== '') {
            setAuthError('');
            navigation.navigate('Home', {
                userName: name
            })
        } else {
            setAuthError('Preencha o campo com seu nome');
        }
    }

    return (
        <S.Container>
            <S.AppDescription>
                Entre agora com seu nome e acesse nosso chat personalizado!
            </S.AppDescription>
            <Input
                placeholder="Digite seu nome"
                label="Nome"
                value={name}
                onChangeText={setName}
            />
            {
                !!authError ? (
                    <S.AuthError>
                        {authError}
                    </S.AuthError>
                ) : null
            }
            <S.ButtonContainer>
                <Button 
                    title='Entrar'
                    onPress={handleOpenChat}
                />
            </S.ButtonContainer>
        </S.Container>
    )
}
