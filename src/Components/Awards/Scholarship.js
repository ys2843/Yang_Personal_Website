import React from 'react';
import '../../css/styles.css'
import GridList, {GridListTile, GridListTileBar} from 'material-ui/GridList';
import ScholarshipIcon from '../../img/scholarship.jpg';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import Grade from 'material-ui-icons/Grade';

const Scholarship = () => {
    const info = [
        "每学期院级一等奖学金(RMB800)",
        "江苏省政府海外学习奖学金(RMB10000)",
        "校级海外学习奖学金(RMB10000)",
        "“碧海蓝天”环境企业奖学金 (RMB 6000)"
    ]
    return (
        <div className='ItemPaper'>
            <GridList style={{width: 200}} cols={1}>
                <GridListTile>
                    <img src={ScholarshipIcon} alt="skills"/>
                    <GridListTileBar title="获得荣誉"/>
                </GridListTile>
            </GridList>
            <div style={{paddingLeft: 10, flexGrow: 1}}>
                <List>
                    {
                        info.map(item => (
                                <ListItem key={item} style={{paddingBottom: 5}}>
                                    <ListItemIcon>
                                        <Grade/>
                                    </ListItemIcon>
                                    <ListItemText secondary={item}/>
                                </ListItem>
                            )
                        )
                    }
                </List>
            </div>
        </div>
    );
}

export default Scholarship;