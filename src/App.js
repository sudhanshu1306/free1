import React from "react";
import logo from './logo.png';


function App(){
  return (
    <div className="overlay">
    <span className="logo-image"> <img src={logo} /> </span>
    <h1 className="center-text"> Under Maintenance </h1>
    <p className="colour-text"> Meanwhile, you can take a look at the rest of my work <span className="linkBlue"> <a href="http://www.behance.net/mchonjb" target="_blank"> here, at http://behance.net/mchonjb </a> </span></p>

    </div>
  )
}
export default App;
