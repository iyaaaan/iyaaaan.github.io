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
        <div class="my-project">
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
        <div class="my-project">
            <div class="my-project__text">
                <h2 class="my-project__title">Artine Photography</h2>
                <p class="my-project__desc">This is a photography website with masonry gallery.</p>
                <p class="my-project__desc">Made with HTML5, CSS, and other JavaScript Libraries.</p>
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
}
