import { useState } from 'react';
import { Link } from "@reach/router";

function Artwalk(props) {
  const [input, setInput] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    setInput(value);
  }

  const artwalk = props.getArtwalk(props.id);
  let content = <p>Loading</p>;
  if (artwalk) {
    content =
      <>
        <h1>{artwalk.name}</h1>

        <h3>Bilds</h3>
        <ul>
          {artwalk.bilds.map((k, index) => <li key={index}>{k}</li>)}
        </ul>

        <input name="newBild" onChange={handleChange} type="text" />
        <button onClick={() => props.addBild(props.id, input)}
          type="submit">Add New bild</button>

        {/* TODO: Add DELETE artwalk button! */}
        <br />
        <Link to="/">Back</Link>
      </>
  }

  return content;
}

export default Artwalk;
