import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0px 20px;
    background-color: #F5F5F5;
    padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;

export const AppDescription = styled.Text`
    font-size: 28px;
    color: #88B257;
    font-weight: 600;
    text-align: center;
    margin-bottom: 32px;
`

export const AuthError = styled.Text`
    font-size: 12px;
    color: red;
    margin: 4px 0px;
    align-self: flex-start;
`

export const ButtonContainer = styled.View`
    width: 100%;
    margin-top: 16px;
`