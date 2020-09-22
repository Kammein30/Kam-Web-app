import React, {Component, CSSProperties} from 'react';
//Use the filesystem to load the test file
import SingleJavaFile from "./singleJavaFile";
import "bootstrap/dist/css/bootstrap.css";


const javaFile = require ("../../Project Info/Java.json");
let key = 1;

class Java extends Component {


    render() {
        return <div style={{backgroundColor: key % 2 === 0 ? 'lightblue' : 'lightgreen'}}>
                 {javaFile.map((file: typeof javaFile)=>(
                    <SingleJavaFile key={key++}  id={key} title={file.title} description={file.description} details={file.details}/>
                ))}
            </div>;
    }
}

export default Java;