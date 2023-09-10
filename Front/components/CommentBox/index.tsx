import React from "react";

import * as S from './styles'

type Props = {
    name: string;
    content: string;
    commentType: 'currentUser' | 'otherUsers';
}

export function CommentBox({name, content, commentType}: Props) {

    return (
        <S.Container userType={commentType}>
            <S.UserName>
                {name}
            </S.UserName>
            <S.UserComment>
                {content}
            </S.UserComment>
        </S.Container>
    )
}