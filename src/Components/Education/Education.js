import React from 'react';
import EduItem from './EduItem'
import Logo from '../../img/logo.png';
import Logo_ba from '../../img/bach_logo.jpg'
import Logo_tr from '../../img/logo-syd.jpg'
import '../../css/styles.css'
import Paper from 'material-ui/Paper';
import AppBarItem from '../AppBarItem';
import Divider from 'material-ui/Divider'

const Education = () => {
    return (
        <div>
            <AppBarItem title="教育背景"/>
            <Paper>
                <EduItem Logo={Logo} name="美国弗吉尼亚理工" major="环境工程" degree="硕士" time="2016.9-2018.5" GPA="3.6/4.0"/>
                <Divider/>
                <EduItem Logo={Logo_tr} name="澳大利亚悉尼大学" major="市场营销课程" degree="交换生" time="2014.7-2014.8" GPA="90/100"/>
                <Divider/>
                <EduItem Logo={Logo_ba} name="南京工业大学" major="环境工程" degree="本科" time="2012.9-2016.6" GPA="3.7/4.0"/>
            </Paper>
        </div>
    );
}

export default Education;
