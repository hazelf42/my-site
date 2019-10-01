import React, { useState, useEffect } from "react";
import '../App.css';
const Contact = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleChange(e) {
    if (e.target.name === "Name") {
      setName(e.target.value);
    } else if (e.target.name === "Email") {
      setEmail(e.target.value);
    } else if (e.target.name === "Message") {
      setMessage(e.target.value);
    }
  }

  return (
    <div style={{padding: "10px", border: "3px solid " + props.color}}>
      {" "}
      <h1 className='title'>Hello! <span role="img" aria-label="Wave">👋</span></h1>
      <form className = "contactform" data-netlify="true" method="POST">
        <label>
          Name<br/>
          <input
            type="text"
            name={"Name"}
            style={{ width: "40VW" }}
            onChange={handleChange}
            value={name}
          />
        </label>
        <br />
        <label>
          Email <br/>
          <input
            type="text"
            name={"Email"}
            style={{ width: "40VW" }}
            onChange={handleChange}
            value={email}
          />
        </label>
        <br />
        <label>
          Message<br/>
          <input
            type="text"
            name={"Message"}
            style={{ width: "40VW", height: "30VW" }}
            onChange={handleChange}
            value={message}
          />
        </label> <br />
        <input type="submit" value="Send"/>
      </form>
    </div>
  );
};
export default Contact;
