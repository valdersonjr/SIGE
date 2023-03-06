import * as S from './ReportsTableTitle.style';
import { ReportsTableTitleProps } from "./ReportsTableTitle.interface"

export const ReportsTableTitle: React.FC<ReportsTableTitleProps> = ({ titles }) => {
    return (
        <S.Container>
            {titles.map((item) => {
                let last = false;

                if(titles.length - 1 === item.key) last = true;

                return(
                    <S.RowSection last={last} key={item.key}><S.Text>{item.data}</S.Text></S.RowSection>
                )
            })}
        </S.Container>
    )
}
