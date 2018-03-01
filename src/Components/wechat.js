import React from 'react';
import wechatImg from '../img/weixin.jpg';

const weChat = () => {
    return (
        <div style={{paddingTop: 10, width: '100%', display: 'flex', justifyContent: 'center'}}>
            <img src={wechatImg} alt='wechat' style={{maxWidth: window.innerWidth, maxHeight: window.innerHeight}}/>
        </div>
    )
}
export default weChat;