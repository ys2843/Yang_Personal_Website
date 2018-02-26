import React from 'react';
import PersonalInfoIcon from 'material-ui-icons/Person';
import {Link} from 'react-router-dom'
import List, {ListItemText} from 'material-ui/List';
import ListButton from './ListButton'


const OptionalTileData = ({mobileOpen}) => {
    return (
        <List>
            <div style={{paddingLeft: 20, paddingBottom: 10, paddingTop: 10}}>
                <ListItemText secondary="Social Media"/>
            </div>
            <div>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <ListButton title='微信' handleDrawerToggle={mobileOpen}>
                        <PersonalInfoIcon/>
                    </ListButton>
                </Link>
            </div>
        </List>
    );
};

export default OptionalTileData;