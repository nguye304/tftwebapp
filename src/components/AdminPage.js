import React, { Component } from 'react';
import '../style/NavBar.css';
import AdmChamps from './AdminPageComponents/AdmChamps';
import AdmClasses from './AdminPageComponents/AdmClasses';
import AdmItems from './AdminPageComponents/AdmItems';
import AdmLilLegends from './AdminPageComponents/AdmLilLegends';


class AdminPage extends Component {
    constructor(props) {
        super(props);
        console.log('ADminPage initializer');
        this.AddChampions=this.AddChampions.bind(this);
        this.AddLilLegends=this.AddLilLegends.bind(this);
        this.AddClasses=this.AddClasses.bind(this);
        this.AddItems=this.AddItems.bind(this);
        this.state={
            myoptions:[]
        }
    }
    
    AddChampions(props){
        console.log('inside add champions in admin page');
        const goal =<AdmChamps></AdmChamps>;
        this.setState({myoptions:goal});

    }
    AddLilLegends(props){
        console.log('inside add lillegends in admin page');
        const goal=<AdmLilLegends></AdmLilLegends>;
        this.setState({myoptions:goal});

    }
    AddClasses(props){
        console.log('inside add classes in admin page');
        const goal=<AdmClasses></AdmClasses>;
        this.setState({myoptions:goal});

    }
    AddItems(props){
        console.log('inside add items in admin page');
        const goal=<AdmItems></AdmItems>;
        this.setState({myoptions:goal});
    }


    render() {
        return (
            <div>
                <h1>Admin Page</h1>
                <button onClick={this.AddChampions}>Champions</button>
                <button onClick={this.AddClasses}>Classes</button>
                <button onClick={this.AddLilLegends}>Lil Legends</button>
                <button onClick={this.AddItems}>Items</button>
                {this.state.myoptions}
            </div>
        );

    }//render ending bracket
}// class ending bracket
export default AdminPage;