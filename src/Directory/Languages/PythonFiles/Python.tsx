import React, {Component, CSSProperties} from 'react';
import SingleFile from "../singleFile";

const pythonFile = require('./Python.json');
let key = -1;

class Python extends Component {

    divStyling : CSSProperties = {
        backgroundColor: key % 2 === 0 ? 'lightblue' : 'lightgreen',
        height: "100vh"
    }

    render() {
        return (
            <div style={this.divStyling}>
            {pythonFile.map((file:typeof pythonFile) => (
                <SingleFile key={key} id={key++} title={file.title} description={file.description} details={file.details}/>
            ))}
            </div>
            );
        }
}

export default Python;