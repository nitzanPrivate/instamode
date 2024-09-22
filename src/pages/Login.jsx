import React, { useState } from 'react';

export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
      
        console.log('Logging in with:', username, password);
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
