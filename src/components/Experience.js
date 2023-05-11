function ExperienceSection(){
    return(
        <div class="container" id="Experience">
            <h1 class="section-heading fw-semibold">Experience</h1>
            <div class="ListOfCompanyExp">
                <div class="CompanyExperience pb-5" id="OSIntern">
                    <table>
                        <tr>
                            <td class="w-75">
                                <h2 class="CompanyRole m-0">Software Engineer Intern <span class="textHighlight">@OneShield Software</span></h2>
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
                            </td>
                            <td  class="align-center">
                                <div class="skills-section px-5 mx-2">
                                    <span class="text-white-50">Skills</span>
                                    <div class="row row-cols-auto py-1">
                                        <div class="col skillbox">Cucumber</div>
                                        <div class="col skillbox">Gherkin</div>
                                        <div class="col skillbox">Selenium</div>
                                        <div class="col skillbox">Test case writing</div>
                                        <div class="col skillbox">Automation Testing</div>
                                        <div class="col skillbox">Manual Testing</div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>

                <div class="CompanyExperience pt-2 pb-5" id="IWIntern">
                    <table>
                        <tr>
                            <td class="w-75">
                                <h2 class="CompanyRole m-0">Full Stack Developement Intern <span class="textHighlight">@Imagine Works</span></h2>
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
                            </td>
                            <td  class="align-center">
                                <div class="skills-section px-5 mx-2">
                                    <span class="text-white-50">Skills</span>
                                    <div class="row row-cols-auto py-1">
                                        <div class="col skillbox">HTML5</div>
                                        <div class="col skillbox">TilwindCSS</div>
                                        <div class="col skillbox">Vue.js</div>
                                        <div class="col skillbox">PHP</div>
                                        <div class="col skillbox">SQL</div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>


                <div class="CompanyExperience pt-2" id="BFIntern">
                    <table>
                        <tr>
                            <td class="w-75">
                                <h2 class="CompanyRole m-0">Web Development Intern <span class="textHighlight">@Brushflicks</span></h2>
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
                            </td>
                            <td  class="align-center">
                                <div class="skills-section px-5 mx-2">
                                    <span class="text-white-50">Skills</span>
                                    <div class="row row-cols-auto py-1">
                                        <div class="col skillbox">Wordpress</div>
                                        <div class="col skillbox">Web Development</div>
                                        <div class="col skillbox">Digital Marketing</div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <hr class="hr-1"/>
        </div>
    );
};

export default ExperienceSection