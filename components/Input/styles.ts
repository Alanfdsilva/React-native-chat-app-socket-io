import styled, { css } from 'styled-components/native';

type InputProps = {
  focused: boolean;
}

export const Container = styled.View``

export const Label = styled.Text`
    margin-bottom: 4px;
    font-size: 13px;
    color: #242424;
`;

export const InputContainer = styled.View<InputProps>`
${({ focused }) => css`
  background-color: #FFF;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  border: 1px solid ${focused ? '#D1D1D1': '#fff'};
  align-items: center;
  flex-direction: row;
  justify-content: space-between; 
`}
`

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#616161',
})<InputProps>`
    padding: 8px 18px;
    width: 85%;
    font-size: 14px;
    color: #242424;
`;