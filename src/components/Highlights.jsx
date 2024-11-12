import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import VideoCarousel from "./VideoCarousel"


function Highlights() {
  useGSAP(()=>{
    gsap.to("#title", {
      duration: 1,
      opacity:1,
      y:0
 })
 gsap.to(".link", {
  duration: 1,
  opacity:1,
  y:0,
  stagger :0.25
  
})


      
  })
  return (
    <div>
        <section id="highlighs" className="w-screen overflow-hidden h-full common-padding bg-zinc">

          <div className="screen-max-width">

            <div className=" mb-12 w-full md:flex items-end justify-between">
              <h1 id="title" className="section-heading">

                get the highlights 

              </h1>
              <div className="flex flex-wrap items-end gap-5">
                <p className="link">watch the film </p>
                <p className="link">watch the event </p>

              </div>

            </div>

            <VideoCarousel/>


          </div>

        </section>
    </div>
  )
}

export default Highlights