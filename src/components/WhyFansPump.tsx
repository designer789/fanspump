"use client";

import Text from './typography/Text';
import Image from 'next/image';

export default function WhyFansPump() {
  const features = [
    {
      icon: "/icons/chart.svg",
      title: "Dynamic Pricing with Innovative Mechanism",
      description: "Fans.pump uses the Pumpfun curve model to attract early users with low initial prices and increase them as demand grows, ensuring liquidity and fast community growth."
    },
    {
      icon: "/icons/social.svg",
      title: "Social Engagement & Revenue Generation",
      description: "Fans.pump combines social engagement and token economies, enabling influencers to interact with their fans through live chats, polls, and events. It also generates revenue by issuing tokens that fans can buy, trade, and use for rewards or governance participation."
    },
    {
      icon: "/icons/verified.svg",
      title: "Exclusive Verified Influencer Support",
      description: "Verified influencers receive dedicated support, including custom tokens, community management tools, and greater exposure."
    },
    {
      icon: "/icons/revenue.svg",
      title: "Flexible Tokenomics",
      description: "Token holders can buy, sell, and trade tokens, participate in governance, vote on key decisions, and access exclusive events, increasing their utility and value."
    },
    {
      icon: "/icons/group (1).svg",
      title: "Community Management & Build Loyalty",
      description: "Influencers can directly manage their communities with tokenized incentives and social tools like live chat, polls, airdrops, and exclusive events to boost fan loyalty and participation."
    },
    {
      icon: "/icons/megaphone.svg",
      title: "Boost Your Brand & Partner with Sponsors",
      description: "Offering influencers new opportunities to work with brands in a tokenized environment. Fans can directly engage in campaigns, creating more organic and authentic brand relationships."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Text 
          variant="heading" 
          as="h2" 
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-left mb-16"
        >
          <span className="text-[#0F172A]">WHY <span className="text-[#2563EB]">FANS.PUMP</span>?</span>
        </Text>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-[#FBBF24] rounded-full flex items-center justify-center mb-6">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={24}
                  height={24}
                  className="text-white brightness-0 invert"
                />
              </div>
              <Text 
                variant="heading" 
                as="h3" 
                className="text-3xl font-extrabold leading-light uppercase mb-4 text-[#0F172A]"
              >
                {feature.title}
              </Text>
              <Text 
                variant="body" 
                className="text-[#334155]"
              >
                {feature.description}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 