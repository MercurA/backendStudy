import { useAuth0 } from '@auth0/auth0-react';
import ChatRoom from '@components/chatRoom/ChatRoom';
import { IUser } from 'interfaces/IUserState';
import Router from 'next/router';
import React, { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import { dispatchSpellsToState } from 'redux/actions/form/actionCreators';

import { dispatchUserToState } from '../redux/actions/user/creators';
import { RootState } from '../redux/store';

const mapStateToProps = (state: RootState) => ({
    user: state.userData?.user,
    spells: state?.formData?.spells
});

const mapDispatchToProps = {
    dispatchUserToState,
    dispatchSpellsToState
};

interface IMainHomeProps {
    spells: Record<string, string>[];
    dispatchUserToState: (payload: IUser) => void;
    dispatchSpellsToState: () => void;
}

const MainHome: FunctionComponent<IMainHomeProps> = ({ dispatchUserToState, spells }) => {
    const { isAuthenticated, isLoading, user } = useAuth0();

    useEffect(() => {
        if (isAuthenticated && !isLoading) {
            dispatchUserToState(user);
        } else {
            Router.push({ pathname: '/login' });
        }
    }, [user, isAuthenticated]);

    useEffect(() => {
        if (spells.length === 0) {
            dispatchSpellsToState();
        }
    }, [spells]);

    return (
        <div>
            {isAuthenticated && (
                <div>
                    <ChatRoom />
                </div>
            )}
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainHome);
