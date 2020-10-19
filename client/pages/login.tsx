import React, { FunctionComponent } from 'react';

import CustomeButton from '../components/button/CustomeButton';
import { useStyle } from './styles/loginStyles';

const Login: FunctionComponent<Record<string, unknown>> = () => {
    const classes = useStyle();

    return (
        <div className={classes.loginContainer}>
            <CustomeButton name={'Login'} />
            {/* <Grid item xs={12}></Grid>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}></Grid> */}
        </div>
    );
};

export default Login;
