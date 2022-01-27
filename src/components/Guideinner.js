import React,{useState} from 'react';
import {useParams} from 'react-router-dom'
import data from '../data.json'
import {NavLink} from 'react-router-dom'
import Information from './Information';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';


const Guideinner = ({match}) => {
const params = useParams()
console.log(params)
console.log(params["*"])
const match_data = data[0].filter((data)=>(data["data"] === params.id))
const [information, setinformation] = useState(true);
  return (
  
  <>
    <span className="title"><ChevronLeftOutlinedIcon className="left_"/><span className="main_title">{params.id}</span><ChevronRightOutlinedIcon className="right_"/></span>
    <div className="option_tab">
      {match_data[0]["details"].length === 1 
      ?<NavLink to={`/${params.id}/${match_data[0]["details"][0]}`} className="always_active" >{match_data[0]["details"][0]}</NavLink>
      :<div className="details">
        <NavLink to={`/${params.id}/${match_data[0]["details"][0]}`} className={({ isActive }) => isActive? "tab_active": 'tab_nota'} >{match_data[0]["details"][0]}</NavLink>
        <NavLink to={`/${params.id}/${match_data[0]["details"][1]}`} className={({ isActive }) => isActive? "tab_active": 'tab_nota'}>{match_data[0]["details"][1]}</NavLink></div>
      }
    </div>
    <div className="option_content">
      {information && <Information path={params}  />}
    </div>

  </>
  )
};

export default Guideinner;
