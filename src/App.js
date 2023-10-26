
import './App.css';
import React from 'react';
function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <h1>Gagan Yadav (21BCE9485)</h1>
      </header>

      <div className="content">
        <section className="section">
          <h2 style={{textAlign: "center"}}>INTODUCTION</h2>
          <br/>
          <p>
            I'm Gagan Yadav, a B.Tech student with a passion for Artificial Intelligence and Machine Learning,from VIT-AP
          </p>
        </section>

        <section className="section">
          <h2 style={{textAlign: "center"}}>SKILLS</h2>
          <br/>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>Data Structures</li>
            <li>HTML,CSS,JavaScript,React.js,Node.js</li>
            <li>SQL,MongoDb</li>
          </ul>
        </section>

        <section className="section">
          <h2 style={{textAlign: "center"}}>PROJECTS</h2>
          <br/>
          <ul>
            <li>Disease Diagnosis Through Multi-Modal Data Integration and Data Weighting Using Deep Learning</li>
            <li>CrimeBot: Crime Registration and Awareness Web Application</li>
          </ul>
        </section>
        <section className="section">
          <h2 style={{textAlign: "center"}}>CERTIFICATIONS</h2>
          <br/>
          <ul>
            <li>AWS Academy Graduate - AWS Academy Cloud Foundations</li>
            <li>React - The Complete Guide 2023 (incl. React Router & Redux)</li>
          </ul>
        </section>
        

        <section className="section">
          <h2 style={{textAlign: "center"}}>CONTACT</h2>
          <br/>
          <p>Phone: +91 0987654321</p>
          <a href="mailto:gaganyadav.21bce9485@vitapstudent.ac.in">Email me</a>
        </section>
      </div>
    </div>
  );
}

export default App; // Add this export statement to make the component available for use in other parts of your application
