import React, { useState, useEffect } from "react";

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
    <React.Fragment>
      {" "}
      <h1>(✿◉‿◉)🗡 J O B ? ? </h1>
      <form>
        <label>
          Name
          <input
            type="text"
            name={"Name"}
            style={{ width: "100px" }}
            onChange={handleChange}
            value={name}
          />
        </label>
        <label>
          Email
          <input
            type="text"
            name={"Email"}
            style={{ width: "100px" }}
            onChange={handleChange}
            value={email}
          />
        </label>
        <label>
          Message
          <input
            type="text"
            name={"Message"}
            style={{ width: "100px" }}
            onChange={handleChange}
            value={message}
          />
        </label>
      </form>{" "}
    </React.Fragment>
  );
};
export default Contact;
