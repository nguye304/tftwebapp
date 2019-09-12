import React from 'react';
import Axios from 'axios';
import styles from '../../style/AdminPage.css';

class AdmItems extends React.Component{
    constructor(props){
        super(props);
        console.log('in admItems');
        this.state={
            ItemName:'',
            ItemStat1:0,
            ItemStat2:0,
            ItemStat3:0,
            Recipe:3,
            Stat1Type:'',
            Stat2Type:'',
            Stat3Type:'',
            ItemEffect:'',
            ItemImg:'',
            reqType:'Add'
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]:event.target.value});
        console.log("event name ",event.target.name);
        console.log("event value",event.target.value);
    }



    handleSubmit = event =>{
        event.preventDefault();

        const urlString = " http://tftapi.us-west-1.elasticbeanstalk.com/api/items";
      
        var itemData ={
            ItemName:`${this.state.ItemName}`,
            ItemStat1:this.state.ItemStat1,
            ItemStat2:this.state.ItemStat2,
            ItemStat3:this.state.ItemStat3,
            Recipe:this.state.Recipe,
            Stat1Type:`${this.state.Stat1Type}`,
            Stat2Type:`${this.state.Stat2Type}`,
            Stat3Type:`${this.state.Stat3Type}`,
            ItemEffect:`${this.state.ItemEffect}`,
            ItemImg:`${this.state.ItemImg}`
        }
        if(this.state.reqType=='Edit'){

            var iKey=prompt('Which Item by its id?');
            Axios.put(urlString+`/${iKey}`,itemData)
            .then(function(res){
                alert(res);
            })
            .then(function(error){
                console.log(error);
            });

        }else if(this.state.reqType=='Add'){
            Axios.post(urlString,itemData)
            .then(function(res){
                alert(`Successfully added Item:${itemData.ItemName} `)
            })
            .then(function(error){
                console.log(error);
            });
        }else if(this.state.reqType=='Delete'){
            var iKey=prompt('Which Item by its id?');
            Axios.delete(urlString+`/${iKey}`)
            .then(function(res){
                alert(res);
            })
            .then(function(error){
                console.log(error);
            });
        }else{
            console.log('something went wrong in the champs if elses')
        }
    }
        

    render(){
        return(
        <div className="adminflex-container">
            <h1>
                Do something with the Items
            </h1>
            <form onSubmit={this.handleSubmit}>
                     <select name="reqType" onChange={this.handleChange}>
                        <option value="Add">Add</option>
                        <option value="Edit">Edit</option>
                        <option value="Delete">Delete</option>
                    </select>
                    <label htmlFor="ItemName">Enter ItemName</label>
                    <input className="my_inputs" id="ItemName" name="ItemName" type ="text" onChange={this.handleChange}/>

                    <label htmlFor="ItemStat1">Enter ItemStat1</label>
                    <input className="my_inputs" id="ItemStat1" name="ItemStat1" type ="text" onChange={this.handleChange}/>

                    <label htmlFor="ItemStat2">Enter ItemStat2</label>
                    <input className="my_inputs" id="ItemStat2" name="ItemStat2" type ="text" onChange={this.handleChange}/>
                    
                    <label htmlFor="ItemStat3">Enter ItemStat3</label>
                    <input className="my_inputs" id="ItemStat3" name="ItemStat3" type ="text" onChange={this.handleChange}/>
                    
                    <label htmlFor="Recipe">Enter Recipe</label>
                    <input className="my_inputs" id="Recipe" name="Recipe" type ="text" onChange={this.handleChange}/>

                    <label htmlFor="Stat1Type">Enter Stat1Type</label>
                    <input className="my_inputs" id="Stat1Type" name="Stat1Type" type ="text" onChange={this.handleChange}/>

                    <label htmlFor="Stat2Type">Enter Stat2Type</label>
                    <input className="my_inputs" id="Stat2Type" name="Stat2Type" type ="text" onChange={this.handleChange}/>

                    <label htmlFor="Stat3Type">Enter Stat3Type</label>
                    <input className="my_inputs" id="Stat3Type" name="Stat3Type" type ="text" onChange={this.handleChange}/>

                    <label htmlFor="ItemEffect">Enter Item Effect</label>
                    <input className="my_inputs" id="ItemEffect" name="ItemEffect" type ="text" onChange={this.handleChange}/>
                
                    <label htmlFor="ItemImg">Enter Item Image</label>
                    <input className="my_inputs" id="ItemImg" name="ItemImg" type ="text" onChange={this.handleChange}/>

                    <button>Submit</button>
                </form>
        </div>
        )
    }
}

export default AdmItems;