import React, { useState } from 'react';
import axios from 'axios';
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

      <section className='overflow-hidden relative'>
  
      <div className='min-h-[650px] pt-20'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='font-bold text-4xl text-left px-20'>Check your website's responsiveness here...</h1>
          <div className='mt-[30px]'>
            <input
              className='rounded-3xl border w-100 h-10 text-center'
              type="text"
              placeholder="Enter the URL. . ."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
           />
        </div>
        {/* <button className="homeBtn" style={{ "--i": "#00bfff" }}>Click here</button> */}


          <button 
            className='homeBtn'
            style={{ "--i": "#00bfff" }}
            onClick={handleFetchWebsite}>Load Website</button>
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
            <h6 className='font-bold'>Enter a URL to load the website.</h6>
          )}
        </div>
      </div>
      </div>
      </section>
    );
  };

export default Services;




