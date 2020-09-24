import React, {Component} from 'react';
import CSS from "csstype";

let key = 0;
type myProps = {
    id: number,
    header?: string,
    title: string,
    details: string[],
    length: number

}
class SingleJobFile extends Component<myProps>{

    constructor(props: myProps) {
        super(props);
        console.log("id = " + props.id);
    }
    styling: CSS.Properties = {
        backgroundColor: this.props.id % 2 === 0 ? 'lightgreen' : 'lightblue'
    };

    details() {
        return this.props.details.map((detail) => (
                <li key={key++}>{detail}</li>
        ));
    };

    render() {
        return (
            <div style={this.styling}>
                {this.props.id < this.props.length ? <h1>{this.props.header}</h1> : null}
                <p>
                    <b>{this.props.title}</b>
                </p>
                <ul>
                    {this.details()}
                </ul>
            </div>
        );
    }
}

export default SingleJobFile;