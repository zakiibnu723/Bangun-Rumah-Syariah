// const header = document.querySelector('.navbar')

const heroSection = document.querySelector('.hero-section')

const questionSection = document.querySelector('.question-section')



var prevScrollpos = window.scrollX;
window.onscroll = function() {
    var currentScrollPos = window.scrollY;
    const navbar = document.getElementById("navbar");
//   console.log(currentScrollPos)
    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-200px";
    }

    prevScrollpos = currentScrollPos;

    let heroBottomPos = heroSection.getBoundingClientRect().bottom;
    // console.log(heroBottomPos)
    if (heroBottomPos < 0) {
        navbar.style.backgroundColor = "#ffffffd0";
        navbar.style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px";
    } else {
        navbar.style.backgroundColor = "rgba(255, 255, 255, 0)";
        navbar.style.boxShadow = "none";
    }

    var introBottomPos = introduction.getBoundingClientRect().bottom;
    var introTopPos = introduction.getBoundingClientRect().top;
    
    if (introTopPos < 100 && introBottomPos > 200) {
        introTexts.forEach(function(text) {
          text.style.opacity = "100%";
          questionSection.style.backgroundColor = "#146C94";
        })
    } else {
        introTexts.forEach(function(text) {
          text.style.opacity = '0'
          questionSection.style.backgroundColor = 'white';
        })
    }

    const serviceSectionTop = serviceSection.getBoundingClientRect().top
    if (serviceSectionTop < 0) {
        serviceContainer.style.opacity = 1
    } else {
        serviceContainer.style.opacity = 0
    }
    console.log(serviceSectionTop)
}


const lenis = new Lenis({
    duration: 1.5,
    // lerp: 5,
    easing: (t) => (t === 1 ? 0 : 1 - Math.pow(1 - t, 6)),
    direction: "vertical",
    gestureDirection: "vertical",
    smoothWheel: true,
    wheelMultiplier: 0.7,
    smoothTouch: true,
    touchMultiplier: 1
})

// var prevScrollpos = window.scrollY;
// console.log(`prev: ${prevScrollpos}`)

lenis.on('scroll', (e) => {
    // console.log(e.animatedScroll)
    // headerAnimation(e.animatedScroll)

    // var currentScrollPos = e.animatedScroll;
    // if (prevScrollpos > currentScrollPos) {
    //     document.querySelector('.navbar').style.top = "0";
    // } else {
    //     document.querySelector('.navbar').style.top = "-50px";
    // }
    // prevScrollpos = currentScrollPos;
    // console.log(`prev: ${prevScrollpos}`)
})

// function headerAnimation(scrolledPosition) {
//     if (window.scrollY < scrolledPosition) {
//         header.classList.add('hidden')
//     } else {
//         header.classList.remove('hidden')
//         header.classList.add('appear')
//     }
// }

function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



const bodyElement = document.body;
const heroContain = document.querySelector('.hero-contain');
const _heroContain = gsap.timeline({paused: true});
_heroContain.fromTo(heroContain, {y: '0vh'}, {y: '0vh', duration: 3, ease: 'none'}, 0);

const Scroll_HeroContain = ScrollTrigger.create({
    animation: _heroContain,
    trigger: heroSection,
    start: 'top top',
    end: 'bottom top',
    scrub: true
});

const scrollDowns = document.querySelector('.scroll-downs');
const _scrollDowns = gsap.timeline({paused: true});
_scrollDowns.fromTo(scrollDowns, {y: '0vh'}, {y: '100vh', duration: 1, ease: 'none'}, 0);

const Scroll_scrollDowns = ScrollTrigger.create({
    animation: _scrollDowns,
    trigger: heroSection,
    start: 'top top',
    end: 'bottom top',
    scrub: true
});

const heroBackground = document.querySelector('.hero-background');
const _heroBackground = gsap.timeline({paused: true});
_heroBackground.fromTo(heroBackground, {y: '0vh'}, {y: '60vh', duration: 1, ease: 'none'}, 0);

const Scroll_HeroBackground = ScrollTrigger.create({
    animation: _heroBackground,
    trigger: heroSection,
    start: 'top top',
    end: 'bottom top',
    scrub: true
});



const questionContainer = document.querySelector('.question-container');
const _questionContainer = gsap.timeline({paused: true});
_questionContainer.fromTo(questionContainer, {y: '0vh'}, {y: '200vh', duration: 1, ease: 'none'}, 0);

const Scroll_QuestionSection = ScrollTrigger.create({
    animation: _questionContainer,
    trigger: questionContainer,
    start: 'top bottom',
    end: 'bottom top',
    scrub: true
 
})



const highlight = document.querySelector('.highlight');
// const questionList = document.querySelector('.question-list');
const _highlight = gsap.timeline({paused: true});
_highlight.fromTo(highlight, {y: '-22vh'}, {y: '76vh', duration: 1, ease: 'none'}, 0);

const Scroll_Highlight = ScrollTrigger.create({
    animation: _highlight,
    trigger: questionContainer,
    start: '13% center',
    end: 'bottom top',
    scrub: true
})

// const vh = window.innerHeight;
// const value = 20 / (vh / 1000)
// console.log(value)
// console.log(vh)
console.log(window.innerWidth)

const solution = document.querySelector('.solution');
const _solution = gsap.timeline({paused: true});
_solution.fromTo(solution, {y: `-6em`}, {y: '88vh', duration: 1, ease: 'none'}, 0);

const Scroll_Solution = ScrollTrigger.create({
    animation: _solution,
    trigger: questionContainer,
    start: '62% center',
    end: 'bottom top',
    scrub: true
})


