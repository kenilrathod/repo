import React from 'react';
// import {useParams} from 'react-router-dom'

const Information = ({path}) => {
    console.log(path)
    // console.log(useParams())

  return <>
    {path["*"] === "work-wise" && <p className="para">Work wise Agricultural Instruction will be listed</p>}
    {path["*"] === "Stage-Wise" && <p className="para">Stage wise Agricultural Instruction will be listed</p>}
    {path["*"] === "Information" && <p className="para">Detailed information will be displayed</p>}
    {path["id"] === "Seed quality and Grooming" && path["*"] === "Calculator" && 
    
    <div className="seed_calculator">
        <p>Seed Quantity</p>
        <div className="calculator">
            <input type="number" />
        </div>
        <button type="submit" className="calculate" onClick={(e)=>e.preventDefault()}>CALCULATE</button>
    </div>
    }

    {path["id"] === "Planting Varieties-Seed rate and sowing spacing" && path["*"] ==="Calculator" &&
    <div className="seed_calculator">
        <p>Lan Allotted for Crops</p>
        <div className="calculator">
            <input type="number" />
        </div>
        <button type="submit" className="calculate" onClick={(e)=>e.preventDefault()}>CALCULATE</button>
    </div>
    }

    {path["id"] === "Fertilizer System" && path["*"] === "Calculator" && 
    <div className="seed_calculator">
        <p>Land Alotted for Crops</p>
        <div className="calculator">
            <input type="number" />
        </div>
        <button type="submit" className="calculate" onClick={(e)=>e.preventDefault()}>CALCULATE</button>
    </div>
    }

    {path["id"] === "Intercropping and Weeding" && path["*"] === "Calculator" && 
    <div className="seed_calculator">
        <p>Land Allotted for Crops</p>
        <div className="calculator">
            <input type="number" />
        </div>
        <button type="submit" className="calculate" onClick={(e)=>e.preventDefault()}>CALCULATE</button>
    </div>
    }

    {path["id"] === "Disease Control" && path["*"] === "Calculator" && 
    <div className="seed_calculator">
        <p>Land Allotted for Crops</p>
        <div className="calculator">
            <input type="number" />
        </div>
        <button type="submit" className="calculate" onClick={(e)=>e.preventDefault()}>CALCULATE</button>
    </div>
    }
    
    {path["id"] === "Biological Control of the Disease" && path["*"] === "Calculator" && 
    <div className="seed_calculator">
        <p>Seed Quantity</p>
        <div className="calculator">
            <input type="number" />
        </div>
        <button type="submit" className="calculate" onClick={(e)=>e.preventDefault()}>CALCULATE</button>
    </div>
    }
  </>;
};

export default Information;
