import React from 'react';
import { SuspenseContainer } from './style';

interface SuspenseFallbackProps {}

const SuspenseFallback: React.FunctionComponent<SuspenseFallbackProps> = function () {
    return <SuspenseContainer>Loading...</SuspenseContainer>;
};

export default SuspenseFallback;
