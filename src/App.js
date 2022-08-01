// import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert'; 
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";

    
function App() {
       const [mode , setMode] = useState('light');
       const[alert, setAlert] = useState(null);
       const showAlert = (msg,typ)=>{
        setAlert({
          message : msg,
          type : typ
        });
        setTimeout(()=>{
          setAlert(null);
        },1500);
       }
       const toggleMode = ()=>{
        if(mode === 'light'){
          setMode('dark');
          document.body.style.backgroundColor = 'black';
          showAlert("Dark mode has been enabled.","success");
          document.title = "TextUtils - Dark Mode";
        }
        else{
          setMode('light');
          document.body.style.backgroundColor = 'white';
          showAlert("Light mode has been enabled.","success");
          document.title = "TextUtils - Light Mode";
        }
       }
  return (
    <><Router>
    
      <Navbar title = "TextUtils"  aboutText="About" Us mode={mode} toggleMode  = {toggleMode}/>
      <Alert alert={alert}/>
     
      <div className = "container">
         <Routes>
          <Route exact path="/about" element = { <About mode={mode} />}/>
           
         
          <Route exact path="/" element={<TextForm showAlert = {showAlert} box="Enter your content in this box-" mode={mode}/>}/>
          </Routes>

  {/* <About/> */}
  
  </div>
  </Router>
      </>
      );
}

export default App;
