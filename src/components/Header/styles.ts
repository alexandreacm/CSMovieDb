import { ViewProps } from 'react-native';
import styled from 'styled-components/native';

const StyledContainer = styled.View<ViewProps>`
  width: 100%;
  padding: 10px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.ui.PRIMARY};
  justify-content: center;
  align-items: center;
`;

const StyledImg = styled.Image`
 width: 80px;
 height: 40px;
`;

export { StyledContainer, StyledImg }