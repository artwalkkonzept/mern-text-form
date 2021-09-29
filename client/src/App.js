// We use Route in order to define the different routes of our applicatio
import React, {Component} from 'react';
import {Router} from "@reach/router";
import { Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./Component/navbar";
import Create from "./Component/create";
import ArtwalkList from "./Component/artwarkList";

import Artwalk from "./Component/Note/Artwalk";
import Artwalks from "./Component/Note/Artwalks";

class App extends Component {
  // API url from the file '.env' OR the file '.env.development'.
  // The first file is only used in production.
  API_URL = process.env.REACT_APP_API_URL;

  constructor(props) {
      super(props);
      this.state = {
          //artwalks: [],

          artwalks: []
      };
  }

  componentDidMount() {
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

  }

  getArtwalk(id) {
      // Find the relevant artwalk by id
      return this.state.artwalks.find(k => k._id === id);
  }

render() {
        return (
            
            <>
                <Router>

                    <Artwalk path="/artwalk/:id" getArtwalk={id => this.getArtwalk(id)}/>
                    <Artwalks path="/" artwalks={this.state.artwalks}/>
                </Router>
                <div>
      <Navbar />
      <Route exact path="/">
        <ArtwalkList />
      </Route>
      <Route path="/create">
        <Create />
      </Route>
    </div>
            </>
        );
    }
  }
export default App;