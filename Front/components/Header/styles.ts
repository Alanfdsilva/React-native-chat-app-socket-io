import { Platform, StatusBar } from 'react-native';
import styled , { css } from 'styled-components/native';

export const Container = styled.View`
    background-color: #F5F5F5;
    border-bottom-width: 1px;
    z-index: 10;
    border-color: #D1D1D1;
    padding: ${Platform.OS === 'android' ? (!!StatusBar.currentHeight ? StatusBar.currentHeight : 0) + 6 : 6 }px 20px 8px 20px;
`;

export const ContentContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const Title = styled.Text`
    font-size: 16px;
    margin-left: 6px;
    font-weight: 700;
`;