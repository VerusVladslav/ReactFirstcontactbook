import React, {  Fragment } from 'react';
import Categoryitem from '../Categoryitem/Categoryitem';

import './Category.css' ;


const Categorylist =({DataCategory,removeCategory})=>{
    
    var category;
if(DataCategory !=null)
{
    category=DataCategory.map(item=>{
    
    return(

             <Categoryitem
              key={item.id}
              name={item.name}
             ></Categoryitem>

            );
           
})
}


return(
        <Fragment>
          <table class="table">
        <thead class="thead-dark">
<tr>
<th scope="col"></th>
<th scope="col">Name</th>
<th scope="col"></th>

</tr>
</thead>
<tbody>

   {category}
   </tbody>
</table>
    </Fragment>
)
}
export default Categorylist;