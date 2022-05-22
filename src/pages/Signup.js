import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

export const Signup = () => {
    return (
        <div className='form-container'>
            <div className='form-div'>
                <h2 className='text-center m-1'>Sign Up</h2>
                <form>
                    <div className="form- d-flex justify-content-center">
                        <div className="col-md-5 mb-3 mx-1">
                            <label for="validationDefault01">Name</label>
                            <input type="text" className="form-control" id="validationDefault01" placeholder="Enter Full Name" required />
                        </div>
                        <div className="col-md-5 mb-3 mx-1">
                            <label for="validationDefaultUsername">Email</label>
                            <div className="input-group">
                                <input type="email" className="form-control" id="validationDefaultUsername" placeholder="Email" aria-describedby="inputGroupPrepend2" required />
                            </div>
                        </div>
                    </div>
                    <div className="form- d-flex justify-content-center">
                        <div className="col-md-5 mb-3 mx-1">
                            <label for="validationDefault01">Password</label>
                            <input type="password" className="form-control" id="validationDefault01" placeholder="Password" required />
                        </div>
                        <div className="col-md-5 mb-3 mx-1">
                            <label for="validationDefaultUsername">Confirm Password</label>
                            <div className="input-group">
                                <input type="password" className="form-control" id="validationDefaultUsername" placeholder="Confirm Password" aria-describedby="inputGroupPrepend2" required />
                            </div>
                        </div>
                    </div>
                    <div className="form-row d-flex justify-content-center">
                        <div className="col-md-5 mb-3 mx-1">
                            <label for="validationDefault03">Country</label>
                            <input type="text" className="form-control" id="validationDefault03" placeholder="Country" required />
                        </div>
                        <div className="col-md-5 mb-3 mx-1">
                            <label for="validationDefault03">City</label>
                            <input type="text" className="form-control" id="validationDefault03" placeholder="City" required />
                        </div>
                    </div>
                    <div className="form-row d-flex justify-content-center">
                        <div className="col-md-5 mb-3 mx-1">
                            <label for="validationDefault04">State</label>
                            <input type="text" className="form-control" id="validationDefault04" placeholder="State" required />
                        </div>
                        <div className="col-md-5 mb-3 mx-1">
                            <label for="validationDefault05">Zip</label>
                            <input type="number" className="form-control" id="validationDefault05" placeholder="Zip" required />
                        </div>
                    </div>
                    <div className="form-row d-flex justify-content-center">
                        <div className="col-md-5 mb-3 mx-1">
                            <label for="validationDefault04">Mobile Number</label>
                            <input type ="tel" className="form-control" id="validationDefault04" placeholder="Mobile Number" required />
                        </div>
                    </div>
                    <div className="text-center">
                        <p>Already a member? <Link to="/login">Login</Link></p>
                        <button className="btn btn-primary" type="submit">Submit form</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
