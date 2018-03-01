import React from 'react';
import AppBarItem from '../AppBarItem';
import Paper from 'material-ui/Paper';
import '../../css/styles.css';

const Hobbies = () => {
    return (
        <div>
            <AppBarItem title="Hobbies"/>
            <Paper className='ItemPaper'>
                Hobbies
            </Paper>
        </div>
    );
}

export default Hobbies;
