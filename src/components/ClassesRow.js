import React from 'react';
import '../style/ClassesRow.css';

class ClassesRow extends React.Component {
    render() {
        return (
            <div>
                <div class="classys-container">

                    <table key={this.props.Classes.ClassKey} >
                        <tbody class="">
                            <tr>
                                <div >
                                    <td div class="classys-card">
                                        <div class="classys-info-container">
                                            <div class="classys-portrait">
                                                <img src="https://cdn.vox-cdn.com/thumbor/bT60viO-rOeL4lMOxLLVlAZaq6U=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10176839/DVdPUOUX0AArfyv.jpg" alt="lillegimg"></img>
                                            </div>
                                            <div class="classys-information">
                                                <h1>{this.props.Classes.ClassName}</h1>
                                                <p>{this.props.Classes.ClassBonus1}</p>
                                                <p>{this.props.Classes.ClassBonus2}</p>
                                                <p>{this.props.Classes.ClassBonus3}</p>
                                                <p>{this.props.Classes.ClassBonus4}</p>
                                                <p>{this.props.Classes.ClassBonus5}</p>
                                            </div>


                                        </div>
                                        <div class="classys-champs">
                                            <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/1/18/AhriSquare.png?version=b063ffe901511592494d06e363dc4dcd" alt="champ portrait1"></img>
                                            <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/1/18/AhriSquare.png?version=b063ffe901511592494d06e363dc4dcd" alt="champ portrait1"></img>
                                            <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/1/18/AhriSquare.png?version=b063ffe901511592494d06e363dc4dcd" alt="champ portrait1"></img>
                                            <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/1/18/AhriSquare.png?version=b063ffe901511592494d06e363dc4dcd" alt="champ portrait1"></img>
                                            <img src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/1/18/AhriSquare.png?version=b063ffe901511592494d06e363dc4dcd" alt="champ portrait1"></img>
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
export default ClassesRow;