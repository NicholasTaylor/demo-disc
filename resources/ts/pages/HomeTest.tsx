/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
import CustomFonts from "../components/Fonts";
import { fontFamily, gibson, fontSize, fontWeight, space } from '../constants/style';

export default function HomeTest(){
    return(
        <div>
            <CustomFonts />
            <div
                css={css`
                    text-align: center;
                    padding: 1em;
                `}
            >
                <div
                    css={css`
                        font-family: ${gibson}, ${fontFamily};
                        font-weight: ${fontWeight['bold']};
                        letter-spacing: ${space[1]};
                        font-size: ${fontSize[8]};
                        text-transform: uppercase;
                
                    `}
                >
                    Demo Disc
                </div>
            </div>
        </div>
    )
}