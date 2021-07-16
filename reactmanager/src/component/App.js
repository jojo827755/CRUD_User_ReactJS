import logo from '../logo.svg';
import '../App.css';
import Header1 from "./Header1.js"
import Table from "./Table.js"
import React, { Component } from 'react';
import storage from "./storage.js"
import NewUserForm from "./NewUserForm"
class App extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleUpdateUser = this.handleUpdateUser.bind(this);
    this.handleNewUser = this.handleNewUser.bind(this);
    this.handleChangeTrangthai  = this.handleChangeTrangthai.bind(this)
    this.handleDeleteUser = this.handleDeleteUser.bind(this)
    this.handleUpdateUserReal = this.handleUpdateUserReal.bind(this)
    this.state = {
      users : [
        {
          userName: "minh"
          , firstName: "nguyen"
          , lastName: "Hoang"
          , email: "sdsdsadsad@gmail.com"
      },
      {
          userName: "sasue"
          , firstName: "nguyen"
          , lastName: "Hoang"
          , email: "sdsdsadsad@gmail.com"
      },
      {
          userName: "lalala"

          , firstName: "nguyen"
          , lastName: "Hoang"
          , email: "sdsdsadsad@gmail.com"
      },
      {

      }
      ]
      ,
      userSearch: [],
      userUpdate : null,
      trangthai : "table"
    }
  }
  handleDeleteUser(userRemove){
    this.setState({users:this.state.users.filter(user=>user!==userRemove)})
    this.setState({userSearch : []})
  }
  handleUpdateUser(user){
    console.log(user);
    this.setState ({userUpdate : user
                      , trangthai : "UpdateForm"})

  }
  handleSearch(value){
    this.setState({
      userSearch : this.state.users.filter((user)=>(user.userName?.includes(value)))
    })
    if(!value){
      console.log(this.setState({userSearch:[]}));
    }
    // console.log(this.state.users.filter((user)=>(user.userName.includes(value))));
  }
  handleNewUser(user){
    // console.log(...this.state.users);
    this.setState({users : [...this.state.users,user]});
    console.log(this.state.users);
  }
  handleChangeTrangthai(trangthai){

    this.setState({trangthai : trangthai})
  
  }
  handleUpdateUserReal(user){
    
    console.log(this.state.userUpdate);
    this.setState({users:     this.state.users.map((userIndex)=>{
      if(userIndex === this.state.userUpdate){
        userIndex = {...user}
      }
      return userIndex
    })    })
  }
  render() {
    const users = this.state.users
    const userSearch = this.state.userSearch
    // {userSearch}
    return (
      <div className="App">
      <div id="main">
      {/*header*/}
      <div id="header">
      <Header1 users ={users} handleSearch= {this.handleSearch} handleChangeTrangthai= {this.handleChangeTrangthai} ></Header1>
      </div>
      {/* container */}
      <div className="container">
        <div id="content">
        { this.state.trangthai=== "table" ? <Table handleUpdateUser= {this.handleUpdateUser} handleDeleteUser = {this.handleDeleteUser} users = {userSearch.length?userSearch:users} /> :""} 
        { this.state.trangthai=== "NewUserForm" ? <NewUserForm handleChangeTrangthai= {this.handleChangeTrangthai} handleNewUser = {this.handleNewUser}></NewUserForm>:""}
        { this.state.trangthai=== "UpdateForm" ?  <NewUserForm handleUpdateUserReal = {this.handleUpdateUserReal} user = {this.state.userUpdate} handleChangeTrangthai= {this.handleChangeTrangthai} handleNewUser = {this.handleNewUser}></NewUserForm>:""}
        </div>
      </div>
      
    </div>
      </div>
    );
  }
}

export default App;

