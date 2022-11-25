import { CheckboxProps } from './Checkbox.interface';
import { Icons } from '@atoms';

import { theme } from '@theme';

import * as S from './Checkbox.style';
export const Checkbox = ({
  label,
  onChange,
  checked,
  interminateChecked,
  ...props
}: CheckboxProps) => {
  const handleChange = () => {
    onChange(!checked);
  };

  return (
    <label>
      <S.CheckboxContainer>
        <S.HiddenCheckbox checked={checked} onChange={handleChange} {...props} />
        <S.StyledCheckbox checked={checked} interminateChecked={interminateChecked}>
          {checked && !interminateChecked && <Icons.CheckIcon />}
          {checked && interminateChecked && <Icons.MinusIcon color={theme.palette.light.base} />}
          {!checked && interminateChecked && <Icons.MinusIcon color={theme.palette.light.base} />}
        </S.StyledCheckbox>
      </S.CheckboxContainer>

      {label}
    </label>
  );
};
