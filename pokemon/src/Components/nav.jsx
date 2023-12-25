import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav(){
    
    const [search, setSearch] = useState('');
    
    return(        
        <nav>
            <h1>PkmnApp</h1>
            <div>
                {/* <input type="text" 
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    /> */}
                {/* <Link className="navigators" to="./pkmn-list">
                </Link> */}
                
                <Link className="navigators" to="./">Home</Link>
                <Link className="navigators" to="./pkmn_list">PkmnList</Link>
                <Link className="navigators" to="./move_list">MoveList</Link>
                <Link className="navigators" to="./about">About</Link>
                {/* <span>Home</span> */}
            </div>
        </nav>
    )
}