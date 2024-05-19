import styled from 'styled-components/native';
import { TextProps } from 'react-native';

const StyledContainer = styled.View`
  width: 100%;
  padding: 8px;
  flex-direction: row;
`;

const StyledRoundedCard = styled.View`
  flex: 1;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.ui.SECONDARY};
  justify-content: center;
  align-items: center;
  padding: 6px;
  margin-left: 4px;
  background-color: ${({ theme }) => theme.COLORS.ui.PRIMARY};
`;

const StyledText = styled.Text <TextProps>`
  width: 100%;
  color: ${({ theme }) => theme.COLORS.text.WHITE};
  font-size:  ${({ theme }) => theme.SIZES[1]};
`;


export { StyledContainer, StyledText, StyledRoundedCard }