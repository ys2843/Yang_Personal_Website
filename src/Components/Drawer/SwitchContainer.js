import React from 'react';
import Education from "../Education/Education";
import Experience from '../Experience/Experience'
import Skills from "../Awards/Skills";
import Hobbies from "../Hobbies/Hobbies";
import weChat from '../wechat';

import PersonalInfo from "../PersonalInfo/PersonalInfo";
import {
    Route,
    Switch
} from 'react-router-dom'

const SwitchContainer = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={PersonalInfo}/>
                <Route path="/education" component={Education}/>
                <Route path="/experience" component={Experience}/>
                <Route path="/hobbies" component={Hobbies}/>
                <Route path="/skills" component={Skills}/>
                <Route path="/wechat" component={weChat}/>
            </Switch>
        </div>
    )
}
export default SwitchContainer