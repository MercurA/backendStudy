import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Interfaces
import { IUserInfo } from '../../interfaces/IFormState';
import { dispatchFormToState } from '../../redux/actions/form/actionCreators';
// Redux
import { RootState } from '../../redux/store';
import CustomeButton from '../button/CustomeButton';
// Components
import CustomeTextInput from '../textInput/TextInput';
// Styles
import styles from './Styles';

const mapStateToProps = (state: RootState) => ({
    userInfo: state.formData?.userInfo
});

const mapDispatchToState = {
    dispatchFormToState
};

interface HomeProps {
    classes?: Record<string, string>;
    userInfo: IUserInfo[];
    dispatchFormToState: (payload: IUserInfo) => void;
}

class Home extends Component<HomeProps, Record<string, unknown>> {
    public render() {
        const { classes } = this.props;
        return (
            <Grid container alignContent={'center'} direction={'column'}>
                <Grid item xs={12}>
                    <CustomeButton type={'logout'} name={'Logout'} />
                </Grid>
                <Grid item xs={12}>
                    {this.renderList()}
                </Grid>
                <Grid item xs={12} className={classes.container}>
                    <CustomeTextInput
                        variant={'outlined'}
                        placeholder={'Write...'}
                        handleInput={this.handleInput}
                    />
                </Grid>
            </Grid>
        );
    }

    private renderList = () => {
        return this.props.userInfo?.map((user: IUserInfo, idx: number) => {
            return <p key={idx}>{user.name}</p>;
        });
    };

    private handleInput = (e) => {
        if (e.keyCode === 13) {
            this.props.dispatchFormToState({ name: e.target.value });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToState)(withStyles(styles)(Home));
