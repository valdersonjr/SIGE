import { css, DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

export const lightTheme: FlattenInterpolation<ThemeProps<DefaultTheme>> = css`
  ${({ theme }) => css`
    background-color: #f7f7f7;
    border-radius: 6px;
    padding: 3% 5%;
    border: none;

    color: ${theme.palette.dark.tint};
  `}
`;
