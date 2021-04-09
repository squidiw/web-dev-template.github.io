function splitScroll() {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration : '260%',
        triggerElement: '.portfolio-title',
        triggerHook: 0
    })
    .setPin('.portfolio-title')
    // .addIndicators()
    .addTo(controller);

}

splitScroll();