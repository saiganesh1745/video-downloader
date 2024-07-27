// import React, { useState } from 'react';
// import './App.css'

// function App() {
//   const [url, setUrl] = useState('');
//   const [mediaUrl, setMediaUrl] = useState(null);
//   const [error, setError] = useState(null);

//   const handleDownload = async () => {
//     const apiUrl = 'https://all-media-downloader.p.rapidapi.com/download';
//     const data = new FormData();
//     data.append('url', url);

//     const options = {
//       method: 'POST',
//       headers: {
//         'x-rapidapi-key': 'aad11d36a0msh8ba392534a1ac7fp14d056jsn1a47acca3254',
//         'x-rapidapi-host': 'all-media-downloader.p.rapidapi.com'
//       },
//       body: data
//     };

//     try {
//       const response = await fetch(apiUrl, options);
//       const result = await response.json();
//       localStorage.setItem("hi", result);
//       setMediaUrl(result[0]);
//       setError(null);
//     } catch (error) {
//       console.error(error);
//       setError('Failed to fetch media. Please try again.');
//     }
//   };

//   const downloadMedia = () => {
//     if (mediaUrl) {
//       window.open(mediaUrl, '_blank');
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Social Media Downloader</h1>
//       <input
//         type="text"
//         placeholder="Enter Instagram URL"
//         value={url}
//         onChange={(e) => setUrl(e.target.value)}
//       />
//       <button onClick={handleDownload}>Fetch Media</button>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {mediaUrl && (
//         <div>
//           <button onClick={downloadMedia}>Download Media</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;




// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [url, setUrl] = useState('');
//   const [downloadLink, setDownloadLink] = useState('');
//   const [error, setError] = useState('');

//   const handleInputChange = (e) => {
//     setUrl(e.target.value);
//   };

//   const handleDownload = async () => {
//     const data = new FormData();
//     data.append('url', url);

//     const options = {
//       method: 'POST',
//       url: 'https://all-media-downloader.p.rapidapi.com/download',
//       headers: {
//         'x-rapidapi-key': 'aad11d36a0msh8ba392534a1ac7fp14d056jsn1a47acca3254',
//         'x-rapidapi-host': 'all-media-downloader.p.rapidapi.com',
//       },
//       data: data,
//     };

//     try {
//       const response = await axios.request(options);
//       setDownloadLink(response.data[0]); // Adjust this line based on the actual response
//       setError('');
//     } catch (error) {
//       console.error('Error fetching the download link', error);
//       setError('Failed to fetch media. Please try again.');
//     }
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Media Downloader</h1>
//         <input
//           type="text"
//           value={url}
//           onChange={handleInputChange}
//           placeholder="Enter media URL"
//         />
//         <button onClick={handleDownload}>Fetch Video</button>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         {downloadLink && (
//           <a href={downloadLink} target="_blank" rel="noopener noreferrer" download>
//             Download Video
//           </a>
//         )}
//       </header>
//     </div>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [url, setUrl] = useState('');
//   const [downloadLink, setDownloadLink] = useState('');
//   const [error, setError] = useState('');

//   const handleInputChange = (e) => {
//     setUrl(e.target.value);
//   };

//   const handleDownload = async () => {
//     const data = new FormData();
//     data.append('url', url);

//     const options = {
//       method: 'POST',
//       url: 'https://all-media-downloader.p.rapidapi.com/download',
//       headers: {
//         'x-rapidapi-key': 'aad11d36a0msh8ba392534a1ac7fp14d056jsn1a47acca3254',
//         'x-rapidapi-host': 'all-media-downloader.p.rapidapi.com',
//       },
//       data: data,
//     };

//     try {
//       const response = await axios.request(options);
//       setDownloadLink(response.data[0]); // Adjust this line based on the actual response
//       setError('');
//     } catch (error) {
//       console.error('Error fetching the download link', error);
//       setError('Failed to fetch media. Please try again.');
//     }
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Media Downloader</h1>
//         <div className="input-group">
//           <input
//             type="text"
//             value={url}
//             onChange={handleInputChange}
//             placeholder="Enter media URL"
//           />
//           <button onClick={handleDownload}>Fetch Video</button>
//         </div>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         {downloadLink && (
//           <a href={downloadLink} target="_blank" rel="noopener noreferrer" download>
//             Download Video
//           </a>
//         )}
//       </header>
//     </div>
//   );
// }

// export default App;




import React, { useState } from 'react';
import axios from 'axios';
import "loaders-ui/dist/main/index.min.css";
import { FoldingCube } from 'loaders-ui';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [downloadLink, setDownloadLink] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const handleDownload = async () => {
    const data = new FormData();
    data.append('url', url);

    const options = {
      method: 'POST',
      url: 'https://all-media-downloader.p.rapidapi.com/download',
      headers: {
        'x-rapidapi-key': 'aad11d36a0msh8ba392534a1ac7fp14d056jsn1a47acca3254',
        'x-rapidapi-host': 'all-media-downloader.p.rapidapi.com',
      },
      data: data,
    };

    setLoading(true);
    try {
      const response = await axios.request(options);
      setDownloadLink(response.data[0]); // Adjust this line based on the actual response
      setError('');
    } catch (error) {
      console.error('Error fetching the download link', error);
      setError('Failed to fetch media. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Instagram Downloader</h1>
        <div className="input-group">
          <input
            type="text"
            value={url}
            onChange={handleInputChange}
            placeholder="Enter media URL"
          />
          <button onClick={handleDownload}>Fetch Video</button>
        </div>
        {loading && (
          <div className="spinner-container">
            <FoldingCube />
          </div>
        )}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {downloadLink && (
          <a href={downloadLink} target="_blank" rel="noopener noreferrer" download>
            Download Video
          </a>
        )}
      </header>
    </div>
  );
}

export default App;
