import React, {
    
    
    Fragment
} from 'react';
import "./Favoritelist.css";

import Contactitem from "../Contactitem/Contactitem";

const Favoritelist =({DataContact,changeFavourite,removewContact,editContact})=>{

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
            removewContact={()=>removewContact(item.id)}
            editContact={()=>editContact(item.id)}
            >
            </Contactitem>
            );
            
        })
    }

    return(
        <Fragment>
            <div className="card-deck mucont-right">
    
                {contact}
            </div>
        </Fragment>
    )
}

export default Favoritelist;
