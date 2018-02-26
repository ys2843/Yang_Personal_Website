import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const AppBarItem = ({title}) => {

    return (
        <AppBar style={{
            width: '100%',
            backgroundColor: '#77BA9B',
            height: 35,
            justifyContent: 'center',
            position: "sticky",
            top: 40
        }}>
            <Toolbar>
                <Typography variant="subheading" color="inherit">
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default AppBarItem;