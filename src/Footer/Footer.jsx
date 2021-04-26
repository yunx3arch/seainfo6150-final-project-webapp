import React from 'react';
import style from './Footer.module.css'

const Footer = () => (
    <div className={style.footer}>
        <div >
            <div className={style.copyRight}> ©2021 6150 Tech Review</div>
            <p className={style.intro}>Our mission is to bring about better-informed and more conscious <br/>
                decisions about technology through authoritative, influential, <br/>
                and trustworthy journalism.</p>
        </div>
        
    </div>
);

export default Footer;