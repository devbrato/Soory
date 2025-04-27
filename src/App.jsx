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
              <strong>Dear Dumdum</strong>
              <p>
             When you are feeling better again, you can trade the chicken and ice cream for dinner whenever you want!
              <center>
                <p>Get Well Soon🤗</p>
              <p>Get Well Soon🤗</p>
              <p>Get Well Soon😘.....</p>
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
