import {
  default as ReactSelect,
  components,
  OptionProps,
  Options as OptionType,
  Props,
  MultiValue,
} from 'react-select';

import { Checkbox } from '@atoms';
import React, { useState } from 'react';

type PropertyType = { value: string; label: string };

export const colourOptions: OptionType<PropertyType> = [
  { value: 'ocean1', label: 'Ocean' },
  { value: 'blue', label: 'Blue' },
  { value: 'purple', label: 'Purple' },
  { value: 'red', label: 'Red' },
  { value: 'orange', label: 'Orange' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'green', label: 'Green' },
  { value: 'forest', label: 'Forest' },
  { value: 'slate', label: 'Slate' },
  { value: 'silver', label: 'Silver' },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any

export const InputSelect: React.FC<Props> = () => {
  const [optionsValue, setOptionsValue] = useState<MultiValue<PropertyType>>();
  const handleChange = (prop: MultiValue<PropertyType>) => {
    setOptionsValue(prop);
  };

  const Option = (props: OptionProps<PropertyType>) => {
    return (
      <components.Option {...props}>
        <Checkbox label={props.label} onChange={() => null} checked={props.isSelected} />
      </components.Option>
    );
  };

  return (
    <div style={{ maxWidth: '100%', minWidth: '100%' }}>
      <ReactSelect
        options={colourOptions}
        isMulti
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        menuPosition='fixed'
        menuPlacement='auto'
        components={{
          Option,
        }}
        placeholder='Selecione a opção desejada'
        noOptionsMessage={() => <div>Nenhuma opção encontrada</div>}
        onChange={handleChange}
        value={optionsValue}
      />
    </div>
  );
};
