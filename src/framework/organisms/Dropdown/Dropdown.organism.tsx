import React, { useState } from 'react';

import { DropdownHeader } from '~/framework/molecules';

import { DrodownProps } from './Dropdown.interface';

import * as S from './Dropdown.style';

export const Dropdown: React.FC<DrodownProps> = ({ title, children }) => {
    const [dropdownState, setDropdownState] = useState<boolean>(true);

    return (
        <S.Container>
            <DropdownHeader title={title} dropdownState={dropdownState} setDropdownState={setDropdownState} />
            {dropdownState ? <S.DropdownBody> {children} </S.DropdownBody> : <></>}
        </S.Container>
    )
}

export default Dropdown;