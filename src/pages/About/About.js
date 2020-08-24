import React from "react";

//import "./about.styles.css";
import assests from "/Users/swetashah/portfolio/src/assests/Anisha.webp"

import Button from 'react-bootstrap/Button'
import background from "/Users/swetashah/portfolio/src/background/background.webp"
import styles from './About.module.css'; 



const About = () => {
  return (

  <div className="about">
     
    {/* <img className={styles.images}  src={background} alt="" /> */}
    <div className="fontdetails">ABOUT ME</div>

    <div className="container " style={{height:'810px'}}  >
        <div className=" pt-2 pr-2 align-items-center row ">
        <div className =" col-md-6 col-12">
           <div className="justify-content-left ml-1 mr-1 pl-2  pr-2 row ">
              <img className={styles.image} alt="Anisha"  src={assests} />
            </div>
        </div>
        <div className ="col-md-6 col-12">

          <div className="align-items-start p-5 my-details rounded row" style={{backgroundColor: 'hsla(0,100%,100%,.747)' , height: '600px' , width:'692px' ,fontFamily: 'Open Sans', fontSize: 50}}>
          <h4 className={styles.line}>I am currently a  <strong> &nbsp;Computer Science Grad student</strong> <strong> at California State University, Sacramento </strong> focusing on developing wide range of technical skills.
          Seeking an internship opportunity in the field of Computer Science and Software Engineering for Fall 2020.
          The nature of my degree course has prepared me for independent research, requiring initiative, self-motivation, and a wide range of skills. </h4>
          <br/>
          <br/>
        

          <div className="d-flex justify-content-left flex-wrap  col">
                  <div className="m-2"> 
                    <a href="https://drive.google.com/file/d/1AfD2aXnE0De-qIzmQroprhnca12jB9nw/view?usp=sharing" target="_blank">
                      <Button  variant="outline-primary btn-md">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div className="m-2 " >
                    <a href="https://github.com/desaianisha95" target="_blank" >
                      <Button variant="outline-success btn-md">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div className="m-2">
                    <a href="https://www.linkedin.com/in/desaianisha95/" target="_blank" >
                      <Button  variant="outline-info btn-md">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                  <div className="m-2">
                    <a href="mailto:desaianisha95@gmail.com" target="_blank" >
                      <Button  variant="outline-dark btn-md">
                        Email Me
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
           </div>
        </div>
         
      </div>
    </div>


    
    
  )
}


export default About;
