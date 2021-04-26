import React, { useState }  from "react";
import styles from "./SubscribeBox.module.css";

const SubscribeHomeTab = () => {
    const [submittedForm, setSubmittedForm] = useState();
    function onSubmit(e) {
      e.preventDefault();
      const data = new FormData(e.target);
      setSubmittedForm(data);
    };
  
    return (
        <div>
        {
          submittedForm ? (
          <div className={styles.thanksSub}>Thanks for subscribing! </div>
          ):(
            <form onSubmit={onSubmit}>
      <div className={styles.subscribeContainer}>
          
        Subscribe us to get latest information about news and events.<br />
        <br />
        
        <label htmlFor="first" >* Name: </label>
              <input type="text" name="firstname" id="first" required/>
           <p><label htmlFor="email" >* Email: </label>
            <input type="text" name="email" id="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/></p>
            <p>
            <input className = {styles.subscribeButton} type="submit" value="Submit" />
            </p>
            
      </div>
     </form>
    )
    }
     </div>
    )
}
  export default SubscribeHomeTab;