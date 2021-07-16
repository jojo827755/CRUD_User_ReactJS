import React, { Component } from 'react';

class UserTable extends Component {
    delete= () => {   
      console.log("sadasdas");
      this.props.deleteUser(this.props.children)
    }
    update = ()=> {
      console.log("vao update");
      this.props.updateUser(this.props.children)
    }
    render() {
        return (

            <tr>
            <th scope="row">{this.props.index}</th>
            <td>{this.props.children.firstName}</td>
            <td>{this.props.children.userName}</td>
            <td>{this.props.children.lastName}</td>
            <td>{this.props.children.email}</td>
            <td className="icon_user">
              <i className="icon_user-update ti-pencil" onClick = {()=>this.update()}    ></i>
              <i className="icon_user-delete ti-close"  onClick={()=>this.delete()}></i>
            </td>                      
          </tr>
        
        );
    }
}

export default UserTable;