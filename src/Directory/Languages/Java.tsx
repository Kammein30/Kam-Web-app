import React, {Component, CSSProperties} from 'react';
import SingleJavaFile from "./singleJavaFile";
import "bootstrap/dist/css/bootstrap.css";


const javaFile = require ("../../Project Info/Java.json");
let changeColor = 1;

class Java extends Component {


    render() {
        return <div style={{backgroundColor: changeColor % 2 === 0 ? 'lightblue' : 'lightgreen'}}>
                 {javaFile.map((file: typeof javaFile)=>(
                    <SingleJavaFile key={changeColor++}  id={changeColor} title={file.title} description={file.description} details={file.details}/>
                ))}
            </div>;
    }
}

export default Java;