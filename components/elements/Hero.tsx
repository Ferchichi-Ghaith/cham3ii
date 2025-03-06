import { Button } from "@/components/ui/button"

import { Play } from "lucide-react"
import Image from "next/image"
import { InteractiveGrid } from "../ui/interactive-grid"
import { ShineBorder } from "../ui/shine-border"
import SpecialButton from "../ui/SpecialButton"

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-12 pb-6 px-2 overflow-hidden bg-black">
      <InteractiveGrid containerClassName="absolute inset-0" className="opacity-30" points={40} />


      <ShineBorder
        className="relative z-10 max-w-6xl mx-auto px-6"
        borderClassName="border border-white/10 rounded-xl overflow-hidden"
      >
              <div className="flex flex-col items-center justify-center px-12">

     
    
<div className="relative flex items-center justify-center  ">
      <Image
        src="https://h30fnvgbtp.ufs.sh/f/fuJCcSj8mQtnCXQlVmNuP1T7OA5K4oyREYINWQskMzbLimZe"
        alt="Background Gradient"
        width={150}
        height={150}
        className="rounded-full mt-3  border-4 border-white/80"
        priority
      />
    </div>
    <div className="flex items-center justify-center">
<h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white/95">Dominate Every Game    
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-yellow-500 to-pink-600">
          {" "}
          Legends Boost
        </span> </h1> 
</div>
    </div>
        <div className="text-center mb-16 px-4 pt-1">

        <p className="text-gray-400 text-lg mb-8 max-w-5xl mx-auto"> 
         the ultimate platform connecting players with top-tier boosters. Enhance your rank, unlock new achievements, and experience the game like never before all with full confidentiality and security.
        </p> 
     
          <div className="flex gap-4 justify-center">
          
            <SpecialButton icon={<Play className="w-4 h-4" />} text="Get Start"  className="z-50 mb-5"  />
 
          </div>
        </div>
       
      
      </ShineBorder>
    </section>
  )
}

