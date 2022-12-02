export default {
    data: () => ({}),
    template: 
    /* html */
    `
    <div class="scroll-to-top" @click="scrollToTop">
        <i class="fa-solid fa-circle-chevron-up"></i>
        <span>scroll to top</span>
    </div>

    <!-- footer -->
    <footer class="footer">
        <span>Copyright &copy; 2022 &nbsp &nbsp | &nbsp &nbsp Christian Ocol</span>
    </footer>
    `,

    mounted() {
        gsap.registerPlugin(ScrollTrigger);

        gsap.set('.scroll-to-top', {y: 50});
        gsap.to('.scroll-to-top', {
            y: 0, 
            autoAlpha: 1, 
            scrollTrigger: {
              trigger: "body",
              start: "top -50%",
              end: "top -20%",
              toggleActions: "play none reverse none"
            }
        });
    },

    methods: {
        scrollToTop() {
            window.scrollTo(0,0);
        }
    }
}
