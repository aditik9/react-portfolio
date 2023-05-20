function Hero(){
    return(
        <div class="hero-section" id="home">
            <div class="container d-grid gap-0 my-5">
                <div class="hero-content">
                    <p class="text-light fw-light p-0 m-0">Hey! I am</p>
                    <span class="bigName fw-semibold display-1 lh-md">Aditi Kalangutkar</span>
                    <h1 class="tagline fw-semibold mt-0 pt-0">I build things for the Web</h1>
                    <h4 class="text-light fw-light w-75">
                    I'm a Frontend developer specializing in Web Development and UI/UX Design.
                    I also have a flair for Graphic Design and excel in creating intricate Mandala art.
                    </h4>
                </div>
                <div class="hero-action my-3">
                    <a href="#contact" class="btn btn-outline-light py-2 px-4 fw-bold">Connect</a>
                </div>
            </div>
            <hr class="hr-1" id="about" />
        </div>
    );
}

export default Hero