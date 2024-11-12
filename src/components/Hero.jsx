import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo,smallHeroVideo } from "../utils";
import { useState } from "react";
import { useEffect } from "react";
function Hero() {
    const [videoSrc,setvideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
    const handlevideo= ()=> {
        if(window.innerWidth <760){
            setvideoSrc(smallHeroVideo)
            }else{
                setvideoSrc(heroVideo)
                
        }
    }
    useEffect (() => {
        const handleResize = () => {    
            if(window.innerWidth <760){ 
                setvideoSrc(smallHeroVideo)
                }else{
                    setvideoSrc(heroVideo)


                    }
                    };
                    window.addEventListener('resize', handleResize);

                    return () => window.removeEventListener('resize', handleResize);
                    }, []);
    
    useGSAP(()=>(
        gsap.to("#hero", {
            opacity:1,
            delay:1.5,
            duration:1.5,
            ease: "power2.inOut",
            }),

            gsap.to("#cta", {
                opacity:1,
                delay:1.5,
                y:-50,
                duration:2,
                ease: "power2.inOut",
                })
        
    )
    )
  return (
<section className="w-full nav-height bg-black relative">
    <div className="h-5/6 w-full
    flex-center flex-col ">
        <p className="hero-title " id="hero">Iphone 16 pro</p>
        <div className="md:w-10/12 w-9/12">
            <video autoPlay muted playsInline={true} key={videoSrc}>
                <source  src={videoSrc} type="video/mp4" />
            </video>

        </div>
    </div>
    <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#highlits" className="btn">buy</a>
        <p>
            from $199/ month oor $999
        </p>
    </div>
</section>  )
}

export default Hero