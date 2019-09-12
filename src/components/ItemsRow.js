import React from 'react';
import '../style/Items.css';

class ItemsRow extends React.Component {
    render() {
        return (
            <div>
           
                
                    <table key={this.props.Item.ItemKey} >
                        <tbody class ="">
                            <tr>
                                <div >                           
                                    <td div class="card">
                                        <img src={this.props.Item.ItemImg} alt = "itemimg"></img>
                                        {this.props.Item.ItemName}
                                        <p>{this.props.Item.ItemEffect}</p>
                                        <p>{this.props.Item.ItemStat1} {this.props.Item.Stat1Type}</p>
                                        <p>{this.props.Item.ItemStat2} {this.props.Item.Stat2Type}</p>
                                    </td>                                  
                                </div>
                            </tr>
                        </tbody>
                    </table>

                    <h1 class = "detbox">Hello World</h1>
                    
            </div>
        )
    }
}
export default ItemsRow;