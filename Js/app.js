// PORTFOLIO SPLIT SCROLLING

function splitScroll() {
   const controller = new ScrollMagic.Controller();

   new ScrollMagic.Scene({
      duration: "260%",
      triggerElement: ".portfolio-title",
      triggerHook: 0,
   })
      .setPin(".portfolio-title")
      // .addIndicators()
      .addTo(controller);
}

splitScroll();



// SET YEAR IN COPYRIGHT

const copyrightYear = document.querySelector('#copyrightDate');
let date =  new Date();
let currentYear = date.getFullYear();

copyrightYear.innerHTML = currentYear
