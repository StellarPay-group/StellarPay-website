"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Zap, Send, ChevronLeft, ChevronRight, Linkedin} from 'lucide-react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/lib/useScrollAnimation';
import { useState } from "react";


export default function AboutPage() {

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 1 },
    tablet:  { breakpoint: { max: 1023.98, min: 464 }, items: 2, slidesToSlide: 1 },
    mobile:  { breakpoint: { max: 463.98,  min: 0 }, items: 1, slidesToSlide: 1 }
  };

  // Animation hooks
  const navAnimation = useScrollAnimation(0);
  const heroAnimation = useScrollAnimation(0.3);
  const aboutAnimation = useScrollAnimation(0.6);
  const traitsAnimation = useScrollAnimation(0.9);
  const betterAnimation = useScrollAnimation(1.2);
  const timelineAnimation = useScrollAnimation(1.5);
  const blogAnimation = useScrollAnimation(1.8);
  const connectAnimation = useScrollAnimation(2.1);
  const storeAnimation = useScrollAnimation(2.4);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const footerAnimation = useScrollAnimation(2.7);

  // needed for blog component
  type ArrowProps = {
    next?: () => void;
    previous?: () => void;
    onClick?: () => void;
    carouselState?: { currentSlide: number; totalItems: number; slidesToShow: number };
  };
  const ButtonGroup = ({ next, previous, carouselState, ...rest }: ArrowProps) => {
    if (!carouselState) return null;
    const leftDisabled = carouselState?.currentSlide === 0;
    const rightDisabled = carouselState?.currentSlide + carouselState?.slidesToShow >= carouselState?.totalItems;
    return (
      <div className="flex justify-center gap-4 mt-0">
        <button
          onClick={previous}
          className={`text-black font-bold py-2 px-4 rounded-full transition-opacity ${
            leftDisabled ? 'opacity-40' : 'opacity-100 hover:opacity-80'
          }`}
          aria-label="Previous"
          disabled={leftDisabled}
        >
        <Image
            src="/images/leftArrow.png"
            alt="Previous"
            width={50}
            height={50}
          />
          
        </button>
        <button
          onClick={next}
          className={`text-black font-bold py-2 px-4 rounded-full transition-opacity ${
            rightDisabled ? 'opacity-40' : 'opacity-100 hover:opacity-80'
          }`}
          aria-label="Next"
          disabled={rightDisabled}
        >
        <Image
            src="/images/rightArrow.png"
            alt="Previous"
            width={50}
            height={50}
          />
        </button>
      </div>
    );
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
              <nav className="hidden lg:flex items-center space-x-2">
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
                <Button variant="ghost" className="border-[#1b6cd8] ml-3 px-2 md:px-5 py-2 hover:bg-[#f7f7f7] rounded-full text-[#1b6ce8] hover:text-[#1b6ce8] text-xs md:text-[17px] font-bold">About us</Button>
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
        className="bg-[#0065ff] flex flex-row justify-center text-white py-16 md:py-30 px-12 md:px-6"
        ref={heroAnimation.ref}
        initial={heroAnimation.initial}
        animate={heroAnimation.animate}
        transition={heroAnimation.transition}
      >
        <div className="self-center max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto flex items-center">
          <h2 className="text-3xl md:text-6xl lg:text-[75px] font-bold leading-tight py-10">
            How do I get help from StellarPay?
          </h2>
        </div>
      </motion.section>  

      {/* Getting Better Section */}
      <motion.section 
        className="bg-white flex items-center"
        ref={betterAnimation.ref}
        initial={betterAnimation.initial}
        animate={betterAnimation.animate}
        transition={betterAnimation.transition}
      >
        <div className="max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto py-12 md:py-20">
          <div className="ml-5 space-y-6 md:space-y-8">

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-[#000000] text-lg md:text-[20px] leading-relaxed font-medium mb-[30px]">The fastest way to get help is to first check our <b><u>FAQ</u></b> — most answers are already here.
              </p>
              <p className="text-[#000000] text-lg md:text-[20px] leading-relaxed font-medium mb-[30px]">Most common topics
              </p>
              <ul className="ml-5 mb-[30px] list-disc list-inside">
                    <li className="text-lg md:text-[20px]"><b><u><a href="https://www.stellarpay.app/">How long will my transfer take?</a></u></b></li>
                    <li className="text-lg md:text-[20px]"><b><u><a href="https://www.stellarpay.app/">How do I make a complaint?</a></u></b></li>
                    <li className="text-lg md:text-[20px]"><b><u><a href="https://www.stellarpay.app/">How does StellarPay verify my address?</a></u></b></li>
          </ul>
          <p className="text-[#000000] text-lg md:text-[20px] leading-relaxed font-medium mb-[30px]">If you can't find an answer, the best way to contact us is by logging in. This way, we know who you are and can give you faster, more personalized support.
          </p>
          <p className="text-[#000000] text-lg md:text-[20px] leading-relaxed font-bold">If you can log in
          </p>
          <ol className="ml-5 mb-[30px] list-decimal list-inside">
          <li className="text-lg md:text-[20px]">Click the <b>Help</b> or ? button on our website or in the app</li>
          <li className="text-lg md:text-[20px]">This takes you to our smart Help Centre. It will suggest articles that might solve your issue</li>
          <li className="text-lg md:text-[20px]">If you still need help, choose the <b>Contact us</b> option to see the best ways to get in touch, like email or chat</li>
          </ol>
          <p className="text-[#000000] text-lg md:text-[20px] leading-relaxed font-bold mb-[30px]">What if you can't log in?
          </p>
          <p className="text-[#000000] text-lg md:text-[20px] leading-relaxed font-medium">If you're having trouble logging in, you can still get in touch with us.
          </p>
          <ol className="ml-5 mb-[30px] list-decimal list-inside">
          <li className="text-lg md:text-[20px]">Go to the <u><a href="https://www.stellarpay.app/">Website</a></u></li>
          <li className="text-lg md:text-[20px]">On any article page, scroll to the bottom and click <b>Contact us</b></li>
          <li className="text-lg md:text-[20px]">We'll ask a few questions to understand your problem. This helps us get your email to the right team</li>
          </ol>
          <p className="text-[#000000] text-lg md:text-[20px] leading-relaxed font-bold mb-[30px]">Contact Us by Whatsapp
          </p>
          <p className="text-[#000000] text-lg md:text-[20px] leading-relaxed font-medium">For the best experience, we recommend logging in first. This helps us direct you to the right regional team and phone number.<br/>
If you're in the US and can't log in, you can reach out at our WhatsApp number: +1 289 541 4041.<br/>
If you're outside the US, you can talk to us by <a href="https://wise.com/help/contact/channels/phone?supportLanguage=en"><b>clicking here</b></a>.<br/>
Note that our phone lines are not open 24/7. Please be aware that your phone provider may charge you for the call.<br />
          </p>
            </motion.div> 
          </div>
        </div>
      </motion.section>
     
    
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
            <p className="text-[#ffffff] opacity-80 text-xs md:text-sm">© 2026 Stellar Technologies, inc.</p>
                </div>
          </div>
          </div>

        <div className="ml-5 sm:ml-0 mx-auto flex flex-col sm:flex-row justify-center">
          {/* Upper section with three columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12 md:gap-20 mb-12">
            {/* Company and team */}
            <div className="text-left">
              <Link href='/about'>
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
                <Link href="/contact-us" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-[16px] font-light">
                  Contact us
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
            <p className="text-[#ffffff] opacity-80 text-xs md:text-sm font-light">© 2026 Stellar Technologies, inc.</p>
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