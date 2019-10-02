import React, { useState } from "react";

import "../App.css";
const Contact = ({ closeWindow }, props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  function handleChange(e) {  
    if (e.target.name === "Name") {
      setName(e.target.value);
    } else if (e.target.name === "Email") {
      setEmail(e.target.value);
    } else if (e.target.name === "Message") {
      setMessage(e.target.value);
    }
  }
  function checkValid(){
    //do later
  }
  const encode = data => {
    checkValid();
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };
  function handleSubmit(e) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message })
    })
      .then(() => setSuccess(true))
      .catch(setError(true), console.log(error));
    if (error!==true) { 
      closeWindow()
    }
    e.preventDefault();
  }

  return (
    <div style={{ padding: "10px", border: "3px solid " + props.color }}>
      <h1 className="title">
        Hello!{" "}
        <span role="img" aria-label="Wave">
          👋
        </span>
      </h1>
      <form
        onSubmit={handleSubmit}
        name="Contact"
        className="contactform"
        netlify
      >
        <div>
          {error!==null && (
            <div>
              Your information was not sent. Please try again later. {error}
            </div>
          )}
          {!success && (
            <div>
              <label>
                Name
                <br />
                <input
                  type="text"
                  name="Name"
                  style={{ width: "40VW" }}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label>
                Email <br />
                <input
                  type="text"
                  name="Email"
                  style={{ width: "40VW" }}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label>
                Message
                <br />
                <input
                  type="text"
                  name="Message"
                  style={{ width: "40VW", height: "30VW" }}
                  onChange={handleChange}
                />
              </label>{" "}
              <br />
              <button type="submit">Send</button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
export default Contact;
