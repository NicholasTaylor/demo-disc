/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
import CustomFonts from "../components/Fonts";
import { fontFamily, gibson, fontSize, fontWeight } from '../constants/style';

export default function HomeTest(){
    return(
        <div>
            <CustomFonts />
            <div
                css={css`
                    background-color: black;
                    color:white;
                    font-family: ${gibson}, ${fontFamily}
                `}
            >
                Hello World!
            </div>
        </div>
    )
}