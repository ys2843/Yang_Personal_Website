import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';
import MailFolderListItems from './tileData';
import SwitchContainer from './SwitchContainer'
import OptionalTileData from './OptionalTileData';

const drawerWidth = 200;

const styles = theme => ({
    root: {
        width: '100%',
        height: window.innerHeight,
        zIndex: 2
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    appBar: {
        position: 'fixed',
        marginLeft: drawerWidth,
        backgroundColor: '#9575cd',
        justifyContent: 'center',
        height: 40,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`
        },
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    drawerHeader: {
        height: 40
    }
    ,
    drawerPaper: {
        width: 200,
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            position: 'relative',
            height: '100%',
        },
    },
    drawer: {
        position: 'fixed',
        width: drawerWidth
    },

    content: {
        backgroundColor: 'LightGray',
        width: '100%',
        maxWidth: '100%',
        Height: '100%',
        zIndex: 1,
        marginTop: 40,
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 40px)',
            marginTop: 40,
        },
    },
});

class ResponsiveDrawer extends React.Component {
    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState({mobileOpen: !this.state.mobileOpen});
    };

    render() {
        const {classes, theme} = this.props;

        const drawer = (
            <div className={classes.drawer}>
                <div className={classes.drawerHeader}/>
                <Divider/>
                <MailFolderListItems mobileOpen={this.handleDrawerToggle}/>
                <Divider/>
                <OptionalTileData mobileOpen={this.handleDrawerToggle}/>
            </div>
        );

        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={this.handleDrawerToggle}
                                className={classes.navIconHide}
                            >
                                <MenuIcon/>
                            </IconButton>
                            {
                                window.innerWidth <= 500 ?
                                    <Typography variant="subheading" color="inherit" noWrap>
                                        Yang's Website
                                    </Typography> :
                                    <Typography variant="subheading" color="inherit" noWrap>
                                        Yang's Website | Objective: Software Development Engineer | Est Grad Date: May
                                        2018
                                    </Typography>
                            }
                        </Toolbar>
                    </AppBar>
                    <Hidden mdUp>
                        <Drawer
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={this.state.mobileOpen}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            onClose={this.handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden smDown implementation="css">
                        <Drawer
                            variant="permanent"
                            open
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <main className={classes.content}>
                        <SwitchContainer/>
                    </main>
                </div>
            </div>
        );
    }
}

ResponsiveDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(ResponsiveDrawer);