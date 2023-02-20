import React, {useRef} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function LoginPage() {

  const username = useRef()
  const password = useRef()
  const handleSubmit=()=>{
      if(username.current.value=='sammoore'&&password.current.value=='1234'){
        localStorage.setItem("usernameData", "sammoore")
        localStorage.setItem("passwordData", "1234")
      }
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Username / E-mail" id="username" ref={username} label="Username / E-mail" variant="filled" />
        </div>
        <div>
          <input type="password" placeholder="Password" id="password" ref={password} label="Password" variant="filled" />
        </div><br/>
        <button variant="contained"> Login! </button>
        
      </form>
    </div>
    
  );
}
