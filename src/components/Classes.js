import React, { Component } from 'react';
import '../style/NavBar.css';
import ClassesRow from './ClassesRow';
const axios = require('axios');


class Classes extends Component {
    constructor(props) {
        super(props);
        console.log('Classes initializer');
        this.state = {
            error: null,
            Classes: []
        };
        this.findClass();
    }
    
    findClass() {
        console.log("Search Classes function");
        const urlString = " http://tftapi.us-west-1.elasticbeanstalk.com/api/classes";
       
        axios.get(urlString/*,{
                params:{
                    ID:12345  //if i need to add parameters later like apikeys
                }
            }*/)
            .then((res)=> {//handle success
              
                const Classys = res.data;
                var ClassRows = [];
                //console.log(Items);
                // console.log(Items[0].title);
                Classys.forEach((object) => {//object is replaced by whatever it says in the console
                    //console.log(object)
                    const aClass = <ClassesRow Classes={object}></ClassesRow>;
                    //console.log("this is a item", aItem);
                    ClassRows.push(aClass);
                    // console.log(ItemRows);
                });  
                
                //console.log("Itemsrows2",ItemRows);
                this.setState({Classes:ClassRows});
                console.log('Successfully retrieved Classes');

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
                <h1>Classes</h1>
                {this.state.Classes}
            </div>
        );

    }//render ending bracket
}// class ending bracket
export default Classes;