import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function Projects() {
  const [key, setKey] = useState('home');

  return (
    <div class="container" id="ProjectSection">
        <h1 class="section-heading fw-semibold py-5">Projects</h1>
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
            justify
            >
            <Tab eventKey="home" title="Full Stack Development" className='mx-5'>
                <div>
                    <ul>
                        <li>Project Management Application</li>
                        <li>Ticketing System</li>
                        <li>Employee Management Application</li>
                        <li>Ecommerce Application</li>
                        <li>Donation System</li>
                    </ul>
                </div>
            </Tab>
            <Tab eventKey="profile" title="UI/UX Design" className='mx-5'>
                <div>

                </div>
            </Tab>
            <Tab eventKey="contact" title="Graphic Design" className='mx-5'>
            
            </Tab>
        </Tabs>
        <hr class="hr-1"/>
    </div>
  );
}

export default Projects;