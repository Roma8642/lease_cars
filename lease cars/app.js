gsap.registerPlugin(ScrollTrigger,ScrollSmoother)
ScrollSmoother.create({
 wrapper:".wrapper",
 content:".content",
 smooth:.75,
 effects:true
})
gsap.fromTo('.header-content',{opacity:1},{
    opacity:0,
    scrollTrigger:{
        trigger:'.header-content',
        start:'top',
        end:'center',
        scrub:true
    }
})
gsap.fromTo('.advantage',{x:-100,opacity:0},{
    opacity:1, x:0,
    scrollTrigger:{
        trigger:'.advantage__title',
        scrub:true

    }
})
gsap.fromTo('.leasing__list',{x:-100,opacity:0},{
    opacity:1,x:0, 
    scrollTrigger:{
        trigger:'.leasing__descr',
        scrub:true

    }
})

gsap.from(".header-top-inner", {opacity: 0 ,duration: 1})
gsap.from(".header-body-inner",{opacity: 0 ,duration: 1})
gsap.from(".tab__list",{opacity: 0 ,duration: 1})

