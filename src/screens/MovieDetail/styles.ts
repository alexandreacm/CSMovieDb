import styled from 'styled-components/native';
import { TextProps } from 'react-native';

const StyledScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.ui.SECONDARY_900};
  padding: 10px;
`;

const StyledImage = styled.Image`
  width: 100%;
  height: 280px;
`;

const StyledContainer = styled.View`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  flex-direction: row;
  border-top-width: 0.8px;
  border-top-color: ${({ theme }) => theme.COLORS.ui.BORDER};
  align-items: center;
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
  margin-top: 10px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.COLORS.text.BLACK};
  font-size:  ${({ theme }) => theme.SIZES[1]};
`;

const StyledTitle = styled.Text<TextProps>`
  width: 100%;
  padding: 10px;
  color: ${({ theme }) => theme.COLORS.text.BLACK};
  font-size:  25px;
  font-weight: bold;
`;

export {
  StyledScrollView,
  StyledImage,
  StyledContainer,
  StyledText,
  StyledOverview,
  StyledTitle
}