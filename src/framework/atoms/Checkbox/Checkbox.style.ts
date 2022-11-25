import styled from 'styled-components';

import { CheckboxInternalProps } from './Checkbox.interface';

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;

  margin-right: 6px;
`;

export const StyledCheckbox = styled.div<CheckboxInternalProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 18.2px;
  height: 18.2px;
  background: ${({ theme, checked, disabled }) => {
    if (disabled) {
      return checked ? theme.palette.dark.tint : 'transparent';
    }

    return checked ? theme.palette.primary.base : 'transparent';
  }};

  border: 1.8px solid
    ${({ theme, checked }) => (checked ? theme.palette.primary.base : theme.palette.dark.tint)};
  border-radius: 3px;
  transition: all 100ms;

  &:hover {
    border: 1.8px solid ${({ theme }) => theme.palette.primary.base};
    outline: 4px solid ${({ theme }) => `${theme.palette.primary.base}26`};
  }
`;
