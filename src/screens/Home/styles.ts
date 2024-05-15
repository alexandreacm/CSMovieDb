import { ViewProps } from 'react-native';
import { styled } from 'styled-components/native';

const StyledHomeContainer = styled.View<ViewProps>`
  flex: 1;
`;

const ContainerButtons = styled.View<ViewProps>`
  width: 100%;
  padding: 10px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export { StyledHomeContainer, ContainerButtons }