import React, { Component, Fragment } from 'react';

import './App.css';

import Contactlist from './Components/Contactlist/Contactlist';
import Favoritelist from './Components/Favoritelist/Favoritelist';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom' 
import Page404 from './Components/Page404/Page404';
import AddContact from './Components/AddContact/AddContact';
import uuid from 'react-uuid';
import EditContact from './Components/EditContact/EditContact';
import Categorylist from './Components/Categorylist/Categorylist';
import AddCategory from './Components/AddCategory/AddCategory';


class App extends Component {
  state={
    List:[
      {
        id:uuid(),
        name:"Vlad verus",
        phone:"+380 00 00 00 000",
        address:"Teatre",
        email:"test@gmail.com",
        gender:"men",
        avatar:5,
        isFavorite:true,
        Categoryid:""
      },
      {
        id:uuid(),
        name:"Vlad verus",
        phone:"+380 00 00 00 000",
        address:"Teatre",
        email:"test@gmail.com",
        gender:"men",
        avatar:"6",
        isFavorite:false,
        Categoryid:""
      },
      {
        id:uuid(),
        name:"Vlad verus",
        phone:"+380 00 00 00 000",
        address:"Teatre",
        email:"test@gmail.com",
        gender:"men",
        avatar:7,
        isFavorite:false,
        Categoryid:""
      },
      {
        id:uuid(),
        name:"Vlad verus",
        phone:"+380 00 00 00 000",
        address:"Teatre",
        email:"test@gmail.com",
        gender:"men",
        avatar:2,
        isFavorite:true,
        Categoryid:""
      }
    ],
    currentContact:null,
    Category:[{
      id:uuid(),
        name:"first"
    },
    {
      id:uuid(),
        name:"sec"
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
 
   newContact.id=uuid();
   newContact.isFavorite=false;
   this.state.List.push(newContact);
 
 }

 AddCategory(newcategory)
{
  newcategory.id=uuid();
  this.state.Category.push(newcategory);
}

removewContact=(id)=>{
  const templist=this.state.List.slice();
  const indexRemoveElem=templist.findIndex(item=>item.id===id);
  templist.splice(indexRemoveElem,1);
  this.setState({
    List:templist
  })
}

editContact=(id)=>{
  const item=this.state.List.findIndex(item=>item.id===id);
  const currentContacts=this.state.List[item];
  this.setState({
    currentContact:currentContacts
  })
}

changeContact=(elem)=>{
  var item=this.state.List.find(item=>item.id===elem.id);
  item.name=elem.name;
  item.phone=elem.phone;
  item.address=elem.address;
  item.email=elem.email;
  item.gender=elem.gender;
  item.avatar=elem.avatar;
  item.isFavorite=elem.isFavorite;
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
                <Link className="nav-item nav-link" to="/categories">Categories</Link>
                <Link className="nav-item nav-link" to="/addcategory">Add category</Link>


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
                    removewContact={this.removewContact.bind(this)}
                    editContact={this.editContact.bind(this)}
                    Category={this.state.Category}
                    ></Contactlist>
                   }>
                  </Route>
                  <Route 
                   path="/categories"
                   exact
                   render={()=>
                    <Categorylist DataCategory={this.state.Category}  
                   
                    removeCategory={this.removewContact.bind(this)}
                   
                    ></Categorylist>
                   }>
                  </Route>
                   <Route 
                   path="/favoritecontact"
                   exact
                   render={()=>
                    <Favoritelist
                    DataContact={this.favlist()}
                    changeFavourite={this.changeFavourite.bind(this)}
                    removewContact={this.removewContact.bind(this)}
                    editContact={this.editContact.bind(this)}

                     >
                    </Favoritelist>
                   }>


                   </Route>

                   <Route
                   path="/addcategory"
                   exact
                   render={()=>
                    <AddCategory
                    AddCategory={this.AddCategory.bind(this)}
                    ></AddCategory>
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
                   path="/editContact"
                   exact
                   render={()=>
                    <EditContact 
                    currentContact={this.state.currentContact}
                    changeContact={this.changeContact.bind(this)}
                    ></EditContact>
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
