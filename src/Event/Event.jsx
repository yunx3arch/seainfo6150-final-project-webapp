import React from "react";
import styles from "./Event.module.css";
import image from "../eventBackground.jpg";


var sectionStyle={
    width:"100%",
    height:"1200px",
    backgroundImage:`url(${image})`
}
const Event = ()=>{
    return(
        <div style={sectionStyle}>
            <div className={styles.eventBackground} ></div>
            <div className={styles.eventDescription}>
            <h1>Leading with Innovation</h1>
            
            
                <p>
                6150 Technology Review's flagship event on emerging technology and trend.
                </p>
                <p>Join us online @8PM April.23rd, 2021
                </p>
            </div>
            <a href={"/registerForEvent"}>
            <button type="button"  className={styles.registerNow}>
            Register Now
            </button>
            </a>
            
        </div>
    );
}
export default Event;
    