import { useAuth0 } from '@auth0/auth0-react';
import Loading from '@components/loading/Loading';
import React, { FunctionComponent } from 'react';

import useStyle from './Styles';

interface LayoutProps {
    children?: unknown;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
    const classes = useStyle();
    const { isLoading } = useAuth0();

    return <div className={classes.container}>{isLoading ? <Loading /> : children}</div>;
};

export default Layout;
