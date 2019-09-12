import React from 'react';
import '../style/NavBar.css';
function NavBar(){

    return(
        <div>
            <h1>Navigation bar</h1>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Champions</a></li>
                <li><a href='#'>Classes</a></li>
                <li><a href='#'>Items</a></li>
                <li><a href='#'>LilLegends</a></li>
                <li><a href='#'>Simulator</a></li>

            </ul>
        </div>
    )
}
export default NavBar;