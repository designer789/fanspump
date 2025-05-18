"use client";

import Carousel from './features/Carousel';

export default function Features() {
  const featureItems = [
    {
      title: "Custom Tokens for Influencers",
      description: "Influencers can create personalized tokens that reflect their brand (e.g., JohnDoe Token). These tokens act as an \"access pass\" for fans, unlocking exclusive content, early event participation, and more.",
      icon: "/p1-3.png"
    },
    {
      title: "Token Launch & Growth",
      description: "Influencers can launch tokens on Fans.pump, set initial prices, and control circulation. With the Pumpfun curve model, the platform helps drive early engagement and rapid community growth by adjusting demand-based token prices.",
      icon: "/p2.png"
    },
    {
      title: "Fan Community & Engagement",
      description: "Influencers can use real-time chats, polls, exclusive events, and airdrops to build and manage decentralized fan communities. These features foster fan engagement, increase loyalty, and strengthen connections.",
      icon: "/p3.png"
    },
    {
      title: "Verified Influencer Support",
      description: "Fans.pump offers verified influencers exclusive tools like personalized tokens, fan management systems, and enhanced visibility to help grow their brand, attract more followers, and build a trustworthy reputation.",
      icon: "/p4.png"
    },
    {
      title: "Brand & Marketing Opportunities",
      description: "Fans.pump is a hub for influencer marketing, where influencers can partner with brands to run targeted campaigns. The platform's tokenized economy helps create more precise, effective marketing campaigns.",
      icon: "/p5.png"
    }
  ];

  return (
   
      <Carousel 
        heading="Effortlessly Tokenize Your Influence with Fans.pump" 
        items={featureItems} 
      />
   
  );
} 