import React from 'react';
import Typography from 'material-ui/Typography';
import '../../css/styles.css'

const EduItem = ({Logo, name, major, degree, time, GPA}) => {

    return (
        <div className='ItemPaper'>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <img src={Logo} alt="logo" style={{width: '100%'}}/>
                <Typography variant="caption" color='primary'>
                    {time}
                </Typography>
            </div>
            <div style={{width: '100%', paddingLeft: 10}}>
                <Typography variant="subheading" color="inherit" gutterBottom={true}>
                    {name}
                </Typography>
                <Typography variant="body1" color="inherit">
                    专业：{major} | 学位：{degree} | GPA：{GPA}
                </Typography>
            </div>
        </div>
    );
}


export default EduItem;
