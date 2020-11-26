import { Divider, IconButton, InputBase, makeStyles, Paper, Theme } from '@material-ui/core';
import React, { FunctionComponent, useEffect, useState } from 'react';

interface IBaseInput {
    handleSubmit?: (value: string) => void;
}

const BaseInput: FunctionComponent<IBaseInput> = ({ handleSubmit }) => {
    const classes = useStyle();
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (message.length === 0) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [message]);

    const handleChange = (e) => {
        if (e.target.value > 0) {
            setMessage(e.target.value);
        }
    };

    const onClick = (e) => {
        if (message.length > 0) {
            handleSubmit(e.target.value);
        } else {
            setError({
                messageError: 'No message sent'
            });
        }
    };

    const onEnter = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(message);
            setMessage(e.target.value);
        }
    };

    return (
        <Paper className={classes.root}>
            <InputBase
                id={'input'}
                className={classes.input}
                placeholder={'Type to chat.'}
                // value={message}
                onChange={handleChange}
                onKeyPress={onEnter}
            />
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton
                disabled={disabled}
                className={classes.iconButton}
                type={'submit'}
                onClick={onClick}>
                {'Submit'}
            </IconButton>
        </Paper>
    );
};

const useStyle = makeStyles((theme: Theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center'
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1
    },
    divider: {
        height: 28,
        margin: 4
    },
    iconButton: {
        padding: 10,
        fontSize: '16px'
    }
}));

export default BaseInput;
