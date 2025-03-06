import React, { useState } from 'react';
import './App.css'; // Import your CSS file

const App = () => {
  const [isFlapped, setIsFlapped] = useState(false);

  const toggleFlap = () => {
    setIsFlapped(!isFlapped);
  };

  return (
    <div className="container">
      <div className={`envelope-wrapper ${isFlapped ? 'flap' : ''}`} onClick={toggleFlap}>
        <div className="envelope">
          <div className="letter">
            <div className="text">
              <strong>Dear Dumbooo</strong>
              <p>
              I hate it when we fight. I hate it even more when I realise that it was all my fault. I am so sorry. I love you so much. Please forgive me!
              <center>
                <p>soory😘</p>
              <p>soory😘</p>
              <p>and soory😘.....</p>
              </center>
              </p>
            </div>
          </div>
        </div>
        <div className="heart"></div> {/* Heart remains outside the envelope for visibility */}
      </div>
    </div>
  );
};

export default App;
