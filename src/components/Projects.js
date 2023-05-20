import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function Projects() {
  const [key, setKey] = useState('home');

  return (
    <div class="container" id="ProjectSection">
        <h1 class="section-heading fw-semibold">Projects</h1>
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
            justify
            >
            <Tab eventKey="home" title="Full Stack Development" className='mx-5'>
                <div class="proj-container row">
                    <div class="cards col-sm-4">
                        <div class="my-4">
                            <div class="card-body">
                                <h4 class="card-title">Donation System</h4>
                                <div class="skills-section py-2">
                                    <span class="text-white-50">Technologies used: 
                                    HTML, CSS, Javascript, PHP, SQL
                                    </span>
                                </div>
                                <a href="# " class="proj-link btn btn-outline-light"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="cards col-sm-4">
                        <div class="my-4">
                            <div class="card-body">
                                <h4 class="card-title">Project Management Application</h4>
                                <div class="skills-section py-2">
                                    <span class="text-white-50">Technologies used: 
                                    HTML, CSS, Javascript, PHP, SQL
                                    </span>
                                </div>
                                <a href="# " class="proj-link btn btn-outline-light"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="cards col-sm-4">
                        <div class="my-4">
                            <div class="card-body">
                                <h4 class="card-title">Ticketing System</h4>
                                <div class="skills-section py-2">
                                    <span class="text-white-50">Technologies used: 
                                    HTML, TailwindCSS, Javascript, PHP, SQL
                                    </span>
                                </div>
                                <a href="# " class="proj-link btn btn-outline-light"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="cards col-sm-4">
                        <div class="my-4">
                            <div class="card-body">
                                <h4 class="card-title">Employee Management Application</h4>
                                <div class="skills-section py-2">
                                    <span class="text-white-50">Technologies used: 
                                    Vue.js TailwindCSS
                                    </span>
                                </div>
                                <a href="# " class="proj-link btn btn-outline-light"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="cards col-sm-4">
                        <div class="my-4">
                            <div class="card-body">
                                <h4 class="card-title">E-commerce Application</h4>
                                <div class="skills-section py-2">
                                    <span class="text-white-50">Technologies used: 
                                    Vue.js TailwindCSS
                                    </span>
                                </div>
                                <a href="# " class="proj-link btn btn-outline-light"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Tab>
            <Tab eventKey="profile" title="UI/UX Design" className='mx-5'>
                <div class="proj-container row">
                    <div class="cards col-sm-4">
                        <div class="my-4">
                            <div class="card-body">
                                <h4 class="card-title">.....</h4>
                                <div class="skills-section py-2">
                                    <span class="text-white-50">.....
                                    </span>
                                </div>
                                <a href="# " class="proj-link btn btn-outline-light"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="cards col-sm-4">
                        <div class="my-4">
                            <div class="card-body">
                                <h4 class="card-title">.....</h4>
                                <div class="skills-section py-2">
                                    <span class="text-white-50">.....
                                    </span>
                                </div>
                                <a href="# " class="proj-link btn btn-outline-light"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="cards col-sm-4">
                        <div class="my-4">
                            <div class="card-body">
                                <h4 class="card-title">.....</h4>
                                <div class="skills-section py-2">
                                    <span class="text-white-50">.....
                                    </span>
                                </div>
                                <a href="# " class="proj-link btn btn-outline-light"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="cards col-sm-4">
                        <div class="my-4">
                            <div class="card-body">
                                <h4 class="card-title">.....</h4>
                                <div class="skills-section py-2">
                                    <span class="text-white-50">.....
                                    </span>
                                </div>
                                <a href="# " class="proj-link btn btn-outline-light"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="cards col-sm-4">
                        <div class="my-4">
                            <div class="card-body">
                                <h4 class="card-title">.....</h4>
                                <div class="skills-section py-2">
                                    <span class="text-white-50">.....
                                    </span>
                                </div>
                                <a href="# " class="proj-link btn btn-outline-light"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Tab>
            <Tab eventKey="contact" title="Graphic Design" className='mx-5'>
                <div class="proj-container row">
                    <div class="cards col-sm-4">
                        <div class="my-4">
                            <div class="card-body">
                                <h4 class="card-title">.....</h4>
                                <div class="skills-section py-2">
                                    <span class="text-white-50">.....
                                    </span>
                                </div>
                                <a href="# " class="proj-link btn btn-outline-light"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="cards col-sm-4">
                        <div class="my-4">
                            <div class="card-body">
                                <h4 class="card-title">.....</h4>
                                <div class="skills-section py-2">
                                    <span class="text-white-50">.....
                                    </span>
                                </div>
                                <a href="# " class="proj-link btn btn-outline-light"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="cards col-sm-4">
                        <div class="my-4">
                            <div class="card-body">
                                <h4 class="card-title">.....</h4>
                                <div class="skills-section py-2">
                                    <span class="text-white-50">.....
                                    </span>
                                </div>
                                <a href="# " class="proj-link btn btn-outline-light"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="cards col-sm-4">
                        <div class="my-4">
                            <div class="card-body">
                                <h4 class="card-title">.....</h4>
                                <div class="skills-section py-2">
                                    <span class="text-white-50">.....
                                    </span>
                                </div>
                                <a href="# " class="proj-link btn btn-outline-light"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="cards col-sm-4">
                        <div class="my-4">
                            <div class="card-body">
                                <h4 class="card-title">.....</h4>
                                <div class="skills-section py-2">
                                    <span class="text-white-50">.....
                                    </span>
                                </div>
                                <a href="# " class="proj-link btn btn-outline-light"><i class="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Tab>
        </Tabs>
        <hr class="hr-1" id="events"/>
    </div>
  );
}

export default Projects;