import React from 'react';
import Items from './ExpItems'
import stackLogo from '../../img/stackLogo.png';
import '../../css/styles.css'
import AppBarItem from '../AppBarItem'
import InternLogo from '../../img/internLogo.jpeg'
import huaweiLogo from '../../img/huaweiLogo.png';

const sDetail = [
    "Worked with UI designer to develop front end Views in React Native",
    "Contributed to develop children components and plot investment charts using Victory library"
]

const hDetail = [
    "Worked as the project assistant to facilitate technical and administrative projects",
    "Worked on building and testing IMS on both server and client side with team. Monitored the working condition and data flow of client’s equipment"
]

const Internship = () => {
    return (
        <div>
            <AppBarItem title="Internship"/>
            <Items logo={stackLogo} time="Jan 2018 - Present" topic="Frontend Developer" title="Main Project: MoneyWall"
                   position="Intern"
                   location="Stack Technology, Inc." detail={sDetail}/>
            <Items logo={huaweiLogo} time="Feb 2016 - Mar 2016" topic="Project Assistant"
                   title="Project Department: IMS(IP Multimedia Subsystem)"
                   location="Huawei Corporation" detail={hDetail}/>
        </div>
    );
}

export default Internship;