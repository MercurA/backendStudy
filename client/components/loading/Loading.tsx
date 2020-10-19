import { CircularProgress } from '@material-ui/core';
import React, { FunctionComponent } from 'react';

const Loading: FunctionComponent<Record<string, unknown>> = () => {
    return <CircularProgress />;
};

export default Loading;
