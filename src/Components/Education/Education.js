import React from 'react';
import EduItem from './EduItem'
import buptLogo from '../../img/bupt_logo.png';
import nyuLogo from '../../img/nyu_logo.png';
import '../../css/styles.css'
import Paper from 'material-ui/Paper';
import AppBarItem from '../AppBarItem';
import Divider from 'material-ui/Divider'

const Education = () => {
    return (
        <div>
            <AppBarItem title="Education"/>
            <Paper>
                <EduItem Logo={nyuLogo} name="New York University" major="Computer Engineering" degree="M.Sci"
                         time="Aug 2016 - Present" award="Grad School of Engineering Scholarship"/>
                <Divider/>
                <EduItem Logo={buptLogo} name="Beijing University of Posts and Telecommunications"
                         major="Electrical Engineering" degree="B.A." time="Sep 2012 - Jun 2016" award="Third Prize Scholarship"/>
            </Paper>
        </div>
    );
}

export default Education;
