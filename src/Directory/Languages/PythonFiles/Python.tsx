import React, {Component} from 'react';
import SinglePythonFIle from "./singlePythonFIle";


const pythonFile = require('./Python.json');
let key = 0;
class Python extends Component {
    render() {
        return (
            <div style={{backgroundColor: key % 2 === 0 ? 'lightblue' : 'lightgreen', height: "100vh"}}>
            {pythonFile.map((file:typeof pythonFile) => (
                <SinglePythonFIle key={key} id={key++} title={file.title} description={file.description} details={file.details}/>
            ))}
            </div>
            );
        }
}

export default Python;