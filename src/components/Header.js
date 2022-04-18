import React,{useState} from 'react'
import { Routes,Route } from 'react-router'
import Guide from './Guide'
import Login from './Login'
import Register from './Register'
import Guideinner from './Guideinner';
import {Switch,FormControl,FormControlLabel} from '@mui/material'
import logo from '../down.png'
import Chat from './Chat/Chat'
import Join from './Join/Join'
// import logo from '../logo.jpg'
import {NavLink} from 'react-router-dom'
const Header = () => {
    
    const [language, setlanguage] = useState("English");
    const changeLanguage = () => {
        if(language === "English"){
            setlanguage("ગુજરાતી")
            localStorage.setItem("language","ગુજરાતી")
        }
        else{
            setlanguage("English")
            localStorage.setItem("language","English")}
    }

    return (
       language === "English"?
       <>
        <div className="Header">
        <img src={logo} alt="f" className="logo" />
        <nav className="nav_before_login">
            
            <NavLink to="/" className={({ isActive }) => isActive? "active": 'link_guide'}>Guide</NavLink>
            <NavLink to="/login" className="link_login">Login</NavLink>
            <NavLink to="/Register" className="link_register">Register</NavLink>
            <NavLink to="/chat" className="link_chat">Chat</NavLink>
            <FormControl >
                <FormControlLabel className="label" control={<Switch onChange={changeLanguage}  className="toggle"/>} label={language} />
            </FormControl>
        </nav>
        
        </div>
      <Routes>
        <Route path="/" element={<Guide value="English"/>}  />
        <Route path="/login" element={<Login value="English"/>}  />
        <Route path="/chat" element={<Chat/>}  />
        <Route path="/join" element={<Join/>}  />
        <Route path="/register" element={<Register value="English"/>}  />
        <Route path="/:id/*" element={<Guideinner value="English"/>}  />
      </Routes>
        </>
        :
        <>
        <div className="Header">
          <img src={logo} alt="f" className="logo" />
          <nav className="nav_before_login">          
            <NavLink to="/" className={({ isActive }) => isActive? "active": 'link_guide'}>માર્ગદર્શિકા</NavLink>
            <NavLink to="/login" className="link_login">લોગીન</NavLink>
            <NavLink to="/Register" className="link_register">રજીસ્ટર</NavLink>
            <FormControl >
                <FormControlLabel className="label" control={<Switch onChange={changeLanguage}  className="toggle"/>} label={language} />
            </FormControl>
        </nav>
        
        </div>
        <Routes>
        <Route path="/" element={<Guide/>} value="ગુજરાતી" />
        <Route path="/login" element={<Login/>} value="ગુજરાતી" />
        <Route path="/register" element={<Register value="ગુજરાતી"/>}  />
        <Route path="/:id" element={<Guideinner/>} value="ગુજરાતી" />
      </Routes>
        </>
        
    );   
}
export default Header;
