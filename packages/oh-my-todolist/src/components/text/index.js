import React from 'react';
import styled from 'styled-components';
import { font, grayScaleColor } from 'styles/themes';

export const Text = styled.span`
    font-family: ${font};
    color: ${grayScaleColor};
    font-size: 13px;
    font-weight: 400;
    line-height: 1.5;
`;

export const TextBold = styled(Text)`
    font-weight: 600;
`

export const TextMark = styled(Text)`
    font-size: 11px;
`

export const Title = styled(Text)`
  font-size: 20px;
  font-weight: bold;
`

export const SubTitle = styled(Text)`
  font-size: 11px;
`