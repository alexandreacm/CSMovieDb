import { TextProps } from 'react-native';
import styled, { css } from 'styled-components/native';

type Props = TextProps & {
  fontSize: number | undefined;
  color: string | undefined;
  isBold: boolean | undefined;
}

const StyledText = styled.Text.attrs({
  numberOfLines: 1
}) <Props>`
  ${({ theme, color, fontSize }) => css`
   font-size: ${fontSize ? `${fontSize}px` : `20px`};
   color: ${color ? `${color}` : theme.COLORS.text.BLACK};
  `}
    font-family: ${({ theme, isBold }) => isBold ? theme.FONTS.Inter_700_Bold : theme.FONTS.Inter_400_Regular};
`;

export { StyledText }