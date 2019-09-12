import React, { Component } from 'react';
import '../style/NavBar.css';
import ChampionsRow from './ChampionsRow';
const axios = require('axios');


class Champions extends Component {
    constructor(props) {
        super(props);
        console.log('Champions initializer');
        this.state = {
            error: null,
            Champs: []
        };
        this.findChampion();
    }
    
    findChampion() {
        console.log("Search Champion function");
        const urlString = " http://tftapi.us-west-1.elasticbeanstalk.com/api/champs";
       
        axios.get(urlString/*,{
                params:{
                    ID:12345  //if i need to add parameters later like apikeys
                }
            }*/)
            .then((res)=> {//handle success
              
                const ChampionsData = res.data;
                var ChampsRows = [];
                //console.log(Items);
                // console.log(Items[0].title);
                ChampionsData.forEach((object) => {//object is replaced by whatever it says in the console
                    //console.log(object)
                    const aChamp = <ChampionsRow Champion={object}></ChampionsRow>;
                    //console.log("this is a item", aItem);
                    ChampsRows.push(aChamp);
                    // console.log(ItemRows);
                });
                
                //console.log("Itemsrows2",ItemRows);
                this.setState({Champs:ChampsRows});
                console.log('Successfully retrieved Champions');

            })
            .catch(function (error) {//handle error
                console.log(error);
            })
            .finally(function () {
                //always executed
               
            });
            
    }

    render() {
        return (
            <div>
                <h1>Champions</h1>
                {this.state.Champs}
            </div>
        );

    }//render ending bracket
}// class ending bracket
export default Champions;