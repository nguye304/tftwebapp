import React from 'react';
import '../style/Champions.css';

class ChampionsRow extends React.Component {
    render() {
        return (
            <div>
                <div class="champion-container">

                    <table key={this.props.Champion.ChampKey} >
                        <tbody class="">
                            <tr>
                                <div >
                                    <td div class="champion-card">
                                        <div class="champion-info-container">
                                            <div class="champion-portrait">
                                                <img src={this.props.Champion.ChampImage} alt="lillegimg"></img>
                                                <p>Cost: {this.props.Champion.cost}</p>
                                            </div>
                                            <div class="champion-information">
                                                <h1>{this.props.Champion.ChampName}</h1>
                                              
                                                <h1>stats</h1>
                                                <p>{this.props.Champion.ChampClass1}</p>
                                                <p>{this.props.Champion.ChampClass2}</p>
                                                <p>{this.props.Champion.ChampClass3}</p>
                                           
                                            </div>
                                            

                                        </div>
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
export default ChampionsRow;