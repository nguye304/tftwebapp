import React from 'react';
import Axios from 'axios';
import styles from '../../style/AdminPage.css';

class admLilLegends extends React.Component{
    constructor(props){
        super(props);
        console.log('in admLilLegends');
        this.state={
            LegName:'',
            LegTier:0,
            LegImage:'',
            LegUrl:'',
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

        const urlString = " http://tftapi.us-west-1.elasticbeanstalk.com/api/lillegs";
      
        var legData ={
            LegName:`${this.state.LegName}`,
            LegTier:this.state.LegTier,
            LegImage:this.state.LegImage,
            LegUrl:this.state.LegUrl
        }
        if(this.state.reqType=='Edit'){

            var legKey=prompt('Which Lil Legend by their id?');
            Axios.put(urlString+`/${legKey}`,legData)
            .then(function(res){
                alert(res);
            })
            .then(function(error){
                console.log(error);
            });

        }else if(this.state.reqType=='Add'){
            Axios.post(urlString,legData)
            .then(function(res){
                alert(`Successfully added Lil Legend:${legData.LegName} `)
            })
            .then(function(error){
                console.log(error);
            });
        }else if(this.state.reqType=='Delete'){
            var legKey=prompt('Which Lil Legend by their id?');
            Axios.delete(urlString+`/${legKey}`)
            .then(function(res){
                alert(res);
            })
            .then(function(error){
                console.log(error);
            });
        }else{
            console.log('something went wrong in the lil legends if elses')
        }
    }
        

    render(){
        return(
        <div>
            <h1 className="adminflex-container">
                Do something with the Little Legends
            </h1>
            <form onSubmit={this.handleSubmit}>
                    <select className="select-box" name="reqType" onChange={this.handleChange}>
                        <option value="Add">Add</option>
                        <option value="Edit">Edit</option>
                        <option value="Delete">Delete</option>
                    </select>
                    <label htmlFor="LegName">Enter LegName</label>
                    <input id="LegName" name="LegName" className="my_inputs"type ="text" onChange={this.handleChange}/>

                    <label htmlFor="LegTier">Enter LegTier</label>
                    <input id="LegTier" name="LegTier" className="my_inputs" type ="text" onChange={this.handleChange}/>

                    <label htmlFor="LegImage">Enter LegImage</label>
                    <input id="LegImage" name="LegImage" className="my_inputs" type ="text" onChange={this.handleChange}/>
                    
                    <label htmlFor="LegUrl">Enter LegUrl</label>
                    <input id="LegUrl" name="LegUrl" type ="text" className="my_inputs" onChange={this.handleChange}/>

                    <button>Submit</button>
                </form>
        </div>
        )
    }
}

export default admLilLegends;