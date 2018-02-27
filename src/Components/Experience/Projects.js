import React from 'react';
import Item from './ExpItems';
import nyuLogo from '../../img/nyu_logo.png'
import '../../css/styles.css'
import buptLogo from '../../img/bupt_logo.png'
import AppBarItem from '../AppBarItem';

const Projects = () => {
    const Detail = [
        [
            "Developed a website for searching weather the ingredients in a skincare product is safe for pregnancy women to use",
            "Developed a web crawler based on Python Scrapy library to fetch all the information of skincare products on ‘Sephora’ website, and use a pipeline to filter harmful ingredients, then store the items into MongoDB",
            "Implemented RESTful API using Python Flask framework and front end using React, React-router and Redux"
        ],
        [
            "Implemented Linear Regression, Support Vector Machine and Neural Network algorithms to conduct a comparative study",
            "Applied model selection methods including LASSO Regularization to analyze relative importance of different factors"
        ],
        [
            "Developed a selfie camera application for laptop in Python, with speech recognition that users can interact with by speaking, which involves both real time processing of audio and video. ",
            "Contributed to implement speech recognition by using Pyaudio for audio IO and CMU Sphinx API for speech recognition, and video rendering by using Opencv2 for video IO and filtering"
        ],
        [
            "Developed a crowdfunding website project with one partner. The project contains a database based on Mysql and a website",
            "Contributed to build the front-end web page in Jade using Bootstrap including project searching page, project profile page etc. Implemented the back-end server using Node JS Express framework. Functions include session, communicating with database, login authentication, search function etc"
        ],
        [
            "Researched different aspects of contemporary songs on Million Songs Datasets, Yahoo Songs Rating datasets and Google trends based on Hadoop, Pig Latin spark and R",
            "Wrote the code of data extraction and mining the trends of popularity of songs and genres in chronological order and plotted the results into graphs using ggplot library in R"
        ],
        [
            "Developed a multimedia authoring tool with JMF (Java Media Framework) written in Java.",
            "Built functions according to user requirements, with study guides that could contain different file formats such as PPT, video,\n" +
            "audio, and with self-log, quiz and progress check functions etc",
            "Contributed to the design of simple user interfaces for creating and reading study guides"
        ]
    ]
    const tech1 = [
        ["React", "Redux", "MongoDB", "Flask", "Web Crawler", "Scrapy"],
        ["Python", "Neural Network", "Support Vector Machine", "Model Selection", "Jupyter"],
        ["Pocketsphinx", "Tkinter", "Numpy", "Real Time Processing", "Opencv"],
        ["Node.js", "Bootstrap", "Mysql", "Express"],
        ["Pig Latin", "R"],
        ["Java", "Java Media Framework", "UI"]
    ]
    return (
        <div>
            <AppBarItem title="Projects"/>
            <Item logo={nyuLogo} time="Dec 2017 - Present" topic="Web Developer" location="NYU"
                  title="Skincare Ingredients Search Website based on Web Crawler" detail={Detail[0]} tech={tech1[0]}/>
            <Item logo={nyuLogo} time="Sep 2017 - November 2017" topic="Machine Learning Research" location="NYU"
                  title="Prediction and Analysis of Crime Occurrence Based on Local Demographic and Economic Data"
                  detail={Detail[1]} tech={tech1[1]}/>
            <Item logo={nyuLogo} time="Oct 2017 - November 2017" topic="Python Developer" location="NYU"
                  title="Selfie Camera for Laptop with Speech Recognition" detail={Detail[2]} tech={tech1[2]}/>
            <Item logo={nyuLogo} time="Apr 2017 - May 2017" topic="Web Developer" location="NYU"
                  title="Crowdfunding Website " detail={Detail[3]} tech={tech1[3]}/>
            <Item logo={nyuLogo} time="Feb 2017 - May 2017" topic="Big Data Analysis" location="NYU"
                  title="Analysis on Million Songs Datasets" detail={Detail[4]} tech={tech1[4]}/>
            <Item logo={buptLogo} time="Nov 2015 - Apr 2016" topic="Java Developer" location="BUPT"
                  title="An Authoring Tool for Building Customized Study Guides" detail={Detail[5]} tech={tech1[5]}/>


        </div>
    );
}

export default Projects;
