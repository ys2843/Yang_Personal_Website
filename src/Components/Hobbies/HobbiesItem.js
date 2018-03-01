import React from 'react';
import '../../css/styles.css';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';

const HobbiesItem = ({logo, title, description, url, urlTitle}) => {

    var isMobile = window.innerWidth <= 500;

    if (isMobile) {
        return (
            <div className='ItemPaperMobile'>
                <img src={logo} alt="logo"/>
                <div style={{width: '100%', padding: 10}}>
                    <Typography variant='subheading' gutterBottom={true}>
                        {title}
                    </Typography>
                    <Typography variant='caption' gutterBottom={true}>
                        {description}
                    </Typography>
                    <a href={url} alt="Composition" target="_blank">
                        <Typography color='primary'>
                            {urlTitle}
                        </Typography>
                    </a>
                </div>
            </div>
        )
    } else {
        return (
            <div className='ItemPaper'>
                <img src={logo} alt="logo"/>
                <div style={{width: '100%', paddingLeft: 10}}>
                    <Typography variant='subheading' gutterBottom={true}>
                        {title}
                    </Typography>
                    <Typography variant='caption'>
                        {description}
                    </Typography>
                    <a href={url} alt="Composition" target="_blank">
                        <Typography color='primary' variant='caption'>
                            {urlTitle}
                        </Typography>
                    </a>
                </div>
            </div>
        )
    }
}

export default HobbiesItem;