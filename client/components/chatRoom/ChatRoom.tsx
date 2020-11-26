import BaseInput from '@components/textInput/BaseInput';
import { makeStyles } from '@material-ui/core';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const ChatRoom: FunctionComponent<Record<string, unknown>> = () => {
    const classes = useStyle();
    const [messages, setMessages] = useState([]);
    const socket = io('http://localhost:3001');

    useEffect(() => {
        socket.on('connection', () => {
            socket.on('chat message', (msg) => {
                console.log(msg);
                // socket.emit('chat message', message);
            });
        });
        return () => {
            socket.on('disconnect', () => {
                console.log('user disconnected');
            });
        };
    }, [messages]);

    const handleSubmit = (value: string) => {
        setMessages([...messages, value]);
        socket.emit('chat message', value);
    };

    const renderMsgList = () => {
        if (messages.length > 0) {
            return messages.map((message: string, idx: number) => <li key={idx}>{message}</li>);
        }
    };

    return (
        <div className={classes.container}>
            <div className={classes.positionList}>
                <ul>{renderMsgList()}</ul>
            </div>
            <div className={classes.positionInput}>
                <BaseInput handleSubmit={handleSubmit} />
            </div>
        </div>
    );
};

const useStyle = makeStyles(() => ({
    container: {
        width: '100%',
        height: '100vh'
    },
    positionList: {
        width: '100%',
        position: 'absolute',
        bottom: 10
    },
    positionInput: {
        width: '100%',
        position: 'absolute',
        bottom: 0
    }
}));

export default ChatRoom;
