import styled from 'styled-components';

import { TitleProps } from './title-props';

export const TitleWrapper = styled.div<Pick<TitleProps, 'isSiteTitle'>>`
    ${({ isSiteTitle }) => isSiteTitle && `
        h3 {
            color: white !important;
            margin: 17px 0;
        }
    `}
`;
