import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../Styles/pkmnList.css";

export default function PkmnList(){

    const [data, setData] = useState(null)

    const url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1292'
  
    const [id_of_1st_pkmn, set_id_of_1st_pkmn] = useState(0)

    useEffect(()=>{

        fetch(url)
        .then(response=>response.json())
        .then(DATA=>{
            setData(DATA.results)
        })}, [url])
        
        if(data){
            // console.log(id_of_1st_pkmn)
            // console.log(data.results)
            
            return(
            <main>

{/* The next and previous buttons */}

            <div className="button-box">

                {id_of_1st_pkmn>0 && <button onClick={()=>{

                    set_id_of_1st_pkmn(id_of_1st_pkmn-40)
                    
                }}>Previous</button>}
                
                {id_of_1st_pkmn<1280 && <button onClick={()=>{

                    set_id_of_1st_pkmn(id_of_1st_pkmn+40)

                }
                }>Next</button>}
            </div>




{/* The list of pokemon names */}

            <div className="list-container">
                {data.slice(id_of_1st_pkmn, id_of_1st_pkmn+40).map((obj)=>{


                    return(
                        
                        <Link className="name-in-list"
                        to={"/pkmn_list/"+ (data.indexOf(obj)+1)} 
                        key={obj.name}>
                                    { (data.indexOf(obj) + 1) + ". " + obj.name[0].toUpperCase() + obj.name.substr(1)}
                        </Link>
                       
                       )})}
            </div>

        </main>
        )
    }
    else{return(
        <h1 id="fetch-msg">
            Fetching DATA. . . . .
        </h1>)}
}