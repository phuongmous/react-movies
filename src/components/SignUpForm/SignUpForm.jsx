import { useState } from 'react';
import './SignUpForm.css';

function SignUpForm({setUser}) {
    const [userInfo, setUserInfo] = useState('');
    function _handleChange(event) {
        setUserInfo(event.target.value)
    } 
    function _handleSubmit(event) {
        event.preventDefault()
        setUser(userInfo)
    }
    return (
    <div className="main-container">
        <div className="signup-container">
            <h3 className="signup-title">Please enter your desired username below</h3>
            <form onSubmit={_handleSubmit}>
                <div className="input-container">
                    <label>Username</label>
                    <input  type="text" onChange={_handleChange} />
                </div>
                <button type="submit" className="signin-button">Sign in</button>
            </form>
        </div>
    </div>
    )   
};

export default SignUpForm;