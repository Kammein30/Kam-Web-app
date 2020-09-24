import React, {Component} from 'react';
import SingleJobFile from "./SingleJobFile";
import CSS from "csstype";

const jobFiles = require('./PreviousJobs.json');
//console.log(jobFiles);
//jobFiles.map((file: typeof jobFiles) => file.map((job: typeof file) => (console.log(job))));
let i = -1;
const length = jobFiles.length;
//console.log(length)
class PreviousJobs extends Component {

    styling: CSS.Properties = {
        backgroundColor: i % 2 === 0 ? 'lightgreen' : 'lightblue',
        height: "100vh"
    };




    render() {
      return <div style={this.styling}>
          {
              jobFiles.map((file: typeof jobFiles) => file.map((job: typeof file) => (
                  <SingleJobFile key={i++} id={i} header={job.Header} title={job.Title} details={job.Details} length={length}/>
              )))}
            </div>
    }
}

export default PreviousJobs;