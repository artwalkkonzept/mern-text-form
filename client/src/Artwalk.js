import { Link } from "@reach/router";
function Artwalk(props) {


  const artwalk = props.getArtwalk(props.id);
  let content = <p>Loading</p>;
  if (artwalk) {
    content =
      <>
        <h1>{artwalk.name}</h1>

        <h3>Bilds</h3>
        <ul>
          {artwalk.bilds}
        </ul>

       

       
        <br />
        <Link to="/">Back</Link>
      </>
  }

  return content;
}

export default Artwalk;
