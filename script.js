document.addEventListener("DOMContentLoaded", function () {

  // Set initial position for the banner logo
  gsap.set(".bannerlogo", { xPercent: 10 });

  var rotate = gsap.timeline({
    scrollTrigger: {
      trigger: ".banner-right",
      pin: false,
      scrub: 1.1,
      start: "top top",
      end: "+=10000",
    },
  })
  .to(".bannerlogo", {
    rotation: 600,
    duration: 25,
    ease: "none",
  });

  /* welcome Section Code GSAP animation */
  const svg = document.getElementById("svg");
  const tl = gsap.timeline({
    onComplete: () => {
      document.body.style.overflowY = "visible";
    },
  });

  const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
  const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

  tl.from(".loader-wrap-heading h1", {
    delay: 0.5,
    y: 200,
    skewY: 20,
  }).to(".loader-wrap-heading h1", {
    delay: 0.5,
    y: -200,
    skewY: 20,
  });
  tl.to(svg, {
    duration: 0.8,
    attr: { d: curve },
    ease: "power2.easeIn",
  }).to(svg, {
    duration: 0.8,
    attr: { d: flat },
    ease: "power2.easeOut",
  });
  tl.to(".loader-wrap", {
    y: -1500,
  });
  tl.to(".loader-wrap", {
    zIndex: -1,
    display: "none",
  });

  // ScrollTrigger for Navbar hiding links on scroll
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".navbar ul li");

  ScrollTrigger.create({
    start: 50,
    onEnter: () => navLinks.forEach((link) => link.classList.add("hide")),
    onLeaveBack: () => navLinks.forEach((link) => link.classList.remove("hide")),
  });

  // GSAP scroll animations for various sections
  gsap.from("#para-text-section", {
    y: 100,
    opacity: 0,
    duration: 3,
    scrollTrigger: {
      trigger: "#para-text",
      start: "top 90%",
      end: "top 60%",
      scrub: 4,
      toggleActions: "restart none none none",
    },
  });

  gsap.from(".Innovations", {
    y: 300,
    opacity: 0,
    duration: 3,
    scrollTrigger: {
      trigger: ".Innovations",
      start: "top 90%",
      end: "top 60%",
      scrub: 4,
      toggleActions: "restart none none none",
    },
  });

  gsap.from(".sound-text1", {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#real-estate",
      start: "top 99%",
      end: "top 50%",
      scrub: 4,
      toggleActions: "restart none none none",
    },
  });

  gsap.from(".sound-text2", {
    y: 300,
    opacity: 0,
    duration: 3,
    scrollTrigger: {
      trigger: "#real-estate1",
      start: "top 50%",
      end: "top 20%",
      scrub: 4,
      toggleActions: "restart none none none",
    },
  });

  gsap.from("#real-estate2", {
    y: 300,
    opacity: 0,
    duration: 3,
    scrollTrigger: {
      trigger: "#real-estate2",
      start: "top 90%",
      end: "top 60%",
      scrub: 4,
      toggleActions: "restart none none none",
    },
  });

  gsap.from(".art-inno", {
    y: 70,
    opacity: 0,
    duration: 3,
    scrollTrigger: {
      trigger: ".art-inno",
      start: "top 99%",
      end: "top 50%",
      scrub: 4,
      toggleActions: "restart none none none",
    },
  });

  gsap.from(".myart-inno", {
    y: 200,
    opacity: 0,
    duration: 3,
    scrollTrigger: {
      trigger: ".myart-inno",
      start: "top 90%",
      end: "top 60%",
      scrub: 4,
      toggleActions: "restart none none none",
    },
  });

  /* ScrollTrigger for Image Zooming Effect */
  gsap.from("#humanoid-cont", {
    duration: 0.5,
    opacity: 0,
    scale: 0.4,
    transformOrigin: "top center",
    ease: "none",
    scrollTrigger: {
      trigger: "#humanoid-img",
      start: "top 80%",
      end: "top 30%",
      scrub: true,
    },
  });

  /* Smooth Scrolling for Navigation */
  $(".navigation a").on("click", function (e) {
    var target = this.hash,
      $target = $(target);

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top - 80,
        },
        500,
        "swing",
        function () {
          window.location.hash = target;
        }
      );
  });

});
        // Mobile menu toggle
        const menuBtn = document.querySelector('.mob-menu');
        const closeBtn = document.querySelector('.close-menu');
        const mobileMenu = document.querySelector('.mobile-menu');
 
        menuBtn?.addEventListener('click', () => {
            mobileMenu.classList.add('open');
        });
 
        closeBtn?.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
 
        // Dark mode toggle
        const darkIcon = document.querySelector('.dark-icon');
        const lightIcon = document.querySelector('.light-icon');
 
        function setDarkMode(isDark) {
            document.documentElement.classList.toggle('dark', isDark);
            if (darkIcon && lightIcon) {
                darkIcon.style.display = isDark ? 'none' : 'block';
                lightIcon.style.display = isDark ? 'block' : 'none';
            }
        }
 
        document.querySelector('.light-dark')?.addEventListener('click', () => {
            const isDark = document.documentElement.classList.contains('dark');
            setDarkMode(!isDark);
        });
 
        // Check system preference
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true);
        }
 
        // Add GSAP animations
        gsap.registerPlugin(ScrollTrigger);
 
   
