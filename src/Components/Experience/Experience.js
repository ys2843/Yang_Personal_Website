import React from 'react';
import Internship from './Internship'
import Paper from 'material-ui/Paper';
import Projects from './Projects';

const Experience = () => {
    return (
        <Paper>
            <Projects/>
            <Internship/>
        </Paper>
    );
}

export default Experience;