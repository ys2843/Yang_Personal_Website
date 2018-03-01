import React from 'react';
import '../../css/styles.css';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';

const HobbiesItem = ({logo, title, description}) => {
    return (
        <Paper style={{display: 'flex', flexDirection:'row', padding: 20, marginBottom: 5}}>
            <img src={logo} alt="logo"/>
            <div style={{width: '100%', paddingLeft: 10, paddingTop: 10, paddingRight: 10}}>
                <Typography variant='title' gutterBottom={true}>
                    {title}
                </Typography>
                <Typography variant='body1'>
                    {description}
                </Typography>
            </div>
        </Paper>
    )
}

export default HobbiesItem;