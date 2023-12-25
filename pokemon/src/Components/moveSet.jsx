import { useState } from "react";
import "../Styles/moveset.css";

const Moveset = ({moves}) => {

    const[movesText, setMovesText]=useState("Click me to get moves !!!")

    const[showMoves, setShowMoves]= useState(false)

    // console.log(moves)

    return (
    <div id="moveset">

        <div id="moves-text">
            <h1 onClick={()=>{
                if(showMoves === false){
                    setShowMoves(true); 
                    setMovesText("MOVES")
                }
                else{
                    setShowMoves(false); 
                    setMovesText("Click me to get moves !!!")
                }
                }}>
                    {movesText}
            </h1>
        </div>
            
       
        {showMoves && 
            <div id="move-box">
                {moves.slice(0, (moves.length)).map((obj)=>{
                    
                    let name = obj.move.name;

                    return(
                        <p 
                        // className={type}
                        key={name}>{name[0].toUpperCase() + name.slice(1)}</p>
                        )
                })}
            </div>
        }
        
    </div>);
}
 
export default Moveset;