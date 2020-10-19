import { makeStyles, Theme } from '@material-ui/core';

import makeStore from '../../redux/store';

export const useStyle = makeStyles((theme: Theme) => ({
    loginContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
}));
