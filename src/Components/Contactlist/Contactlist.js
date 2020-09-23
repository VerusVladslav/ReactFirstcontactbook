import React, {
    
    Fragment
} from 'react';
import "./Contactlist.css";

import Contactitem from "../Contactitem/Contactitem";

const Contactlist =({DataContact,changeFavourite})=>{

var contact;
if(DataContact !=null)
{
    contact=DataContact.map(item=>{
        return(
        <Contactitem
        key={item.id}
        name={item.name}
        phone={item.phone}
        address={item.phone}
        email={item.email}
        gender={item.gender}
        avatar={item.avatar}
        isFavorite={item.isFavorite}
        changeFavourite={()=>changeFavourite(item.id)}   


        >
        </Contactitem>
        );
        
    })
}
return(
    <Fragment>
        <div className="card-deck mucont">

    {contact}
        </div>
    </Fragment>
)
}

export default Contactlist;
