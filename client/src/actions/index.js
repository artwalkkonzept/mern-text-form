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

export const postArtwalk = (name) => async function (dispatch) {
  const response = await fetch(`${API_URL}/artwalks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({ name: name })
  });
  const newArtwalk = await response.json();
  dispatch(addArtwalk(newArtwalk._id, newArtwalk.name, newArtwalk.bilds));
};

export const postBild = (artwalkId, bild) => async function (dispatch) {
  const response = await fetch(`${API_URL}/artwalks/${artwalkId}/bilds`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({ bild: bild })
  });
  const artwalk = await response.json();
  dispatch(addBild(artwalk._id, bild));
};