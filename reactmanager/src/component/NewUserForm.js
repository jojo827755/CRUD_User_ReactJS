import React, { Component } from 'react';
import validator from "./Validator"

class NewUserForm extends Component {
constructor(props) {
    super(props);
    this.changeTrangthai2= this.changeTrangthai2.bind(this);
    this.addUser = this.addUser.bind(this);
    this.state = {
      user : null
    }
}
updateUserReal(){
  var check = true;
 var userName = this.refs.userName.value
  var firstName = this.refs.firstName.value 
  var lastName = this.refs.lastName.value 
  var email= this.refs.email.value
  if(!userName) {
    check =false 
  }
  if(!firstName) {
    check = false
  }
  if(!lastName) {
    check = false
  }
  var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!regex.test(email)) {
    check = false
  }
  if(!check)
  {
  }
  else{
  this.props.handleUpdateUserReal({
     userName : this.refs.userName.value,
     firstName : this.refs.firstName.value ,
     lastName : this.refs.lastName.value ,
     email: this.refs.email.value
  })
  this.changeTrangthai2();
}
}
changeTrangthai2 (){
  this.props.handleChangeTrangthai("table")  
}
changeTrangthai1 (){
  this.props.handleChangeTrangthai("UpdateForm")  
}
componentDidMount() {
  validator({
    form : ".form",
    rules : [
        validator.isRequired('#username'),
        validator.isRequired('#firstname'),
        validator.isRequired('#lastname'),
        validator.isEmail('#email')
    ]
})
}
addUser(){
  var check = true;
 var userName = this.refs.userName.value
  var firstName = this.refs.firstName.value 
  var lastName = this.refs.lastName.value 
  var email= this.refs.email.value
  if(!userName) {
    check =false 
  }
  if(!firstName) {
    check = false
  }
  if(!lastName) {
    check = false
  }
  var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!regex.test(email)) {
    check = false
  }
  if(!check)
  {

  }
  else{
  this.props.handleNewUser({
     userName : this.refs.userName.value,
     firstName : this.refs.firstName.value ,
     lastName : this.refs.lastName.value ,
     email: this.refs.email.value
  })
  this.changeTrangthai2();
}
}


    render() {
        return (
            <div className="content_form">
            <form className="form">
              <h1 style={{color: '#00b052'}}>New User</h1>
              <div className="form-group">
                <label className="form-group_label" htmlFor="username">Email</label>
                <input className="form-group_text" id="username" type="text" placeholder="username" ref="userName" defaultValue={this.props.user?this.props.user.userName:""} />
                <span className="form-message" />
              </div>
              <div className="form-group">
                <label className="form-group_label" htmlFor="firstname">FirstName</label>
                <input className="form-group_text" id="firstname" type="text" placeholder="firstname" ref ="firstName"  defaultValue={this.props.user?this.props.user.firstName:""}/>
                <span className="form-message" />
              </div>
              <div className="form-group">
                <label className="form-group_label" htmlFor=" lastname">LastName</label>
                <input className="form-group_text" id="lastname" type="text" placeholder="lastname" ref="lastName" defaultValue={this.props.user?this.props.user.lastName:""}/>
                <span className="form-message" />
              </div>""
              <div className="form-group">
                <label className="form-group_label" htmlFor="email">Email</label>
                <input className="form-group_text" id="email" type="text" placeholder="email" ref="email" defaultValue={this.props.user?this.props.user.email:""}/>
                <span className="form-message" />
              </div>
              <input type="submit" className="btn-add btn btn-success" defaultValue={this.props.user?"Update":"Add"} onClick ={this.props.user?()=>this.updateUserReal():this.addUser} value={this.props.user?"Update":"Add"}/>
              <button type="button" className="btn-cancel btn btn-danger" onClick={this.changeTrangthai2}>Cancel</button>
            </form>
          </div>
          
        );
    }
}

export default NewUserForm;