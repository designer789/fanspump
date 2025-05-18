'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Text from './typography/Text';

interface RoadmapPhase {
  title: string;
  items: string[];
}

const roadmapData: RoadmapPhase[] = [
  {
    title: 'Phase 1: Platform Launch & Token Issuance',
    items: [
      'Launch Fans.pump platform.',
      'Allow influencers to issue and customize their tokens.',
      'Implement Pumpfun Curve Pricing for token sales.',
      'Onboard verified influencers and early community members.',
      'Start promotional campaigns to attract early adopters.',
    ],
  },
  {
    title: 'Phase 2: Community Expansion & Engagement',
    items: [
      'Expand the influencer and fan community.',
      'Host community events, airdrops, and interactive activities.',
      'Introduce fan voting and token governance features.',
      'Collaborate with brands for targeted marketing campaigns.',
      'Improve platform features based on early user feedback.',
    ],
  },
  {
    title: 'Phase 3: Tokenization & Brand Partnerships',
    items: [
      'Allow influencers to launch tokenized brand collaborations.',
      'Enable more complex fan interactions, such as staking and rewards.',
      'Partner with external platforms and ecosystems to increase token liquidity.',
      'Introduce advanced analytics and insights for influencers to manage their communities.',
      'Scale the platform internationally, introducing additional language support.',
    ],
  },
  {
    title: 'Phase 4: Ecosystem Growth & Sustainability',
    items: [
      'Fully decentralized governance and operations.',
      'Expand token utility to real-world applications, including merchandise and events.',
      'Integrate cross-chain capabilities to broaden token usage.',
      'Strengthen influencer verification and trust processes.',
      'Introduce decentralized finance (DeFi) features for staking and liquidity farming.',
    ],
  },
];

export default function Roadmap() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-secondary rounded-2xl p-6 sm:p-8 lg:p-12">
          <Text 
            variant="heading" 
            as="h2" 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight uppercase text-left mb-6 sm:mb-8"
          >
            Roadmap
          </Text>
          
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {roadmapData.map((phase, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4 first:pl-0"
                >
                  <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 h-full border border-gray-100">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight uppercase mb-4 sm:mb-6">
                      {phase.title}
                    </h3>
                    <ul className="space-y-2 sm:space-y-3">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 mt-2 mr-2 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center sm:justify-end mt-6 sm:mt-8 space-x-4">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className={`bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200 ${
                !canScrollPrev ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              aria-label="Previous slide"
            >
              <ChevronLeftIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900" />
            </button>
            
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className={`bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200 ${
                !canScrollNext ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              aria-label="Next slide"
            >
              <ChevronRightIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 