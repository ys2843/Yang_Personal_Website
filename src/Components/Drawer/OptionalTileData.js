import React from 'react';
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
                <a href="https://github.com/ys2843" rel="noopener noreferrer" target='_blank' style={{textDecoration: 'none'}}>
                    <ListButton title='Github' handleDrawerToggle={mobileOpen}>
                        <svg style={{width: 24, height: 24}} viewBox="0 0 24 24">
                            <path fill="#757575"
                                  d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"/>
                        </svg>
                    </ListButton>
                </a>
                <a href="https://www.facebook.com/?ref=tn_tnmn" rel="noopener noreferrer" target='_blank' style={{textDecoration: 'none'}}>
                    <ListButton title='Facebook' handleDrawerToggle={mobileOpen}>
                        <svg style={{width: 24, height: 24}} viewBox="0 0 24 24">
                            <path fill="#757575"
                                  d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z"/>
                        </svg>
                    </ListButton>
                </a>
                <a href="https://www.linkedin.com/in/yang-shi-591056135" rel="noopener noreferrer" target='_blank' style={{textDecoration: 'none'}}>
                    <ListButton title='Linkedin' handleDrawerToggle={mobileOpen}>
                        <svg style={{width: 24, height: 24}} viewBox="0 0 24 24">
                            <path fill="#757575"
                                  d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"/>
                        </svg>
                    </ListButton>
                </a>
                <Link to="/wechat" style={{textDecoration: 'none'}}>
                    <ListButton title='WeChat' handleDrawerToggle={mobileOpen}>
                        <svg style={{width: 24, height: 24}} viewBox="0 0 24 24">
                            <path fill="#757575"
                                  d="M9.5,4C5.36,4 2,6.69 2,10C2,11.89 3.08,13.56 4.78,14.66L4,17L6.5,15.5C7.39,15.81 8.37,16 9.41,16C9.15,15.37 9,14.7 9,14C9,10.69 12.13,8 16,8C16.19,8 16.38,8 16.56,8.03C15.54,5.69 12.78,4 9.5,4M6.5,6.5A1,1 0 0,1 7.5,7.5A1,1 0 0,1 6.5,8.5A1,1 0 0,1 5.5,7.5A1,1 0 0,1 6.5,6.5M11.5,6.5A1,1 0 0,1 12.5,7.5A1,1 0 0,1 11.5,8.5A1,1 0 0,1 10.5,7.5A1,1 0 0,1 11.5,6.5M16,9C12.69,9 10,11.24 10,14C10,16.76 12.69,19 16,19C16.67,19 17.31,18.92 17.91,18.75L20,20L19.38,18.13C20.95,17.22 22,15.71 22,14C22,11.24 19.31,9 16,9M14,11.5A1,1 0 0,1 15,12.5A1,1 0 0,1 14,13.5A1,1 0 0,1 13,12.5A1,1 0 0,1 14,11.5M18,11.5A1,1 0 0,1 19,12.5A1,1 0 0,1 18,13.5A1,1 0 0,1 17,12.5A1,1 0 0,1 18,11.5Z"/>
                        </svg>
                    </ListButton>
                </Link>
            </div>
        </List>
    );
};

export default OptionalTileData;