const introduction = document.querySelector('.introduction');
const introContainer = document.querySelector('.intro-container')
// const _introduction = gsap.timeline({paused: true});
// _introduction.fromTo(introduction, {y: `0vh`}, {y: '-300vh', duration: 1, ease: 'none'}, 0);

// const Scroll_Introduction = ScrollTrigger.create({
//     animation: _introduction,
//     trigger: introduction,
//     start: 'top bottom',
//     end: 'bottom top',
//     scrub: true
// })

// const introText

const introImages = document.querySelectorAll('.intro-container .image img');
const imagesContainer = document.querySelectorAll('.intro-container .image');
const introTexts = document.querySelectorAll('.text');

introImages.forEach((introImage, index) => {
    const imageContainer = imagesContainer[index];
    animateIntroImages(introImage, imageContainer);
});

function animateIntroImages(introImage, imageContainer) {
    // let _imageContainer = gsap.timeline({paused: true})
    // _imageContainer.fromTo(imageContainer, { y: `0vh` }, { y: '-200vh', duration: 1, ease: 'none' }, 0);

    // const Scroll_ImageContainer = ScrollTrigger.create({
    //   animation: _imageContainer,
    //   trigger: imageContainer,
    //   start: 'top bottom',
    //   end: 'bottom top',
    //   scrub: true
    // });

    let _introImage = gsap.timeline({ paused: true });
    _introImage.fromTo(introImage, { y: `-80vh` }, { y: '80vh', duration: 1, ease: 'none' }, 0);

    const Scroll_IntroImage = ScrollTrigger.create({
        animation: _introImage,
        trigger: imageContainer,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
    });
}

// const lastIntroImage = imagesContainer[3]
// const lastIntroText = document.querySelector('.text4');
// const _lastIntroImage = gsap.timeline({ paused: true });
// const _lastIntroText = gsap.timeline({ paused: true });

// _lastIntroImage.fromTo(lastIntroImage, { y: `0` }, { y: '20vh', duration: 1, ease: 'none' }, 0);

//     const Scroll_LastIntroImage = ScrollTrigger.create({
//         animation: _lastIntroImage,
//         trigger: imagesContainer[3],
//         start: '100% bottom',
//         end: '200% bottom',
//         scrub: true
//     });

//     const Scroll_IntroImage = ScrollTrigger.create({
//       animation: _introImage,
//       trigger: imageContainer[3],
//       start: 'top bottom',
//       end: 'bottom top',
//       scrub: true
//   });


const serviceSection = document.querySelector('.service-section');
let services = gsap.utils.toArray('.service');

gsap.to(services, {
    xPercent: -100 * (services.length * 1.5 - 1),
    // duration: 25,
    ease: "none",
    scrollTrigger: {
        trigger: serviceSection,
        // pin: true,
        scrub: 1,
        // snap: 1 / (services.length - 1),
        start: "top -2%",
        end: "+=" + (serviceSection.offsetWidth), // Start pinning at "8% top" of the trigger element
        // markers: true
    } 
});


let servicesImages = gsap.utils.toArray('.service div img')
gsap.to(servicesImages, {
    xPercent: 10 * (servicesImages.length * 1.5 - 1),
    ease: "none",
    // duration: 25,
    scrollTrigger: {
        trigger: serviceSection,
        // pin: true,
        scrub: 1,
        // snap: 1 / (servicesImages.length - 1),
        start: "8% top",
        end: "+=" + (serviceSection.offsetWidth)
    } 
});

gsap.to(services, {
    scrollTrigger: {
        trigger: serviceSection,
        pin: true,
        // snap: 1 / (services.length - 1),
        start: "8% top",
        end: "+=" + (serviceSection.offsetWidth) * 0.3, // Start pinning at "8% top" of the trigger element
        
    } 
});

const serviceContainer = document.querySelector(".service-container")



const schemeSection = document.querySelector('.scheme-section');
const schemeHeader = document.querySelector('.scheme-section .header p');

gsap.to(schemeHeader, {
    scrollTrigger: {
        trigger: schemeSection,
        pin: schemeHeader,
        // snap: 1 / (services.length - 1),
        start: "0% 40%",
        end: "bottom center",
        markers: true
    } 
});


// let _schemeHeader = gsap.timeline({ paused: true });
//     _schemeHeader.fromTo(schemeHeader, { y: `0vh` }, { y: '100vh', duration: 1, ease: 'none' }, 0);

//     const Scroll_IntroImage = ScrollTrigger.create({
//         animation: _schemeHeader,
//         trigger: schemeSection,
//         start: 'top 40%',
//         end: 'bottom bottom',
//         scrub: true
//     });



let schemesContainer = gsap.utils.toArray('.schemes-container')
let schemes = gsap.utils.toArray('.schemes-container .scheme')

// function animateScheme(scheme)

gsap.to(schemes[0], {
    y: "-60vh",
    ease: "none",
    scrollTrigger: {
        trigger: schemeSection,
        pin: schemesContainer,
        // scrub: 1,
        start: "0% 40%",
        end: "+=10%",
        markers: true,
        toggleActions: "play pause reverse reverse",
        duration: 0.5
    }
})

gsap.to(schemes[1], {
    y: "-60vh",
    ease: "none",
    scrollTrigger: {
        trigger: schemeSection,
        pin: schemesContainer,
        // scrub: 1,
        start: "10% 40%",
        end: "+=20%",
        markers: true,
        toggleActions: "play play reverse reverse",
        duration: 0.5
    }
})



