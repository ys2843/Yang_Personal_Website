import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import '../../css/styles.css'
import AppBarItem from '../AppBarItem';

const PersonalInfo = () => {
    return (
        <div className='ItemContainer'>
            <AppBarItem title="Personal Information"/>
            <Paper className='ItemPaper'>
                <Typography variant="title" color="inherit" noWrap>
                    Hello, I am Yang.
                </Typography>
            </Paper>
        </div>
    )
}

export default PersonalInfo;