import React from 'react';
import Typography from 'material-ui/Typography';
import Table, {TableBody, TableRow, TableCell} from 'material-ui/Table';
import '../../css/styles.css';
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';

const ExpItems = ({logo, topic, time, title, position, location, detail, tech}) => {
    return (
        <div className='ItemPaper'>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <img src={logo} alt="logo" style={{width: '100%'}}/>
                <Typography variant="caption" color='primary'>
                    {time}
                </Typography>
            </div>
            <div style={{width: '100%', paddingLeft: 10}}>
                <Typography variant="title" gutterBottom={true}>
                    {topic} - {location}
                </Typography>
                <Typography variant="subheading">
                    {title}
                </Typography>
                {
                    tech && tech.map((item) => (
                            <Chip label={item} style={{
                                borderRadius: 3,
                                margin: 5,
                                marginBottom: 10,
                                height: 20,
                                backgroundColor: '#DEEEEE',
                                color: '#1269EE'
                            }}/>
                        )
                    )
                }
                <Divider style={{paddingTop: 2}}/>
                <Table>
                    <TableBody>
                        {
                            detail.map((item) => (
                                    <TableRow key={item}>
                                        <TableCell>
                                            <Typography variant="caption">
                                                {item}
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                )
                            )
                        }
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}


export default ExpItems;