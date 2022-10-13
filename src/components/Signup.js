import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup() {
    const navigate = useNavigate() 
    const [state,setState] = useState({
        firstName: "",
        lastName: "",
        city:"", 
        state:"",
        zip: 0,
        email:"",
        password:"",
        acountRoll:"",
    })
    const updateState = (event) => {
        setState({
            ...state, [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:6969/signup', state).then((res) => {
            console.log(res.data)
            navigate('/Login')}).catch((err) => console.log(err))
    }
    return(
        <form className="row g-3" onSubmit={handleSubmit}>
  <div className="col-md-4">
    <label htmlFor="validationServer01" className="form-label">First name</label>
    <input type="text" className="form-control is-valid" id="validationServer01" value={state.firstName} name='firstName' onChange={updateState} required/>
    <div className="valid-feedback">
      Looks good!
    </div>
    </div>
  <div className="col-md-4">
    <label htmlFor="validationServer02" className="form-label">Last name</label>
    <input type="text" className="form-control is-valid" id="validationServer02" value={state.lastName} name='lastName' onChange={updateState} required/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationServerEmail" className="form-label">Email</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend3">@</span>
      <input type="text" className="form-control is-invalid" id="validationServerEmail" aria-describedby="inputGroupPrepend3 validationServerEmailFeedback" value={state.email} name='email' onChange={updateState} required/>
      <div id="validationServerEmailFeedback" className="invalid-feedback">
        Please choose a Email.
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationServer03" className="form-label">Password</label>
    <input type="text" className="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" value={state.password} name='password' onChange={updateState} required/>
    <div id="validationServer03Feedback" className="invalid-feedback">
      Please provide a password.
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationServer03" className="form-label">City</label>
    <input type="text" className="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" value={state.city} name='city' onChange={updateState} required/>
    <div id="validationServer03Feedback" className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationServer04" className="form-label">State</label>
    <input type="text" className="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" value={state.state} name='state' onChange={updateState} required/>
    <div id="validationServer04Feedback" className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationServer05" className="form-label">Zip</label>
    <input type="text" className="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" value={state.zip} name='zip' onChange={updateState} required/>
    <div id="validationServer05Feedback" className="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationServer04" className="form-label">Account Roll</label>
    <select className="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" name='acountRoll' onChange={updateState} required>
      <option value={state.acountRoll}>Company</option>
      <option value={state.acountRoll}>Crew</option>
    </select>
    <div id="validationServer04Feedback" className="invalid-feedback">
      Please select a Roll.
    </div>
    </div>
  {/* <div className="col-12">
    <div className="form-check">
      <input className="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required/>
      <label className="form-check-label" htmlFor="invalidCheck3">
        Agree to terms and conditions
      </label>
      <div id="invalidCheck3Feedback" className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div> */}
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
    )
}

export default Signup