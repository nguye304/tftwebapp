import React, { Component } from 'react';
import '../style/NavBar.css';
import LilLegendsRow from './LilLegendsRow';
const axios = require('axios');


class LilLegends extends Component {
    constructor(props) {
        super(props);
        console.log('Lil Legends initializer');
        this.state = {
            error: null,
            lillegs: []
        };
        this.findLegs();
    }
    
    findLegs() {
        console.log("Search lillegends function");
        const urlString = " http://tftapi.us-west-1.elasticbeanstalk.com/api/lillegs";
       
        axios.get(urlString/*,{
                params:{
                    ID:12345  //if i need to add parameters later like apikeys
                }
            }*/)
            .then((res)=> {//handle success
              
                const LilLegData = res.data;
                var LegRows = [];
                //console.log(Items);
                // console.log(Items[0].title);
                LilLegData.forEach((object) => {//object is replaced by whatever it says in the console
                    //console.log(object)
                    const aLeg = <LilLegendsRow LilLeg={object}></LilLegendsRow>;
                    //console.log("this is a item", aItem);
                    LegRows.push(aLeg);
                    // console.log(ItemRows);
                });
                
                //console.log("Itemsrows2",ItemRows);
                this.setState({lillegs:LegRows});
                console.log('Successfully retrieved LilLegends');

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
                <h1>Lil Legends</h1>
                {this.state.lillegs}
            </div>
        );

    }//render ending bracket
}// class ending bracket
export default LilLegends;