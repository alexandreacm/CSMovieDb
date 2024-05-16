import styled from 'styled-components/native';
import { TextProps, ViewProps } from 'react-native';

const StyledScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.ui.SECONDARY_900};
`;

const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const StyledContainer = styled.View`
  width: 100%;
  padding: 10px;
  flex-direction: row;
  border-top-width: 1px;
  border-top-color: #CDCDCD;
  margin-top: 10px;
`;

const StyledText = styled.Text.attrs({
  numberOfLines: 2
}) <TextProps>`
  width:300px;
  color: ${({ theme }) => theme.COLORS.text.TITLE};
  font-size:  ${({ theme }) => theme.SIZES[1]};
`;

const StyledOverview = styled.Text <TextProps>`
  width: 100%;
  padding: 10px;
  color: ${({ theme }) => theme.COLORS.text.BLACK};
  font-size:  ${({ theme }) => theme.SIZES[1]};
`;

export {
  StyledScrollView,
  StyledImage,
  StyledContainer,
  StyledText,
  StyledOverview
}