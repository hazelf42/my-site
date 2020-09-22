import React, { useState   } from "react";

import "../App.css";

const Contact = ({ closeWindow }, props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name: name,  email:  email, message: message }),
    })
      .then(() => setSuccess(true))
      .catch((error) => setError(true));

    e.preventDefault();
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  function handleChange(e) {
    if (e.target.name === "Name") {
      setName(e.target.value);
    } else if (e.target.name === "Email") {
      setEmail(e.target.value);
    } else if (e.target.name === "Message") {
      setMessage(e.target.value);
    }
  }
  // function checkValid() {
  //   //do later
  // }

  return (
    <div
      style={{
        padding: "10px",
        border: "3px solid " + props.color,
        height: "50%",
      }}
    >
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
          {error !== null && (
            <div>
              Sorry, your message was not sent. Try me at
              hm.foerstner@gmail.com!
            </div>
          )}
          <input type="hidden" name="form-name" value="contact" />
          {success && <div>Success! Your message was sent, I'll get back to you soon!</div>}
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
                <textarea
                  type="textarea"
                  name="Message"
                  style={{ width: "40VW", height: "20VH" }}
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
