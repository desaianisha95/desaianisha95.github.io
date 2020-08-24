import React from "react";
import'./Skills.style.css';
import html5 from "/Users/swetashah/portfolio/src/assests/skills/html.svg"
import css3 from "/Users/swetashah/portfolio/src/assests/skills/css3.svg"
import react from "/Users/swetashah/portfolio/src/assests/skills/react.svg"
import javascript from "/Users/swetashah/portfolio/src/assests/skills/javascript.svg"
import redux from "/Users/swetashah/portfolio/src/assests/skills/redux.svg"
import bootstrap from "/Users/swetashah/portfolio/src/assests/skills/bootstrap.svg"
import reactbootstrap from "/Users/swetashah/portfolio/src/assests/skills/react-bootstrap.svg"
import eclipse from "/Users/swetashah/portfolio/src/assests/skills/eclipse.svg"
import java from "/Users/swetashah/portfolio/src/assests/skills/java.svg"
import githubPages from "/Users/swetashah/portfolio/src/assests/skills/github-pages.svg"
import mySql from "/Users/swetashah/portfolio/src/assests/skills/mySql.svg"
import mySqlWorkbench from "/Users/swetashah/portfolio/src/assests/skills/mysqlWorkbench.svg"
import python from "/Users/swetashah/portfolio/src/assests/skills/python.svg"
import atom from "/Users/swetashah/portfolio/src/assests/skills/atom.svg"
import sublime from "/Users/swetashah/portfolio/src/assests/skills/sublime.svg"
import visualStudioCode from "/Users/swetashah/portfolio/src/assests/skills/visual-studio-code.svg"
import git from "/Users/swetashah/portfolio/src/assests/skills/git.svg"
import springBoot from "/Users/swetashah/portfolio/src/assests/skills/spring.svg"
import seleniumWebDriver from "/Users/swetashah/portfolio/src/assests/skills/selenium.svg"

const Skills = () => {
    return (
          
<div className="skills" >
<div className=" fontdetails"> SKILLS </div>
<div className="card-deck" style={{height:'1000px'}}>
    <div className="d-flex justify-content-center px-5 ml-5 mr-5 row">
        <div className="col-md-3">
            <div className =  " focus mt-3 mb-3 card" >
                <div className = "card-body">
                    <div className ="text-center card-title card-title h1">FrontEnd</div>
                    <hr />
                    <p className="card-text d-flex justify-content-between flex-column card-text ">
                         <div className="container"><img src={html5} className="image-style " alt="html5" /><h3 className="h3">HTML5</h3></div>
                          <div className="container"><img src={css3} className="image-style" alt="css3" /><h3 className="h3">CSS3</h3> </div> 
                          <div className="container"><img src={react} className="image-style" alt="react" /><h3 className="h3">React</h3></div>
                          <div className="container"><img src={javascript} className="image-style" alt="javascript" /><h3 className="h3">Javascript</h3></div>
                          <div className="container"><img src={redux} className="image-style" alt="redux" /><h3 className="h3">Redux</h3> </div>
                          <div className="container"><img src={reactbootstrap} className="image-style" alt="react-bootstrap" /><h3 className="h3">React-Bootstrap</h3> </div>
                          <div className="container"><img src={bootstrap} className="image-style" alt="bootstrap4" /><h3 className="h3">Bootstrap 4</h3> </div> 
                    </p>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className = "focus  mt-3 mb-3 card">
                <div className = "card-body">
                    <div className ="text-center  card-title card-title h1">Programming <br/>Langugaes</div>
                    <hr />
                    <p className="card-text d-flex justify-content-start flex-column card-text">
                    <div className="container"><img src={java} className="image-style" alt="html5" /><h3 className="h3">Java</h3> </div>
                    <div className="container"><img src={python} className="image-style" alt="html5" /><h3 className="h3">Python</h3> </div>
                    </p>
                </div>
            </div>
            <div className = "focus mt-2 mb-2 card">
                <div className = "card-body">
                    <div className ="text-center  card-title card-title h1">Hosting <br/> Platform</div>
                    <hr />
                    <p className="card-text d-flex justify-content-start flex-column card-text">
                    <div className="container"><img src={githubPages} className="image-style" alt="html5" /><h3 className="h3">GitHub-Pages</h3> </div>
                    </p>
                </div>
            </div>
            <div className = "focus mt-2 mb-2 card">
                <div className = "card-body">
                    <div className ="text-center  card-title card-title h1">Version-Control</div>
                    <hr />
                    <p className="card-text d-flex justify-content-start flex-column card-text">
                    <div className="container"><img src={git} className="image-style" alt="html5" /><h3 className="h3">Git</h3> </div>

                    </p>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className = "focus mt-2 mb-2 card">
                <div className = "card-body">
                    <div className ="text-center  card-title card-title h1">Databases</div>
                    <hr />
                    <p className="card-text d-flex justify-content-start flex-column card-text">
                    <div className="container"><img src={mySql} className="image-style" alt="html5" /><h3 className="h3">MySQL</h3> </div>
                    </p>
                </div>
            </div>
            <div className = "focus mt-2 mb-2 card">
                <div className = "card-body">
                    <div className ="text-center  card-title card-title h1">IDE</div>
                    <hr />
                    <p className="card-text d-flex justify-content-start flex-column card-text">
                    <div className="container"><img src={eclipse} className="image-style" alt="html5" /><h3 className="h3">Eclipse</h3> </div>
                    <div className="container"><img src={mySqlWorkbench} className="image-style" alt="html5" /><h3 className="h3">SQL Workbench</h3> </div>
                    <div className="container"><img src={visualStudioCode} className="image-style" alt="html5" /><h3 className="h3">VS Code</h3> </div>
                    <div className="container"><img src={sublime} className="image-style" alt="html5" /><h3 className="h3">Sublime</h3> </div>
                    <div className="container"><img src={atom} className="image-style" alt="html5" /><h3 className="h3">Atom</h3> </div>

                    </p>
                </div>
            </div>
          
        </div>
        <div className="col-md-3">
            <div className = "focus mt-2 mb-2 card">
                <div className = "card-body">
                    <div className ="text-center  card-title card-title h1">Tools & <br/> Framework</div>
                    <hr />
                    <p className=" ml-2 card-text d-flex justify-content-between flex-column card-text">
                    <div className="container"><img src={springBoot} className="image-style" alt="html5" /><h3 className="h3">Spring Boot</h3> </div>
                    <div className="container"><img src={react} className="image-style" alt="html5" /><h3 className="h3">React JS</h3> </div> 
                    <div className="container"><img src={seleniumWebDriver} className="image-style" alt="html5" /><h3 className="h3">Selenium</h3></div>
                    <div className="container"><img src={bootstrap} className="image-style" alt="html5" /><h3 className="h3">Bootstrap</h3></div>
                    </p>
                </div>
            </div>
        </div>



    </div>
</div>
</div>



    )
};

export default Skills;


