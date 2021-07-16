import React, { Component } from 'react';
import UserTable from "./UserTable.js"
class Table extends Component {
    constructor(props) {
        super(props);
        this.deleteUser = this.deleteUser.bind(this)
        this.updateUser = this.updateUser.bind(this)
    }
    deleteUser(user){
      this.props.handleDeleteUser(user)
    }
    updateUser(user){
      console.log("updateu");
      this.props.handleUpdateUser(user)
    }
    render() {
        return (
            <table className="table">
            
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">UserName</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Email</th>
                <th className="option_user" scope="col">Options</th>
              </tr>
            </thead>
            <tbody id="user_row">
                    {this.props.users.map((user,index)=>{
                        return <UserTable updateUser={this.updateUser} user = {user} index = {index} deleteUser = {this.deleteUser} >{user}</UserTable>
                    })}
            </tbody>
          </table>          
        );
    }
}

export default Table;