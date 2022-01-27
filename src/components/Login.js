import React,{useState} from 'react';
import { UserIcon, LockClosedIcon } from '@heroicons/react/solid'

// styles
import './Login.css';

const Login = ({value}) => {
  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    value === "English"?
      <div className='login-page'>
        <form className="form">
          <h1>Login Form</h1>
          <div className="input-group">
              <UserIcon className='icon' height={"20px"}/>
              <input type="text" className="input" required />
              <label className="placeholder">Login ID</label>
          </div>
          <div className="input-group">
              <LockClosedIcon className='icon' height={"20px"} />
              <input type="password" className="input" required />
              <label className="placeholder">Password</label>
          </div>
          <p>Forgor Password</p>
          <button className='btn' >Log In</button>
          <p>Not Registered? Register Now</p>
        </form>
      </div>
    :
      <div className="login-page">
        <form className="form">
          <h1>Login Form</h1>
          <div className="input-group">
              <UserIcon className='icon' height={"20px"}/>
              <input type="text" className="input" required />
              <label className="placeholder">લૉગિન આઈડી</label>
          </div>
          <div className="input-group">
              <LockClosedIcon className='icon' height={"20px"} />
              <input type="password" className="input" required />
              <label className="placeholder">પાસવર્ડ</label>
          </div>
          <p>પાસવર્ડ ભૂલી ગયા?</p>
          <button className='btn'>લોગીન કરો</button>
          <p>રજીસ્ટ્રેશન નથી કરાવેલ? અત્યારે જ કરો!</p>
        </form>
      </div>
  );
};

export default Login;
