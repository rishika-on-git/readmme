import React from 'react';
// import './YourComponent.css'; // Import your CSS file
import "./Errorpage.css"

const Errorpage = () => {
  return (
    <div className='body-bg'>
      <div className="text">
        <h2>404</h2>
        <h3>Sorry! Page Not Found</h3>
      </div>
      <div className="container">
        <div className="sand"></div>
        <div className="tower">
          <div className="pole"></div>
          <div className="door"></div>
          <div className="light-base"></div>
          <div className="dome"></div>
          <div className="light"></div>
        </div>
        <div className="sand-extra"></div>
      </div>
    </div>
  );
};

export default Errorpage;