import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { mockUsers } from '../mockData/mockUsers';
import { storageService } from '../services/async-storage.service';
import { SET_USER } from '../store/user.reducer';
import loginImage1 from '../assets/svg/login_1.png';
import loginImage2 from '../assets/svg/login_2.png';


export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        const user = mockUsers.find(
            (u) => u.username === username && u.password === password
        );

        if (user) {
            storageService.saveUser(user);
            dispatch({ type: SET_USER, user });

            console.log('Login successful for:', username);
            navigate('/instamode/post');
        } else {
            console.log('Login failed: Invalid username or password');
            alert('Invalid username or password');
        }
    };

    return (
        <div className="login-container">
            <div className="intro-img">
                <div className="img-container">
                <img src={loginImage1} alt="InstaMode" />
                <img src={loginImage2} alt="InstaMode" className="overlapping-img" />
                </div>
            </div>

            <div className="login-section">
                <div className="login-box">
                    <h1 className="logo-txt">InstaMode</h1>
                    <form className="login-form" onSubmit={handleLogin}>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            placeholder="Phone number, username, or email address"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit">Log in</button>
                    </form>
                </div>
                <div className="sign-up">
                    <p>Don't have an account? <a href="/instamode/signup">Sign up</a></p>
                </div>
            </div>
        </div>
    );
}
