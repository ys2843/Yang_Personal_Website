import React from 'react';
import Items from './ExpItems'
import vtLogo from '../../img/logo.png'
import '../../css/styles.css'
import AppBarItem from '../AppBarItem'
import InternLogo from '../../img/internLogo.jpeg'

const vtDetail = [
    "设计并组装浸没式厌氧式正向渗透膜生物反应器，使用正向渗透技术进行厌氧污泥浓缩",
    "使用EPA标准方法测定MLSS，VSS和总磷含量。使用液相色谱仪(HPLC)和UV-Vis",
    "测定挥发性脂肪酸(VFA)的含量",
    "使用统计学方法分析实验数据，包括Excel，Matlab和R"
]

const tcDetail = [
    "使用AutoCAD绘制工艺流程图",
    "记录每日进水流量，浊度，色度，使用国标法测定每日进水及出水COD浓度"
]

const Internship = () => {
    return (
        <div>
            <AppBarItem title="实习经历"/>
            <Items logo={vtLogo} time="2016.08-2017.09" title="课题: 探究在厌氧式正向渗透生物膜反应器中挥发性脂肪酸的产量" position="助研"
                         location="环境生物科技及生物能源实验室" detail={vtDetail}/>
            <Items logo={InternLogo} time="2015.07-2015.08" title="陕西省铜川市污水处理厂" position="实习生"
                         location="技术部门" detail={tcDetail}/>
        </div>
    );
}

export default Internship;