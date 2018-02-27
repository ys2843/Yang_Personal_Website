import React from 'react';
import Internship from './Internship'
import Paper from 'material-ui/Paper';
import Projects from './Projects';
const Experience = () => {
    return (
        <div>
            <Paper className='expPaper'>
                <Projects/>
                <Internship/>
            </Paper>
        </div>
    );
}

export default Experience;