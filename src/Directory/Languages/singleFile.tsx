import React, {Component} from 'react';
import CSS from "csstype";
let key = 0;
type myProps = {
    id: number,
    title : string,
    description: string,
    details : string[]
}

class SingleFile extends Component<myProps> {

    constructor(props: myProps) {
        super(props);
    }
    styling: CSS.Properties = {
        backgroundColor: this.props.id % 2 === 0 ? 'lightblue' : 'lightgreen'
    };

    getDetail() {
        return this.props.details.map((detail)=> (
          <li key={key++}>{detail}</li>
        ));
    };

    render() {
        return(
            <div style={this.styling}>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
                <ul>
                    {this.getDetail()}
                </ul>
            </div>
        );
    }
}

export default SingleFile;