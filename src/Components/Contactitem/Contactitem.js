import React, {
    Component,
    Fragment
} from 'react';
import "./Contactitem.css";

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
        
    }
setRandomImage()
{
    const random=Math.floor(Math.random()*Math.floor(99));
    this.setState({
        avatar:random
    });
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

                       
                   
                    
                  
                   
                </div>
            </div>
           
        </Fragment>
        )
    }
}

export default Contactitem;