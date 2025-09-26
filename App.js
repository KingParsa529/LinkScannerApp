import React, { useState } from 'react';

function App() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState('');

  const handleScan = () => {
    if (url.includes('login') || url.includes('verify')) {
      setResult('Risk Level: High');
    } else {
      setResult('Risk Level: Low');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Link Scanner App</h1>
      <input
        type="text"
        placeholder="Enter URL..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ width: '300px', marginRight: '10px' }}
      />
      <button onClick={handleScan}>Scan</button>
      <p>{result}</p>
    </div>
  );
}

export default App;
