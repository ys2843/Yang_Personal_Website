import React from 'react';
import '../../css/styles.css';
import Skills from './Skills';
import Paper from 'material-ui/Paper';
import AppBarItem from '../AppBarItem';

const Awards = () => {
    return (
        <Paper>
            <AppBarItem title="Skills"/>
            <Skills/>
        </Paper>
    );
}

export default Awards;