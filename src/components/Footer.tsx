'use client';

import Image from 'next/image';
import Link from 'next/link';


export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/hd.png"
                alt="Fans.pump Logo"
                width={140}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-6 mb-8 md:mb-0">
          <Link 
              href="https://x.com/Fans_pump_" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Image src="/twitter.svg" alt="Twitter" width={20} height={20} />
            </Link>
            <Link 
              href="https://t.me/Fans_pump_Official" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Image src="/telegram.svg" alt="Telegram" width={20} height={20} />
            </Link>
            <Link 
              href=""
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Image src="/dextools.svg" alt="Dextools" width={20} height={20} />
            </Link>
            <Link 
              href=""
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Image src="/dex-screener.svg" alt="Dexscreener" width={20} height={20} />
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Fans.pump. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
} 