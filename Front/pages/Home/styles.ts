import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: flex-end;
    padding-bottom: 30px;
    background-color: #F5F5F5;
    padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;

export const ListContainer = styled.View`
    margin-top: 30px;
`;

export const TotalUsersContainer = styled.View`
    border-top-width: 1px;
    border-color: #D1D1D1;
    padding: 8px 20px;
`;

export const TotalUsersText = styled.Text`
    font-size: 14px;
    align-self: flex-start;
    color: #242424;
    font-weight: 700;
`;

export const CommentListContainer = styled.View`
    padding: 0px 20px;
`;

export const LoginEventText = styled.Text`
    align-self: center;
    font-size: 14px;
    color: #242424;
    padding: 14px 0px;
`;

export const InputContainer = styled.View`
    width: 100%;
    padding: 0px 18px;
    flex-direction: row;
    align-self: flex-end;
`;

export const InputLimiter = styled.View`
    flex: 1;
`;

export const SendButton = styled.TouchableOpacity`
    background-color: #88B257;
    width: 48px;
    height: 48px;
    border-radius: 24px;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
`;