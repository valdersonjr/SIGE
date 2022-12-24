import { SelectInLabelProps } from '@atoms/SelectInLabel/SelectInLabel.interface';

export interface InputSelectInLabelProps extends SelectInLabelProps {
    disabled?: boolean;
    onChange: (value: string) => void;
}
