import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
export const Login = () => {
  return (
    <div className='form-container'>
            <div className='login-div'>
                <h2 className='text-center m-1'>Login</h2>
                <form>
                    <div className="form- d-flex justify-content-center">
                        <div className="col-md-10 mb-3 mx-1">
                            <label for="validationDefaultUsername">Email</label>
                            <div className="input-group">
                                <input type="email" className="form-control" id="validationDefaultUsername" placeholder="Email" aria-describedby="inputGroupPrepend2" required />
                            </div>
                        </div>
                    </div>
                    <div className="form- d-flex justify-content-center">
                        <div className="col-md-10 mb-3 mx-1">
                            <label for="validationDefault01">Password</label>
                            <input type="password" className="form-control" id="validationDefault01" placeholder="Password" required />
                        </div>
                    </div>
                    <div className="text-center">
                        <p>Not a member? <Link to="/signup">Sign up </Link></p>
                        <button className="btn btn-primary" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
  )
}
