import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import '../../css/styles.css'
import AppBarItem from '../AppBarItem';

const PersonalInfo = () => {
    return (
        <div className='ItemContainer'>
            <AppBarItem title="个人信息"/>
            <Paper className='ItemPaper'>
                <Typography variant="title" color="inherit" noWrap>
                    你好，我叫王晶
                </Typography>
            </Paper>
        </div>
    )
}

export default PersonalInfo;