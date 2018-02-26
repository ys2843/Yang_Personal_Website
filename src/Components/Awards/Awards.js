import React from 'react';
import '../../css/styles.css';
import Skills from './Skills';
import Scholarship from './Scholarship';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider'
import AppBarItem from '../AppBarItem';

const Awards = () => {
    return (
        <Paper>
            <AppBarItem title={"技能荣誉"}/>
            <Skills/>
            <Divider/>
            <Scholarship/>
        </Paper>
    );
}

export default Awards;