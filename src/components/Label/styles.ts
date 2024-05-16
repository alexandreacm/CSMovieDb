import { TextProps } from 'react-native';
import styled, { css } from 'styled-components/native';

type Props = TextProps & {
    fontSize: number | undefined;
}

const StyledText = styled.Text<Props>`
  ${({ fontSize }) => css`
   font-size: ${fontSize ? `${fontSize}px` : `20px`};
  `}
    margin-bottom: 20px;
    font-weight: bold;
    font-family: ${({ theme }) => theme.FONTS.Inter_400_Regular};
`;

export { StyledText }