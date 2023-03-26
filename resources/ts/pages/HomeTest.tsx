/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';

export default function HomeTest(){
    return(
        <div
            css={css`
                background-color: black;
                color:white;
            `}
        >
            Hello World!
        </div>
    )
}