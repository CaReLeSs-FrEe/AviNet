import axios from "axios"
        import { useState } from "react"
        import { useNavigate } from "react-router-dom"

function Login() {
            const navigate = useNavigate() 
            const [state,setState] = useState({
                email:"",
                password:"",
            })
            const updateState = (event) => {
                setState({
                    ...state, [event.target.name]: event.target.value
                })
            }
            const handleSubmit = (event) => {
                event.preventDefault()
                axios.post('http://localhost:6969/login', state).then((res) => {
                    console.log(res.data)
                    navigate('/Profile')}).catch((err) => console.log(err))
            }
            return(
                <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-4">
            <label htmlFor="validationServerEmail" className="form-label">Email</label>
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend3">@</span>
              <input type="text" className="form-control is-invalid" id="validationServerEmail" aria-describedby="inputGroupPrepend3 validationServerEmailFeedback" value={state.email} name='email' onChange={updateState} required/>
              <div id="validationServerEmailFeedback" className="invalid-feedback">
                Please Provide Email.
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationServer03" className="form-label">Password</label>
            <input type="text" className="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" value={state.password} name='password' onChange={updateState} required/>
            <div id="validationServer03Feedback" className="invalid-feedback">
              Please provide password.
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">Submit form</button>
          </div>
        </form>
    )
};
export default Login