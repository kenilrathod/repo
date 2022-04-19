import React,{useState} from 'react';
import {useParams} from 'react-router-dom'
import data from '../data.json'
import {NavLink,Link} from 'react-router-dom'
import Information from './Information';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';


const Guideinner = ({value}) => {

const params = useParams()
console.log(params)
console.log(params["*"])
const match_data = data[0].filter((data)=>(data["data"][0] === params.id))
console.log(JSON.stringify(match_data) + " moj ha")
const [information, setinformation] = useState(true);
  return (
    value == "English"?
  <>
    <span className="title"><ChevronLeftOutlinedIcon className="left_"/><span className="main_title">{params.id}</span><ChevronRightOutlinedIcon className="right_"/></span>
    <div className="option_tab">
      {match_data[0]["details"][0].length === 1 
      ?<NavLink isActive={true} to={`/${params.id}/${match_data[0]["details"][0]}`} className="always_active" >{match_data[0]["details"][0][0]}</NavLink>
      :<div className="details">
        <NavLink to={`/${params.id}/${match_data[0]["details"][0][0]}`} className={params["*"] == "Calculator"? "tab_nota always_active":"tab_nota"} id="de" onClick={()=>document.getElementById("da").classList.remove("always_active")+document.getElementById("de").classList.add("always_active")} >{match_data[0]["details"][0][0]}</NavLink>
        <NavLink to={`/${params.id}/${match_data[0]["details"][0][1]}`} id="da"  className={params["*"] == "Information"? "tab_nota always_active":"tab_nota"}  onClick={()=>document.getElementById("de").classList.remove("always_active")+document.getElementById("da").classList.add("always_active")}>{match_data[0]["details"][0][1]}</NavLink></div>
      }
    </div>
    <div className="option_content">
      {information && <Information path={params} lan={value} />}
    </div>
  </>:
  
  <>
    <span className="title"><ChevronLeftOutlinedIcon className="left_"/><span className="main_title">{match_data[0]["data"][1]}</span><ChevronRightOutlinedIcon className="right_"/></span>
    <div className="option_tab">
      {match_data[0]["details"][1].length === 1 
      ?<NavLink isActive={true} to={`/${params.id}/${match_data[0]["details"][0]}`} className="always_active" >{match_data[0]["details"][1]}</NavLink>
      :
      <div className="details">
        <NavLink to={`/${params.id}/${match_data[0]["details"][0][0]}`} id="de" className={params["*"] == "Calculator"? "tab_nota always_active":"tab_nota"} onClick={()=>document.getElementById("da").classList.remove("always_active")+document.getElementById("de").classList.add("always_active")} >{match_data[0]["details"][1][0]}</NavLink>
        <NavLink  to={`/${params.id}/${match_data[0]["details"][0][1]}`} id="da" className={params["*"] == "Information"? "tab_nota always_active":"tab_nota"}  onClick={()=>document.getElementById("de").classList.remove("always_active")+document.getElementById("da").classList.add("always_active")} >{match_data[0]["details"][1][1]}</NavLink>
        </div>
      }
    </div>
    <div className="option_content">
      {information && <Information path={params} lan={value} />}
    </div>
  </>
  )
};

export default Guideinner;
