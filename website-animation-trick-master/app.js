const timeline = gsap.timeline({ defaults: { ease: "power1.out" } });

// .to == where would i want the animation to go to
// stagger creates a delay in the elements
timeline.to('.text', { y: '0%', duration: 1, stagger: 0.25 });
// after the previous animation finishes then the next one starts
timeline.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
timeline.to(".intro", { y: "-100%", duration: 1 }, "-=1");
// fromTo() == where to start and where to end both are told here.
timeline.fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 1 });
timeline.fromTo('.big-text', { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");