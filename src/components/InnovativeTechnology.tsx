"use client";

import Text from './typography/Text';
import Image from 'next/image';

export default function InnovativeTechnology() {
  const technologies = [
    {
      image: "/p10.png",
      title: "Dynamic Pricing Mechanism",
      description: "The dynamic pricing mechanism adjusts the token price based on market demand, ensuring liquidity, fairness, and rewarding early adopters."
    },
    {
      image: "/p11.png",
      title: "Social Interaction System",
      description: "The platform integrates features like real-time chats, polls, auctions, and raffles, creating an engaging environment for influencers and fans to interact."
    },
    {
      image: "/p12.png",
      title: "Decentralized Influencer Authentication",
      description: "Blockchain-based influencer verification ensures that all verified influencers on Fans.pump are legitimate, offering fans the confidence to engage with their tokens and content."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          
          <Text 
            variant="heading" 
            as="h2" 
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#2563EB]"
          >
            <span className="text-[#0F172A]">INNOVATIVE TECHNOLOGY <br />BEHIND </span>
            <span className="text-[#2563EB]">FANS.PUMP</span>
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-center mb-8">
                <div className="relative w-40 h-40">
                  <Image
                    src={tech.image}
                    alt={tech.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <Text 
                variant="heading" 
                as="h3" 
                className="text-3xl font-bold leading-tight uppercase mb-4 text-[#0F172A] text-left"
              >
                {tech.title}
              </Text>
              <Text 
                variant="body" 
                className="text-[#334155] text-left"
              >
                {tech.description}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 