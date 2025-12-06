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
  const heroAnimation = useScrollAnimation(0);
  const traitsAnimation = useScrollAnimation(0);
  const storeAnimation = useScrollAnimation(0);
  const footerAnimation = useScrollAnimation(0);

  // needed for blog component
  type ArrowProps = {
    next?: () => void;
    previous?: () => void;
    onClick?: () => void;
    carouselState?: { currentSlide: number; totalItems: number; slidesToShow: number };
  };
  
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

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
        className="bg-[#0065ff] text-white py-16 md:py-30 px-4 md:px-6"
        ref={heroAnimation.ref}
        initial={heroAnimation.initial}
        animate={heroAnimation.animate}
        transition={heroAnimation.transition}
      >
        <div className="max-w-5xl text-center mx-auto flex flex-col items-center">
          <h2 className="text-6xl md:text-8xl lg:text-[96px] py-10 font-bold leading-tight">
            Security your money deserves
          </h2>
          <h2 className="max-w-2xl md:max-w-3xl text-[20px] md:text-[20px] lg:text-[20px] py-10 font-semibold leading-tight">
          Every day, people across North America, Africa, and beyond move millions through StellarPay. Thousands of new users join us each week, trusting us to power their cross-border payments. <br />
          Our promise is simple: to keep your money secure with cutting-edge technology, real-time monitoring, and support whenever you need it.
          </h2>
        </div>
      </motion.section>  

  

      <motion.div 
        className="px-10 md:px-0 py-10 md:py-20"
        ref={traitsAnimation.ref}
        initial={traitsAnimation.initial}
        animate={traitsAnimation.animate}
        transition={traitsAnimation.transition}
      >
        <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col max-w-lg md:max-w-xl md:mr-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-10">Protection Without Gaps</h2>
          <h3 className="text-xl md:text-2xl lg:text-2xl font-base">Security is at the core of everything we build. Our engineers continually strengthen our systems, leveraging advanced machine learning to keep StellarPay protected against fraud and threats.</h3>
        </div>
        <Image src="/images/lock.png" alt="apple" width={400} height={400} className="hidden md:block" />
        </div>
      </motion.div>

      <motion.div 
        className="px-10 md:px-0 py-10 md:py-10 md:mb-20"
        ref={traitsAnimation.ref}
        initial={traitsAnimation.initial}
        animate={traitsAnimation.animate}
        transition={traitsAnimation.transition}
      >
        <div className="flex flex-row items-center justify-center">
        <Image src="/images/phone.png" alt="apple" width={400} height={400} className="hidden md:block md:mr-20" />
        <div className="flex flex-col max-w-lg md:max-w-xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-10">Always on - all the time</h2>
          <h3 className="text-xl md:text-2xl lg:text-2xl font-base">Our customer support teams are always within reach — whether by phone, email, or live chat. <br />
          Available 24/7 in English, and other languages, they’re here to answer your questions, resolve issues quickly, and ensure your money always moves with confidence.</h3>
        </div>
        </div>
      </motion.div>

      <motion.div 
        className="px-10 md:px-0 py-10 md:py-10 md:mb-30"
        ref={traitsAnimation.ref}
        initial={traitsAnimation.initial}
        animate={traitsAnimation.animate}
        transition={traitsAnimation.transition}
      >
        <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-col w-[280px] md:w-auto max-w-[400px] lg:max-w-[350px] xl:max-w-[380px] md:mr-20 mb-20">
        <Image src="/images/two-step.png" alt="two-step" width={400} height={400} className="w-full h-full" />
        <div className="bg-gray-200 rounded-2xl px-14 py-12 md:mt-[-180px]" >
          <h3 className="font-bold text-2xl md:text-4xl mb-2">
          Two-step authentication
          </h3>
          <p className="font-semibold text-xl">
          Stay protected at every step — from signing up to sending money, we verify it’s really you.
          </p>
        </div>
        </div>

        <div className="flex flex-col w-[280px] md:w-auto max-w-[400px] lg:max-w-[350px] xl:max-w-[380px] md:mr-20 mb-20">
        <Image src="/images/biometrics.png" alt="two-step" width={400} height={400} className="w-full h-full" />
        <div className="bg-gray-200 rounded-2xl px-14 py-12 md:mt-[-210px]" >
          <h3 className="font-bold text-2xl md:text-4xl mb-2">
          Biometrics and ecryption
          </h3>
          <p className="font-semibold text-xl">
          Your device’s built-in tech and our advanced encryption keep your account extra secure.
          </p>
        </div>
        </div>
        <div className="flex flex-col max-w-[400px] lg:max-w-[350px] xl:max-w-[380px] mb-20">
        <Image src="/images/personalize.png" alt="two-step" width={400} height={400} className="w-full h-full mb-[20px] rounded-2xl" />
        <div className="bg-gray-200 rounded-2xl px-11 py-12 md:mt-[-260px]" >
          <h3 className="font-bold text-2xl md:text-4xl mb-2">
          Personalize your experience
          </h3>
          <p className="font-semibold text-xl">
          Take control of your privacy with hidden balances, location settings, and auto-logout features.
          </p>
        </div>
        </div>
        </div>
      </motion.div>

    


      {/* Store Badges */}
      <motion.div 
        className="bg-[#0065ff] flex flex-col items-center justify-center px-4 py-20"
        ref={storeAnimation.ref}
        initial={storeAnimation.initial}
        animate={storeAnimation.animate}
        transition={storeAnimation.transition}
      >

      <motion.div 
            className="bg-[#ffffff] flex flex-col items-center justify-center px-4 py-16 rounded-2xl w-[300px] md:w-auto max-w-5xl"
            ref={storeAnimation.ref}
            initial={storeAnimation.initial}
            animate={storeAnimation.animate}
            transition={storeAnimation.transition}
          >

            <h1 className="text-center text-2xl md:text-6xl xl:text-7xl font-bold mb-15 mx-5 md:mx-20 mt-5">Thousands of security experts protecting your money 24/7</h1>

            <p className="text-center text-xl font-semibold mx-5 md:mx-30 mb-15">We’re building the best way to move and manage the world’s money. Min fees. Max ease. Full speed. Full security.</p>

            <a href="/meet-the-team#mission" className="px-8 sm:px-12 py-3 rounded-full font-semibold bg-blue-600 text-white shadow hover:bg-blue-700 transition text-sm sm:text-base mb-20">Learn about our mission</a>
            
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