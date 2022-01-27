import React from 'react'
import { useNavigate } from 'react-router-dom'
import LoopIcon from '@mui/icons-material/Loop';
import tractor from '../icon/tractor.png'
import agriculture from '../icon/agriculture.png'
import seed from '../icon/seed.png'
import flower from '../icon/flower.png'
import garden from '../icon/garden.png'
import grass from '../icon/grass.png'
import irrigation from '../icon/irrigation.png'
import barly from '../icon/barley.png'
import growing from '../icon/growing-plant.png'
import organic from '../icon/organic.png'
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
const Guide = ({ value }) => {
  const navigate = useNavigate()

  return (
    value === "English" ?
      <>

        <div className="anything">
          <div className="card" onClick={() => navigate("/Agricultural Instructions/work-wise")}>

            <img src={tractor} alt="icon" />
            <p>Agricultural Instructions</p>
            <span>
              <InfoOutlinedIcon className="info" onClick={()=>navigate("/Agricultural Instructions")} />
            </span>
          </div>
          <div className="card" onClick={() => navigate("/Land an its Preparation/Information")} >
            <img src={agriculture} alt="icon" />
            <p>Land an its Preparation</p>
            <span>
              <InfoOutlinedIcon className="info" onClick={()=>navigate("/Land an its Preparation/Information")} />
            </span>
          </div>
          <div className="card" onClick={() => navigate("/Seed quality and Grooming/Calculator")} >
            <img src={seed} alt="icon" />
            <p>Seed quality and Grooming</p>
            <span>
              <CalculateOutlinedIcon className="cal" onClick={()=>navigate("/Seed quality and Grooming/Calculator")} /> 
              <InfoOutlinedIcon className="info" onClick={()=>navigate("/Seed quality and Grooming/Information")}/>
            </span>
          </div>
          <div className="card" onClick={() => navigate("/Planting Varieties-Seed rate and sowing spacing/Calculator")} >
            <img src={flower} alt="icon" />
            <p>Planting Varieties-Seed rate and sowing spacing</p>
            <span>
              <CalculateOutlinedIcon className="cal" onClick={()=>navigate("/Planting Varieties-Seed rate and sowing spacing/Calculator")} /> 
              <InfoOutlinedIcon className="info" onClick={()=>navigate("/Planting Varieties-Seed rate and sowing spacing/Information")} />
            </span>
          </div>
          <div className="card" onClick={() => navigate("/Fertilizer System/Calculator")} >
            <img src={garden} alt="icon" />
            <p>Fertilizer System</p>
            <span>
              <CalculateOutlinedIcon className="cal" onClick={()=>navigate("/Fertilizer System/Calculator")} /> 
              <InfoOutlinedIcon className="info" onClick={()=>navigate("/Fertilizer System/Information")} />
            </span>
          </div>
          <div className="card" onClick={() => navigate("/Intercropping and Weeding/Calculator")} >
            <img src={grass} alt="icon" />
            <p>Intercropping and Weeding</p>
            <span>
              <CalculateOutlinedIcon className="cal" onClick={() => navigate("/Intercropping and Weeding/Calculator")}/> 
              <InfoOutlinedIcon className="info" onClick={() => navigate("/Intercropping and Weeding/Information")}/>
            </span>
          </div>
          <div className="card" onClick={() => navigate("/Irrigation System and Irrigation Time/Information")} >
            <img src={irrigation} alt="icon" />
            <p>Irrigation System and Irrigation Time</p>
            <span><InfoOutlinedIcon className="info" onClick={()=>navigate("/Irrigation System and Irrigation Time/Information")} /></span>
          </div>
          <div className="card" onClick={() => navigate("/Disease Control/Calculator")} >
            <img src={barly} alt="icon" />
            <p>Disease Control</p>
            <span>
              <CalculateOutlinedIcon className="cal" onClick={() => navigate("/Disease Control/Calculator")}/> 
              <InfoOutlinedIcon className="info" onClick={() => navigate("/Disease Control/Information")}/>
            </span>
          </div>
          <div className="card" onClick={() => navigate("/Biological Control of the Disease/Calculator")} >
            <img src={growing} alt="icon" />
            <p>Biological Control of the Disease</p>
            <span>
              <CalculateOutlinedIcon className="cal" onClick={() => navigate("/Biological Control of the Disease/Calculator")} /> 
              <InfoOutlinedIcon className="info" onClick={() => navigate("/Biological Control of the Disease/Information")}/>
            </span>
          </div>
          <div className="card" onClick={() => navigate("/Pruning, Grading and Storage/Information")} >
            <img src={organic} alt="icon" />
            <p>Pruning, Grading and Storage</p>
            <span>
              <InfoOutlinedIcon className="info" onClick={() => navigate("/Pruning, Grading and Storage/Information")} />
            </span>
          </div>
        </div>
        <div className="wheather">
          <div>
            <p className="text_refresh"><span>Today</span> <LoopIcon /></p>
            <p className="temp">0° C</p>
            <p>Details</p>
            <p>Sunrise</p>
          </div>
        </div>
      </>
      :
      <>
        <div className="anything">
          <div className="card" onClick={() => navigate(`/guide/agri`)}>

            <img src={tractor} alt="icon" />
            <p>ખેતી વિષયક સુચનો</p>
            <span><InfoOutlinedIcon className="info" /></span>
          </div>
          <div className="card" >
            <img src={agriculture} alt="icon" />
            <p>જમીન અને તેની તૈયારી</p>
            <span><InfoOutlinedIcon className="info" /></span>
          </div>
          <div className="card" >
            <img src={seed} alt="icon" />
            <p>બીજની ગુણવત્તા અને માવજત</p>
            <span><CalculateOutlinedIcon className="cal" /> <InfoOutlinedIcon className="info" /></span>
          </div>
          <div className="card" >
            <img src={flower} alt="icon" />
            <p>વાવેતરની જાતો-બિયારણનો દર અને વાવણીનું અંતર</p>
            <span><CalculateOutlinedIcon className="cal" /> <InfoOutlinedIcon className="info" /></span>
          </div>
          <div className="card" >
            <img src={garden} alt="icon" />
            <p>ખાતર પદ્ધતિ</p>
            <span><CalculateOutlinedIcon className="cal" /> <InfoOutlinedIcon className="info" /></span>
          </div>
          <div className="card" >
            <img src={grass} alt="icon" />
            <p>આંતર ખેડ અને નિંદામણ</p>
            <span><CalculateOutlinedIcon className="cal" /> <InfoOutlinedIcon className="info" /></span>
          </div>
          <div className="card" >
            <img src={irrigation} alt="icon" />
            <p>સિંચાઈ પદ્ધતિ અને પિયત સમય</p>
            <span><InfoOutlinedIcon className="info" /></span>
          </div>
          <div className="card" >
            <img src={barly} alt="icon" />
            <p>રોગનું નિયંત્રણ</p>
            <span><CalculateOutlinedIcon className="cal" /> <InfoOutlinedIcon className="info" /></span>
          </div>
          <div className="card" >
            <img src={growing} alt="icon" />
            <p>રોગનું જૈવિક નિયંત્રણ</p>
            <span><CalculateOutlinedIcon className="cal" /> <InfoOutlinedIcon className="info" /></span>
          </div>
          <div className="card" >
            <img src={organic} alt="icon" />
            <p>કાપણી, ગ્રેડિંગ અને સંગ્રહ</p>
            <span><CalculateOutlinedIcon className="cal" /> <InfoOutlinedIcon className="info" /></span>
          </div>
        </div>
        <div className="wheather">
          <div>
            <p className="text_refresh"><span>આજે</span> <LoopIcon /></p>
            <p className="temp">0° C</p>
            <p>વિગતો</p>
            <p>સૂર્યોદય</p>
          </div>
        </div>
      </>
  );
};

export default Guide;
