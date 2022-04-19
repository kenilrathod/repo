import React from 'react';
import SeedCalc from './InnerInformation/SeedCalc';
import Disease from './InnerInformation/Disease';

const Information = ({path,lan}) => {
    console.log(path)
    // console.log(useParams())

  return (
 lan == "English"?
<>
    {path["*"] === "work-wise" && <p className="para" style={{textAlign:'center'}}>Work wise Agricultural Instruction will be listed</p>}
    {path["*"] === "Stage-Wise" && <p className="para" style={{textAlign:'center'}}>Stage wise Agricultural Instruction will be listed</p>}
    {path["*"] === "Information" && <p className="para" >Seed quality is the possession of seed with required genetic and physical purity that is
accompanied with physiological soundness and health status. The major seed quality characters
are summarized as below.
<br/>
<br/>
It is the true to type nature of the seed. i.e., the seedling / plant / tree from the seed should
resemble its mother in all aspects. This quality character is important for achieving the desired
goal of raising the crop either yield or for resistance or for desired quality factors.
<br/>
<br/>
It is the actual expression of seed in further generation / multiplication. Physiological quality
characters of seed comprises of seed germination and seed vigour.
The liveliness of a seed is known as viability. The extent of liveliness for production of good
seedling or the ability of seed for production of seedling with normal root and shoot under
favorable condition is known as germinability. Seed vigour is the energy or stamina of the seed
in producing elite seedling. It is the sum total of all seed attributes that enables its regeneration of
under any given conditions. Seed vigour determines the level of performance of seed or seed lot
during germination and seedling emergence.
<br/>
<br/>
Seed Health
Health status of seed is nothing but the absence of insect infestation and fungal infection, in or on
the seed. Seed should not be infected with fungi or infested with insect pests as these will reduce
the physiological quality of the seed and also the physical quality of the seed in long term
storage. The health status of seed also includes the deterioration status of seed which also
expressed through low vigour status of seed. The health status of seed influences the seed quality
characters directly and warrants their soundness in seed for the production of elite seedlings at
nursery / field.
Hence the quality seed should have
 High genetic purity
 High pure seed percentage ( physical purity)
 High germinability
 High vigour
 Higher field establishment
</p>}
    {path["id"] === "Seed quality and Grooming" && path["*"] === "Calculator" && 
    <SeedCalc lan={"English"} />
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
        <p>પાક માટે ફાળવેલી જમીન</p>
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
        <Disease lan={"English"} />
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
  </>
  :
<>
    {path["*"] === "work-wise" && <p className="para" style={{textAlign:'center'}}>કામ મુજબ ખેતી વિષયક સૂચનોની યાદી કરવામાં આવશે</p>}
    {path["*"] === "Stage-Wise" && <p className="para" style={{textAlign:'center'}}>તબક્કા મુજબ ખેતી વિષયક સૂચનોની યાદી કરવામાં આવશે </p>}
    {path["*"] === "Information" && <p className="para" >Seed quality is the possession of seed with required genetic and physical purity that is
accompanied with physiological soundness and health status. The major seed quality characters
are summarized as below.
<br/>
<br/>
It is the true to type nature of the seed. i.e., the seedling / plant / tree from the seed should
resemble its mother in all aspects. This quality character is important for achieving the desired
goal of raising the crop either yield or for resistance or for desired quality factors.
<br/>
<br/>
It is the actual expression of seed in further generation / multiplication. Physiological quality
characters of seed comprises of seed germination and seed vigour.
The liveliness of a seed is known as viability. The extent of liveliness for production of good
seedling or the ability of seed for production of seedling with normal root and shoot under
favorable condition is known as germinability. Seed vigour is the energy or stamina of the seed
in producing elite seedling. It is the sum total of all seed attributes that enables its regeneration of
under any given conditions. Seed vigour determines the level of performance of seed or seed lot
during germination and seedling emergence.
<br/>
<br/>
Seed Health
Health status of seed is nothing but the absence of insect infestation and fungal infection, in or on
the seed. Seed should not be infected with fungi or infested with insect pests as these will reduce
the physiological quality of the seed and also the physical quality of the seed in long term
storage. The health status of seed also includes the deterioration status of seed which also
expressed through low vigour status of seed. The health status of seed influences the seed quality
characters directly and warrants their soundness in seed for the production of elite seedlings at
nursery / field.
Hence the quality seed should have
 High genetic purity
 High pure seed percentage ( physical purity)
 High germinability
 High vigour
 Higher field establishment
</p>}
    {path["id"] === "Seed quality and Grooming" && path["*"] === "Calculator" && <SeedCalc lan={"ગુજરાતી"} />
    }

    {path["id"] === "Planting Varieties-Seed rate and sowing spacing" && path["*"] ==="Calculator" &&
    <div className="seed_calculator">
        <p>પાક માટે ફાળવેલી જમીન</p>
        <div className="calculator">
            <input type="number" />
        </div>
        <button type="submit" className="calculate" onClick={(e)=>e.preventDefault()}>ગણતરી કરો</button>
    </div>
    }

    {path["id"] === "Fertilizer System" && path["*"] === "Calculator" && 
    <div className="seed_calculator">
        <p>પાક માટે ફાળવેલી જમીન</p>
        <div className="calculator">
            <input type="number" />
        </div>
        <button type="submit" className="calculate" onClick={(e)=>e.preventDefault()}>ગણતરી કરો</button>
    </div>
    }

    {path["id"] === "Intercropping and Weeding" && path["*"] === "Calculator" && 
    <div className="seed_calculator">
        <p>પાક માટે ફાળવેલી જમીન</p>
        <div className="calculator">
            <input type="number" />
        </div>
        <button type="submit" className="calculate" onClick={(e)=>e.preventDefault()}>ગણતરી કરો</button>
    </div>
    }

    {path["id"] === "Disease Control" && path["*"] === "Calculator" && 
    <Disease lan={"ગુજરાતી"} />

    }
    
    {path["id"] === "Biological Control of the Disease" && path["*"] === "Calculator" && 
    <div className="seed_calculator">
        <p>બીજ જથ્થો</p>
        <div className="calculator">
            <input type="number" />
        </div>
        <button type="submit" className="calculate" onClick={(e)=>e.preventDefault()}>ગણતરી કરો</button>
    </div>
    }
  </>
  )
};

export default Information;
