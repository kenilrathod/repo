import React,{useState} from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Paper } from '@mui/material';


const SeedCalc = ({lan}) => {

    const [cal, setcal] = useState(0);
    const [show, setshow] = useState(false);

 const showDetail = (e) => {
    e.preventDefault();
    setshow(true);


 }
 
  return (
    lan == "English"? 
    <div className="seed_calculator" style={{overflowY:"auto"}}>
    <p>Seed Quantity</p>
    <div className="calculator" style={{overflowY:"auto"}} >
        <input type="number" value={cal} onChange={(e)=>setcal(e.target.value)}  />
    </div>
    <button type="submit" className="calculate" disabled={cal ==0?true:false} onClick={(e)=>showDetail(e)}>CALCULATE</button>
    <br/>
    <div className="acc">
    {
        show ?<><Accordion>
        <AccordionSummary sx={{color:"#59AD65"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography fontWeight={"bold"} >ક્લોથિયાનિડિન</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{color:'gray'}}>
          <Typography fontSize={15}>
              2.5 ગ્રામ <br/>
            {"->"} પટ આપવાનો સમય વાવણી પહેલા ૪ થી ૧૨ કલાક,<br/>
            {"->"} ચૂસિયા પ્રકારની જીવતોથી નિયંત્રણ માટે જેવાકે મોલોમશી,તડતડિયા, સફેદ ધૈણ, ઉધઈ <br/>
            
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary sx={{color:"#59AD65"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography fontWeight={"bold"}>કાબોકિસન + થાયરમ</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{color:'gray'}}>
          <Typography fontSize={15}>
          2.5 ગ્રામ <br/>
          {"->"} વાવણી સમયે પટ આપવો ,<br/>
          {"->"} જમીન જન્ય ફૂગ થી થતા રોગો માટે ,<br/>
          {"->"} જેવા કે કાલી ફૂગ, લીલી ફૂગ, સફેદ ફૂગ વગેરે.<br/>
          

          </Typography>
        </AccordionDetails>
      </Accordion></> :
        <></>
    }
    </div>
    </div>
    :
    <div className="seed_calculator" style={{overflowY:"auto"}}>
    <p>Seed Quantity</p>
    <div className="calculator" style={{overflowY:"auto"}} >
        <input type="number" value={cal} onChange={(e)=>setcal(e.target.value)}  />
    </div>
    <button type="submit" className="calculate" disabled={cal ==0?true:false} onClick={(e)=>showDetail(e)}>CALCULATE</button>
    <br/>
    <div className="acc">
    {
        show ?<><Accordion>
        <AccordionSummary sx={{color:"#59AD65"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography fontWeight={"bold"} >ક્લોથિયાનિડિન</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{color:'gray'}}>
          <Typography fontSize={15}>
              2.5 ગ્રામ <br/>
            {"->"} પટ આપવાનો સમય વાવણી પહેલા ૪ થી ૧૨ કલાક,<br/>
            {"->"} ચૂસિયા પ્રકારની જીવતોથી નિયંત્રણ માટે જેવાકે મોલોમશી,તડતડિયા, સફેદ ધૈણ, ઉધઈ <br/>
            
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary sx={{color:"#59AD65"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography fontWeight={"bold"}>કાબોકિસન + થાયરમ</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{color:'gray'}}>
          <Typography fontSize={15}>
          2.5 ગ્રામ <br/>
          {"->"} વાવણી સમયે પટ આપવો ,<br/>
          {"->"} જમીન જન્ય ફૂગ થી થતા રોગો માટે ,<br/>
          {"->"} જેવા કે કાલી ફૂગ, લીલી ફૂગ, સફેદ ફૂગ વગેરે.<br/>
          

          </Typography>
        </AccordionDetails>
      </Accordion></> :
        <></>
    }
    </div>
    </div>

  )
}

export default SeedCalc