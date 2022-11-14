import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';

export default {
    data: () => ({
        name: '',
        email: '',
        message: '',
        sending: false,
        dialogueTitle: '',
        dialogueText: '',
    }),
    components: {Navbar, Footer},
    template: 
    /* html */  
    `
    <!-- navbar -->
    <Navbar></Navbar>

    <div class="container-right">
        <div class="contact-hero">
        </div>
    </div>

    <div class="container-right">
        <div>
            <div class="form">
                <div class="form-overlay">
                    <span><i class="fa fa-spinner" aria-hidden="true"></i></span>
                </div>

                <div class="dialogue">
                    <div class="dialogue__title">{{dialogueTitle}}</div>
                    <div class="dialogue__text">{{dialogueText}}</div>
                </div>

                <h2 class="form__title">Get in touch.</h2>
                <div class="form__group field">
                    <input :disabled="sending == true" v-model="name" type="text" class="form__field" id="name" placeholder="Name" autocomplete="off">
                    <label for="name" class="form__label">Name</label>
                </div>
                <div class="form__group field">
                    <input :disabled="sending == true" v-model="email" type="email" class="form__field" id="email" placeholder="E-mail" autocomplete="off">
                    <label for="email" class="form__label">E-mail</label>
                </div>
                <div class="form__group field">
                    <textarea :disabled="sending == true" v-model="message" id="message" class="form__field" placeholder="Message" autocomplete="off"></textarea>
                    <label for="message" class="form__label">Message</label>
                </div>

                <button :disabled="sending == true" class="btn-send" @click="SendMail()">
                    <span class="btn-send__text">Send </span>
                    <span class="btn-send__icon"><i class="fa fa-paper-plane" aria-hidden="true"></i></span>
                </button>

            </div>
        </div>
    </div>

    <div class="container-center">
        <div class="contact">
            <div class="contact__title">contact me thru</div>
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

    methods: {
        validateEmail: function(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },

        SendMail() {
            if(!this.validateEmail(this.email)) {
                alert("Please provide a valid e-mail address.");

            } else if(this.name !== '' && this.validateEmail(this.email) && this.message !== "") {
                this.sending = true;

                var params = {
                    from_name : this.name,
                    email_id : this.email,
                    message : this.message
                }
            
                emailjs.send("service_jskb7yp", "template_frsdhvq", params).then(function (res) {
                    if(res.status === 200) {
                        setTimeout(() => {
                            alert("Thank you for getting in touch with me! I'll be sure to respond as soon as I can. :)");
                            this.loading = false;
                         }, 3000)
                    } else {
                        setTimeout(() => {
                            alert("Failed! Unknown error occured. Please try again later.");
                            this.loading = false;
                         }, 3000)
                    }

                })

                this.name = '';
                this.email = '';
                this.message = '';

            } else {
                alert("Please fill out all fields.");
            }

            
        }
    }
}
