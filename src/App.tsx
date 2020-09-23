import React, {Component, EventHandler} from 'react';
import './App.css';
import Home from "./Directory/Home";
import Emoji from "react-emoji-render";
import {BrowserRouter as Router} from "react-router-dom";
import Java from "./Directory/Languages/JavaFiles/Java";
import Python from "./Directory/Languages/PythonFiles/Python";
import JavaScript from "./Directory/Languages/JavaScriptFIles/JavaScript";
import PreviousJobs from "./Directory/ExtraCirricular/PreviousJobs";
import FreeTime from "./Directory/Other/FreeTime";
import ClassesTaken from "./Directory/Other/ClassesTaken";
import "bootstrap/dist/css/bootstrap.css";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import CSS from "csstype";



const Route = require("react-router-dom").Route;
// onMouseOver={(e: React.FormEvent<HTMLInputElement>) => e.currentTarget.style.background = "red"}

export default class App extends React.Component{

        navItem: CSS.Properties = {
            color: "black",
            padding: "5px",
            backgroundColor: "lightblue",
            flex: "auto"
        };

        dropDownItem: CSS.Properties = {
            background: "red",
        }



    render() {
        return (
         <Router>

            <div className="App">
                <Navbar bg="dark" variant="dark" >
                    <Navbar.Brand href="/home">Learn About Kam <Emoji text=":stuck_out_tongue_closed_eyes:"/></Navbar.Brand>
                    <div style={{display: "flex", flexDirection:"row", border:'solid'}}>
                        <Nav.Item style={this.navItem}>
                            <Nav.Link href="/Home">Home</Nav.Link>
                        </Nav.Item>

                        <Nav.Item style={this.navItem}>
                        <Navbar.Toggle/>
                        <Navbar.Collapse>
                                <NavDropdown title="Languages/Project" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/java">Java</NavDropdown.Item>
                                    <NavDropdown.Item href="/python" >Python</NavDropdown.Item>
                                    <NavDropdown.Item href="/javascript">JavaScript</NavDropdown.Item>
                                    <NavDropdown.Item href="/c++">C/C++</NavDropdown.Item>
                                </NavDropdown>
                        </Navbar.Collapse>
                        </Nav.Item>

                        <Nav.Item style={this.navItem}>
                            <Navbar.Toggle/>
                            <Navbar.Collapse>
                                <NavDropdown title="Other" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/freeTime">Free Time</NavDropdown.Item>
                                    <NavDropdown.Item href="/classesTaken" >Classes Taken</NavDropdown.Item>
                                    <NavDropdown.Item href="/previousJobs">Previous Job</NavDropdown.Item>
                                </NavDropdown>
                            </Navbar.Collapse>
                        </Nav.Item>
                    </div>
                </Navbar>
                <Route exact path="/" component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/java" component={Java}/>
                <Route path="/python" component={Python}/>
                <Route path="/javaScript" component={JavaScript}/>
                <Route path="/previousJobs" component={PreviousJobs}/>
                <Route path="/freeTime" component={FreeTime}/>
                <Route path="/classesTaken" component={ClassesTaken}/>

            </div>
        </Router>

        );
    }
}
