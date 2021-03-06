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
              <InfoOutlinedIcon className="info" onClick={(e)=>e.stopPropagation()+navigate("/Agricultural Instructions")} />
            </span>
          </div>
          <div className="card" onClick={() => navigate("/Land an its Preparation/Information")} >
            <img src={agriculture} alt="icon" />
            <p>Land an its Preparation</p>
            <span>
              <InfoOutlinedIcon className="info" onClick={()=>navigate("/Land an its Preparation/Information")} />
            </span>
          </div>
          <div className="card" onClick={(e) =>e.stopPropagation()+navigate("/Seed quality and Grooming/Calculator")} >
            <img src={seed} alt="icon" />
            <p>Seed quality and Grooming</p>
            <span>
              <CalculateOutlinedIcon className="cal" onClick={(e)=>e.stopPropagation()+navigate("/Seed quality and Grooming/Calculator")} /> 
              <InfoOutlinedIcon className="info" onClick={(e)=>e.stopPropagation()+navigate("/Seed quality and Grooming/Information")}/>
            </span>
          </div>
          <div className="card" onClick={(e) =>e.stopPropagation()+navigate("/Planting Varieties-Seed rate and sowing spacing/Calculator")} >
            <img src={flower} alt="icon" />
            <p>Planting Varieties-Seed rate and sowing spacing</p>
            <span>
              <CalculateOutlinedIcon className="cal" onClick={(e)=>e.stopPropagation()+navigate("/Planting Varieties-Seed rate and sowing spacing/Calculator")} /> 
              <InfoOutlinedIcon className="info" onClick={(e)=>e.stopPropagation()+navigate("/Planting Varieties-Seed rate and sowing spacing/Information")} />
            </span>
          </div>
          <div className="card" onClick={(e) =>e.stopPropagation()+navigate("/Fertilizer System/Calculator")} >
            <img src={garden} alt="icon" />
            <p>Fertilizer System</p>
            <span>
              <CalculateOutlinedIcon className="cal" onClick={(e)=>e.stopPropagation()+navigate("/Fertilizer System/Calculator")} /> 
              <InfoOutlinedIcon className="info" onClick={(e)=>e.stopPropagation()+navigate("/Fertilizer System/Information")} />
            </span>
          </div>
          <div className="card" onClick={(e)=>e.stopPropagation()+navigate("/Intercropping and Weeding/Calculator")} >
            <img src={grass} alt="icon" />
            <p>Intercropping and Weeding</p>
            <span>
              <CalculateOutlinedIcon className="cal" onClick={(e)=>e.stopPropagation()+navigate("/Intercropping and Weeding/Calculator")}/> 
              <InfoOutlinedIcon className="info" onClick={(e)=>e.stopPropagation()+navigate("/Intercropping and Weeding/Information")}/>
            </span>
          </div>
          <div className="card" onClick={() => navigate("/Irrigation System and Irrigation Time/Information")} >
            <img src={irrigation} alt="icon" />
            <p>Irrigation System and Irrigation Time</p>
            <span><InfoOutlinedIcon className="info" onClick={()=>navigate("/Irrigation System and Irrigation Time/Information")} /></span>
          </div>
          <div className="card" onClick={(e) =>e.stopPropagation()+navigate("/Disease Control/Calculator")} >
            <img src={barly} alt="icon" />
            <p>Disease Control</p>
            <span>
              <CalculateOutlinedIcon className="cal" onClick={(e)=>e.stopPropagation()+navigate("/Disease Control/Calculator")}/> 
              <InfoOutlinedIcon className="info" onClick={(e)=>e.stopPropagation()+navigate("/Disease Control/Information")}/>
            </span>
          </div>
          <div className="card" onClick={(e) =>e.stopPropagation()+navigate("/Biological Control of the Disease/Calculator")} >
            <img src={growing} alt="icon" />
            <p>Biological Control of the Disease</p>
            <span>
              <CalculateOutlinedIcon className="cal" onClick={(e)=>e.stopPropagation()+navigate("/Biological Control of the Disease/Calculator")} /> 
              <InfoOutlinedIcon className="info" onClick={(e)=>e.stopPropagation()+navigate("/Biological Control of the Disease/Information")}/>
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
            <p className="temp">0?? C</p>
            <p>Details</p>
            <p>Sunrise</p>
          </div>
        </div>
      </>
      :
      <>
        <div className="anything">
          <div className="card" onClick={() => navigate("/Agricultural Instructions/work-wise")}>

            <img src={tractor} alt="icon" />
            <p>???????????? ??????????????? ???????????????</p>
            <span><InfoOutlinedIcon className="info" /></span>
          </div>
          <div className="card"  onClick={() => navigate("/Land an its Preparation/Information")} >
            <img src={agriculture} alt="icon" />
            <p>???????????? ????????? ???????????? ??????????????????</p>
            <span><InfoOutlinedIcon className="info" /></span>
          </div>
          <div className="card" onClick={(e) =>e.stopPropagation()+navigate("/Seed quality and Grooming/Calculator")} >
            <img src={seed} alt="icon"  />
            <p>??????????????? ???????????????????????? ????????? ???????????????</p>
            <span>
              <CalculateOutlinedIcon className="cal" onClick={(e)=>e.stopPropagation()+navigate("/Seed quality and Grooming/Calculator")} /> 
              <InfoOutlinedIcon className="info"  onClick={(e)=>e.stopPropagation()+navigate("/Seed quality and Grooming/Information")} />
            </span>
          </div>
          <div className="card" onClick={(e) =>e.stopPropagation()+navigate("/Planting Varieties-Seed rate and sowing spacing/Calculator")} >
            <img src={flower} alt="icon" />
            <p>???????????????????????? ????????????-???????????????????????? ?????? ????????? ???????????????????????? ????????????</p>
            <span><CalculateOutlinedIcon className="cal" onClick={(e)=>e.stopPropagation()+navigate("/Planting Varieties-Seed rate and sowing spacing/Calculator")} /> 
            <InfoOutlinedIcon className="info" onClick={(e)=>e.stopPropagation()+navigate("/Planting Varieties-Seed rate and sowing spacing/Information")} />
            </span>
          </div>
          <div className="card" onClick={(e) =>e.stopPropagation()+navigate("/Fertilizer System/Calculator")}>
            <img src={garden} alt="icon" />
            <p>???????????? ??????????????????</p>
            <span><CalculateOutlinedIcon className="cal" onClick={(e)=>e.stopPropagation()+navigate("/Fertilizer System/Calculator")} /> 
            <InfoOutlinedIcon className="info" onClick={(e)=>e.stopPropagation()+navigate("/Fertilizer System/Information")} /></span>
          </div>
          <div className="card" onClick={(e)=>e.stopPropagation()+navigate("/Intercropping and Weeding/Calculator")} >
            <img src={grass} alt="icon" />
            <p>???????????? ????????? ????????? ?????????????????????</p>
            <span>
            <CalculateOutlinedIcon className="cal" onClick={(e)=>e.stopPropagation()+navigate("/Intercropping and Weeding/Calculator")} /> 
            <InfoOutlinedIcon className="info" onClick={(e)=>e.stopPropagation()+navigate("/Intercropping and Weeding/Information")} />
            </span>
          </div>
          <div className="card" onClick={() => navigate("/Irrigation System and Irrigation Time/Information")} >
            <img src={irrigation} alt="icon" />
            <p>?????????????????? ?????????????????? ????????? ???????????? ?????????</p>
            <span><InfoOutlinedIcon className="info" onClick={() => navigate("/Irrigation System and Irrigation Time/Information")} /></span>
          </div>
          <div className="card" onClick={(e) =>e.stopPropagation()+navigate("/Disease Control/Calculator")}>
            <img src={barly} alt="icon" />
            <p>?????????????????? ????????????????????????</p>
            <span><CalculateOutlinedIcon className="cal" onClick={(e)=>e.stopPropagation()+navigate("/Disease Control/Calculator")} /> 
            <InfoOutlinedIcon className="info" onClick={(e)=>e.stopPropagation()+navigate("/Disease Control/Calculator")} /></span>
          </div>
          <div className="card" onClick={(e) =>e.stopPropagation()+navigate("/Biological Control of the Disease/Calculator")}>
            <img src={growing} alt="icon" />
            <p>?????????????????? ??????????????? ????????????????????????</p>
            <span><CalculateOutlinedIcon className="cal" onClick={(e)=>e.stopPropagation()+navigate("/Biological Control of the Disease/Calculator")} /> 
            <InfoOutlinedIcon className="info" onClick={(e)=>e.stopPropagation()+navigate("/Biological Control of the Disease/Information")} /></span>
          </div>
          <div className="card" onClick={() => navigate("/Pruning, Grading and Storage/Information")}>
            <img src={organic} alt="icon" />
            <p>???????????????, ???????????????????????? ????????? ??????????????????</p>
            <span><InfoOutlinedIcon className="info" onClick={() => navigate("/Pruning, Grading and Storage/Information")} /></span>
          </div>
        </div>
        <div className="wheather">
          <div>
            <p className="text_refresh"><span>?????????</span> <LoopIcon /></p>
            <p className="temp">0?? C</p>
            <p>???????????????</p>
            <p>????????????????????????</p>
          </div>
        </div>
      </>
  );
};

export default Guide;
