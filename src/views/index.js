import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';

export default {
    data: () => ({}),
    components: {Navbar, Footer},
    template: 
    /* html */
    `
    <!-- navbar -->
    <Navbar></Navbar>
    
    <div class="container-right">
        <div class="hero">
            <!-- <div class="hero__blob">
                <img src="assets/img/blob.png" alt="blob">
            </div> -->

            <div class="hero__caption">
                <h2>Hello, &nbsp;</h2>
                <h2>I'm <span>Christian!</span></h2>
                <code><small>a front-end web developer</small></code>

                <button class="hero__cta">Get in touch!</button>
            </div>

            <div class="hero__img">
                <img src="src/assets/img/hero.jpg" alt="hero image">
            </div>
        </div>
    </div>

    <div class="container-left">
        <div class="about">
            <div class="about__img">
                <img src="src/assets/img/about.jpg" alt="about">
            </div>

            <div class="about__caption">
                <div class="about__caption-title">about me</div>
                <div class="about__caption-text">
                    <!-- <p>Hey, what's up? Thanks for visiting my website.</p> -->
                    <p>I am Christian Ocol, front-end web developer based in the Philippines. I create responsive, mobile-first websites using HTML, CSS, and Javascript. Aside from that, I also have a knowledge VueJs 3 framkework and other libraries such as Bootstrap and GSAP.</p>
                    <router-link to="/about" class="read-more">read more <i class="fa fa-long-arrow-right"></i></router-link>
                    <!-- <p>Currently, I am working as a full stack developer in a State University where I graduated with a Bachelor's Degree in information Techonology. My projects are Scheduling System and Property Monitoring System. This challenged me a lot since I have no strong background when it comes to back-end development, specifically using PHP. But I saw this as an opportunity to expand and enhance my expertise further.</p>
                    <p>My goal is to provide a high-quality website that exceeds my client's expectation and satisfactions and at the same time learn new skills as I go.</p>
                    <p>If you want to do business with me, you can get in touch thru my contact information listed in the contact page.</p> -->
                </div>
            </div>
        </div>
    </div>

    <div class="container-right">
        <div class="project">
            <div class="project__caption">
                <div class="project__caption-title">projects</div>
                <div class="project__caption-text">
                    <p>This is a photography website with masonry gallery.</p>
                    <p>Made with HTML5, CSS, and other JavaScript Libraries.</p>
                    <router-link to="/project" class="read-more">show more <i class="fa fa-long-arrow-right"></i></router-link>
                </div>
            </div>

            <a href="http://artine-photography.epizy.com/" target="_blank" class="project__img">
                <img src="src/assets/img/artine.png" alt="artine">
            </a>
        </div>
    </div>

    <div class="container-center">
        <div class="contact">
            <div class="contact__title">get in touch</div>
            <div class="contact-info">
                <div class="contact-info__item">
                    <i class="fas fa-map-marked-alt contact-info__loc"></i>
                    <span class="contact-info__text">P-5 Brgy. Magang, Daet, Camarines Norte</span>
                </div>
                <div class="contact-info__item">
                    <i class="fas fa-mobile-android-alt contact-info__phone"></i>
                    <span class="contact-info__text">+(63) 929 - 8211 - 463</span>
                </div>
                <div class="contact-info__item">
                    <i class="fas fa-envelope-open-text contact-info__email"></i>
                    <span class="contact-info__text">christianocol12@gmail.com</span>
                </div>
            </div>
        </div>
    </div>

    <!-- footer -->
    <Footer></Footer>
    `,
}
