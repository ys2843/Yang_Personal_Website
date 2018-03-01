import React from 'react';
import Typography from 'material-ui/Typography';
import {Line} from 'rc-progress';

const SkillGroup = ({title, percent, isMobile}) => {

    var swidth = 1.5;
    if (isMobile) {
        swidth = 4;
    }

    return (
        <div>
            <Typography variant={"subheading"} gutterBottom={true}>
                {title}
            </Typography>
            <Line percent={percent} strokeWidth={swidth} trailWidth={swidth} strokeColor="#4983B2"/>
        </div>
    );
}

export default SkillGroup;