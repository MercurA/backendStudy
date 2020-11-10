import { makeStyles, Theme } from '@material-ui/core';
import React, { FunctionComponent } from 'react';

interface CustomeButton1Props {
    name: string;
    buttonType?: 'submit' | 'reset' | 'button';
    variant?: 'outlined' | 'standard';
    color?: 'primary' | 'secundary' | 'error' | 'warning';
    handleClick?: (e) => void;
}

const CustomeButton1: FunctionComponent<CustomeButton1Props> = ({
    name,
    handleClick,
    buttonType,
    color,
    variant = 'standard'
}) => {
    const classes = useStyle(variant, color)();

    return (
        <button className={classes.buttonContainer} onClick={handleClick} type={buttonType}>
            {name}
        </button>
    );
};

const useStyle = (variant: string, color: string) =>
    makeStyles((theme: Theme) => ({
        buttonContainer: {
            ...setButtonVariant(variant, color, theme),
            borderRadius: 5,
            width: 100,
            height: 30,
            '&:active': {
                border: '0.2px solid black'
            }
        }
    }));

function setButtonVariant(variant: string, color: string, theme: Theme): Record<string, string> {
    if (variant === 'outlined' && color === 'primary') {
        return {
            background: 'transparent',
            borderTop: `0.2px solid ${theme.palette.primary.main}`,
            borderBottom: `0.2px solid ${theme.palette.primary.main}`,
            borderLeft: `0.2px solid ${theme.palette.primary.main}`,
            borderRight: `0.2px solid ${theme.palette.primary.main}`
        };
    }
}

export default CustomeButton1;
