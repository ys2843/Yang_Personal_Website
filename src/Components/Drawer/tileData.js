import React from 'react';
import PersonalInfoIcon from 'material-ui-icons/Person';
import SchoolIcon from 'material-ui-icons/School';
import AwardsIcon from 'material-ui-icons/Star';
import HobbiesIcon from 'material-ui-icons/Favorite';
import ProjectIcon from 'material-ui-icons/Build';
import {Link} from 'react-router-dom'
import List, {ListItemText} from 'material-ui/List';
import ListButton from './ListButton'


const MailFolderListItems = ({mobileOpen}) => {
    return (
        <List>
            <div style={{paddingLeft: 20, paddingBottom: 10, paddingTop: 10}}>
                <ListItemText secondary="Facts about me"/>
            </div>
            <div>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <ListButton title='About' handleDrawerToggle={mobileOpen}>
                        <PersonalInfoIcon/>
                    </ListButton>
                </Link>
                <Link to="/education" style={{textDecoration: 'none'}}>
                    <ListButton title='Education' handleDrawerToggle={mobileOpen}>
                        <SchoolIcon/>
                    </ListButton>
                </Link>
                <Link to="/experience" style={{textDecoration: 'none'}}>
                    <ListButton title='Experience' handleDrawerToggle={mobileOpen}>
                        <ProjectIcon/>
                    </ListButton>
                </Link>
                <Link to="/awards" style={{textDecoration: 'none'}}>
                    <ListButton title='Skills' handleDrawerToggle={mobileOpen}>
                        <AwardsIcon/>
                    </ListButton>
                </Link>
                <Link to="/hobbies" style={{textDecoration: 'none'}}>
                    <ListButton title='Hobbies' handleDrawerToggle={mobileOpen}>
                        <HobbiesIcon/>
                    </ListButton>
                </Link>
            </div>
        </List>
    );
};

export default MailFolderListItems;