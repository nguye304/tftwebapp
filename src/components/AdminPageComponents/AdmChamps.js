import React from 'react';
import Axios from 'axios';
import styles from '../../style/AdminPage.css';
class AdmChamps extends React.Component{
    constructor(props){
        super(props);
        console.log('in admchamps');
        this.state={
            ChampName:'',
            ChampClass1:'',
            ChampClass2:'',
            ChampClass3:'',
            ChampHP:0,
            ChampAD:0,
            ChampAP:0,
            ChampDEF:0,
            ChampRES:0,
            ChampImg:'',
            cost:0,
            reqType:'Add'//type of request could be put or delete or post
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


        const urlString = " http://tftapi.us-west-1.elasticbeanstalk.com/api/champs";
      
        var champdata ={
            ChampName:`${this.state.ChampName}`,
            ChampClass1:`${this.state.ChampClass1}`,
            ChampClass2:`${this.state.ChampClass2}`,
            ChampClass3:`${this.state.ChampClass3}`,
            ChampHP:this.state.ChampHP,
            ChampAD:this.state.ChampAD,
            ChampAP:this.state.ChampAP,
            ChampDEF:this.state.ChampDEF,
            ChampRES:this.state.ChampRES,
            ChampImg:`${this.state.ChampImg}`,
            cost:this.state.cost
        }

        if(this.state.reqType=='Edit'){

            var ChampKey=prompt('Which Champion by their id?');
            Axios.put(urlString+`/${ChampKey}`,champdata)
            .then(function(res){
                alert(res);
            })
            .then(function(error){
                console.log(error);
            });

        }else if(this.state.reqType=='Add'){
            Axios.post(urlString,champdata)
            .then(function(res){
                alert(`Successfully added Champion:${champdata.ChampName} `)
            })
            .then(function(error){
                console.log(error);
            });
        }else if(this.state.reqType=='Delete'){
            var ChampKey=prompt('Which Champion by their id?');
            Axios.delete(urlString+`/${ChampKey}`)
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
            <h1 className="header">
                Do something with Champions!
            </h1>
            <form onSubmit={this.handleSubmit} >

                    <select className="select-box"name="reqType" onChange={this.handleChange}>
                        <option value="Add">Add</option>
                        <option value="Edit">Edit</option>
                        <option value="Delete">Delete</option>
                    </select>
                    
                
                    <label htmlFor="ChampName">Enter ChampName: </label>
                    <input id="ChampName" name="ChampName" className = "my_inputs" type ="text" onChange={this.handleChange}/>

                    <label htmlFor="ChampClass1">Enter ChampClass1: </label>
                    <input id="ChampClass1" name="ChampClass1" className = "my_inputs" type ="text" onChange={this.handleChange}/>

                    <label htmlFor="ChampClass2">Enter ChampClass2: </label>
                    <input id="ChampClass2" name="ChampClass2" className = "my_inputs" type ="text" onChange={this.handleChange}/>
                    
                    <label htmlFor="ChampClass3">Enter ChampClass3: </label>
                    <input id="ChampClass3" name="ChampClass3" className = "my_inputs" type ="text" onChange={this.handleChange}/>

                    <label htmlFor="ChampHP">Enter ChampHP: </label>
                    <input id="ChampHP" name="ChampHP" className = "my_inputs" type ="text" onChange={this.handleChange}/>

                    <label htmlFor="ChampAD">Enter ChampAD: </label>
                    <input id="ChampAD" name="ChampAD" className = "my_inputs" type ="text" onChange={this.handleChange}/>

                    <label htmlFor="ChampDEF">Enter ChampDEF: </label>
                    <input id="ChampDEF" name="ChampDEF" className = "my_inputs" type ="text" onChange={this.handleChange}/>

                    <label htmlFor="ChampRES">Enter ChampRES: </label>
                    <input id="ChampRES" name="ChampRES" className = "my_inputs" type ="text" onChange={this.handleChange}/>

                    <label htmlFor="ChampImg">Enter ChampImg: </label>
                    <input id="ChampImg" name="ChampImg"className = "my_inputs"  type ="text" onChange={this.handleChange}/>

                    <label htmlFor="cost">Enter Cost: </label>
                    <input id="cost" name="cost" className = "my_inputs" type ="text"/>

                
                    

                    <button>Submit</button>
                </form>
        </div>
        )
    }
}

export default AdmChamps;