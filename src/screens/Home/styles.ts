import { ViewProps } from 'react-native';
import { styled } from 'styled-components/native';

const StyledHomeContainer = styled.View<ViewProps>`
  flex: 1;
  padding: 10px;
`;

const WrapperButtons = styled.View<ViewProps>`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const WrapperFilter = styled.View<ViewProps>`
  flex: 1;
  padding: 6px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

`;

const WrapperViewGrid = styled.View<ViewProps>`
  flex: 1;
  padding: 6px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

`;

const StyledRoundedView = styled.View<ViewProps>`
  width: 40px;
  height: 40px;
  padding: 5px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.ui.PRIMARY_500};
  justify-content: center;
  align-items: center;
`;

export {
  StyledHomeContainer,
  WrapperButtons,
  WrapperFilter,
  WrapperViewGrid,
  StyledRoundedView
}