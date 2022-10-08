import styled from 'styled-components';

import { LoaderProps } from './loader-props';

export const LoaderWrapper = styled.div<Pick<LoaderProps, 'withoutChildren'>>`
    width: 100%
    ${({ withoutChildren }) => withoutChildren && 'min-height: 100px;'}
`;
