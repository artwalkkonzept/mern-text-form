import { useState } from 'react';
import { Link } from "@reach/router";

function Artwalks(props) {
  const [input, setInput] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    setInput(value);
  }

  if (!props.artwalks) {
    return <p>No data!</p>;
  }

  return (
    <>
      <h1>Artwalks</h1>
      <ol>
        {props.artwalks.map(artwalk =>
          <li key={artwalk._id}>
            <Link to={`/artwalk/${artwalk._id}`}>{artwalk.name}</Link>
          </li>)}
      </ol>
      

      <input name="newArtwalkName" onChange={handleChange} type="text" />
      <button onClick={() => props.addArtwalk(input)} type="submit">Add New Artwalk</button>
    </>
  );
}

export default Artwalks;
