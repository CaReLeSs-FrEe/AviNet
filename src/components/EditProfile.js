import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import axios from 'axios';

const EditProfile = () => {

    const navigate = useNavigate();

    // in the future - use this to retrieve user data from database
    const { userId } = useParams()
    console.log('heres the user id ', userId)

    //for now - getting user data from authContext
    const { user, storeToken, authenticateUser } = useContext(AuthContext)
    console.log('heres the user from the context ', user)

    const [editState, setEditState] = useState(null);

    const updateEditState = event => {
        setEditState({
            ...editState,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit =  () => {
        console.log('heres your state to send to backend ', editState)

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/edit`, editState, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('authToken')}`
            }
        })
            .then(async res => {
                console.log(res.data)
                storeToken(res.data.authToken);
                await authenticateUser()
                navigate('/Profile')
            })
            .catch(err => console.log(err))

        

    }

    useEffect(() => {
        if(user) setEditState({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
            mobile: user.mobile,
            city: user.city,
            state: user.state,
            zip: user.zip
        })
    }, [user])



    return (
        editState ? (
        <div className="row gutters-sm">
        <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">First Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type='text' onChange={updateEditState} value={editState.firstName} name='firstName'/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Last Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type='text' onChange={updateEditState} value={editState.lastName} name='lastName'/>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type='text' onChange={updateEditState} value={editState.email} name='email'/>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Phone</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type='text' onChange={updateEditState} value={editState.phone} name='phone'/>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Mobile</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type='text' onChange={updateEditState} value={editState.mobile} name='mobile'/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">State</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type='text' onChange={updateEditState} value={editState.state} name='state'/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">City</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type='text' onChange={updateEditState} value={editState.city} name='city'/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">ZIP</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type='number' onChange={updateEditState} value={editState.zip} name='zip'/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <button
                      className="btn btn-info "
                      onClick={handleSubmit}
                    >
                      Update User Info
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </div>) : (<p>loading...</p>)
    );

}

export default EditProfile