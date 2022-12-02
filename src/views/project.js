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
        <div class="project-hero">
            <h1>Some of my works.</h1>
        </div>
    </div>

    <div class="container-left">
        <div class="my-project artine">
            <div class="my-project__img">
                <img src="src/assets/img/artine.jpg">
            </div>
            <div class="my-project__text">
                <h2 class="my-project__title">Artine Photography</h2>
                <p class="my-project__desc">This is a photography website with masonry gallery.</p>
                <p class="my-project__desc">Made with HTML5, CSS, and other JavaScript Libraries.</p>
                <a href="http://artine-photography.epizy.com/" target="_blank" class="read-more">view website <i class="fa fa-long-arrow-right"></i></a>
            </div>
        </div>
    </div>

    <div class="container-right">
        <div class="my-project ctb">
            <div class="my-project__text">
                <h2 class="my-project__title">Central Tree Bank</h2>
                <p class="my-project__desc">It tracks the tree planting acitivies of the registerd organizations/individuals via CTB mobile app.</p>
                <p class="my-project__desc">Made with HTML5, CSS3/SASS, Vue.js and PHP</p>
                <a href="http://greeninginitiatives.com/central-tree-bank/" target="_blank" class="read-more">view website <i class="fa fa-long-arrow-right"></i></a>
            </div>
            <div class="my-project__img">
                <img src="src/assets/img/ctb.png">
            </div>
        </div>
    </div>


     <!-- footer -->
     <Footer></Footer>
    `,

    mounted() {
      // remove disable-scroll class  
      document.body.classList.remove("disable-scroll");

      gsap.registerPlugin(ScrollTrigger);
      let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });
      //let f = CSSRulePlugin.getRule(".class::pseudo");
  
      ScrollTrigger.defaults({ease: "none", duration: 2});
  
      tl.to('.project-hero h1', {x: 0, opacity:1})

      gsap.to('.artine > .my-project__img, .artine .my-project__desc', {y: 0, opacity:1, 'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 1,
        scrollTrigger: {
          trigger: '.artine',
          start: "top center",
        }
      }, )

      gsap.to('.artine .my-project__title', {x: 0, opacity:1, 'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 1,
        scrollTrigger: {
          trigger: '.artine',
          start: "top center",
        }
      }, )

      gsap.to('.artine .read-more', {x: 0, opacity:1,  duration: 1, ease: "none",
        scrollTrigger: {
          trigger: '.artine',
          start: "top center",
        }
      }, )


      gsap.to('.ctb .my-project__img, .ctb .my-project__desc', {y: 0, opacity:1, 'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 1,
        scrollTrigger: {
          trigger: '.ctb',
          start: "top center",
        }
      }, )

      gsap.to('.ctb .my-project__title', {x: 0, opacity:1, 'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 1,
        scrollTrigger: {
          trigger: '.ctb',
          start: "top center",
        }
      }, )

      gsap.to('.ctb .read-more', {x: 0, opacity:1,  duration: 1, ease: "none",
        scrollTrigger: {
          trigger: '.ctb',
          start: "top center",
        }
      }, )
    }
}
