import React, {Component} from 'react';
import {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';

class ListButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            focus: false,
            title: this.props.title,
            Icon: this.props.Icon
        }
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
    }

    handleOnClick = (e) => {
        this.setState({
            backgroundColor: 'lavender',
            focus: true
        })
        this.props.handleDrawerToggle();
    }

    handleOnBlur = (e) => {
        this.setState({
            backgroundColor: 'white',
            focus: false
        })
    }

    render() {
        return (
            <div onClick={this.handleOnClick} onBlur={this.handleOnBlur}
                 style={{backgroundColor: this.state.backgroundColor}}>
                <ListItem button style={{paddingTop:8, paddingBottom:8}}>
                    <ListItemIcon>
                        {this.props.children}
                    </ListItemIcon>
                    {
                        !this.state.focus && <ListItemText secondary={this.state.title}/>
                    }
                    {
                        this.state.focus && <ListItemText primary={this.state.title}/>
                    }
                </ListItem>
            </div>
        )
    }
}

export default ListButton;