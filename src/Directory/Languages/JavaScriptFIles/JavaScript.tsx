import React, {Component, CSSProperties} from 'react';
import SingleFile from "../singleFile";

let key = -1;
const javaScriptFile = require('./JavaScript.json')
class JavaScript extends Component {

    divStyling : CSSProperties = {
        backgroundColor: key % 2 === 0 ? 'lightblue' : 'lightgreen',
        height: "100vh"
    }

    render() {
        return (
            <div>
                <div style={this.divStyling}>
                    {javaScriptFile.map((file:typeof javaScriptFile) => (
                        <SingleFile key={key} id={key++} title={file.title} description={file.description} details={file.details}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default JavaScript;