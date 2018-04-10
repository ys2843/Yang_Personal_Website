import React from 'react';
import Item from './ExpItems';
import nyuLogo from '../../img/nyu_logo.png'
import '../../css/styles.css'
import buptLogo from '../../img/bupt_logo.png'
import AppBarItem from '../AppBarItem';

const Projects = () => {
    const Detail = [
        [
            "A dynamic Web project using AJAX, React, Node.js and MongoDB. URL: cosmeticsforpregnancy.com",
            "Developed a Single Page App in React for query harmful ingredients in cosmetic product, through combining React- Router and Redux, implemented routing and state management at client side",
            "Created back-end RESTful API using Node.js Express framework and deployed on Amazon EC2 CentOS, using Nginx\n" +
            "as reverse proxy and PM2 to manage process",
        ],
        [
            "Contributed to dataset processing using Pandas, and apply model selection methods including LASSO regularization, to filter high correlation factors",
            "Responsible for implementing variety of algorithms to calculate prediction models, including linear regression, neural\n" +
            "network and support vector machine"
        ],
        [
            "Designed and implemented speech recognition module through PyAudio and PocketSphinx library, applied multi- thread to run with Tkinter UI at the same time",
            "Contributed to implement video processing function like zoom, blur and brightness control through OpenCv2, and\n" +
            "enable filters loaded from Photoshop ACV file by Numpy"
        ],
        [
            "Responsible for designing database model according to paradigm, creating database and inserting test samples",
            "Contributed to front-end development including searching page, project page using Bootstrap and Jade, and back-end functions implementation including user login, project search and session, through Node.js Express framework"
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
        ],
        [
            "Designed URL and data extraction rules based on XPath and Regex, classify each product by analyzing ingredients in Pipelines and store in MongoDB",
            "Solved Javascript dynamic lazy-load problem, by adding Selenium Web driver as middleware, runing script in headless\n" +
            "Chrome to trigger Ajax request"
        ]
    ]
    const tech1 = [
        ["React", "Redux", "MongoDB", "Node.js"],
        ["Python", "Neural Network", "Support Vector Machine", "Model Selection", "Jupyter"],
        ["Pocketsphinx", "Tkinter", "Numpy", "Real Time Processing", "Opencv"],
        ["Node.js", "Bootstrap", "Mysql", "Express"],
        ["Pig Latin", "R"],
        ["Java", "Java Media Framework", "UI"],
        ["Python", " Web Crawler", "Scrapy"]
    ]
    return (
        <div>
            {
                window.innerWidth <= 500 ? <AppBarItem title="Internship & Projects"/> : <AppBarItem title="Projects"/>
            }
            <Item logo={nyuLogo} time="Feb 2018 - Apr 2018" topic="Web Developer" location="NYU"
                  projectUrl="https://github.com/ys2843/SkincareWebProject"
                  title="Skincare Ingredients Search Website" detail={Detail[0]} tech={tech1[0]}/>
            <Item logo={nyuLogo} time="Dec 2017 - Feb 2018" topic="Web Crawler Developer" location="NYU"
                  projectUrl="https://github.com/ys2843/sephoraCrawler"
                  title="A web crawler based on Python Scrapy librarye" detail={Detail[6]} tech={tech1[6]}/>
            <Item logo={nyuLogo} time="Oct 2017 - November 2017" topic="Python Developer" location="NYU"
                  projectUrl="https://github.com/ys2843/Selfie-Camera-with-Speech-Recognition"
                  title="Selfie Camera for Laptop with Speech Recognition" detail={Detail[2]} tech={tech1[2]}/>
            <Item logo={nyuLogo} time="Sep 2017 - November 2017" topic="Machine Learning Research" location="NYU"
                  projectUrl="https://github.com/godwinxunwang/el9123-project"
                  title="Prediction of Crime Occurrence Based on Local Demographic and Economic Data"
                  detail={Detail[1]} tech={tech1[1]}/>
            <Item logo={nyuLogo} time="Apr 2017 - May 2017" topic="Web Developer" location="NYU"
                  title="A crowed funding website implemented in Node.js, Mysql and Bootstrap" detail={Detail[3]}
                  tech={tech1[3]}
                  projectUrl="https://github.com/ooobread/NYU-Code"/>
            <Item logo={nyuLogo} time="Feb 2017 - May 2017" topic="Big Data Analysis" location="NYU"
                  projectUrl="https://github.com/ys2843/NYU_Million_Song_Dataset_Analysis"
                  title="Analysis on Million Songs Datasets" detail={Detail[4]} tech={tech1[4]}/>
            <Item logo={buptLogo} time="Nov 2015 - Apr 2016" topic="Java Developer" location="BUPT"
                  title="An Authoring Tool for Building Customized Study Guides" detail={Detail[5]} tech={tech1[5]}/>


        </div>
    );
}

export default Projects;
