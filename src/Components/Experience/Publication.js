import React from 'react';
import Item from './ExpItems'
import bachLogo from '../../img/bach_logo.jpg'
import AppBarItem from '../AppBarItem';

const Detail = [
    "《科技创新导报》2016年01期 国际标准刊号:ISSN 1674-098X;国内统一刊号:CN 11-5640/N",
    "将碱改性的花生壳、小麦秸秆和玉米芯粉碎过筛，使用红外光谱仪测定三种材料的吸收峰",
    "设计单因素实验，测定亚甲基蓝初始浓度、反应时间、吸附剂量、溶液pH对吸附效果的影响",
    "使用紫外分光光度计测定亚甲基蓝浓度，数据采用Langmuire等温吸附方程和Freundlich等温吸附方程进行模拟"
]

const Publication = () => {
    return (
        <div>
            <AppBarItem title="论文发表"/>
            <Item logo={bachLogo} time="2016.04" title="《秸秆材料对水溶液中亚甲基蓝的吸附研究》" detail={Detail}/>
        </div>
    );
}

export default Publication;