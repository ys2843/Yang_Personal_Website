import React from 'react';
import Items from './ExpItems'
import stackLogo from '../../img/stackLogo.png';
import '../../css/styles.css'
import AppBarItem from '../AppBarItem'
import huaweiLogo from '../../img/huaweiLogo.png';

const sDetail = [
    "Participated in mobile app front-end development and data visualization using React Native, through working with UI designer, create corresponding view component",
    "Contributed to implement user authorization and authentication, through JWT(Javascript Web Token) and OAuth"
]

const hDetail = [
    "Worked as the project assistant to facilitate technical and administrative projects",
    "Worked on building and testing IMS on both server and client side with team. Monitored the working condition and data flow of client’s equipment"
]

const tech = [
    ["React Native", "Mobile App", "Frontend"],
    ["Assistant"]
]
const Internship = () => {
    return (
        <div>
            <AppBarItem title="Internship"/>
            <Items logo={stackLogo} time="Jan 2018 - Present" topic="Frontend Developer" title="MoneyWall"
                   position="Intern" tech={tech[0]}
                   location="Stack Technology, Inc." detail={sDetail}/>
            <Items logo={huaweiLogo} time="Feb 2016 - Mar 2016" topic="Project Assistant"
                   title="IMS (IP Multimedia Subsystem)" tech={tech[1]}
                   location="Huawei Corporation" detail={hDetail}/>
        </div>
    );
}

export default Internship;