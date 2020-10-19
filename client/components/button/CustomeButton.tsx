import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';

import { useStyle } from './Styles';
const { publicRuntimeConfig } = getConfig();

interface ICustomeButtonProps {
    name: string;
    type?: string;
    handleClick?: (e) => void;
}

const CustomeButton: FunctionComponent<ICustomeButtonProps> = ({ name, type = 'login' }) => {
    const classes = useStyle();
    const { loginWithRedirect, logout } = useAuth0();
    const { query } = useRouter();
    return type === 'login' ? (
        <Button
            onClick={() => loginWithRedirect({ appState: { returnTo: { pathname: '/', query } } })}
            className={classes.buttonContainer}>
            {name}
        </Button>
    ) : (
        <Button onClick={() => logout({ returnTo: publicRuntimeConfig.login })}>{name}</Button>
    );
};

export default CustomeButton;
