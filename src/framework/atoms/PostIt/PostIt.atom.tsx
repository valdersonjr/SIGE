import React from "react";

import { PostItProps } from "./PostIt.interface";

import * as S from './Post.style';

export const PostIt:React.FC<PostItProps> = ({title, content}) => {
    return(
        <S.Container>
            <S.Title>{title}</S.Title>
            {content?.map((item) => 
                <S.Content>{item}</S.Content>
            )}
        </S.Container>
    )
}

export default PostIt;