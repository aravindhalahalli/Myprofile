import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Aravind Kumar</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I have good programming skills. I know c, c++, Java, SQL, DBMS, data structure and Python etc. And eager to learn new technologies. currently working on javascript, reactJs and nodeJs..</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>No 303, 15'th street,Vinayaka Nagar,BasavanPur Main Road KR Puram-566036</p>
            <h5>Phone</h5>
            <p>+91 8296392602</p>
            <h5>Email</h5>
            <p>aravindhalahalli.81@gmail.com</p>
            <h5>Web Sites</h5>
            <p>Linked In</p>
            <p>GitHub</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2015}
              endYear={2019}
              schoolName="PES UNIVERSITY (PESIT-BSC)"
              schoolDescription="People's Education Society University, Electronic City Campus or PES University, EC Campus is a private co-educational engineering college on Hosur Road, Near Electronic City, Bangalore, India."
              score="6.50 CGPA"
               />
               <Education
                 startYear={2013}
                 endYear={2015}
                 schoolName="SB Ind Pu College of Science"
                 schoolDescription="Sharnbasveshwar Collge of Science was started in 1956. This institution is one of the earliest Science Colleges in this Hyderbad-Karnataka region. Over the year it has become one of the prestigious institutions as their has been a consistent infrastructure development with both men and material aiming and imparting quality education"
                 score="85.66%"
                  />
                <Education
                 startYear={2009}
                 endYear={2013}
                 schoolName="Sri Morarji Desai Residential School"
                 schoolDescription="Sri Morarji Desai Residential School located in Kalmood W No 46, Kamalapur, South2 - Kalaburgi- U South (Karnataka) is a Co-Educational institution ."
                 score="79.66%"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Experience</h2>
            <Experience
              startYear={"Jan-2019"}
              endYear={"Mar-2019"}
              jobName="HermitCrabs.Inc"
              jobDescription="The Major task is to design webpages on the Hubspot platform. and publish the templates.Hubspots’s design tools are used for this. along with this ,I am also involved in building a Web Application for a client in which Python has been used for the backend, Python’s Flask Framework is being used.Bootstrap templates for the front-end."
              />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="HTML/CSS"
                progress={80}
                />
                <Skills
                  skill="JavaScript"
                  progress={80}
                  />
                  <Skills
                      skill="DBMS/SQL"
                      progress={35}
                      />
                  <Skills
                      skill="Python"
                      progress={30}
                      />
                  <Skills
                    skill="React JS"
                    progress={25}
                    />
                    <Skills
                      skill="Node JS"
                      progress={20}
                      />
                      <Skills
                      skill="MongoDB"
                      progress={20}
                      />
                      
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;