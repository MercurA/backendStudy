import { useAuth0 } from '@auth0/auth0-react';
// Component
import Home from '@components/home/Home';
import { IUser } from 'interfaces/IUserState';
import Router from 'next/router';
import React, { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';

// Redux
import { dispatchUserToState } from '../redux/actions/user/creators';
import { RootState } from '../redux/store';

const mapStateToProps = (state: RootState) => ({
    user: state.userData?.user
});

const mapDispatchToProps = {
    dispatchUserToState
};

interface IMainHomeProps {
    dispatchUserToState: (payload: IUser) => void;
}

const MainHome: FunctionComponent<IMainHomeProps> = ({ dispatchUserToState }) => {
    const { isAuthenticated, isLoading, user } = useAuth0();

    useEffect(() => {
        if (isAuthenticated && !isLoading) {
            dispatchUserToState(user);
        } else {
            Router.push({ pathname: '/login' });
        }
    }, [user, isAuthenticated]);

    return <div>{isAuthenticated && <Home />}</div>;
};

export default connect(mapStateToProps, mapDispatchToProps)(MainHome);
