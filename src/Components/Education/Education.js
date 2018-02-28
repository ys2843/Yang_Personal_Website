import React from 'react';
import EduItem from './EduItem'
import buptLogo from '../../img/bupt_logo.png';
import nyuLogo from '../../img/nyu_logo.png';
import '../../css/styles.css'
import Paper from 'material-ui/Paper';
import AppBarItem from '../AppBarItem';
import Divider from 'material-ui/Divider';

const Education = () => {
    const Bupt = [
        "1st Prize of Winter Sport Meeting(Rope Skipping) - 2013.12",
        "3st Prize of BUPT English Drama Competition - 2013.11",
        "Title of recreational and sports Activities Enthusiast - 2013.10",
        "2nd Prize of University Sport Meeting(Rope Skipping | Break Record) - 2013.4"
    ]
    const Nyu = [
        "Certificate of Professional Mentorship Program - 2017"
    ]
    return (
        <div>
            <AppBarItem title="Education"/>
            <Paper>
                <EduItem Logo={nyuLogo} url="http://engineering.nyu.edu/" name="New York University"
                         major="Computer Engineering" degree="M.Sci"
                         time="Aug 2016 - Present" award="Grad School of Engineering Scholarship"
                         optionalText="Relevant Course: Data Structure & Algorithm, Intro to Database, Programming for Big Data Analysis,
                         Machine learning, Operating System, Internet Architecutre & Protocol, Computer Architecture"
                         otheraward={Nyu}
                />
                <Divider/>
                <EduItem Logo={buptLogo} url="http://english.bupt.edu.cn/"
                         name="Beijing University of Posts and Telecommunications"
                         major="Electrical Engineering with Management" degree="B.A." time="Sep 2012 - Jun 2016"
                         award="Third Prize Scholarship"
                         optionalText="Relevant Course: Intro to Java, Human-Computer Interaction, C programming, Software Engineering"
                         otheraward={Bupt}
                />
            </Paper>
        </div>
    );
}

export default Education;
