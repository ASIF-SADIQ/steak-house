
function circlemousefollower(){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    })


}
circlemousefollower();
var tl = gsap.timeline();
tl.from("#page1 #fronttext h1, #fronttext p",{
x:-500,

   opacity:-5,
   
   duration:1,
})

tl.from("#page1 #fronttext #button",{
    y:900,
       opacity:-10,
       border:"10px solid #FFF0F5",
       ease:"reverse"

    })

    tl.from("#page2 #whyustext",{
        scale:-0.5,
        opacity:-1,
        scrollTrigger:{
            trigger:"#page2",
            scroll:"body",
            top:"-60%",
            end:"1%",
          scrub:true
    
        }
        }
    

    )
    tl.from(" #page2 #div1, #page2 #div2,#page2 #div3",{
        scale:-1,
        opacity:-3,
        scrollTrigger:{
            trigger:"#page2",
            scroll:"body",
            top:"-20%",
            end:"1%",
          scrub:true,
        
    
        }
        }
    

    )

        tl.from(" #page3  #page3-top h1 , #page3  #page3-top p",{
            scale:-1,
            opacity:-3,
            scrollTrigger:{
                trigger:"#page3",
                scroll:"body",
                start:"-90%",
                end:"-50%",
              scrub:true,
        
        
            }
            }
        
    
        )
        tl.from("#page3 #page3-bottom p",{
            x:-500,

   opacity:-5,
   scrollTrigger:{
    trigger:"#page3",
    scroll:"body",
    start:"-40%",
    end:"-10%",
    esase:"slow",
  scrub:true,
  

}
   
        })
        tl.from("#page4 h1",{
            x:-500,

   opacity:-5,
   scrollTrigger:{
    trigger:"#page4",
    scroll:"body",
    start:"-30%",
    end:"0%",
  scrub:true,
  

}
   
        })