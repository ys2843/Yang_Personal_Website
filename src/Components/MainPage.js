import React from 'react';
import ResponsiveDrawer from './Drawer/ResponsiveDrawer';
import {
    BrowserRouter as Router,
} from 'react-router-dom';


const MainPage = () => {
    return (
        <Router>
            <ResponsiveDrawer/>
        </Router>
    );
}

export default MainPage;
