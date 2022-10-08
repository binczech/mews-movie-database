import styled from 'styled-components';

import { ContentProps } from './context-props';

const contentBg = '#dfdede';

export const Container = styled.div<Pick<ContentProps, 'limitedWidth'>>`
    margin: 20px auto;
    border-radius: 5px;
    background-color: ${contentBg};
    padding: 15px;
    ${({ limitedWidth }) => limitedWidth && 'max-width: 500px;'}
`;
