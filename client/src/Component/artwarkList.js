import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
//import { Link } from "react-router-dom";
 
const Artwalk = (props) => (
  <tr>
    <td>{props.artwalk.name}</td>
    <td>{props.artwalk.bilds}</td>
    <td>
    
    </td>
  </tr>
);
 
export default class ArtwalkList extends Component {
  // API url from the file '.env' OR the file '.env.development'.
  // The first file is only used in production.
  //API_URL = process.env.REACT_APP_API_URL;

  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
    //this.deleteArtwalk = this.deleteArtwalk.bind(this);
    this.state = { artwalks: [] };
  }
 
  /*componentDidMount() {
    // Get everything from the API

    this.getArtwalks().then(() => console.log("Artwalks got it!"));
}

async getArtwalks() {
    let url = `${this.API_URL}/artwalks`; // URL of the API.
    let result = await fetch(url); // Get the data
    let json = await result.json(); // Turn it into json
    return this.setState({ // Set it in the state
        artwalks: json
    })
}*/

  // This method will get the data from the database.
  componentDidMount() {
    axios
      .get("http://localhost:8080/artwalk/")
      .then((response) => {
        this.setState({ artwalks: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

 
 
  // This method will map out the users on the table
  artwalkList() {
    return this.state.artwalks.map((currentartwalk) => {
      return (
        <Artwalk
        artwalk={currentartwalk}
          key={currentartwalk._id}
        />
      );
    });
  }
 
  // This following section will display the table with the artwalks of individuals.
  render() {
    return (
      <div style={{paddingBottom:"50px"}} className="container">
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>{this.artwalkList()}</tbody>
        </table>
      </div>
    );
  }
}