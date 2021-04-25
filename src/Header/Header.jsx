import React from 'react';
import style from './Header.module.css';
import image from '../logo.svg';


 
const Header = () => {
    return (
        <div className={style.header}>
        <a href ={"/"}><img className={style.logo} src={image}/></a>
        <div className={style.buttonGroup} id="naviGroup">

            <a href="/"><button type="button" className={style.headerNavi}>HOME</button></a>
            <a href="/biotech"><button type="button" className={style.headerNavi}>BIOTECHNOLOGY</button></a>
            <a href="/pandemic"><button type="button" className={style.headerNavi}>PANDEMIC TECHNOLOGY PROJECT</button></a>
            <a  href="/biotech"><button type="button" className={style.headerNavi}>FINTECH</button></a>

            <a href="/event"><button type="button" className={style.headerNavi}>EVENTS</button></a>

        </div>
    </div>

    )
}



export default Header;