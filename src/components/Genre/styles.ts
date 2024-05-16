import styled from 'styled-components/native';
import { TextProps } from 'react-native';

const StyledContainer = styled.View`
  width: 100%;
  padding: 8px;
  flex-direction: row;
`;

const StyledCardGenre = styled.View`
  flex: 1;
  border-radius: 50%;
  border-width: 1px;
  justify-content: center;
  align-items: center;
  padding: 6px;
  margin-left: 4px;
  background-color: ${({ theme }) => theme.COLORS.ui.PRIMARY};
  opacity: 0.6;
`;

const StyledText = styled.Text <TextProps>`
  width: 100%;
  color: ${({ theme }) => theme.COLORS.text.WHITE};
  font-size:  ${({ theme }) => theme.SIZES[1]};
`;


export { StyledContainer, StyledText, StyledCardGenre }