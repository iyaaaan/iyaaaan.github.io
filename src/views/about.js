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
        <div class="about-hero">
           <h1> Know more about me.</h1>
        </div>

        <div class="about-caption">
            <div class="about-caption__img">
                <img src="src/assets/img/about-hero.jpg" alt="about-hero image">
            </div>

            <div class="about-caption__text">
                <h2>about.</h2>
                <p>Hey, what's up? Thanks for visiting my website.</p>
                <p>I am Christian Ocol, front-end web developer. I create responsive, mobile-first websites using HTML, CSS, and Javascript. Aside from that, I also have knowledge in other frameworks such as Bootstrap and VueJs.</p>
                <p>Currently, I am working as a full stack developer in a State University where I graduated with a Bachelor's Degree in information Techonology. My projects are Scheduling System and Property Monitoring System. This challenged me a lot since I have no strong background when it comes to back-end development, specifically using PHP. But I saw this as an opportunity to expand and enhance my expertise further.</p>
                <p>My goal is to provide a high-quality website that exceeds my client's expectation and satisfactions and at the same time learn new skills as I go.</p>
                <p>If you want to do business with me, you can get in touch thru my contact information listed in the contact page.</p>
            </div>
        </div>
    </div>

    <div class="container-left">
        <div class="about-education">
            <h2 class="about-education__title">Education</h2>
            <div class="about-education__img">
                <img src="src/assets/img/cnsc.png" alt="CNSC Logo">
            </div>
            <div class="about-education__caption">
                <h3 class="about-education__sch">Camarines Norte State College</h3>
                <p class="about-education__course">BS in Information Technology</p>
                <span class="about-education__date"><i>June 2015 - April 2019</i></span>
            </div>
        </div>
    </div>

    <div class="container-right">
        <div class="about-exp">
            <h2 class="about-exp__title">Professional Experience</h2>
            <div class="about-exp__info">
                <h3 class="about-exp__position">IT/ GIS Staff</h3>
                <p class="about-exp__company">Camarines Norte State College</p>
                <span class="about-exp__date"><i>June 2021 - Present</i></span>
            </div>
            <ul class="about-exp__desc">
                <li>Develoed a web application for scheduling and property monitoring system.</li>
                <li>Inventoried and geo-tagged facilities/buildings in all CNSC campuses.</li>
                <li>Surveyed and took an aerial shot of each campuses using a drone for Land Use Development and Infrastructure Plans.</li>
            </ul>
        </div>
    </div>

    <div class="container-center">
        <div class="about-skill">
            <h2 class="about-skill__title">Skills</h2>
            <div class="about-skill-list">
                <div class="about-skill__item" data-after="HTML 5"><i class="fab fa-html5" title="HTML5"></i></div>
                <div class="about-skill__item" data-after="CSS 3"><i class="fab fa-css3-alt" title="CSS3"></i></div>
                <div class="about-skill__item" data-after="JavaScript"><i class="fab fa-js-square" title="JavaScript"></i></div>
                <div class="about-skill__item" data-after="SASS"><i class="fab fa-sass" title="SASS"></i></div>
                <div class="about-skill__item" data-after="Bootstrap"><i class="fab fa-bootstrap" title="Bootstrap"></i></div>
                <div class="about-skill__item" data-after="VueJs 3"><i class="fab fa-vuejs" title="VueJs"></i></div>
                <div class="about-skill__item" data-after="PHP"><i class="fab fa-php" title="PHP"></i></div>
            </div>
        </div>
    </div>

    <!-- footer -->
    <Footer></Footer>
    `,

    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });
        //let f = CSSRulePlugin.getRule(".class::pseudo");
    
        ScrollTrigger.defaults({ease: "none", duration: 2, markers: true });
    
        tl.to('.about-hero h1', {x: 0, opacity:1})

        gsap.to('.about-caption__img', {y: 100, opacity:1, duration: 1.5,
          scrollTrigger: {
            trigger: '.about-caption__text',
            start: "center 70%",
          }
        }, )

        gsap.to('.about-caption__text', {y: 0, opacity:1, 'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: .7,
          scrollTrigger: {
            trigger: '.about-caption__text',
            start: "center 70%",
          }
        }, )

        gsap.to('.about-education', {x: 0, opacity:1, 'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 1,
          scrollTrigger: {
            trigger: '.about-education',
            start: "top center",
          }
        }, )

        gsap.to('.about-exp__title', {x: 0, opacity:1, 'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: .9,
            scrollTrigger: {
            trigger: '.about-exp__title',
            start: "top 30%",
            }
        }, )

        gsap.to('.about-exp__info, .about-exp__desc', {y: 0, opacity:1, 'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 1,
            scrollTrigger: {
                trigger: '.about-exp__title',
                start: "top 30%",
            }
        }, )

        gsap.to('.about-skill__title', {x: 0, opacity:1, 'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: .9,
            scrollTrigger: {
                trigger: '.about-skill__title',
                start: "top 90%",
            }
        }, )

        gsap.to('.about-skill__item', {y: 0, opacity:1, duration: .3, stagger: .1, ease: "none",
          scrollTrigger: {
            trigger: '.about-skill__item',
            start: "top 90%",
          }
        }, )
    }
}
