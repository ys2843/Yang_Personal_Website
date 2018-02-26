import React from 'react';
import Internship from './Internship'
import Paper from 'material-ui/Paper';
import Projects from './Projects';
import Publication from './Publication'

const Experience = () => {
    return (
        <div>
            <Paper className='expPaper'>
                <Projects/>
                <Internship/>
                <Publication/>
            </Paper>
        </div>
    );
}

export default Experience;