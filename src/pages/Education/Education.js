import React from 'react';

import Button from 'react-bootstrap/Button'


const Education = () => {
    return (
      <div className="education">
        <div className="fontdetails" >EDUCATION</div>
        <div className="container " style={{height:'810px'}}  >
        <div className=" pt-2 pr-3 align-items-center row ">
        <div className =" col-md-6 col-12">
           <div className="justify-content-left ml-1 mr-1 pl-2  pr-2 row ">
           <div className=" focus align-items-start p-5 my-details rounded row" style={{backgroundColor: 'hsla(0,100%,100%,.747)' , height: '600px' , width:'540px' ,fontFamily: 'Open Sans', fontSize: 50}}>
                 <h1> MS in Computer Science</h1>
                 <h3>California State University, Sacramento</h3> 
                 <h3> GPA: 3.45</h3>
                 <div className="m-4 p-5"> 
                 <h4>August 2018 - Present </h4>
                 </div>
                 <div className="p-3 m-4">
                    
                     <div className="m-5">
                       <a href="https://www.csus.edu/college/engineering-computer-science/computer-science/" target="_blank">
                          <Button  variant="dark btn-md" >
                             <h5>CS Department</h5>
                          </Button>
                         </a>
                     </div>
                </div>
           </div>
           </div>
           </div>
       

           <div className ="col-md-6 col-12">

          <div className=" focus align-items-start p-5 my-details rounded row" style={{backgroundColor: 'hsla(0,100%,100%,.747)' , height: '600px' , width:'548px' ,fontFamily: 'Open Sans', fontSize: 50}}>
          
                 <h1> BS in Information Tech</h1>
                 <h3> Gujarat Technological  University , SVIT</h3> 
                 <h3> GPA: 3.55</h3>
                 <div className="m-4 p-5"> 
                 <h4>June 2014 - May 2018 </h4>
                 </div>
                     <div  className="p-3 m-4">
                     
                     <div className="m-5">
                       <a href="http://www.svitvasad.ac.in/it.php" target="_blank">
                          <Button  variant="dark btn-md">
                             <h5>IT Department</h5>
                          </Button>
                         </a>
                     </div>
                     </div>
              </div>
             
           </div>
           </div>
           
        </div>
        </div>
    )}

  

    export default Education;