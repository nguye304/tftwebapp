import React from 'react';
import '../style/LilLegends.css';

class LilLegendsRow extends React.Component {
    render() {
        return (
            <div>
                <div class = "lillegends-container">
                
                    <table key={this.props.LilLeg.id} >
                        <tbody class ="">
                            <tr>
                                <div >                           
                                    <td div class="legend-card">
                                        <img src={this.props.LilLeg.LegImage} alt="lillegimg"></img>
                                        <p>{this.props.LilLeg.LegName}</p>
                                       
                                        
                                    </td>                                  
                                </div>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
            </div>
        )
    }
}
export default LilLegendsRow;