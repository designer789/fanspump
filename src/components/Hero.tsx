"use client";

import Image from "next/image";
import Link from "next/link";
import Text from "./typography/Text";

export default function Hero() {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] lg:h-screen overflow-hidden py-10 md:py-20 px-4 md:px-6 lg:px-16">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/bg1.png"
          alt="Background"
          fill
          priority
          style={{ 
            objectFit: 'cover', 
            opacity: 0.5
          }}
        />
      </div>

      {/* Left Side Image - Only visible on large screens (lg and up) */}
      <div className="absolute left-0 lg:left-10 bottom-0 lg:bottom-70 z-10 hidden lg:block">
        <Image
          src="/p8-l.png"
          alt="Left decoration"
          width={400}
          height={500}
          className="object-contain max-w-[200px] lg:max-w-full"
        />
      </div>

      {/* Right Side Image */}
      <div className="absolute right-0 md:right-60 bottom-0 md:bottom-10 z-10 hidden md:block">
        <Image
          src="/p8-r.png"
          alt="Right decoration"
          width={350}
          height={500}
          className="object-contain max-w-[175px] lg:max-w-full"
        />
      </div>
      
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-center relative z-20 py-10  px-2 md:px-4 md:py-16">
        <Text 
          variant="heading" 
          as="h1" 
          className="hero-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-primary font-extrabold tracking-tight uppercase mb-8 md:mb-16"
        >
          TOKENIZING INFLUENCE,<br />
          ENGAGING FANS,<br />
          ELEVATING CRYPTO
        </Text>
        
        <div className="w-full flex flex-col md:flex-row gap-6 md:gap-8">
          <Text 
            variant="body" 
            className="body-text text-[#334155] text-base sm:text-lg md:w-3/4 max-w-3xl"
          >
            Fans.pump is an innovative platform that combines cryptocurrency, influencers, and social engagement. Influencers can issue tokens to build deeper connections with their fans, and fans are rewarded through active participation and investment. Thus, the platform creates a new form of interaction and value exchange.
          </Text>
          
          <div className="flex flex-wrap gap-3 md:gap-4 justify-start md:justify-end md:w-full md:items-end mt-6 md:mt-0">
            <Link 
              href="https://t.me/Fans_pump_Official" 
              className="bg-primary text-white px-6 md:px-8 py-2 md:py-3 rounded-md font-medium hover:bg-blue-600 transition-colors body-text text-sm md:text-base"
            >
              Join Us
            </Link>
            <Link 
              href="https://docs.fanspump.xyz" 
              className="bg-secondary text-black px-6 md:px-8 py-2 md:py-3 rounded-md font-medium hover:bg-amber-400 transition-colors body-text text-sm md:text-base"
            >
              Gitbook
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 