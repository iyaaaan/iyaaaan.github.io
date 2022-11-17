document.addEventListener("DOMContentLoaded", function(event) { 

    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({defaults: {ease: "power4.in", duration: 1.75}});
    //let f = CSSRulePlugin.getRule(".class::pseudo");

    tl.to('.hero__img', {y:100, opacity:1})
      .to('.hero__caption h2', {y:0, opacity:1, 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)'}, "-=1.5")
   
})

