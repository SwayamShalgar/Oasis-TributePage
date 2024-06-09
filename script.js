var tl = gsap.timeline();

tl.from("#line", {
    y: -100,
    duration: 1
})
.from(".name", {
    y: -100,
    duration: 0.5
})
.from(".ul1 li", {
    y: -100,
    stagger: 0.3
})
.from(".left", {
    x: -900,
    duration: 1
})
.from(".right h1", {
    x: 1000,
    duration: 1
})
.from(".right p", {
    y: 1000,
    stagger: 0.3
});


var tl2 = gsap.timeline({
    scrollTrigger: {
        scroller: "body",
        trigger: ".page2",
        start: "top 40%"
    }
});

tl2.from(".top h1, .top span", {
    scale: 0,
    opacity: 0,
    stagger: 0.5
})

tl2.from(".page2 .img1", {
    x: -500,
    rotate: 90,
    opacity:0,
    duration: 1
});

tl2.from(".page2 .img2", {
    x: 500,
    rotate: -90,
    opacity:0,
    duration: 1
});

tl2.from(".page2 .img3", {
    x: 500,
    rotate: -90,
    opacity:0,
    duration: 1
});

tl2.from(".page2 .img4", {
    x: -500,
    rotate: 90,
    opacity:0,
    duration: 1
});

// Achievements animation with scroll trigger
gsap.from(".achievements .ach", {
    opacity: 0,
    stagger: 1,
    scrollTrigger: {
        scroller: "body",
        trigger: ".page3",
        start: "top 40%"
    }
});

document.querySelectorAll('.ul1 li').forEach(item => {
    item.addEventListener('click', event => {
        const target = event.target.getAttribute('data-target');
        document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
    });
});