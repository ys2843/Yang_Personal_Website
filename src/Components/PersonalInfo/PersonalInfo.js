import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import '../../css/styles.css';
import photo from '../../img/self.jpg';
import Avatar from 'material-ui/Avatar';
import background from '../../img/Sky.jpg';
import ReactRevealText from 'react-reveal-text/lib/ReactRevealText';

const style = {
    backgroundImage: `url(${background})`,
    //backgroundColor: "#4682B4",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10
}

const greeting = [
    "I am Yang Shi. I created this place for I want you to know more about me.",
    "I am a graduate student in New York University, major in Computer Engineering.",
    "I finished my bachelor degree in May 2016 from Beijing University of Posts and Telecommunications, major in Telecommunication Engineering with Management.",
    "I have experience of working in large company like Huawei Corporation, and in start-up company like Stack."
]

const hireMe = [
    "I have a strong passion on creating new things, by combining technology with ideas from my daily life.",
    "I am familiar with many web/mobile development frameworks, including React, React Native, Bootstrap, Node.js Express, Flask and RESTful.",
    "I am proficient in solving problems using programming and scripting languages, including Python, Java, Javascript.",
    "I am a fast learner and have done projects in various area, including web, mobile app, machine learning, big data analysis, open source project.",
    "I am fluent in English while Mandarin Chinese is my native language."
]

class PersonalInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({show: true});
        }, 500);
    }

    render() {
        return (
            <Paper style={{height: '100%'}}>
                <div style={style}>
                    <Avatar alt="Yang" style={{width: '15%', height: '15%'}}>
                        <img src={photo} alt='yang' style={{width: '100%'}}/>
                    </Avatar>
                </div>
                <div style={{padding: 20}}>
                    <Typography variant='title' align='center' gutterBottom={true}>
                        <ReactRevealText show={this.state.show}>
                            WELCOME TO MY WEBSITE!
                        </ReactRevealText>
                    </Typography>
                    <Typography variant='title' gutterBottom={true}>
                        Hello,
                    </Typography>
                    {
                        greeting.map((item) => {
                                return (
                                    <Typography key={item} variant='body1' gutterBottom={true}>
                                        {item}
                                    </Typography>
                                )
                            }
                        )
                    }
                    <Typography variant='title' gutterBottom={true}>
                        Why hire me?
                    </Typography>
                    {
                        hireMe.map((item) => {
                                return (
                                    <Typography key={item} variant='body1' gutterBottom={true}>
                                        {item}
                                    </Typography>
                                )
                            }
                        )
                    }
                </div>
            </Paper>
        )
    }
}

export default PersonalInfo;