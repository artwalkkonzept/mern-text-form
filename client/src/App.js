import React from "react";

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./Component/navbar";
import Create from "./Component/create";
import ArtwalkList from "./Component/artwarkList";

const App = () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/">
        <ArtwalkList />
      </Route>
      <Route path="/create">
        <Create />
      </Route>
    </div>
  );
};

export default App;