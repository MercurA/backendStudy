import React, { FunctionComponent } from 'react';

// Components
import CustomeButton from '../components/button/CustomeButton';
// Styles
import { useStyle } from './styles/loginStyles';

const Login: FunctionComponent<Record<string, unknown>> = () => {
    const classes = useStyle();

    return (
        <div className={classes.loginContainer}>
            <CustomeButton name={'Login'} />
        </div>
    );
};

export default Login;
