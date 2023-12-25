import { useState, useEffect } from "react";
import "../Styles/moveList.css";

const MoveList = () => {

    const[data, setData] = useState(null)  

    const url = 'https://pokeapi.co/api/v2/move/?offset=0&limit=922'

    const [id_of_1st_move, set_id_of_1st_move] = useState(0)


    useEffect(()=>{

        fetch(url)
        .then(response=>response.json())
        .then(DATA=>{
            setData(DATA.results)
        })}, [url])

    if(data){ 
        console.log(data)
        
        return (
            <main>
                {/* The next and previous buttons */}

            <div className="button-box">

                {<button onClick={()=>{
                    
                }}>Previous</button>}

                {<button onClick={()=>{


                }
                }>Next</button>}
            </div>

            {/* LIST */}

            <div className="list-container">
                {data.slice(id_of_1st_move, id_of_1st_move+40).map((obj)=>{


                    return(
                        
                        // <Link className="name-in-list"
                        // to={"/move_list/"+ (data.indexOf(obj)+1)} 
                        // key={obj.name}>
                        //             { (data.indexOf(obj) + 1) + ". " + obj.name[0].toUpperCase() + obj.name.substr(1)}
                        // </Link>
                       <p className="name-in-list">{obj.name}</p>

                       )})}
            </div>



            </main>
        );
    }
}
 
export default MoveList;