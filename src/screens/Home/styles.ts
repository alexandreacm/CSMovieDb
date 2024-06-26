import { ViewProps, Platform } from 'react-native';
import styled from 'styled-components/native';

const isAndroidWidth = Platform.OS == 'android' ? 160 : 175;

type ImageProp = {
  width: string;
  height: number;
}

const StyledHomeContainer = styled.View<ViewProps>`
  flex: 1;
  padding: 8px;
  background-color: ${({ theme }) => theme.COLORS.ui.SECONDARY_900};;
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
  width: 56px;
  height: 35px;
  padding: 5px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.ui.PRIMARY_500};
  justify-content: center;
  align-items: center;
`;

const StyledWrapperError = styled.View<ViewProps>`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border-radius: 4px;
  opacity: 0.9;
  background-color: ${({ theme }) => theme.COLORS.ui.PRIMARY_600};
  justify-content: center;
  align-items: center;
`;

const WrapperSearch = styled.View<ViewProps>`
  width: 100%;
  flex-direction: row;
  border-radius: 10px;
  border-width: 1px;
  border-color: #c3c0c0;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const StyledInput = styled.View<ViewProps>`
  width: 85%;
  padding: 8px;
  justify-content: center;
  align-items: center;
`;

const StyledIcon = styled.View<ViewProps>`
  width: 15%;
  padding:8px;
  justify-content: center;
  align-items: center;
`;

const StyledSearchInput = styled.TextInput`
  width: 100%;
  padding: 8px;
  text-align: left;
`;

const StyledViewEmpty = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: 14px;
`;

const StyledCardColumn = styled.View`
    width: ${({ theme }) => `${isAndroidWidth}px`};
    height: 330px;
    padding: 10px;
    background-color: ${({ theme }) => theme.COLORS.text.WHITE};
    border-radius: 10px;
`;

const StyledCardList = styled.View`
    flex:1;
    flex-direction: row;
    padding: 5px;
    margin-top: 10px;
    border-bottom-width: 0.8px;
    border-bottom-color: #CDCDCD;
`;

const StyledContainerList = styled.View`
    flex:1;
    padding: 10px;
`;

const StyledImg = styled.Image<ImageProp>`
  width: ${({ width }) => `${width}`};
  height: ${({ height }) => `${height}px`};
`;

const TitleList = styled.Text`
 width: 100%;
 margin-bottom: 4px;
 font-size: 14px;
 font-weight: bold;
`;

export {
  StyledHomeContainer,
  WrapperButtons,
  WrapperFilter,
  WrapperViewGrid,
  StyledRoundedView,
  StyledWrapperError,
  WrapperSearch,
  StyledInput,
  StyledIcon,
  StyledSearchInput,
  StyledCardColumn,
  StyledCardList,
  StyledViewEmpty,
  StyledImg,
  StyledContainerList,
  TitleList
}