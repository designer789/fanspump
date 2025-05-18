"use client";

import Text from './typography/Text';
import Image from 'next/image';

export default function Tokenomics() {
  const utilities = [
    {
      title: "Token Purchase",
      description: "Fans can buy $FANS Tokens to access exclusive content, participate in events, and trade tokens on the platform."
    },
    {
      title: "Revenue Generation",
      description: "Influencers can issue their tokens to generate revenue, allowing fans to buy tokens to support them and gain access to personalized content."
    },
    {
      title: "Governance & Voting",
      description: "Token holders can vote on key decisions related to platform development, content, and future features, giving them a voice in the community."
    },
    {
      title: "Rewards & Incentives",
      description: "Fans earn tokens through active participation in the community, such as participating in events, voting, or creating content."
    },
    {
      title: "Exclusive Events & Content",
      description: "Holders can access exclusive events or content that are only available to token owners, creating a VIP experience for loyal fans."
    }
  ];

  const allocation = [
    { name: "Fans Public Engagement", percentage: "70%" },
    { name: "Platform Development Fund", percentage: "10%" },
    { name: "Team & Advisors", percentage: "5%" },
    { name: "Marketing & Brand Promotion", percentage: "5%" },
    { name: "Community & Reward Pool", percentage: "10%" }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative">
            <Text 
              variant="heading" 
              as="h2" 
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-left mb-8"
            >
              <span className="text-[#0F172A]">TOKENOMICS</span>
            </Text>
            <div>
              <Text variant="heading" as="h3" className="text-3xl font-bold mb-2">
                <span className="text-[#0F172A]">TOKEN NAME: </span>
                <span className="text-[#2563EB]">$FANS TOKEN</span>
              </Text>
              <Text variant="heading" as="h3" className="text-3xl font-bold">
                <span className="text-[#0F172A]">TOTAL SUPPLY: </span>
                <span className="text-[#2563EB]">1,000,000,000 $FANS TOKENS</span>
              </Text>
            </div>
            <div className="relative w-full h-[400px] lg:h-[500px]" >
              <Image
                src="/p9.png"
                alt="Tokenomics Illustration"
                fill
                className="object-contain -mr-[100px]"
                priority
              />
            </div>
          </div>

          <div className="space-y-4">
            

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Text variant="heading" as="h3" className="text-2xl font-bold mb-4 text-[#0F172A] -mr-[100px]">
                UTILITY OF TOKENS
              </Text>
              <ul className="list-disc pl-5 space-y-4">
                {utilities.map((utility, index) => (
                  <li key={index} className="text-[#334155]">
                    <Text variant="body">
                      <span className="font-bold text-[#0F172A]">{utility.title}: </span>
                      {utility.description}
                    </Text>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Text variant="heading" as="h3" className="text-2xl font-bold mb-4 text-[#0F172A]">
                TOKEN ALLOCATION
              </Text>
              <div className="space-y-3">
                {allocation.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <Text variant="body" className="text-[#334155] font-medium">
                      {item.name}
                    </Text>
                    <Text variant="body" className="text-[#2563EB] font-bold">
                      {item.percentage}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 