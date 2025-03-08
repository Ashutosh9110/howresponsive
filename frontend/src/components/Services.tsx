import React, { useState } from 'react';
import axios from 'axios';
// import './index.css'; // Tailwind should be in index.css


// import { div } from 'framer-motion/client';
// import './App.css';
// import NavBar from './components/Navbar';

  const Services: React.FC = () => {
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

      <section>
      <div>
        <div>
          <h1 className='responsive-heading'>Check your website's responsiveness here...</h1>
          <div>
            <input
              className='inputUrl'
              type="text"
              placeholder="Enter the URL. . ."
              value={url}
              onChange={(e) => {
                console.log("Input changed:", e.target.value);
                setUrl(e.target.value)}}
           />
        </div>
        {/* <button className="homeBtn" style={{ "--i": "#00bfff" }}>Click here</button> */}


          <button 
            className='homeBtn'
            style={{ "--i": "#00bfff" } as React.CSSProperties }
            onClick={() => handleFetchWebsite()}>Load Website</button>
        <div className="">
          {websiteContent ? (
            <iframe
              title="website-viewer"
              srcDoc={websiteContent}
              width="100%"
              height="600px"
              sandbox="allow-scripts allow-same-origin allow-forms"
            />
          ) : (
            <h6 className=''>Enter a URL to load the website.</h6>
          )}
        </div>
      </div>
      </div>
      </section>
    );
  };

export default Services;




