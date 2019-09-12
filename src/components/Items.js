import React, { Component } from 'react';
import '../style/NavBar.css';
import ItemsRow from './ItemsRow';
const axios = require('axios');


class Items extends Component {
    constructor(props) {
        super(props);
        console.log('Items initializer');
        this.state = {
            error: null,
            items: []
        };
        this.findItem();
    }
    
    findItem() {
        console.log("Search Items function");
        const urlString = " http://tftapi.us-west-1.elasticbeanstalk.com/api/items";
       
        axios.get(urlString/*,{
                params:{
                    ID:12345  //if i need to add parameters later like apikeys
                }
            }*/)
            .then((res)=> {//handle success
              
                const Items = res.data;
                var ItemRows = [];
                //console.log(Items);
                // console.log(Items[0].title);
                Items.forEach((object) => {//object is replaced by whatever it says in the console
                    //console.log(object)
                    const aItem = <ItemsRow Item={object}></ItemsRow>;
                    //console.log("this is a item", aItem);
                    ItemRows.push(aItem);
                    // console.log(ItemRows);
                });
                
                //console.log("Itemsrows2",ItemRows);
                this.setState({items:ItemRows});
                console.log('Successfully retrieved Items');

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
                <h1>Items</h1>
                {this.state.items}
            </div>
        );

    }//render ending bracket
}// class ending bracket
export default Items;