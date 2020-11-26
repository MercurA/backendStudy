import { makeStyles } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import strings from 'utils/constants';

const CustomeMenu1: FunctionComponent<Record<string, string>> = () => {
    const classes = useStyle();

    const renderOptions = () => {
        let options: Element[] = [];

        options = strings.menu1.options.map((el: Record<string, string>, idx: number) => (
            <option key={idx} value={el.value}>
                {el.label}
            </option>
        ));

        return options;
    };

    return (
        <>
            <label htmlFor={strings.menu1.id}>{strings.menu1.label}</label>
            <select
                className={classes.selectContainer}
                name={strings.menu1.name}
                id={strings.menu1.id}>
                {renderOptions()}
            </select>
        </>
    );
};

const useStyle = makeStyles(() => ({
    selectContainer: {
        width: '100%',
        height: 30,
        border: '0.5px solid black'
    }
}));

export default CustomeMenu1;
