import React from 'react';

const Schedule = () => {
  const infoBoxStyle = {
    positions:"relative",
    borderRadius:'15px',
    width: '480px',
    height: '269px',
    top: '20px',
    right:'-20px',
    backgroundColor: 'lightgray',
    padding: '20px',
    position: 'relative',
  };

  const scheduleStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const lineStyle = {
    width: '5px',
    height: '66px',
    marginRight: '10px',
  };

  const textStyle = {
    margin: '0',
    fontSize: '14px',
  };

  const seeAllStyle = {
    position: 'absolute',
    top: '10px',
    right: '30px',
    fontSize: '12px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  };

  const iconStyle = {
    marginLeft: '5px',
    fill: '#858585',
  };

  return (
    <div style={infoBoxStyle} className="info-box">
      <a style={seeAllStyle}>
        See All
        <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg" style={iconStyle}>
          <path d="M0.255719 7.7814C-0.0722496 7.4807 -0.097987 7.06206 0.255719 6.69446L3.0111 3.99918L0.255719 1.3039C-0.0979873 0.936305 -0.0722499 0.516977 0.255719 0.218345C0.582952 -0.0823565 1.13594 -0.0630456 1.44332 0.218345C1.7507 0.498356 4.75389 3.4564 4.75389 3.4564C4.83173 3.52684 4.89364 3.61127 4.93592 3.70464C4.97821 3.79802 5 3.89843 5 3.99987C5 4.10132 4.97821 4.20173 4.93592 4.2951C4.89364 4.38848 4.83173 4.4729 4.75389 4.54334C4.75389 4.54334 1.7507 7.50001 1.44332 7.7814C1.13594 8.06348 0.582952 8.0821 0.255719 7.7814Z" fill="#858585"/>
        </svg>
      </a>
        <h1>Today's Schedule</h1>
      <div style={scheduleStyle}>
        <svg width="5" height="66" viewBox="0 0 5 66" fill="none" xmlns="http://www.w3.org/2000/svg" style={lineStyle}>
          <line x1="2.5" y1="0" x2="2.5" y2="66" stroke="#9BDD7C" strokeWidth="5"/>
        </svg>
        <div>
          <p style={textStyle}>Meeting with suppliers from Kuta Bali</p>
          <p style={textStyle}>14.00-15.00</p>
          <p style={textStyle}>at Sunset Road, Kuta, Bali</p>
        </div>
      </div>
      <div style={scheduleStyle}>
        <svg width="5" height="66" viewBox="0 0 5 66" fill="none" xmlns="http://www.w3.org/2000/svg" style={lineStyle}>
          <line x1="2.5" y1="0" x2="2.5" y2="66" stroke="#6972C4" strokeWidth="5"/>
        </svg>
        <div>
          <p style={textStyle}>Check operation at Giga Factory 1</p>
          <p style={textStyle}>18.00-20.00</p>
          <p style={textStyle}>at Central Jakarta</p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
