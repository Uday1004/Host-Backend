import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [message, setMessage] = useState('');

    const fetchSpecialMessage = async () => {
        try {
            // Use the correct API URL
            const response = await axios.get('https://backend-xprp.onrender.com/special');
            setMessage(response.data.message);
        } catch (error) {
            console.error('Error fetching special message:', error);
        }
    };

    return (
        <div className="App">
            <h1>React Frontend</h1>
            <button onClick={fetchSpecialMessage}>Fetch Special Message</button>
            <p>{message}</p>
        </div>
    );
}

export default App;
