import React from "react";

import { PostItProps } from "./PostIt.interface";

import * as S from './Post.style';

export const PostIt:React.FC<PostItProps> = ({title, content}) => {
    return(
        <S.Container>
            <S.Title>{title}</S.Title>
            <S.Content>{content}</S.Content>
        </S.Container>
    )
}

export default PostIt;