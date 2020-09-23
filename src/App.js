import React, { Component, Fragment } from 'react';

import './App.css';

import Contactlist from './Components/Contactlist/Contactlist';
import Favoritelist from './Components/Favoritelist/Favoritelist';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom' 
import Page404 from './Components/Page404/Page404';
import AddContact from './Components/AddContact/AddContact';


class App extends Component {
  state={
    List:[
      {
        id:1,
        name:"Vlad verus",
        phone:"+380 00 00 00 000",
        address:"Teatre",
        email:"test@gmail.com",
        gender:"men",
        avatar:5,
        isFavorite:true
      },
      {
        id:2,
        name:"Vlad verus",
        phone:"+380 00 00 00 000",
        address:"Teatre",
        email:"test@gmail.com",
        gender:"men",
        avatar:"6",
        isFavorite:false
      },
      {
        id:3,
        name:"Vlad verus",
        phone:"+380 00 00 00 000",
        address:"Teatre",
        email:"test@gmail.com",
        gender:"men",
        avatar:7,
        isFavorite:false
      },
      {
        id:4,
        name:"Vlad verus",
        phone:"+380 00 00 00 000",
        address:"Teatre",
        email:"test@gmail.com",
        gender:"men",
        avatar:2,
        isFavorite:true
      }
    ]
  }
  changeFavourite =id=>{
    const index=this.state.List.findIndex(t=>t.id===id);
    let templist=this.state.List.slice();
    templist[index].isFavorite=!templist[index].isFavorite;
    this.setState({
      List:templist
    });

    
    
  }
  favoritelist=this.state.List.slice();
  
  favlist()
  {
    this.favoritelist=[]
    this.state.List.forEach(element => {
      if(element.isFavorite===true)
      {
      
       this.favoritelist.push(element);
      }
    });
    return this.favoritelist;
  }

  
 
 AddContacts(newContact){
 //if( newContact.id===this.state.List.length)
 
   newContact.id=this.state.List.length;
  
   this.state.List.push(newContact);
 
 }




  render()
  {
  
  
    return (
    


      <Fragment>
          <Router>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-10">
            <Link className="navbar-brand" to="/">Contact book</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-item nav-link active" to="/">Contact list</Link>
                <Link className="nav-item nav-link" to="/favoritecontact">Favorite contact</Link>
                <Link className="nav-item nav-link" to="/addcontact">Add contact</Link>
              </div>
            </div>
            </nav>
  

          
                <Switch>
                  <Route 
                   path="/"
                   exact
                   render={()=>
                    <Contactlist DataContact={this.state.List}  
                    changeFavourite={this.changeFavourite.bind(this)}
                    ></Contactlist>
                   }>
                  </Route>
                   
                   <Route 
                   path="/favoritecontact"
                   exact
                   render={()=>
                    <Favoritelist
                    DataContact={this.favlist()}
                    changeFavourite={this.changeFavourite.bind(this)}
                     >
                    </Favoritelist>
                   }>


                   </Route>

                 

                   <Route
                   path="/addcontact"
                   exact
                   render={()=>
                    <AddContact
                    AddContacts={this.AddContacts.bind(this)}
                    ></AddContact>
                    }>
                   </Route>
                   <Route
                   path="*"
                   exact
                   render={()=>
                    <Page404></Page404>
                    }>
                   </Route>
                </Switch>


            
       
        </div>
            </Router>
      </Fragment>
    );
  }
  
  
}

export default App;
