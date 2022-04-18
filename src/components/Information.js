import React from 'react';
// import {useParams} from 'react-router-dom'

const Information = ({path}) => {
    console.log(path)
    // console.log(useParams())

  return <>
    {path["*"] === "work-wise" && <p className="para">Work wise Agricultural Instruction will be listed</p>}
    {path["*"] === "Stage-Wise" && <p className="para">Stage wise Agricultural Instruction will be listed</p>}
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
    
    <div className="seed_calculator" style={{overflowY:"auto"}}>
        <p>Seed Quantity</p>
        <div className="calculator" style={{overflowY:"auto"}}>
            <input type="number" />
            <br/>
            <br/>
        
        </div>
        <button type="submit" className="calculate" onClick={(e)=>e.preventDefault()}>CALCULATE</button>
        <p style={{overflow:"auto"}}>બીજની ગુણવત્તા એ જરૂરી આનુવંશિક અને ભૌતિક શુદ્ધતા સાથે બીજનો કબજો છે
શારીરિક સ્વસ્થતા અને આરોગ્યની સ્થિતિ સાથે. મુખ્ય બીજ ગુણવત્તા અક્ષરો
નીચે પ્રમાણે સારાંશ આપવામાં આવ્યા છે.
<br/>
<br/>
બીજની પ્રકૃતિ ટાઈપ કરવી એ સાચું છે. એટલે કે, બીજમાંથી રોપા/છોડ/ઝાડ જોઈએ
તમામ પાસાઓમાં તેની માતા જેવું લાગે છે. આ ગુણવત્તા પાત્ર ઇચ્છિત પ્રાપ્ત કરવા માટે મહત્વપૂર્ણ છે
પાક વધારવાનો ધ્યેય કાં તો ઉપજ અથવા પ્રતિકાર માટે અથવા ઇચ્છિત ગુણવત્તાના પરિબળો માટે.
<br/>
<br/>
બીજ આરોગ્ય
બીજ બીજને ફૂગથી ચેપ લગાડવો જોઈએ નહીં અથવા જંતુનાશકોથી ચેપ લાગવો જોઈએ નહીં કારણ કે તે ઘટશે
બીજની શારીરિક ગુણવત્તા અને લાંબા ગાળે બીજની ભૌતિક ગુણવત્તા
સંગ્રહ બીજની આરોગ્યની સ્થિતિમાં બીજની બગાડની સ્થિતિનો પણ સમાવેશ થાય છે
</p>
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
