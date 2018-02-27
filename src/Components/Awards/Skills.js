import React from 'react';
import '../../css/styles.css'
import GridList, {GridListTile, GridListTileBar} from 'material-ui/GridList';
import Skill from '../../img/skill.png'
import List, {ListItem, ListItemAvatar, ListItemText} from 'material-ui/List'

const Skills = () => {
    return (
        <div className='ItemPaper'>
            <GridList style={{width: 200}} cols={1}>
                <GridListTile>
                    <img src={Skill} alt="skills"/>
                    <GridListTileBar title="Frontend"/>
                </GridListTile>
            </GridList>
            <div style={{paddingLeft: 10, flexGrow: 1}}>
                <List>

                </List>

            </div>
        </div>
    );
}

export default Skills;