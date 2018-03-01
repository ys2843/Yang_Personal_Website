import React from 'react';
import Typography from 'material-ui/Typography';
import '../../css/styles.css';
import Tooltip from 'material-ui/Tooltip';
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import List, {ListItem, ListItemText} from 'material-ui/List';

const EduItem = ({Logo, url, name, major, degree, time, award, optionalText, otheraward}) => {
    const isMobile = window.innerWidth <= 500;

    if (isMobile) {
        return (
            <div className='ItemPaperMobile'>
                <a href={url} alt="University Link" target="_blank">
                    <img src={Logo} alt="logo" style={{width: '80%'}}/>
                </a>
                <div style={{width: '100%'}}>
                    <Typography variant="subheading" color="primary" gutterBottom={true}>
                        {name}
                    </Typography>
                    <Typography variant="body1" color="inherit" gutterBottom={true}>
                        {degree} in {major}, {time}
                    </Typography>
                    <div className='EduOptionaTextContainer'>
                        <Typography variant="caption" color="inherit">
                            {optionalText}
                        </Typography>
                    </div>
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                            <Typography variant="body1" color="inherit"
                                        gutterBottom={true}>Awards: {award}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <List>
                                {
                                    otheraward && otheraward.map((item) => (
                                        <ListItem key={item}>
                                            <ListItemText secondary={item}/>
                                        </ListItem>)
                                    )
                                }
                            </List>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
            </div>
        );
    } else {
        return (
            <div className='ItemPaper'>
                <Tooltip title="Go to Link" placement="top"
                         style={{
                             display: 'flex',
                             flexDirection: 'column',
                             justifyContent: 'center',
                             alignItems: 'center'
                         }}>
                    <a href={url} alt="University Link" target="_blank">
                        <img src={Logo} alt="logo" style={{width: '100%'}}/>
                    </a>
                </Tooltip>
                <div style={{width: '100%', paddingLeft: 10}}>
                    <Typography variant="subheading" color="primary" gutterBottom={true}>
                        {name}
                    </Typography>
                    <Typography variant="body1" color="inherit" gutterBottom={true}>
                        {degree} in {major}, {time}
                    </Typography>
                    <div className='EduOptionaTextContainer'>
                        <Typography variant="caption" color="inherit">
                            {optionalText}
                        </Typography>
                    </div>
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                            <Tooltip title="Show all awards" placement="right">
                                <Typography variant="body1" color="inherit"
                                            gutterBottom={true}>Awards: {award}</Typography>
                            </Tooltip>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <List>
                                {
                                    otheraward && otheraward.map((item) => (
                                        <ListItem key={item}>
                                            <ListItemText secondary={item}/>
                                        </ListItem>)
                                    )
                                }
                            </List>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
            </div>);
    }

}
export default EduItem;
