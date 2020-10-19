import { IUserInfo } from 'interfaces/IFormState';
import { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { RootState } from 'redux/store';

const mapStateToProps = (state: RootState) => ({
    user: state.userData.user
});

interface IHeaderBarProps {
    user: IUserInfo;
}

const HeaderBar: FunctionComponent<IHeaderBarProps> = ({ user }) => {
    return <div>{user?.name}</div>;
};

export default connect(mapStateToProps, null)(HeaderBar);
