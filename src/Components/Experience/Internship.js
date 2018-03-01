import React from 'react';
import Items from './ExpItems'
import stackLogo from '../../img/stackLogo.png';
import '../../css/styles.css'
import AppBarItem from '../AppBarItem'
import huaweiLogo from '../../img/huaweiLogo.png';

const sDetail = [
    "Worked with UI designer to develop front end Views in React Native",
    "Contributed to plot investment charts using Victory library, user authentication using Asyncstorage and JWT (Jason Web Token)"
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