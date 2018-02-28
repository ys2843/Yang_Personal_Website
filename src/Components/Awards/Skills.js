import React from 'react';
import '../../css/styles.css'
import frontendImg from '../../img/skill.png';
import SkillGroupSet from './SkillGroupSet';
import Paper from 'material-ui/Paper';
import AppBarItem from '../AppBarItem';
import other from '../../img/others.jpeg';
import backendImg from '../../img/backend.png';
import plImg from '../../img/pl.jpg';

const Skills = () => {
    const skillGroups = [
        [
            {title: 'React | React Native', percent: 90},
            {title: 'Javascript | RESTful API | AJAX | SPA', percent: 85},
            {title: 'HTML | CSS | Bootstrap', percent: 80}
        ],
        [
            {title: 'MySQL', percent: 85},
            {title: 'MongoDB | NoSQL', percent: 75},
            {title: 'Python Flask', percent: 80},
            {title: 'Node.js | Express.js', percent: 75}
        ],
        [
            {title: 'Git', percent: 90},
            {title: 'Web Spider(Python)', percent: 80},
            {title: 'Machine Learning', percent: 70}
        ]
    ]
    const expSkills = [
        "Java", "PHP", "C", "Pig Latin", "R", "Spark", "Docker", "Hadoop", "Amazon AWS S3", "Data Analysis", "UX/UI Design"
    ]
    return (
        <div>
            <AppBarItem title="Skills"/>
            <Paper>
                <SkillGroupSet img={frontendImg} title="Front-End" skillGroups={skillGroups[0]}/>
                <SkillGroupSet img={backendImg} title={"Back-End"} skillGroups={skillGroups[1]}/>
                <SkillGroupSet img={other} title={"Other"} skillGroups={skillGroups[2]}/>
                <SkillGroupSet img={plImg} title={"Experienced"} expskills={expSkills}/>
            </Paper>
        </div>
    );
}

export default Skills;