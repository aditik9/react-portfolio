import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


function Work() {
  return (
    <div class="container work" id="Experience">
        <h1 class="section-heading fw-semibold">Experience</h1>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item className='CompanyButton' >
                            <Nav.Link eventKey="first"><h5 class="textHighlight">OneShield Software, Goa</h5></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second"><h5 class="textHighlight">Imagine Works, Goa</h5></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third"><h5 class="textHighlight">Brushflicks, Goa</h5></Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={8} className='px-4'>
                <Tab.Content>
                    <Tab.Pane className='ExpDesc' eventKey="first">
                        <div class="container px-4">
                            <h5 class="CompanyRole m-0 fw-bold">Software Engineer Intern <span class="textHighlight">@OneShield Software, Goa</span></h5>
                            <div id="OSInternDetails">
                                <div class="details text-white-50">
                                    <p class="Location m-0">Goa, India</p>
                                    <p class="duration">Aug 2022 - Oct 2022 (2mo)</p>
                                </div>
                                <div class="description mx-auto px-2">
                                    <ul>
                                        <li>Worked on Automation Scripting Project for testing in the OMS Application.
                                        </li>
                                        <li>Got trained for Manual Testing and Automation testing using 
                                            Cucumber BDD with Java - Selenium Framework.
                                        </li>
                                        <li>Wrote test cases for multiple functionalities of various clients.</li>
                                        <li>Learnt XPath creation, writing step definition functions for the scenarios.</li>
                                        <li>Automated the test cases by scripting them in multiple scenarios and feature files and generated the extent reports.</li>
                                        <li>Also learnt about tools like Jira, Bugzilla, Zephyr etc.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="skills-section py-3">
                                <span class="text-white-50 fw-bold">Skills</span>
                                <div class="row row-cols-auto py-1">
                                    <div class="col skillbox">Cucumber</div>
                                    <div class="col skillbox">Gherkin</div>
                                    <div class="col skillbox">Selenium</div>
                                    <div class="col skillbox">Test case writing</div>
                                    <div class="col skillbox">Automation Testing</div>
                                    <div class="col skillbox">Manual Testing</div>
                                </div>
                            </div>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane className='ExpDesc' eventKey="second">
                        <div class="container px-4">
                            <h5 class="CompanyRole m-0 fw-bold">Full Stack Developement Intern <span class="textHighlight">@Imagine Works</span></h5> 
                            <div id="IWInternDetails">
                                <div class="details text-white-50">
                                    <p class="Location m-0">Goa, India</p>
                                    <p class="duration">Oct 2021 - Jan 2022 (3mo)</p>
                                </div>
                                <div class="description mx-auto px-2">
                                    <ul>
                                        <li>Have worked on solo projects as well as group projects using
                                        technologies like PHP, MySQL, Ajax, TailwindCSS, Vue.js and REST API.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="skills-section py-3">
                                <span class="text-white-50 fw-bold">Skills</span>
                                <div class="row row-cols-auto py-1">
                                    <div class="col skillbox">HTML5</div>
                                    <div class="col skillbox">TilwindCSS</div>
                                    <div class="col skillbox">Vue.js</div>
                                    <div class="col skillbox">PHP</div>
                                    <div class="col skillbox">SQL</div>
                                </div>
                            </div>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane className='ExpDesc' eventKey="third">
                        <div class="container px-4">
                            <h5 class="CompanyRole m-0 fw-bold">Web Development Intern <span class="textHighlight">@Brushflicks</span></h5>
                            <div id="IWInternDetails">
                                <div class="details text-white-50">
                                    <p class="Location m-0">Goa, India</p>
                                    <p class="duration">Oct 2021 - Nov 2021 (1mo)</p>
                                </div>
                                <div class="description mx-auto px-2">
                                    <ul>
                                    <li>Worked on Web designing on Wordpress, Digital Marketing and Affiliate marketing</li>
                                    <li>Learnt the basics of Blockchain technology.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="skills-section py-3">
                                <span class="text-white-50 fw-bold">Skills</span>
                                <div class="row row-cols-auto py-1">
                                    <div class="col skillbox">Wordpress</div>
                                    <div class="col skillbox">Web Development</div>
                                    <div class="col skillbox">Digital Marketing</div>
                                </div>
                            </div>
                        </div>
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
        <hr class="hr-1" id="projects"/>
    </div>
  );
}

export default Work;
