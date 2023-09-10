import styled , { css } from 'styled-components/native';

import { ViewProps } from "react-native";

type commentProps = {
    userType?: 'currentUser' | 'otherUsers';
}

export const Container = styled.View<commentProps>`
    ${({ userType }) => css`
        width: 85%;
        flex-direction: column;
        align-self: ${userType === 'currentUser' ? 'flex-end' : 'flex-start'};
        margin-bottom: 16px;
        padding: 12px;
        background-color: ${userType === 'currentUser' ? '#88B257' : '#666'};
        border-radius: 8px;
        border: 1px solid #d1d1d1;
    `}
`;

export const UserName = styled.Text`
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 6px;
    color: #FFF;
`;

export const UserComment = styled.Text`
    font-weight: 400;
    font-size: 14px;
    color: #FFF;
`