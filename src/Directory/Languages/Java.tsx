import React, {Component} from 'react';




class Java extends Component {
    render() {
        return (
            <div>
                <h1 style={{textAlign:"center"}}>Java Projects</h1>
                <h3>Image Manipulator (Individual Project) </h3>
                <p>
                    Developed Image Manipulator program, including file extensions, capable of reading and writing
                    multiple
                    image formats as well as changing colors and tones.
                    Developed Image Manipulator program, including file extensions,
                    capable of reading and writing multiple image formats as well as changing
                    colors and tones.</p>
                <ul>
                    <li> Developed, tested, and debugged code using Java Object Oriented and Functional Programming
                        methods.
                    </li>
                    <li> Designed a non-trivial interactive two window Graphical User Interface for maximum
                        accessibility.
                    </li>
                    <li> Brainstormed code outline using UML diagram and wrote robust code with error handling.</li>
                </ul>
                <h3> Word Counter (Group Project)</h3>
                <p>
                    Developed Word Counter capable of detecting various options in a document: invalid words and
                    location, number of
                    times letters appeared, how many valid words on each line, etc.
                </p>
                <ul>
                    <li>Used TreeMap in order to store alphabets and their frequency, resulted in better Asymptotic time
                        complexity.
                    </li>
                    <li> Created repository using Bitbucket and used Git for project version control.</li>
                    <li>Created uml diagrams using Enterprise Architect and used code engineering to convert code to
                        Java.
                    </li>
                    <li>Wrote unit test to minimize possibility of errors.</li>
                    <li>Modified code to make it more efficient, i.e using TreeMap instead of array list to store
                        alphabet values
                    </li>
                </ul>

                <h3> GPS Tracker (Group Project)</h3>
                <p>Developed GPS tracker capable of reading xml files to determine various analytics that users would
                    want to know:
                    distance between two locations, average speed between track of coordinates, etc. </p>
                <ul>
                    <li> Analyzed functional requirements (written as user stories) and developed use cases that
                        described how
                        application would work.
                    </li>
                    <li>Developed user interface mockups using Enterprise Architect.</li>
                    <li>Created high level sequence diagrams illustrating interactions between elements of use cases.
                    </li>
                    <li>Used method of textual analysis to identify potential classes or objects and method by examining
                        nouns and
                        verbs used in use case scenarios.
                    </li>
                </ul>
            </div>
        );
    }
}

export default Java;