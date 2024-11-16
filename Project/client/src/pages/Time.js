import React, { useState, useEffect } from 'react';

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: '#f5f5f5',
};

const titleStyle = {
    fontSize: '2rem',
    marginBottom: '1rem',
};

const countdownStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
};

const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1rem',
    fontWeight: 'bold',
    border: 'none',
    background: '#007bff',
    color: 'white',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
};

export default function Time() {
    const [count, setCount] = useState(0);

    const handleStart = () => {
        const input = prompt('Enter number to start countdown');
        const parsedData = parseInt(input);
        if (!isNaN(parsedData) && parsedData >= 0) {
            setCount(parsedData);
        }
    };

    useEffect(() => {
        console.log("compoonent did mount called")
        const interval = setInterval(() => {
            if (count > 0) {
                setCount(count - 1);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
            console.log("compoonent  unmount called")
        };
    }, [count]);

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>Countdown Timer</h1>
            <p style={countdownStyle}>Time left: {count} seconds</p>
            <button style={buttonStyle} onClick={handleStart}>
                Start Countdown
            </button>
        </div>
    );
}
