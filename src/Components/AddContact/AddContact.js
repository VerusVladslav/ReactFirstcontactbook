import React , {Fragment ,Component} from 'react';
import './AddContact.css';

import { Redirect } from 'react-router-dom';
class AddContact  extends Component {

    state={
    
        name:"",
        phone:"",
        address:"",
        email:"",
        gender:"",
        avatar:1,
       
        isSended:false
        
      };

setNameToState()
{  
    
    
        this.setState({
        name:document.getElementById("inputName").value

                    })
  
}
setEmailToState ()
{
    this.setState({
        email:document.getElementById("inputEmail").value
    })
    console.log(this.state.email);


}

setPhoneToState ()
{
        this.setState({
            phone:document.getElementById("inputPhone").value
        })

}
setAddressToState ()
{
     this.setState({
     address:document.getElementById("inputAddress").value
            })
            }
setavatarToState ()
{
                this.setState({
                    avatar:document.getElementById("inputAvatar").value
                })
             }
setGenderToState ()
     {
          let v=  document.getElementById("inputGender").value;
          if(v===1){
            this.setState({
                gender:"men"
               })
          }
             else{
                this.setState({
                    gender:"women"
                   })
             }       
                             
 }  
 Add()
{
       this.props.AddContacts(this.state);
       this.setState({
           isSended:true
       })
       
 }          
    render()
    {
        if(this.state.isSended===true)
        {
            return(<Redirect to="/"></Redirect>)
        }
        return(

            <Fragment>
    
  <div class="form-group row">
  <label for="inputName" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
             <input type="text" class="form-control" onChange={this.setNameToState.bind(this)} id="inputName" placeholder="Name"></input>
           
            </div>
  </div>
  <div class="form-group row">
    <label for="inputPhone" class="col-sm-2 col-form-label">Phone</label>
            <div class="col-sm-10">
             <input type="text" class="form-control" onChange={this.setPhoneToState.bind(this)} id="inputPhone" placeholder="Phone"></input>
           
            </div>
    </div>
    <div class="form-group row">
  <label for="inputAddress" class="col-sm-2 col-form-label">Address</label>
            <div class="col-sm-10">
             <input type="text" class="form-control" onChange={this.setAddressToState.bind(this)} id="inputAddress" placeholder="Address"></input>
           
            </div>
  </div>
  <div class="form-group row">
  <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
             <input type="email" class="form-control" onChange={this.setEmailToState.bind(this)} id="inputEmail" placeholder="Email"></input>
           
            </div>
  </div>
  <div class="form-group row">
  <label for="inputGender" class="col-sm-2 col-form-label">Gender</label>
            <div class="col-sm-10">
            <select class="custom-select"  onChange={this.setGenderToState.bind(this)} id="inputGender" placeholder="Gender">
        <option selected value="1">Men</option>
        <option value="2">Woman</option>
       
      </select>
             
           
            </div>
  </div>
  <div class="form-group row">
  <label for="inputPassword" class="col-sm-2 col-form-label">Avatar</label>
            <div class="col-sm-10">
             <input type="number" class="form-control" onChange={this.setavatarToState.bind(this)} id="inputAvatar" placeholder="Avatar"></input>
           
            </div>
  </div>
  <button className="btn btn-primary"  onClick={this.Add.bind(this)}>
        Save
  </button>
 
                </Fragment>
        )

        
    }


}

export default AddContact;