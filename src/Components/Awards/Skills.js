import React from 'react';
import '../../css/styles.css'
import GridList, {GridListTile, GridListTileBar} from 'material-ui/GridList';
import Skill from '../../img/skill.png'
import Avatar from 'material-ui/Avatar'
import ArcMapLogo from '../../img/arcmap_logo.png'
import AutoCadLogo from '../../img/audocad_logop.png'
import excelLogo from '../../img/excel_logo.png'
import RLogo from '../../img/rlogo.png'
import List, {ListItem, ListItemAvatar, ListItemText} from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox';

const Skills = () => {
    return (
        <div className='ItemPaper'>
            <GridList style={{width: 200}} cols={1}>
                <GridListTile>
                    <img src={Skill} alt="skills"/>
                    <GridListTileBar title="专业技能"/>
                </GridListTile>
            </GridList>
            <div style={{paddingLeft: 10, flexGrow: 1}}>
                <List>
                    <ListItem style={{paddingBottom: 5}}>
                        <ListItemAvatar>
                            <Avatar alt="skill" src={ArcMapLogo}/>
                        </ListItemAvatar>
                        <ListItemText secondary="地球信息系统 ArcMAP"/>
                        <Checkbox checked={true}/>
                    </ListItem>
                    <ListItem style={{paddingBottom: 5}}>
                        <ListItemAvatar>
                            <Avatar alt="skill" src={AutoCadLogo}/>
                        </ListItemAvatar>
                        <ListItemText secondary="制图 AutoCad"/>
                        <Checkbox checked={true}/>
                    </ListItem>
                    <ListItem style={{paddingBottom: 5}}>
                        <ListItemAvatar>
                            <Avatar alt="skill" src={excelLogo}/>
                        </ListItemAvatar>
                        <ListItemText secondary="Excel 数据分析"/>
                        <Checkbox checked={true}/>
                    </ListItem>
                    <ListItem style={{paddingBottom: 5}}>
                        <ListItemAvatar>
                            <Avatar alt="skill" src={RLogo}/>
                        </ListItemAvatar>
                        <ListItemText secondary="R语言"/>
                        <Checkbox checked={true}/>
                    </ListItem>
                </List>

            </div>
        </div>
    );
}

export default Skills;