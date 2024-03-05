function LocomotiveAnim() {
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
LocomotiveAnim();
function naAnim(){
    gsap.to("#nleft svg",{
        transform:'translateY(-100%)',
        scrollTrigger:{
            trigger:"#page1",
            scroller:"#main",
            markers:true,
            start:"top 0",
            end:"top -5%",
            scrub:true,
    
        }
    })
    gsap.to("#right #icons",{
        opacity:0,
        transform:'translateY(-100%)',
        scrollTrigger:{
            trigger:"#page1",
            scroller:"#main",
            markers:true,
            start:"top 0",
            end:"top -5%",
            scrub:true,
    
        }
    })
}
naAnim();
function videoAnim(){
    var video = document.querySelector("#vid");
var playbtn = document.querySelector("#play");
video.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        opacity:1,
        scale:1,
    })
})
video.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        opacity:0,
        scale:0,
    })
})
video.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x-80,
        top:dets.y-50,
    })
})
}
videoAnim();
function LoadingAnim(){
    gsap.from("#hero h1",{
        y:70,
        stagger:0.5,
        opacity:0.5,
        duration:0.8,
    })
    gsap.from("#hero #vid",{
        scale:0.8,
        stagger:0.5,
        opacity:0.5,
        duration:0.8,
    })
}

LoadingAnim();


function cursorAnim() {

    document.addEventListener("mousemove",function(dets){
        gsap.to("#cursor",{
            left:dets.x,
            top:dets.y,
         
        })
    })


    document.querySelectorAll(".child").forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            gsap.to("#cursor",{ 
                transform:'translate(-50%,-50%) scale(1)',
            
            })
        })
    })
    
    document.querySelectorAll(".child").forEach(function(elem){
        elem.addEventListener("mouseleave",function(){
            gsap.to("#cursor",{ 
                transform:'translate(-50%,-50%) scale(0)',
            
            })
        })
    })   
}
cursorAnim();
