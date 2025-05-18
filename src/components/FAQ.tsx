'use client';

import { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What is Fans.pump?',
    answer: 'Fans.pump is a platform where influencers can issue their tokens to engage with fans, create personalized content, and drive community growth. Fans participate by buying tokens, accessing exclusive content, voting on key decisions, and earning rewards.',
  },
  {
    question: 'How do influencers use Fans.pump?',
    answer: 'Influencers can create custom tokens, launch them on the platform, and engage with their fans through interactive features like live chats, polls, airdrops, and exclusive events. They can also generate revenue by issuing tokens that fans can buy for access to content and governance.',
  },
  {
    question: 'How can fans participate?',
    answer: 'Fans can buy Fans Tokens to access exclusive content, participate in community events, and vote on platform decisions. They can also earn tokens by actively engaging with the community, creating content, or participating in events.',
  },
  {
    question: 'How is the token price determined?',
    answer: 'Fans.pump uses the Pumpfun Curve Pricing Model. Initially, tokens are priced low to attract early adopters. The price gradually rises as demand increases, creating a fair and liquid market while rewarding early participants.',
  },
  {
    question: 'What are the benefits of holding Fans Tokens?',
    answer: 'Holders gain access to exclusive content, special events, and the ability to vote on community decisions. They can also earn rewards for active participation, creating a more engaging experience for fans.',
  },
  {
    question: 'Can influencers earn revenue through Fans.pump?',
    answer: 'Yes, influencers can generate revenue by issuing their tokens. Fans can buy tokens to support influencers and unlock exclusive content, creating a new revenue stream beyond traditional ads and sponsorships.',
  },
  {
    question: 'How are influencers verified on the platform?',
    answer: 'Influencers are verified using blockchain technology, ensuring authenticity and building trust within the community. Only verified influencers have access to exclusive tools and promotional opportunities.',
  },
  {
    question: 'How does the platform handle governance?',
    answer: 'Fans who hold tokens can participate in governance by voting on platform features, content direction, and community initiatives. This decentralized approach ensures that the platform evolves based on community input.',
  },
  {
    question: 'What is the total supply of $FANS Tokens?',
    answer: 'The total supply of $FANS Tokens is 1,000,000,000. Tokens are distributed across influencers, fans, development, marketing, and rewards, ensuring a balanced ecosystem.',
  },
  {
    question: 'How can influencers collaborate with brands on Fans.pump?',
    answer: 'Influencers can partner with brands to run tokenized marketing campaigns. Fans can directly participate in these campaigns by purchasing tokens, creating a more organic and loyal relationship between the influencer, their fans, and the brand.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-left mb-8">FAQ</h2>
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-8 py-4 text-left flex items-center justify-between focus:outline-none"
                onClick={() => toggleQuestion(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-3xl font-bold leading-tight text-primary uppercase">
                  {`${index + 1}. ${item.question}`}
                </h3>
                <span className="ml-4 flex-shrink-0">
                  {openIndex === index ? (
                    <MinusIcon className="h-6 w-6 text-primary" />
                  ) : (
                    <PlusIcon className="h-6 w-6 text-primary" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 text-lg">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 