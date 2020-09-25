import React , {Fragment ,Component} from 'react';
import './AddCategory.css';

import { Redirect } from 'react-router-dom';
class AddCategory  extends Component{

    state={
        name:"",
        isSended:false
    }

setname()
{
    this.setState({
        name:document.getElementById("inputName").value

                    })
}
Add()
{
       this.props.AddCategory(this.state);
       this.setState({
           isSended:true
       })
       
 } 
render(){
    if(this.state.isSended===true)
    {
        return(<Redirect to="/"></Redirect>)
    }
    return(
        <Fragment>

    <div class="form-group row">
    <label for="inputName" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
             <input type="text" class="form-control" onChange={this.setname.bind(this)} id="inputName" placeholder="Name"></input>
           
            </div>
    </div>
    <button className="btn btn-primary"  onClick={this.Add.bind(this)}>
    Save
</button>
</Fragment>
    )
}

}
export default AddCategory;