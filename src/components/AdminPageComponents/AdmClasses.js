import React from 'react';
import Axios from 'axios';
import styles from '../../style/AdminPage.css';

class AdmClasses extends React.Component{
    constructor(props){
        super(props);
        console.log('in admClasses');
        this.state={
            ClassName:'',
            ClassBonus1:'',
            ClassBonus2:'',
            ClassBonus3:'',
            ClassBonus4:'',
            ClassBonus5:'',
            ClassImg:'',
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

        const urlString = " http://tftapi.us-west-1.elasticbeanstalk.com/api/classes";
      
        var classData ={
            ClassName:`${this.state.ClassName}`,
            ClassBonus1:`${this.state.ClassBonus1}`,
            ClassBonus2:`${this.state.ClassBonus2}`,
            ClassBonus3:`${this.state.ClassBonus3}`,
            ClassBonus4:`${this.state.ClassBonus4}`,
            ClassBonus5:`${this.state.ClassBonus5}`,
            ClassImg:`${this.state.ClassImg}`
        }

        if(this.state.reqType=='Edit'){

            var classKey=prompt('Which Class by Its id?');
            Axios.put(urlString+`/${classKey}`,classData)
            .then(function(res){
                alert(res);
            })
            .then(function(error){
                console.log(error);
            });

        }else if(this.state.reqType=='Add'){
            Axios.post(urlString,classData)
            .then(function(res){
                alert(`Successfully added Class:${classData.ClassName} `)
            })
            .then(function(error){
                console.log(error);
            });
        }else if(this.state.reqType=='Delete'){
            var classKey=prompt('Which Class by its id?');
            Axios.delete(urlString+`/${classKey}`)
            .then(function(res){
                alert(res);
            })
            .then(function(error){
                console.log(error);
            });
        }else{
            console.log('something went wrong in the classes if elses')
        }

 
 
    }
        

    render(){
        return(
        <div className="adminflex-container">
            <h1>
                Do something with the classes!
            </h1>
            <form onSubmit={this.handleSubmit}>

                    <select className="select-box" name="reqType" onChange={this.handleChange}>
                        <option value="Add">Add</option>
                        <option value="Edit">Edit</option>
                        <option value="Delete">Delete</option>
                    </select>
                    <label htmlFor="ClassName">Enter ClassName</label>
                    <input className="my_inputs" id="ClassName" name="ClassName" type ="text" onChange={this.handleChange}/>

                    <label htmlFor="ClassBonus1">Enter ClassBonus1</label>
                    <input className="my_inputs" id="ClassBonus1" name="ClassBonus1" type ="text" onChange={this.handleChange}/>

                    <label htmlFor="ClassBonus2">Enter ClassBonus2</label>
                    <input className="my_inputs" id="ClassBonus2" name="ClassBonus2" type ="text" onChange={this.handleChange}/>
                    
                    <label htmlFor="ClassBonus3">Enter ClassBonus3</label>
                    <input className="my_inputs" id="ClassBonus3" name="ClassBonus3" type ="text" onChange={this.handleChange}/>

                    <label htmlFor="ClassBonus4">Enter ClassBonus3</label>
                    <input className="my_inputs" id="ClassBonus4" name="ClassBonus4" type ="text" onChange={this.handleChange}/>

                    <label htmlFor="ClassBonus5">Enter ClassBonus3</label>
                    <input className="my_inputs" id="ClassBonus5" name="ClassBonus5" type ="text" onChange={this.handleChange}/>
                
                    <label htmlFor="ClassImg">Enter Class Image</label>
                    <input className="my_inputs" id="ClassImg" name="ClassImg" type ="text" onChange={this.handleChange}/>

                    <button>Submit</button>
                </form>
        </div>
        )
    }
}

export default AdmClasses;