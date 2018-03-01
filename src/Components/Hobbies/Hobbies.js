import React from 'react';
import AppBarItem from '../AppBarItem';
import '../../css/styles.css';
import HobbiesItem from './HobbiesItem';
import piano from '../../img/hobbyPiano.jpg';
import ski from '../../img/hobbySki.jpg';
import draw from '../../img/draw.jpg';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';


const Description = [
    ["I love music, especially classical piano music. My favorite composers are Bach, Mozart, Beethoven, Chopin and Tchaikovsky." +
    " I started to play piano since high school and enjoy it all the time. Sometimes I also compose my own piece of music for fun. "],
    ["Skiing is my favorite sport and it also brings me good luck. It was in a ski resort in Grindelwald, Switzerland, where I first met my wife and we fell in love."],
    ["I love drawing since I was very young. At that time I was full of creativity and love to draw whatever in my mind."]
]

const Hobbies = () => {
    return (
        <Paper>
            <AppBarItem title="Hobbies"/>
            <HobbiesItem logo={piano} title='PIANO' description={Description[0]}
                         url="https://www.youtube.com/watch?v=R_qygxgC5TU"
                         urlTitle="Click here to checkout my work on Youtube"/>
            <Divider/>
            <HobbiesItem logo={ski} title='SKI' description={Description[1]}/>
            <Divider/>
            <HobbiesItem logo={draw} title='DRAWING' description={Description[2]}/>
        </Paper>
    );
}

export default Hobbies;
