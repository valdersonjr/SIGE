import { BigLogo } from "~/framework/atoms";
import RegisterBanner from "~/framework/templates/RegisterBanner/RegisterBanner.template";
import * as S from "./Registration.style";

const RegistrationPage:React.FC = () => {
    return(
        <S.Container>
            <S.LeftSideContainer>
                <RegisterBanner  />
            </S.LeftSideContainer>
            <S.RightSide>
                <BigLogo />
            </S.RightSide>
        </S.Container>
    )
}

export default RegistrationPage;