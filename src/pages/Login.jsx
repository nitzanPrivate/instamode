import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockUsers } from '../mockData/mockUsers'; 

export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const user = mockUsers.find(
            (u) => u.username === username && u.password === password
        );

        if (user) {
            console.log('Login successful for:', username);
            navigate('/instamode/homepage');
        } else {
            console.log('Login failed: Invalid username or password');
            alert("Invalid username or password"); 
        }
    };

    return (
        <div className="login-page">
            <img src="/img/instamode_logo.svg" alt="InstaMode Logo" style={{ width: '100px', marginBottom: '20px' }} />
            <h1>InstaMode</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Phone number, username or email address"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Log in</button>
            </form>
        </div>
    );
}
