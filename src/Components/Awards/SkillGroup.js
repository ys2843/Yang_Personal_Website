import React from 'react';
import Typography from 'material-ui/Typography';
import {Line} from 'rc-progress';

const SkillGroup = ({title, percent}) => {

    const isMobile = window.innerWidth <= 500;

    if (isMobile) {
        return (
            <div style={{display:'flex',  width: '100%', paddingBottom: 5}}>
                <Typography variant={"subheading"} gutterBottom={true}>
                    {title}
                </Typography>
                <Line percent={percent} strokeWidth={1.5} trailWidth={1.5} strokeColor="#4983B2"/>
            </div>
        );
    } else {
        return (
            <div style={{width: '100%', paddingBottom: 5}}>
                <Typography variant={"subheading"} gutterBottom={true}>
                    {title}
                </Typography>
                <Line percent={percent} strokeWidth={1.5} trailWidth={1.5} strokeColor="#4983B2"/>
            </div>
        );
    }
}

export default SkillGroup;