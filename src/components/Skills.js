import skill1 from '../assets/img/web-dev-meter.png';
import skill2 from '../assets/img/uiux-meter.png';
import skill3 from '../assets/img/testing-meter.png';
import skill4 from '../assets/img/graphic-des-meter.png';
import skill5 from '../assets/img/logo-des-meter.png';

function Skills(){
    return(
        <div class="container" id="SkillsSection">
            <h1 class="section-heading fw-semibold">Skills</h1>
            <div class="skill-container justify row row-cols-auto d-flex justify-content-center">
                <div class="skillmeter col-6 col-lg-4 d-flex flex-column">
                    <img src={skill1} alt="" />
                    <h6 class="text-light fw-light">Front End Development</h6>
                </div>
                <div class="skillmeter col-6 col-lg-4 d-flex flex-column">
                    <img src={skill2} alt="" />
                    <h6 class="text-light fw-light">UI/UX<br /> Design</h6>
                </div>
                <div class="skillmeter col-6 col-lg-4 d-flex flex-column">
                    <img src={skill3} alt=""/>
                    <h6 class="text-light fw-light">Testing</h6>
                </div>
                <div class="skillmeter col-6 col-lg-4 d-flex flex-column">
                    <img src={skill4} alt=""/>
                    <h6 class="text-light fw-light">Graphic<br /> Designing</h6>
                </div>
                <div class="skillmeter col-6 col-lg-4 d-flex flex-column">
                    <img src={skill5} alt=""/>
                    <h6 class="text-light fw-light">Logo<br /> Designing</h6>
                </div>
            </div>
            <hr class="hr-1" id="experience"/>
        </div>
    );
};

export default Skills