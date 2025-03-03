import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App: React.FC = () => {
  const [url, setUrl] = useState('');
  const [websiteContent, setWebsiteContent] = useState('');

  const handleFetchWebsite = async () => {
    if (!url) {
      alert('Please enter a valid URL');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/fetch-website', {
        url: url.startsWith('http') ? url : `https://${url}`,
      });
      setWebsiteContent(response.data);
    } catch (error) {
      console.error('Error fetching website:', error);
      alert('Failed to fetch website content');
    }
  };

  return (
    <div className="App">
      <h1>Page</h1>
      <div>
        <input
          type="text"
          placeholder="Enter website URL (e.g., www.google.com)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={handleFetchWebsite}>Load Website</button>
      </div>
      <div className="website-container">
        {websiteContent ? (
          <iframe
            title="website-viewer"
            srcDoc={websiteContent}
            width="100%"
            height="600px"
            sandbox="allow-scripts allow-same-origin allow-forms"
          />
        ) : (
          <p>Enter a URL to load the website.</p>
        )}
      </div>
    </div>
  );
};

export default App;