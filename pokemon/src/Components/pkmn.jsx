import { useEffect, useState } from "react";

import "../Styles/pkmn.css";
import { useParams } from "react-router-dom";
import Moveset from "./moveSet";


export default function Pkmn(){

    
    let {id} = useParams()

    
    // We have to manage the ids which don't exist. We can't simply rely on "*" route as id will be something and fetching process will start
    // So here is the management ::::

    id=parseInt(id);
    // console.log(id)

    if(id<0 || id>1292 || !id){
        return(
            <div id="fetch-msg">
                <h1>404-ERROR</h1>
                <p>Please enter a valid pokemon ID Number!!!</p>
            </div>
        )
    }

    const url = "https://pokeapi.co/api/v2/pokemon/"+id;


    const [data, setData] = useState(null)

    useEffect(()=>{

        fetch(url)
        .then(response=>response.json())
        .then(DATA=>{
            setData(DATA)
    })}, [url])


    // const [statTotal, setStatTotal] = useState(0);

    // console.log(data.stats)
    
    if(data){

        // console.log(data.moves)
        
        let statTotal = 0
        data.stats.map((obj)=>{
            statTotal += obj.base_stat
        })
        
        return(
        <main>
            <div id={"pokemon-name"} className={data.types[0].type.name}>
                <span>
                    {id+". "+data.name.toUpperCase()}
                </span>
            </div>

            <div className="types-box">

                {
                    <span className={data.types[0].type.name} key={"T1"}>
                        {data.types[0].type.name.toUpperCase()}
                    </span>
                }

                {data.types.length === 2 && 
                    <span className={data.types[1].type.name} key={"T2"}>
                        {data.types[1].type.name.toUpperCase()}
                    </span>
                }

            </div>

            <img className="pokemon-pic" src={data.sprites.back_default} alt="backImage" />
            <img className="pokemon-pic" src={data.sprites.front_default} alt="frontImage" />

            <div className="stats-box">

                {data.stats.map((obj)=>{
                    
                    
                    return(<div key={obj.stat.name}>
                            <span id={obj.stat.name} className="stats">{ obj.stat.name.toUpperCase() + " : " + obj.base_stat }</span>

                            {/* <div></div> */}
                        </div>
                        )
                    })}
                {<span id="statTotal" className="stats">{"TOTAL : "+ statTotal}</span>}
                {<span id="weight" className="stats">{"WEIGHT : "+data.weight/10 + " Kgs"}</span>}

            </div>


            <Moveset moves={data.moves}/>
            


        </main>
        )
    }
        else{
            return(
            <h1 id="fetch-msg">
                Fetching DATA. . . . .
            </h1>)}
}