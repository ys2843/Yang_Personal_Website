import React from 'react';
import Table, {TableBody, TableRow, TableCell} from 'material-ui/Table';
import GridList, {GridListTile, GridListTileBar} from 'material-ui/GridList';
import SkillGroup from './SkillGroup';
import '../../css/styles.css';
import Chip from 'material-ui/Chip';
import DoneIcon from 'material-ui-icons/Done';

const SkillGroupSet = ({img, title, skillGroups, expskills}) => {

    const isMobile = window.innerWidth <= 500;

    if (isMobile) {
        return (
            <div className='ItemPaperMobile'>
                <GridList cols={1}>
                    <GridListTile>
                        <img src={img} alt="skills" style={{width: '100%', height: 'auto'}}/>
                        <GridListTileBar title={title}/>
                    </GridListTile>
                </GridList>
                <div style={{padding: 10, width: '100%'}}>
                    {
                        expskills ? expskills.map((item) => (
                                <Chip
                                    avatar={<DoneIcon/>}
                                    label={item}
                                    style={{margin: 8}}
                                />
                            )
                            )
                            : <Table>
                                <TableBody>
                                    {
                                        skillGroups.map((item) => (
                                                <TableRow key={item}>
                                                    <TableCell>
                                                        <SkillGroup percent={item.percent} title={item.title} isMobile={isMobile}/>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        )
                                    }
                                </TableBody>
                            </Table>
                    }
                </div>
            </div>
        )
    } else {
        return (
            <div className='ItemPaper'>
                <GridList cols={1}>
                    <GridListTile>
                        <img src={img} alt="skills" style={{width: '100%', height: 'auto'}}/>
                        <GridListTileBar title={title}/>
                    </GridListTile>
                </GridList>
                <div style={{paddingLeft: 20, paddingRight: 20, flexGrow: 1, width: '100%'}}>
                    {
                        expskills ? expskills.map((item) => (
                                <Chip
                                    avatar={<DoneIcon/>}
                                    label={item}
                                    style={{margin: 8}}
                                />
                            )
                            )
                            : <Table>
                                <TableBody>
                                    {
                                        skillGroups.map((item) => (
                                                <TableRow key={item}>
                                                    <TableCell>
                                                        <SkillGroup percent={item.percent} title={item.title} isMobile={isMobile}/>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        )
                                    }
                                </TableBody>
                            </Table>
                    }
                </div>
            </div>
        )
    }
}

export default SkillGroupSet;