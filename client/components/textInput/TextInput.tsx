import { TextField } from '@material-ui/core';
import React, { FunctionComponent, SyntheticEvent, useEffect, useState } from 'react';

interface ICustomeTextProps {
    name?: string;
    placeholder?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    variant?: any;
    handleInput?: (e: SyntheticEvent<HTMLDivElement>) => void;
}

const CustomeTextInput: FunctionComponent<ICustomeTextProps> = ({
    handleInput,
    name,
    placeholder,
    variant = 'standard'
}) => {
    const [value, setValue] = useState('');

    const checkKey = (e) => {
        if (e.keyCode === 13) {
            setValue('');
        }
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        document.addEventListener('keydown', checkKey, false);

        return () => {
            document.removeEventListener('keydown', checkKey, false);
        };
    }, []);

    return (
        <div>
            <TextField
                onKeyDown={handleInput}
                onChange={handleChange}
                value={value}
                name={name}
                variant={variant}
                placeholder={placeholder && placeholder}
            />
        </div>
    );
};

export default CustomeTextInput;
