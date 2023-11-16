import React, { useState } from "react";
import {Person , Password , Envelope } from "@phosphor-icons/react";

function App() {
  const [action,setAction] = useState('Login')
  return (
    <div className="App d-flex justify-content-center" style={{backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)", height:"100vh"}}>
      <div className="Signup-Header bg-light shadow-lg m-5 px-3 d-flex flex-column justify-content-center align-items-center rounded-3">
        <div className="Signup h2 text-primary font-weight-bold" style={{color:"linear-gradient(to right, #4880EC, #019CAD)", fontFamily:'cursive'}}>{action}</div>
        <div className="Und mb-2 text-primary font-weight-bold">______  .</div>
        <div className="Signup-Input d-grid justify-content-center align-items-center mb-1">
          {action==='Login' ? <div></div>: <div className="unameInput  d-flex column-2 my-3">
          <Person size={24} />
          <input type="text" className="uname px-5 ms-3" placeholder="Enter the User Name" />
          </div>}
          <div className="emailInput my-3 d-flex column-2 my-3" >
          <Envelope size={24}/>
          <input type="email" className="email px-5 ms-3 " placeholder="Enter the Mail ID" />
          </div>
          <div className="pwdInput my-3 d-flex column-2 my-3">
          <Password size={24} />
          <input type="password" className="password px-5 mb-3 ms-3" placeholder="Enter the password" />
          </div>
        </div>
        {action==='Sign Up' ? <div></div> :  <div className="ForgotPassword" >Lost Password!<span className="btn btn-link">Click Here</span></div>}
        <div className="submit mt-3 d-flex justify-content-center">
        <div className= {action==="Login" ? "btn btn-secondary mx-5" : "btn btn-primary mx-5"} onClick={()=>{setAction('Sign Up')}}>Sign Up</div>
        <div className={action==="Sign Up" ? "btn btn-secondary mx-5" : "btn btn-primary mx-5"} onClick={()=>{setAction('Login')}}>LogIn</div>
        </div>
      </div>
    </div>
  );
}

export default App;
