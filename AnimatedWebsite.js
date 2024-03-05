const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
Shery.mouseFollower("#main");

gsap.from(".nlink", {
    stagger:.1,
    y:20,
    duration:1,
    ease:Power3,
    opacity:.5,
})

Shery.textAnimate("#headings h1" , {
    style: 2,
    y:10,
    delay:0.1,  
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
  Shery.makeMagnet(".magnet" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  
  gsap.from(".anim",{
    ease:Expo,
    duration:.5,
    y:50,
    stagger:.2,
    opacity:0,
  })

  Shery.imageEffect("#imgtxt img",{
    style:3,
    config:{"uFrequencyX":{"value":43.55,"range":[0,100]},"uFrequencyY":{"value":12.1,"range":[0,100]},"uFrequencyZ":{"value":17.74,"range":[0,100]},"geoVertex":{"range":[1,64],"value":10.14},"zindex":{"value":"0","range":[-9999999,9999999]},"aspect":{"value":0.6666748550617937},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0.04,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.37,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  })
  gsap.from("#imgtxt img",{
    z:-1,
    opacity:0,
    duration:1,
    ease:Expo.easenInOut,

  })

  Shery.imageEffect(".anim img",{
    style:5,
    config:{"a":{"value":1.6,"range":[0,30]},"b":{"value":0.69,"range":[-1,1]},"zindex":{"value":"0","range":[-9999999,9999999]},"aspect":{"value":0.8888955610060866},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0.04,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.12,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":10.14},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]},"uFrequencyX":{"value":43.55,"range":[0,100]},"uFrequencyY":{"value":12.1,"range":[0,100]},"uFrequencyZ":{"value":17.74,"range":[0,100]}},
  });

  Shery.imageEffect("#bimg",{
    style:1,
    config:{"a":{"value":1.37,"range":[0,30]},"b":{"value":-0.24,"range":[-1,1]},"zindex":{"value":"0","range":[-9999999,9999999]},"aspect":{"value":1.6585904996616267},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.39,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.12,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":30}},"discard_threshold":{"value":0.44,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    gooey:true,
  });

  document.querySelector("#think button").addEventListener("mouseover",function(){
        gsap.to("#think video",{
            opacity:1,
            duration:2,
            ease:Power4,
        })
  })

  document.querySelector("#think button").addEventListener("mouseleave",function(){
    gsap.to("#think video",{
        opacity:0,
        duration:1,
        ease:Power4,
    })
})