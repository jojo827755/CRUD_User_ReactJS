import React, { Component } from 'react';

export default class Header1 extends Component {
  constructor(props) {
    super(props);
    this.Search = this.Search.bind(this)
    this.handleChangeTrangThai1 = this.handleChangeTrangThai1.bind(this)
  }
  
  handleChangeTrangThai1(){
    console.log("Sadsa");
    this.props.handleChangeTrangthai("NewUserForm")
  }
  Search(e){
    console.log(e.target.value);
    this.props.handleSearch(e.target.value)
  }
  render() {
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={this.handleChangeTrangThai1}>Add New User</a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" id="searchelement" type="search" placeholder="Search" aria-label="Search" onKeyUp={this.Search} />
              </form>
            </div>
          </nav>
          
            </div>
        );
    }
}

