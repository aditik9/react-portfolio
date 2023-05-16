import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

function Work() {
  return (
    <div class="container" id="Experience">
        <h1 class="section-heading fw-semibold py-4">Experience</h1>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={4} className='pe-4'>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item className='my-2'>
                        <Nav.Link eventKey="first"><h4 class="CompanyRole m-0">Software Engineer Intern <span class="textHighlight">@OneShield Software</span></h4></Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='my-2'>
                        <Nav.Link eventKey="second"><h4 class="CompanyRole m-0">Full Stack Developement Intern <span class="textHighlight">@Imagine Works</span></h4></Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='my-2'>
                        <Nav.Link eventKey="third"><h4 class="CompanyRole m-0">Web Development Intern <span class="textHighlight">@Brushflicks</span></h4></Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col sm={8} className='border-start rounded-start'>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <div class="container py-2 px-4">
                            <div id="OSInternDetails">
                                <div class="details text-white-50">
                                    <p class="Location m-0">Goa, India</p>
                                    <p class="duration">Aug 2022 - Oct 2022 (2mo)</p>
                                </div>
                                <div class="description mx-auto px-2">
                                    <ul>
                                        <li>Worked on Automation Scripting Project for testing in the 
                                            OneShield Market Solutions(OMS) Application.
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
                    <Tab.Pane eventKey="second">
                        <div class="container py-2 px-4">
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
                    <Tab.Pane eventKey="third">
                        <div class="container py-2 px-4">
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
    </div>
  );
}

export default Work;