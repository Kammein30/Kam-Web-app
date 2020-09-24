import React, {Component} from 'react';
import CSS from 'csstype';
class Home extends Component {

    headers: CSS.Properties = {
        textAlign: "center"
    }

    render() {
        return (
            <div>
                <h1 style={this.headers}>Welcome to my website!</h1>
                <img src={require('../me.jpg')} alt="Kam " id="image" style={{height: "200px"}}/>

                <p id="BioBody" style={{background:"lightblue", height: "100vh"}}> <b>I am a third year Software Engineering student at MSOE with extended experience in JavaScript (mostly as a MEAN + MERN stack developer),
                    Java and fundamental knowledge of other languages such as Python, C++, and C.
                    I have extensive campus leadership experience also. Please contact me at mitchellk@msoe.edu.
                      <br/> <br/>
                    I knew I wanted to study Software Engineering when I was in my Digital Electronics class in high school. We were
                    assigned a project where we had to make a robot to travel a specific distance back and forth. My team decided to
                    use two sonars for this task. Originally, I was interested in the building phase but as time went on, I found
                    myself spending more time on figuring out how the code for the robot would work. Once I figured out how to make
                    both sonars work interchangeably, I realized how much fun it was to be able to use computers to make material
                    such as metal do something.
                     <br/> <br/>
                    I continue to have fun making things happen with my code at MSOE in numerous group and individual projects such
                    as: developing a Word Counter capable of detecting various options in a document (i.e. invalid words and
                    location, number of times letters appeared, how many valid words on each line, etc.); developing a GPS tracker
                    capable of reading xml files to determine various analytics that users would want to know (i.e. distance between
                    two locations, average speed between track of coordinates, etc.); and developing an Image Manipulator program,
                    including file extensions, capable of reading and writing multiple image formats as well as changing colors and
                    tones.
                        <br/> <br/>
                    I am also on the Men’s Basketball team, where I’m developing strong teamwork, discipline, and time management
                    skills. This past summer I really enjoyed working as a mentor and program leader for incoming freshman to help
                    them be successful in their transition into college, including tutoring them in Math, Chemistry, and
                    Physics.</b>
                </p>
            </div>

        );
    }
}

export default Home;

