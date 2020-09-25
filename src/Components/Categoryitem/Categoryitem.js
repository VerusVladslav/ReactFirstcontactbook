import React, { Component, Fragment } from 'react';
import './Categoryitem.css' ;


class Categoryitem extends Component{
    state={

        id:this.props.id,
        name:this.props.name
    }



    render()
    {
        return(
        <Fragment>  
             <tr>
             <th scope="row"></th>
             <td>{this.state.name}</td>
             <td>
                 <div className="btn btn-primary">
                    Delete
                 </div>
             </td>
            
             </tr>
        </Fragment>
            )
    }

       
    
}

export default Categoryitem;