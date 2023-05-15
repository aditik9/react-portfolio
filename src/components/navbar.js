function Navbar(){
    return(
        <div class="navigation-bar">
            <nav id="navigation" class="navbar fixed-top navbar-expand-xl navbar-dark py-3 px-5" style={{backgroundColor: '#0E141B'}}>
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item pe-3">
                        <a class="nav-link" href="#home">Home</a>
                    </li>
                    <li class="nav-item pe-3">
                        <a class="nav-link" href="#SkillsSection">Skills</a>
                    </li>
                    <li class="nav-item pe-3">
                        <a class="nav-link" href="#Experience">Experience</a>
                    </li>
                    <li class="nav-item pe-3">
                        <a class="nav-link" href="#ProjectSection">Projects</a>
                    </li>
                    <li class="nav-item pe-3">
                        <a class="nav-link" href="https://amazon.in">Achievements</a>
                    </li>
                    <li class="nav-item">
                        <button class="btn btn-outline-light" type="submit">Resume</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar