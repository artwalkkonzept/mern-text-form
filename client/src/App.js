import { useSelector } from 'react-redux'
import { Router } from "@reach/router";
import Artwalk from "./Artwalk";
import Artwalks from "./Artwalks";
//import {postArtwalk, postBild} from "./actions";

function App() {
 // const dispatch = useDispatch()

  // We get state from the redux store using a selector function that selects 
  // the part of the state that we are interested in.
  const artwalks = useSelector(state => state.artwalks);

  // Helper function for finding a artwalk by id 
  function getArtwalk(id) {
    return artwalks.find(artwalk => artwalk._id === id);
  }

  // Helper function for dispatching the ADD_BILD action
  /*function addBild(artwalkId, bild) {
    return dispatch(postBild(artwalkId, bild));
  }*/

  // Helper function for dispatching the ADD_ARTWALK action
  /*function addArtwalk(name) {
    return dispatch(postArtwalk(name));
  }*/

  // Helper function for dispatching the DELETE_ARTWALK action
  //function deleteArtwalk(id) {
    // TODO: Implement!
  //}

  return (
    <>
      <Router>
        <Artwalk path="/artwalk/:id" getArtwalk={getArtwalk} />
        <Artwalks path="/" artwalks={artwalks} />
      </Router>
    </>
  );
}

export default App;


//<Artwalk path="/artwalk/:id" getArtwalk={getArtwalk} addBild={addBild} />