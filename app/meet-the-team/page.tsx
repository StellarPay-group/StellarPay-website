"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Zap, Send, ChevronLeft, ChevronRight, Linkedin} from 'lucide-react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/lib/useScrollAnimation';
import { ExpandCard } from "@/components/ui/expandCard";
import { useState } from "react";

export default function MeetTheTeam() {

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 1 },
    tablet:  { breakpoint: { max: 1023.98, min: 464 }, items: 2, slidesToSlide: 1 },
    mobile:  { breakpoint: { max: 463.98,  min: 0 }, items: 1, slidesToSlide: 1 }
  };

  // Animation hooks
  const navAnimation = useScrollAnimation(0);
  const heroAnimation = useScrollAnimation(0.1);
  const traitsAnimation = useScrollAnimation(0.2);
  const betterAnimation = useScrollAnimation(0.3);
  const storeAnimation = useScrollAnimation(0.5);
  const footerAnimation = useScrollAnimation(0.5);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const [open, setOpen] = useState(1);

  // needed for blog component
  type ArrowProps = {
    next?: () => void;
    previous?: () => void;
    onClick?: () => void;
    carouselState?: { currentSlide: number; totalItems: number; slidesToShow: number };
  };
  

  return (
    <main>

      {/* Navigation/Header */}
      <motion.section 
        className="w-full bg-[#ffffff]" 
        role="banner" 
        aria-label="Main navigation"
        ref={navAnimation.ref}
        initial={navAnimation.initial}
        animate={navAnimation.animate}
        transition={navAnimation.transition}
      >
<div className="px-4 py-4">
          <div className="md:mt-1 flex items-center justify-between max-w-7xl mx-auto">
            {/* Left side - Logo and navigation */}
            <div onMouseLeave={() => setShowDropdown(false)} className="flex items-center space-x-2 md:space-x-6">
              <Link href="/">
                <Button variant="ghost" className="hover:bg-[#fbfbfb] text-xl md:text-[30px] mb-1 font-bold text-[#191c1f]">StellarPay</Button>
              </Link>
              <nav className="hidden md:flex items-center space-x-2">
              <div>
              <Button onMouseEnter={() => setShowDropdown(true)} variant="ghost" className="flex flex-row hover:bg-[#f7f7f7] rounded-full px-4 md:pl-5 md:pr-4 py-2 mb-[1px]">
                <h1 className='text-[#000000] hover:text-[#000000] text-xs md:text-[17px] font-semibold'>
                  Personal
                </h1>
                <div><Image src="/images/chevron-down.png" alt='v' className='mt-[1px]' width={11} height={5} /></div>
              </Button>
              {showDropdown && (
        <div className="flex justify-center absolute mt-0 w-32 bg-white shadow-lg border py-2 border-gray-200 rounded-lg z-50">
              <Link href="/features">
                <Button variant="ghost" className="text-start text-[#000000] hover:bg-[#f7f7f7] rounded-full px-4 md:px-3 py-2 text-xs md:text-[17px] font-medium font-semibold">Features</Button>
              </Link>
        </div>
      )}
              </div>
              <Link href="/linq">
                <Button variant="ghost" className="px-2 md:px-4 py-2 hover:bg-[#f7f7f7] rounded-full text-[#000000] hover:text-[#000000] mt-[1px] text-xs md:text-[17px] font-semibold">API</Button>
              </Link>
                <Link href="https://www.meetgeorge.app/">
                <Button variant="ghost" className="px-2 md:px-4 py-2 hover:bg-[#f7f7f7] rounded-full text-[#000000] hover:text-[#000000] text-xs md:text-[17px] font-semibold">George</Button>
                </Link>

              </nav>
            </div>

            {/* Right side - About us, language, auth */}
            <div onMouseLeave={() => setShowLanguageDropdown(false)} className="flex items-center space-x-2 md:space-x-2">
              <Link href="\about" className="hidden sm:block">
                <Button variant="ghost" className="border-[#1b6cd8] ml-3 px-2 md:px-5 py-2 hover:bg-[#f7f7f7] rounded-full text-[#000000] hover:text-[#000000] text-xs md:text-[17px] font-semibold">About us</Button>
              </Link>
              <div className="hidden md:flex items-center">
              <div>
              <Button onMouseEnter={() => setShowLanguageDropdown(true)} variant="ghost" className="flex flex-row hover:bg-[#f7f7f7] rounded-full px-4 md:pl-4 md:pr-4 py-2 ">
              <Image src="/images/us-flag.png" alt='EN' width={25} height={25} />
                <h1 className='text-[#000000] hover:text-[#000000] text-xs md:text-[17px] font-semibold'>
                  EN
                </h1>
                <div><Image src="/images/chevron-down.png" alt='v' className='mt-[1px]' width={11} height={5} /></div>
              </Button>
              {showLanguageDropdown && (
        <div className="mt-0 flex justify-center absolute mt-0 w-28 bg-white border py-2 border-gray-200 rounded-lg z-50">
                <Button onClick={() => setShowLanguageDropdown(false)} variant="ghost" className="flex items-center text-start text-[#000000] hover:bg-[#ffffff] rounded-full px-4 md:px-3 py-1 text-xs md:text-[17px] font-medium font-semibold">
                <Image src="/images/us-flag.png" alt='EN' width={25} height={25} />
                <h1 className='mr-2 text-[#000000] hover:text-[#000000] text-xs md:text-[17px] font-semibold'>
                  EN
                </h1>
                </Button>
        </div>
      )}
                  </div>
              </div>
              <Link href="/signin">
                <Button variant="ghost" className="px-2 md:px-4 py-2 hover:bg-[#f7f7f7] rounded-full text-[#000000] hover:text-[#000000] text-xs md:text-[17px] font-semibold">Log in</Button>
              </Link>
              <Link href="/signup">
                <Button variant="default" className="ml-2 bg-[#0065ff] hover:bg-[#0065ff]/90 text-white rounded-full px-3 md:px-6 py-2 text-xs md:text-[17px] font-semibold">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>


      {/* Hero Section */}
      <motion.section 
        className="bg-[#0065ff] text-white py-16 md:py-30 px-8 md:px-6"
        ref={heroAnimation.ref}
        initial={heroAnimation.initial}
        animate={heroAnimation.animate}
        transition={heroAnimation.transition}
      >
        <div className="max-w-2xl mx-auto flex items-center">
          <h2 className="text-6xl md:text-8xl lg:text-[130px] py-20 font-bold leading-tight">
            The team
          </h2>
        </div>
      </motion.section>  

  

      <motion.div 
        className="py-20 md:py-36 px-4 md:px-8"
        ref={traitsAnimation.ref}
        initial={traitsAnimation.initial}
        animate={traitsAnimation.animate}
        transition={traitsAnimation.transition}
      >
        <div className="max-w-7xl mx-auto border px-8 md:px-10 py-10 rounded-2xl shadow-xl border-gray-200">
        <motion.h1 
              className="text-[#000000] text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-2 font-semibold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Meet Our Team
            </motion.h1>
          <motion.h2
            className="text-gray-500 max-w-4xl text-base md:text-lg lg:text-xl xl:text-xl mb-10 font-semibold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Our team brings experience from global fintech, banking, technology, and driving innovation to make money move seamlessly worldwide. Stay tuned for more announcements.
          </motion.h2>
          <motion.div
  className="flex flex-col md:flex-row gap-8"
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
>
    <ExpandCard
      name="Christan Atangana"
      position="CEO AND CO-FOUNDER, STELLARPAY"
      defaultOpen={open === 1}
      onOpen={() => {if (open === 1) {
        setOpen(0); 
      } else {
        setOpen(1)
      }
    }}
    />

    <ExpandCard
      name="Hamza Hussain"
      position="CEO AND CO-FOUNDER, STELLARPAY"
      defaultOpen={open === 2}
      onOpen={() => {if (open === 2) {
        setOpen(0); 
      } else {
        setOpen(2)
      }
    }}
    />

    <ExpandCard name="Arkel Monghomaya" position="HEAD ENGINEER"
          defaultOpen={open === 3}
          onOpen={() => {if (open === 3) {
            setOpen(0); 
          } else {
            setOpen(3)
          }
        }}
    />

    <ExpandCard name="Tommy Ruggles" position="HEAD OF OPERATIONS"
          defaultOpen={open === 4}
          onOpen={() => {if (open === 4) {
            setOpen(0); 
          } else {
            setOpen(4)
          }
        }}
           />
</motion.div>
        </div>
      </motion.div>

      {/* Getting Better Section */}
      <motion.section 
        id="mission"
        className="bg-white flex items-center"
        ref={betterAnimation.ref}
        initial={betterAnimation.initial}
        animate={betterAnimation.animate}
        transition={betterAnimation.transition}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-10 w-full">
          <div className="space-y-6 md:space-y-8">
            <motion.h1 
              className="text-[#000000] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Our Mission
            </motion.h1>

            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
                <p className="text-[#6c6c6c] text-lg md:text-xl leading-relaxed font-semibold mt-10 mb-8">
                {
                  "We’re here to empower people and businesses everywhere to move money freely across the world — instantly, securely, and right from their fingertips."
                }
              </p>
              <p className="text-[#6c6c6c] text-lg md:text-xl leading-relaxed font-semibold mb-8">
                {
                  "The world is changing fast. From Lagos to Hong Kong, Nairobi to Toronto, modern entrepreneurs, workers, and global families are more connected than ever before. They’re building across borders, moving capital, and fueling economies in ways traditional financial systems were never built to support."
                }
              </p>
              <p className="text-[#6c6c6c] text-lg md:text-xl leading-relaxed font-semibold mb-8">
                {
                  "Yet while the way we live, work, and trade has accelerated, most financial providers have remained the same — slow, fragmented, and exclusionary. Traditional systems weren’t designed for the next billion users or for businesses that operate across continents."
                }
              </p>
              <p className="text-[#6c6c6c] text-lg md:text-xl leading-relaxed font-semibold mb-8">
                {
                  "That’s where StellarPay comes in. We’re creating the first truly global financial platform — one that unifies fiat, crypto, and stablecoins in seamless, intuitive ways — giving individuals, families, teams, and enterprises the tools they need to move money faster and grow with confidence."
                }
              </p>
              <p className="text-[#6c6c6c] text-lg md:text-xl leading-relaxed font-semibold mb-30">
                {
                  "As the world builds the future, StellarPay will provide the rails, the wallets, and the artificial intelligence to power it — helping people everywhere send, spend, and transact without borders."
                }
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>


      {/* Store Badges */}
      <motion.div 
        className="bg-[#0065ff] flex flex-col items-center justify-center px-4 py-16 md:py-50"
        ref={storeAnimation.ref}
        initial={storeAnimation.initial}
        animate={storeAnimation.animate}
        transition={storeAnimation.transition}
      >
        <div className="text-center space-y-6 md:space-y-8 max-w-4xl mx-auto">
          {/* Main heading */}
          <motion.h1 
            className="text-[#fffffe] text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            StellarPay
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-[#fffffe] text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A new way to money
          </motion.p>
        </div>
        <motion.div 
          className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 md:mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <a href="https://apps.apple.com/ca/app/george/id6743195041">
        <Image src="/images/appleStore.png" alt="apple" width={175} height={90} className="w-[140px] sm:w-[175px] h-auto" />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.stellar.stellarai.app">
        <Image src="/images/googleStore.png" alt="google" width={193} height={95} className="w-[154px] sm:w-[193px] h-auto" />
        </a>
        </motion.div>
      </motion.div>
     
     
      

    
  {/* Footer */}
  <footer 
        className="bg-[#000000] text-[#ffffff] px-4 md:px-6 py-16"
      >

        <div className="ml-5 block sm:hidden max-w-[80%] text-center space-y-3 md:space-y-4 mb-10">
          <div className="grid grid-cols-1 ">
            <div className="lg:col-span-1 text-left">
              <div className="flex flex-row">
              <div className="text-[#ffffff] text-2xl md:text-3xl font-bold mb-[25px]">StellarPay</div>
              <div className="flex flex-row ml-5 mt-[2px]">
                <div className="flex justify-start space-x-[1px]">
                <Link href="https://www.facebook.com/Stellarpaymain" className="text-[#000000] hover:text-[#0065ff]">
                  <Image src="/images/fac-dark.png" alt='f' width={20} height={20} className="w-5 h-5 md:w-6 md:h-6 mt-[2px] mr-[2px]" />
                </Link>
                <Link href="https://x.com/JoinStellarPay" className="text-[#000000] hover:text-[#0065ff]">
                  <Image src="/images/x-dark.png" alt='t' width={20} height={20} className="w-6 h-6 md:w-7 md:h-7 mt-[3px] mr-[1px]" />
                </Link>
                <Link href="https://www.instagram.com/stellarpayapp" className="text-[#000000] hover:text-[#0065ff] mt-[1px]">
                  <Image src="/images/ins-dark.png" alt='instagram' width={20} height={20} className="w-7 h-7 md:w-8 md:h-8" />
                </Link>
                <Link href="https://www.linkedin.com/company/stellarpaytoday" className="text-[#000000] hover:text-[#0065ff]">
                  <Image src="/images/lin-dark.png" alt='linkedin' width={20} height={20} className="w-7 h-7 md:w-8 md:h-8" />
                </Link>
              </div>
              </div>
              </div>
              <p className="text-[#ffffff] max-w-4xl mx-auto text-xs md:text-sm mb-[18px]">
              StellarPay is a Money Service Business authorized to operate in{" "}
              <Link href="/privacy-policy#us-state-privacy-rights" className="underline hover:no-underline">
                most states
              </Link>
              .
            </p>
            <p className="text-[#ffffff] opacity-80 text-xs md:text-sm">© 2025 Stellar Technologies, inc.</p>
                </div>
          </div>
          </div>

        <div className="ml-5 sm:ml-0 mx-auto flex flex-col sm:flex-row justify-center">
          {/* Upper section with three columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12 md:gap-20 mb-12">
            {/* Company and team */}
            <div className="text-left">
              <Link href='#'>
              <h3 className="font-bold mb-3 md:mb-4 text-[#ffffff] text-sm md:text-[17px]">Company</h3>
              </Link>
              <div className="space-y-1 md:space-y-4">
                <Link href="/meet-the-team" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-[16px] font-light">
                  Company and team
                </Link>
                <Link href="#" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-[16px] font-light">
                  Pricing
                </Link>
                <Link href="#" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-[16px] font-light">
                  Service Status
                </Link>
                <Link href="/news" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-[16px] font-light">
                  News & Updates
                </Link>
                <div className="hidden lg:block flex flex-col mt-20">
                <p className="block text-[#ffffff] no-underline text-xs md:text-sm mb-[3px] ml-[7px]">
                  Follow us
                </p>
                <div className="flex flex-row">
                <div className="flex justify-start space-x-[1px]">
                <Link href="https://www.facebook.com/Stellarpaymain" className="text-[#000000] hover:text-[#0065ff]">
                  <Image src="/images/fac-dark.png" alt='f' width={20} height={20} className="w-5 h-5 md:w-6 md:h-6 mt-[2px] mr-[2px]" />
                </Link>
                <Link href="https://x.com/JoinStellarPay" className="text-[#000000] hover:text-[#0065ff]">
                  <Image src="/images/x-dark.png" alt='t' width={20} height={20} className="w-6 h-6 md:w-7 md:h-7 mt-[3px] mr-[1px]" />
                </Link>
                <Link href="https://www.instagram.com/stellarpayapp" className="text-[#000000] hover:text-[#0065ff] mt-[1px]">
                  <Image src="/images/ins-dark.png" alt='instagram' width={20} height={20} className="w-6 h-6 md:w-8 md:h-8" />
                </Link>
                <Link href="https://www.linkedin.com/company/stellarpaytoday" className="text-[#000000] hover:text-[#0065ff]">
                  <Image src="/images/lin-dark.png" alt='linkedin' width={20} height={20} className="w-6 h-6 md:w-8 md:h-8" />
                </Link>
              </div>
                </div>
                </div>
              </div>
            </div>

            {/* Stellar Products */}
            <div className="text-left">
              <Link href='http://www.meetgeorge.app/products'>
            <h3 className="font-bold mb-3 md:mb-4 text-sm md:text-[17px] text-[#ffffff] md:text-base">Products</h3>
            </Link>
              <div className="space-y-1 md:space-y-4">
                <Link href="#" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-[16px] font-light">
                  StellarPay
                </Link>
                <Link href="/linq" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-[16px] font-light">
                  Stellar for Business
                </Link>
                <Link href="http://www.meetgeorge.app" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-[16px] font-light">
                  George
                </Link>
                <Link href="/linq" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-[16px] font-light">
                  APi
                </Link>
              </div>
            </div>

                        {/* Stellar Products */}
                        <div className="text-left">
                          <Link href='/privacy-policy'>
            <h3 className="text-[#ffffff] font-bold mb-3 md:mb-4 text-sm md:text-[17px]">Policies</h3>
            </Link>
              <div className="space-y-1 md:space-y-4">
                <Link href="/privacy-policy#your-rights" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-[16px] font-light">
                  Legal
                </Link>
                <Link href="/privacy-policy#contact-us" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-[16px] font-light">
                  Complaints
                </Link>
                <Link href="/privacy-policy" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-[16px] font-light">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-[16px] font-light">
                  Terms & Conditions
                </Link>
                <Link href="/privacy-policy#cookies-and-tracking-technologies" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-[16px] font-light">
                  Cookie Policy
                </Link>
              </div>
            </div>


          </div>


          {/* Bottom section */}
          <div className="hidden sm:block ml-[80px] md:ml-[150px] max-w-[22%] text-center space-y-3 md:space-y-4">
          <div className="grid grid-cols-1 ">
            {/* StellarPay logo */}
            <div className="lg:col-span-1 text-left">
              <div className="text-[#ffffff] text-2xl md:text-3xl font-bold mb-[25px]">StellarPay</div>
              <p className="text-[#ffffff] max-w-4xl mx-auto text-xs md:text-sm mb-[18px]">
              StellarPay is a Money Service Business authorized to operate in{" "}
              <Link href="/privacy-policy#us-state-privacy-rights" className="underline hover:no-underline">
                most states
              </Link>
              .
            </p>
            <p className="text-[#ffffff] opacity-80 text-xs md:text-sm font-light">© 2025 Stellar Technologies, inc.</p>
            </div>
            <div className="hidden sm:block lg:hidden flex flex-col mt-20">
                <p className="text-left block text-[#ffffff] no-underline text-xs md:text-sm mb-[3px] mx-[7px]">
                  Follow us
                </p>
                <div className="flex flex-row">
                <div className="flex justify-start space-x-[1px]">
                <Link href="https://www.facebook.com/Stellarpaymain" className="text-[#000000] hover:text-[#0065ff]">
                  <Image src="/images/fac-dark.png" alt='f' width={20} height={20} className="w-5 h-5 md:w-6 md:h-6 mt-[2px] mr-[2px]" />
                </Link>
                <Link href="https://x.com/JoinStellarPay" className="text-[#000000] hover:text-[#0065ff]">
                  <Image src="/images/x-dark.png" alt='t' width={20} height={20} className="w-6 h-6 md:w-7 md:h-7 mt-[3px] mr-[1px]" />
                </Link>
                <Link href="https://www.instagram.com/stellarpayapp" className="text-[#000000] hover:text-[#0065ff] mt-[1px]">
                  <Image src="/images/ins-dark.png" alt='instagram' width={20} height={20} className="w-6 h-6 md:w-8 md:h-8" />
                </Link>
                <Link href="https://www.linkedin.com/company/stellarpaytoday" className="text-[#000000] hover:text-[#0065ff]">
                  <Image src="/images/lin-dark.png" alt='linkedin' width={20} height={20} className="w-6 h-6 md:w-8 md:h-8" />
                </Link>
              </div>
                </div>
                </div>
          </div>
          </div>
        </div>
      </footer>

    </main>
  );
} 