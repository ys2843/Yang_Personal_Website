import React from 'react';
import Item from './ExpItems';
import vtLogo from '../../img/logo.png'
import '../../css/styles.css'
import bach_logo from '../../img/bach_logo.jpg'
import AppBarItem from '../AppBarItem';

const Projects = () => {
    const Detail1 = [
        "对美国弗吉尼亚州内FallingCreekReservoir进行长达一年的取样, 取样为多点多水层，监测水中DO、N、P、Fe、Mn，E-Coli，algae浓度",
        "用Excel制图，分析并总结出湖水中各类监测物随降雨、季节、温度的变化规律",
        "用超声波和algeacide控制藻类生长;用絮凝沉淀和氧化物镀膜过滤网结合使用，降低水中溶解的Mn离子浓度"
    ]
    const Detail2 = [
        "使用BioWin软件优化Danvile污水处理厂的氮、磷去除率"
    ]
    const Detail3 = [
        "使用高压芬顿法和常温常压芬顿法法处理煤化工废水，设计正交试验优化工艺参数，设计单因素实验验证高盐废" +
        "水的处理效果",
        "使用国标法测定原水及废水的COD含量，确定最佳的过氧化氢及二价铁离子投加量"
    ]
    const Detail4 = [
        "使用碱改性的花生壳、小麦秸秆和玉米芯，处理含有亚甲基蓝、Cu2+、Pb2+、NO3-、PO4 3+的模拟废水，" +
        "分别针对不同研究对象设计单因素实验，确定最佳的吸附材料及投加量",
        "使用ICP-MS测定吸附后金属离子含量，使用ISE测定无机阴离子含量",
        "数据采用Langmuire等温吸附方程和Freundlich等温吸附方程进行模拟"
    ]
    return (
        <div>
            <AppBarItem title="项目经历"/>
            <Item logo={vtLogo} time="2016.09-2017.12" title="Falling Creek 湖水治理与监测" detail={Detail1}/>
            <Item logo={vtLogo} time="2016.09-2016.12" title="污水处理工艺流程设计" detail={Detail2}/>
            <Item logo={bach_logo} time="2016.02-2016.05" title="毕业论文:高压芬顿技术处理高含盐有机废水" detail={Detail3}/>
            <Item logo={bach_logo} time="2015.04-2016.03" title="江苏省大学生创新创业训练计划项目(项目编号:201510291088X)"
                  detail={Detail4}/>
        </div>
    );
}

export default Projects;
