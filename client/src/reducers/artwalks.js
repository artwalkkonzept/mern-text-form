/**
 * This artwalks reducer function implements these actions:
 * - ADD_ARTWALK: Add a new artwalk object to the redux store. New id is picked by random. 
 * - ADD_BILD: Add a new bild to one of the artwalks in the redux store. Find artwalk by id.
 */
function artwalks(state = [], action) {
  switch (action.type) {
    case 'ADD_ARTWALK': {
      const artwalk = {
        _id: action.id,
        name: action.name,
        bilds: action.bilds
      };
      return [...state, artwalk];
    }
    case 'ADD_BILD': {
      return state.map(artwalk => artwalk._id === action.artwalkId ?
        { ...artwalk, bilds: [...artwalk.bilds, action.bild] } : artwalk);
    }
    
    default: return state;
  }
}

export {artwalks};
