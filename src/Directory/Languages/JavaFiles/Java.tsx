import React, {Component, CSSProperties} from 'react';
import SingleFile from "../singleFile";
import "bootstrap/dist/css/bootstrap.css";

const javaFile = require ("./Java.json");
let key = -1;

class Java extends Component {

    divStyling : CSSProperties = {
        backgroundColor: key % 2 === 0 ? 'lightblue' : 'lightgreen',
        height: "100vh"
    }

    render() {
        return <div style={this.divStyling}>
                 {javaFile.map((file: typeof javaFile)=>(
                    <SingleFile key={key}  id={key++} title={file.title} description={file.description} details={file.details}/>
                ))}
            </div>;
    }
}

export default Java;