import React from "react";
import logo from './m_logofixed.png';


function App(){
  return (
    <div className="overlay">
    <div className="wrapper">
    <div className="logo-image"> <img src={logo} /> </div>
    <h1 className="center-text"> Under Maintenance </h1>
    <p className="colour-text"> Meanwhile, you can take a look at the rest of my work <span className="linkBlue"> <a href="http://www.behance.net/mchonjb" target="_blank"> here, at behance.net/mchonjb </a> </span></p>
    </div>
    </div>
  )
}
export default App;

