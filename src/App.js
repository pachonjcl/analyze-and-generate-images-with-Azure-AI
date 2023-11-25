import React from 'react';

import { analyzeImage } from './azure-image-analysis';

function App() {
  const [image, setImage] = React.useState('');
  const [result, setResult] = React.useState('');

  return (
    <div className="App">
      <h1>Computer Vision</h1>
      <input
        type='text'
        value={image}
        placeholder='Enter URL of image to be analyzed or the prompt of the image to generate'
        onChange={(e) => setImage(e.target.value)}
      />
      <button onClick={() => {
        analyzeImage(image)
          .then(response => {
            console.log(response);
            setResult(response);
          })
          .catch(error => console.error(error));
      }}>Analyze</button>
      <pre>
        {JSON.stringify(result, null, 2)}
      </pre>
    </div>
  );
}

export default App;
