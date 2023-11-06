export default {
  data: () => ({
    toggle: false,
  }),
  template:
    /* html */
    `
    <!-- navbar -->
    <div class="container">
        <nav class="navbar">
            <router-link to="/" class="">
                <div class="navbar__logo">
                    <span class="navbar__logo-up" data-after="iy">
                        <span>iy</span>
                    </span>

                    <span class="navbar__logo-down" data-after="an">
                        <span>an</span>
                    </span>
                </div>
            </router-link>
            

            <span class="navbar-toggler" @click="toggleMenu">
                <span class="navbar-toggler__bar" :class="{'is-active': toggle}"></span>
            </span>

            <ul class="navbar-menu" :class="{'is-active': toggle}">
                <li class="navbar-menu__item">
                    <router-link to="/about" class="navbar-menu__link">
                        <span>about</span>
                    </router-link>
                </li>
                <li class="navbar-menu__item">
                    <router-link to="/project" class="navbar-menu__link">
                        <span>projects</span>
                    </router-link>
                </li>
                <li class="navbar-menu__item">
                    <router-link to="/contact" class="navbar-menu__link">
                        <span>contact</span>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div> <!-- ./navbar -->
    `,

  methods: {
    toggleMenu() {
      this.toggle = !this.toggle;

      if (this.toggle) {
        document.body.classList.add("disable-scroll");
      } else {
        document.body.classList.remove("disable-scroll");
      }
    },
  },
};
