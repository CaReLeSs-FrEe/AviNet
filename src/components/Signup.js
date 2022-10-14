import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
// import { useForm } from "react-hook-form";

function Signup() {
  // const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    city: "",
    state: "",
    zip: 0,
    email: "",
    password: "",
    accountRoll: "",
  });
  const updateState = (event) => {
    console.log(event.target);
    console.log(state);
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    // TODO: show a loading modal when loading sign up.
    try {
      const res = await axios.post("http://localhost:6969/auth/signup", state);
      console.log(res.data);
      navigate("/Login");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form className="row g-3" onSubmit={onSubmit}>
      <div className="col-md-4">
        <label htmlFor="validationServer01" className="form-label">
          First name
        </label>
        <input
          type="text"
          className="form-control "
          id="validationServer01"
          value={state.firstName}
          name="firstName"
          onChange={updateState}
          required
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="validationServer02" className="form-label">
          Last name
        </label>
        <input
          type="text"
          className="form-control "
          id="validationServer02"
          value={state.lastName}
          name="lastName"
          onChange={updateState}
          required
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="validationServerEmail" className="form-label">
          Email
        </label>
        <div className="input-group has-validation">
          <span className="input-group-text" id="inputGroupPrepend3">
            @
          </span>
          <input
            type="text"
            className="form-control "
            id="validationServerEmail"
            aria-describedby="inputGroupPrepend3 validationServerEmailFeedback"
            value={state.email}
            name="email"
            onChange={updateState}
            required
          />
        </div>
      </div>
      <div className="col-md-6">
        <label htmlFor="validationServer03" className="form-label">
          Password
        </label>
        <input
          type="text"
          className="form-control "
          id="validationServer03"
          aria-describedby="validationServer03Feedback"
          value={state.password}
          name="password"
          onChange={updateState}
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="validationServer03" className="form-label">
          City
        </label>
        <input
          type="text"
          className="form-control "
          id="validationServer03"
          aria-describedby="validationServer03Feedback"
          value={state.city}
          name="city"
          onChange={updateState}
          required
        />
      </div>
      <div className="col-md-3">
        <label htmlFor="validationServer04" className="form-label">
          State
        </label>
        <input
          type="text"
          className="form-control "
          id="validationServer03"
          aria-describedby="validationServer03Feedback"
          value={state.state}
          name="state"
          onChange={updateState}
          required
        />
      </div>
      <div className="col-md-3">
        <label htmlFor="validationServer05" className="form-label">
          Zip
        </label>
        <input
          type="text"
          className="form-control "
          id="validationServer05"
          aria-describedby="validationServer05Feedback"
          value={state.zip}
          name="zip"
          onChange={updateState}
          required
        />
      </div>
      <div className="col-md-3">
        <label htmlFor="validationServer04" className="form-label">
          Account Roll
        </label>
        <select
          className="form-select "
          id="validationServer04"
          aria-describedby="validationServer04Feedback"
          name="accountRoll"
          onChange={updateState}
          required
        >
          <option value="">select...</option>
          <option value={"company"}>Company</option>
          <option value={"employee"}>Crew</option>
        </select>
      </div>
      {state.accountRoll === 'employee' && (
        // ask more questions 
        <></>
      )}
      {state.accountRoll === 'company' && (
        // ask more questions 
        <></>
      )}
      <div className="col-12">
        <button className="btn btn-primary" type="submit">
          Submit form
        </button>
      </div>
    </form>
  );
}

export default Signup;
