export const addBild = (artwalkId, bild) => ({
  type: 'ADD_BILD',
  bild: bild,
  artwalkId: artwalkId
});

export const addArtwalk = (id, name, bilds) => ({
  type: 'ADD_ARTWALK',
  id: id,
  name: name,
  bilds: bilds
});

const API_URL = process.env.REACT_APP_API_URL;

export const fetchArtwalks = _ => async function (dispatch) {
  const url = `${API_URL}/artwalks`;
  console.log(`Fetching from ${url}`);
  const result = await fetch(url);
  const data = await result.json();
  for (const artwalk of data) {
    dispatch(addArtwalk(artwalk._id, artwalk.name, artwalk.bilds));
  }
};