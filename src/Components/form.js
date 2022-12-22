import React from "react";
import { useState } from "react";
function Form() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submited, setSubmited] = useState(false);

  const handleFirstNameChange = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };
  const handleLastNameChange = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };
  const handleEmailChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };

//   const handleSubmit = (e) => {
//     e.defaultPrevented();
//     setSubmiited(true);
//   };

  return (
    <div className="form-container">
      <form className="register-form">
        {/* Uncomment the next line to show the success message */}
        {submited ? (
          <div className="success-message">Success! Thank you for registering</div>
        ) : null}
        <input
          id="first-name"
          className="form-field"
          type="text"
          value={values.firstName}
          onChange={handleFirstNameChange}
          placeholder="First Name"
          name="firstName"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}
        <input
          id="last-name"
          className="form-field"
          value={values.lastName}
          onChange={handleLastNameChange}
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
        <input
          id="email"
          className="form-field"
          value={values.email}
          onChange={handleEmailChange}
          type="text"
          placeholder="Email"
          name="email"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button className="form-field" type="submit" onClick={()=> setSubmited(true)}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Form;
