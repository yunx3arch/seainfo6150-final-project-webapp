import React, { useState } from "react";
import style from "./Form.module.css";

const Form = () => {
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
          <div className={style.thanks}>Thanks for registering! We look forward seeing You!</div>
        ) : (
          <form onSubmit={onSubmit}>
           <div className = {style.label}>
             <div>Registering for event online on <b>8PM April.23rd, 2021</b></div>
             <div><br/></div>
            <label htmlFor="first">* FirstName: </label>
            <input type="text" name="firstname" id="first" required/>

            <p><label htmlFor="last">* LastName: </label>
            <input type="text" name="lastname" id="last" required/></p>

            <p><label htmlFor="phone">* Phone: </label>
            <input type="text" name="phonenumber" id="phone" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
            <small>format: 123-456-7890</small></p>

            <p><label htmlFor="email">* Email: </label>
            <input type="text" name="email" id="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/></p>
          
            <p><label htmlFor="contact">I prefer being contacted by: </label>
            <select name="dropdown1" id="d1">
              <option value="">Choose</option>
              <option value="Phone">Phone</option>
              <option value="Email">Email</option>
            </select></p>
            <p><label htmlFor="myDropdownId2">* Number of participants: </label>
            <select name="dropdown2" id="d2" required>
              <option >Choose</option>
              <option >1</option>
              <option >2</option>
              <option >3</option>
              <option >4</option>
              <option >5</option>
              <option >6</option>
              <option >7</option>
              <option >8</option>
              <option >9</option>
              <option >10</option>

            </select></p>
            <p><b>Blanks with * are required.</b></p>
            <p>
              <input type = "CheckBox" name="subscribe" id="subscribe" />Subscribe us to receive latest information about events and technology review.
              </p>
            </div>


            
              
            <p>
            <input className = {style.button} type="submit" value="Submit" />
            </p>

          </form>
        )
      }
    </div>
  )
}

export default Form
