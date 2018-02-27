import React from 'react';
import Typography from 'material-ui/Typography';
import '../../css/styles.css'

const EduItem = ({Logo, name, major, degree, time, award}) => {

    return (
        <div className='ItemPaper'>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <img src={Logo} alt="logo" style={{width: '100%'}}/>
            </div>
            <div style={{width: '100%', paddingLeft: 10}}>
                <Typography variant="subheading" color="inherit" gutterBottom={true}>
                    {name}
                </Typography>
                <Typography variant="body1" color="inherit" gutterBottom={true}>
                    {degree} in {major}, {time}
                </Typography>
                <Typography variant="body1" color="inherit">
                    Awards: {award}
                </Typography>
            </div>
        </div>
    );
}


export default EduItem;
