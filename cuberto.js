Shery.mouseFollower();
Shery.makeMagnet(".sticky");
Shery.hoverWithMediaCircle(".hvr",{
    videos:["https://player.vimeo.com/external/352012012.sd.mp4?s=7b6f82678265a4c6c75831a304e781a28fd40469&profile_id=164&oauth2_token_id=57447761",
"https://player.vimeo.com/external/368735195.sd.mp4?s=0407fdf37d328e677ba78802f66a1d6d1bbce148&profile_id=164&oauth2_token_id=57447761",
"https://player.vimeo.com/external/371571670.sd.mp4?s=b059bff38980a7ebb5b527c47b2c72ecfcb32f35&profile_id=164&oauth2_token_id=57447761"]
});
gsap.to(".elems",{
    scrollTrigger:{
        trigger:"#fimages",
        pin:true,
        start:"top top",
        end:"bottom bottom",
        endTrigger:".last",
        scrub:1,
    },
    y:"-300%",
    ease:Power1,
})


let sections = document.querySelectorAll(".elems");
Shery.imageEffect(".images",{
   
    style: 5,
    debug:true,
    config:{onMouse:{value:1}},
    slideStyle:(setScroll)=>{
         sections.forEach(function(section,index){
ScrollTrigger.create({
    trigger: section,
    start: "top top",
    scrub: 1, 
    onUpdate: function (prog) {
        setScroll(prog.progress+index);
    },
});
         });

    },
}); 


// let sections = document.querySelectorAll(".elems");
// Shery.imageEffect(".images", {
//     style: 5,
//     debug:true,
//     slideStyle: (setScroll) => {
//         sections.forEach(function(section,index){
//             ScrollTrigger.create({
//                 trigger: section,
//                 start: "top top",
//                 scrub: 1, 
//                 onUpdate: function (prog) {
//                     setScroll(prog.progress+index);
//              },
//           });
//        });
//     },
//   });