import React, {Component} from 'react';
import {Link} from "@reach/router";

class Artwalk extends Component {
    render() {
        const artwalk = this.props.getArtwalk(this.props.id);
        let content = <p>Loading</p>;
        if (artwalk) {
            content =
                <>
                    <h1>Title</h1>
                    <div className="container" >
                    <h2>{artwalk.name}</h2>

                    <h5>Description</h5>
                    <ul>
                        {artwalk.bilds.map(h => <li key={h}>{h}</li>)}
                    </ul>
                    <Link to="/">Back</Link>
                </div>
                    </>
        }
        return content;
    }
}

export default Artwalk;

