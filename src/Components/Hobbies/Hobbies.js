import React from 'react';
import AppBarItem from '../AppBarItem';
import Paper from 'material-ui/Paper';
import '../../css/styles.css';
import HobbiesItem from './HobbiesItem';
import piano from '../../img/hobbyPiano.jpg';
import ski from '../../img/hobbySki.jpg';
const Description = [
    ["I love piano, classical music and composing"],
    ["I love ski"]
]

const Hobbies = () => {
    return (
        <div>
            <AppBarItem title="Hobbies"/>
            <div>
                <HobbiesItem logo={piano} title='Piano' description={Description[0]}/>
                <HobbiesItem logo={ski} title='Ski' description={Description[1]}/>
            </div>
        </div>
    );
}

export default Hobbies;
