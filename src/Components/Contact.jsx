import React, { Component } from "react";
import contacts from "../contacts.json";

export class Contact extends Component {
  state = {
    contacts: contacts.slice(0, 5),
  };

  addRandomContact = () => {
    console.log("click");

    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    const copy = [...this.state.contacts];
    copy.push(randomContact);
    this.setState({
      contacts: copy,
    });
  };
//   sortByPop=()=>{

//     const copy=[...this.state.contacts];
//     copy.sort (function(a,b) {
    
//     if (a.popularity<b.popularity){

    
// return -1;}
// if (a.popularity>b.popularity){
//     return 1;
// } return 0;
//   });
  sortByName = () => {
    //   console.log("hola");

    const copy = [...this.state.contacts];
    copy.sort(function (a, b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    this.setState({contacts:copy});
  };
  render() {
    return (
      <div>
        <button onClick={this.sortByPop}>Sort by Popularity</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.addRandomContact}>Create</button>
        <table className="Contact">
          <thead>
            <tr>
              <th>Picture</th>

              <th> Name </th>
              <th> Popularity</th>
            </tr>
          </thead>

          {this.state.contacts.map((contact) => {
            return (
              <tr>
                <td>
                  <img
                    style={{
                      height: 60,
                      width: 60,
                    }}
                    src={contact.pictureUrl}
                    alt=""
                  />
                </td>
                <td> {contact.name} </td>

                <td> {contact.popularity.toFixed(2)}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default Contact;
