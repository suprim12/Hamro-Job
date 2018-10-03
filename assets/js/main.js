// Preloader js
 window.onload = function(){
   setTimeout(function(){
    init();
   },1000);
};
// Window in Load
  function init(){
      let preloaderwrapper = document.querySelector('.preloader');
      // Change In Production to 500
      setTimeout(function(){
        preloaderwrapper.classList.add('hide');
      },500);
  }
// Window on Scroll
  function windowScroll(){
      stickyNavbar();
      trackScroll();
  }
// Sticky Navabar Js
  const nav = document.querySelector("#navBar");
  const topOfNav = nav.offsetTop;

  function stickyNavbar(){
  if(window.scrollY >= topOfNav){
      document.body.style.paddingTop = nav.offsetHeight + 'px';
      document.body.classList.add('fixed-nav');
  }else{
      document.body.style.paddingTop = 0 + 'px';
      document.body.classList.remove('fixed-nav');
  }
  }

window.addEventListener('scroll',	windowScroll);


// Back to top js
var goTopBtn = document.querySelector('.back_to_top');
goTopBtn.addEventListener('click', backToTop);

    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;
  
      if (scrolled > coords) {
        goTopBtn.classList.add('back_to_top-show');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('back_to_top-show');
        goTopBtn.classList.add('back_to_top_hide');
      }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
      }
    }
// Debounce Function
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
// Sidebar Function
$(document).ready(function(){
  var t1 = new TimelineMax({paused: true});
  t1.to(".bartop",0.5,{
      y: 7,
      rotation: 45,
      ease: Expo.easeInOut
  });
  t1.to(".bar", 0.5, {
    y: -7,
    rotation: -45,
    ease: Expo.easeInOut,
    delay:-0.5
  });
  t1.to('#sidenavBar',0.5,{
    left:"0%",
    ease:Expo.easeInOut,
    delay:-0.5
  });
  t1.to('.sideoverlay',0.5,{
    left:"0%",
    ease:Expo.easeInOut,
    delay:-0.5
  });
  t1.to('#main',0.5,{
    left:"240px",
    ease:Expo.easeInOut,
    delay:-0.5
  });
  t1.reverse(); 
  var button = document.querySelector('.collapse-btn');
  var overlay = document.querySelector('.sideoverlay');
  button.addEventListener('click',function(){
    document.body.classList.toggle('open-sidebar');
    t1.reversed(!t1.reversed());
  });
  overlay.addEventListener('click',function(){
    document.body.classList.toggle('open-sidebar');
    t1.reversed(!t1.reversed());
  });
});
// Toggle Angel
let angle = document.querySelector('.toggle-angle');
let anglebtn = document.querySelector('.togglebtn');
if(anglebtn){
  anglebtn.addEventListener('click',() => {
    console.log('Works');
    angle.classList.toggle('fa-angle-up');
  });
}
// Auto Close
let flash = document.querySelector('#custom-flash')
if(flash){
   setTimeout(function(){
      flash.classList.add('flash-out');
   },8000);
}