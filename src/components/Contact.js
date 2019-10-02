import React, { useState, useEffect } from "react";
import NetlifyForm from "react-netlify-form";

import "../App.css";
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
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };
  function handleSubmit(e) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

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
    <form onSubmit={handleSubmit} name="Contact" className="contactform">
      {/* {({ loading, error, success }) => (
        <div>
          {loading && <div>...</div>}
          {error && (
            <div>
              Your information was not sent. Please try again later. {error}
            </div>
          )}
          {success && <div>Success!</div>}
          {!loading && !success && ( */}
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
        {/* </div> */}
      {/* )} */}
    </form>
    </div>
  );
};
export default Contact;
