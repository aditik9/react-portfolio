import pfp from '../pfp.png';

function About(){
    return(
        <div class="container" id="AboutMe">
            <h1 class="section-heading fw-semibold">About Me</h1>
            <div class="about-section row row-cols-auto">
                <div class="aboutdesc col">
                    <p>Hi! I'm Aditi Kalangutkar, a Student, Frontend Developer 
                        and a self made artist. As a student and frontend developer  
                        I'm passionate about creativity and design.
                    </p>
                    <p>
                        Starting with HTML, 
                        CSS, and JavaScript, I now work with frameworks like React.js, Vue.js, 
                        incorporating UI/UX concepts and graphic design to create dynamic 
                        and visually appealing web content. 
                    </p>
                    <p>
                        Outside of work, I enjoy creating 
                        mandalas and illustrations, which inspire my web development projects. 
                        My goal is to create beautiful and functional web content that combines 
                        my skills as a developer and designer. 
                    </p>
                </div>
                <div class="aboutpic col">
                    <img src={pfp} alt="pfp" class="pfp mx-auto"/>
                </div>
            </div>
            <hr class="hr-1" id="skills"/>
        </div>
    );
};

export default About

