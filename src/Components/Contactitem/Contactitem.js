import React, {
    Component,
    Fragment
} from 'react';
import "./Contactitem.css";

import {Link} from 'react-router-dom';
class Contactitem extends Component {
    state={
        id:this.props.id,
        name:this.props.name,
        phone:this.props.phone,
        address:this.props.address,
        email:this.props.email,
        gender:this.props.gender,
        avatar:this.props.avatar,
        isFavorite:this.props.isFavorite,
        Categoryid:this.props.Categoryid
        
    }
    
   
setRandomImage()
{
    const random=Math.floor(Math.random()*Math.floor(99));
    this.setState({
        avatar:random
    });
}
setcategory()
{
    var select=document.getElementById("inputCategory");
    select.innerHTML="";
  //  this.props.Category.map(id,name).forEach(element => {
      //  select.innerHTML+=' <option >'+{element.name}+'</option>'
    //});
}
setFavorite()
{
   
    this.setState({
        isFavorite:!this.state.isFavorite
    })
}
    render() {
        
        const{name,phone,address,email,gender,avatar}=this.state;
        const URL_img=`https://randomuser.me/api/portraits/${gender}/${avatar}.jpg`;

        var class_star="fas fa-star fa-2x";
        if(this.props.isFavorite===false)
         {
             class_star="far fa-star fa-2x";
        }
      
        return ( 
            <Fragment>
            <div className="card">
                <img className="card-img-top" src={URL_img} alt="img"/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{phone}</p>
                    <p className="card-text">{email}</p>
                    <p className="card-text">{address}</p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-info" onClick={this.setRandomImage.bind(this)}>RANDOM IMAGE</button>
                
                  <i class={class_star} onClick={this.props.changeFavourite}></i>

                  <i class="fas fa-trash-alt fa-2x" onClick={this.props.removewContact}></i>
                  <Link to="/editContact">
                  <i class="fas fa-edit fa-2x" onClick={this.props.editContact}></i>
                  </Link>

                  {<select class="custom-select"   id="inputCategory" >
                        <option selected value="1">Men</option>
                        <option value="2">Woman</option>
       
                    </select>}
                  
                   
                </div>
            </div>
           
        </Fragment>
        )
    }
}

export default Contactitem;