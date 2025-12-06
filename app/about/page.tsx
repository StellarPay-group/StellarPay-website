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
        className="bg-[#0e0f0c] text-white py-16 md:py-30 px-12 md:px-6"
        ref={heroAnimation.ref}
        initial={heroAnimation.initial}
        animate={heroAnimation.animate}
        transition={heroAnimation.transition}
      >
        <div className="max-w-xl mx-auto flex items-center md:-translate-x-24">
          <h2 className="text-4xl md:text-8xl lg:text-[130px] font-bold leading-tight">
            Meet.<br />StellarPay.
          </h2>
        </div>
      </motion.section>  

      {/* About Us Section */}
      <motion.div 
        className="bg-white flex items-center px-4 md:px-8 lg:px-16 py-12 md:py-16"
        ref={aboutAnimation.ref}
        initial={aboutAnimation.initial}
        animate={aboutAnimation.animate}
        transition={aboutAnimation.transition}
      >
        <div className="max-w-[140rem] mx-auto">
          <motion.h1 
            className="font-inter text-[#000000] text-3xl md:text-4xl font-bold mb-6 md:mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            About Us
          </motion.h1>

          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-0">
            <motion.div
              className="font-inter text-[#000000] text-base md:text-xl font-semibold leading-relaxed max-w-5xl lg:pr-54"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p>Money shouldn't be this complicated.</p>
              <p>
                Whether you're sending cash abroad, balancing your family's budget, or scaling your business — we've all
                felt how broken and frustrating finances can be.
              </p>
              <p>That's exactly why we're here.</p>

              <p>
                Our goal is simple. To eliminate the friction that stands between you and your intentions with your money.
              </p>

              <p>
                Whether it's sending money, spending money, or managing money, our mission is to make faster and
                affordable transactions anywhere you are - your new reality.
              </p>
            </motion.div>

            <motion.div 
              className="flex-shrink-0 mb-6 lg:mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <a href="/meet-the-team">
              <Button className="bg-[#0065ff] hover:bg-[#0052cc] text-white px-6 md:px-8 py-4 md:py-7 rounded-full text-base md:text-xl font-medium">
                Meet the Team
              </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* 3 Traits Section */}
      <motion.div 
        className="bg-[#0065ff] py-20 md:py-36 px-4 md:px-8"
        ref={traitsAnimation.ref}
        initial={traitsAnimation.initial}
        animate={traitsAnimation.animate}
        transition={traitsAnimation.transition}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-15">
            {/* Lightning-fast Card */}
            <motion.div 
              className="bg-[#ffffff] rounded-2xl p-6 md:p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="mb-4 md:mb-6">
                <Zap className="w-6 h-6 md:w-8 md:h-8 text-[#000000]" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0e0f0c] mb-3 md:mb-4 text-left">Lightning-fast.</h3>
              <p className="text-[#433b3b] text-lg md:text-xl font-semibold leading-relaxed text-left">Transact at the speed of light</p>
            </motion.div>

            {/* Effortless Card */}
            <motion.div 
              className="bg-[#ffffff] rounded-2xl p-6 md:p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="mb-4 md:mb-6">
                <Send className="w-6 h-6 md:w-8 md:h-8 text-[#000000]" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0e0f0c] mb-3 md:mb-4 text-left">Effortless.</h3>
              <p className="text-[#433b3b] text-lg md:text-xl font-semibold leading-relaxed text-left">Send, Request or Spend Effortlessly</p>
            </motion.div>

            {/* Honest Card */}
            <motion.div 
              className="bg-[#ffffff] rounded-2xl p-6 md:p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="mb-4 md:mb-6 h-6 md:h-8">{/* Empty div to maintain alignment with other cards */}</div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0e0f0c] mb-3 md:mb-4 text-left">Honest.</h3>
              <p className="text-[#433b3b] text-lg md:text-xl font-semibold leading-relaxed text-left">
                See, Track or Monitor Money Transparently
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Getting Better Section */}
      <motion.section 
        className="bg-white flex items-center"
        ref={betterAnimation.ref}
        initial={betterAnimation.initial}
        animate={betterAnimation.animate}
        transition={betterAnimation.transition}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16 w-full">
          <div className="space-y-6 md:space-y-8">
            <motion.h1 
              className="text-[#000000] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Getting better and better
            </motion.h1>

            <motion.div 
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-[#000000] text-lg md:text-xl leading-relaxed font-semibold">
                {
                  "We're creating a platform so intuitive, so smooth, so versatile that you'll never need another financial app again."
                }
              </p>
              <p className="text-[#000000] text-lg md:text-xl leading-relaxed font-semibold mt-4">
                {
                  "How? by doing what we do best: consistently building faster, superior, smarter solutions all while making every transfer cheaper than the last to reach our goal of driving costs toward zero."
                }
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.div 
        className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16"
        ref={timelineAnimation.ref}
        initial={timelineAnimation.initial}
        animate={timelineAnimation.animate}
        transition={timelineAnimation.transition}
      >
        {/* Header */}
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-[#000000] mb-12 md:mb-16 text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          What we've done so far
        </motion.h2>
        {/* Timeline Cards Container */}
        <div className="relative">
            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 md:-translate-x-16 z-10 h-8 w-8 md:h-12 md:w-12 rounded-full bg-white shadow-md hover:bg-gray-50"
            >
              <ChevronLeft className="h-4 w-4 md:h-6 md:w-6 text-[#000000]" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 md:translate-x-16 z-10 h-8 w-8 md:h-12 md:w-12 rounded-full bg-white shadow-md hover:bg-gray-50"
            >
              <ChevronRight className="h-4 w-4 md:h-6 md:w-6 text-[#000000]" />
            </Button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Card 1 - June 2024 */}
            <motion.div 
              className="bg-white rounded-2xl shadow-sm border border-[#d9d9d9] overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-[#0065ff] h-64 md:h-96 flex items-center justify-center">
                <span className="text-white text-4xl md:text-6xl font-bold">2024</span>
              </div>
              <div className="px-6 md:px-12 py-6 md:py-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#000000] mb-2">June 2024</h3>
                <p className="text-[#000000] text-lg md:text-2xl leading-[1.05]">
                  Survey website reaches 70k signups validating our idea
                </p>
              </div>
            </motion.div>

            {/* Card 2 - August 2024 */}
            <motion.div 
              className="bg-white rounded-2xl shadow-sm border border-[#d9d9d9] overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="bg-[#005b13] h-64 md:h-96 flex items-center justify-center">
                <span className="text-white text-4xl md:text-6xl font-bold">2024</span>
              </div>
              <div className="px-6 md:px-12 py-6 md:py-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#000000] mb-2">August 2024</h3>
                <p className="text-[#000000] text-lg md:text-2xl leading-[1.05]">
                  Our founders Christian Atangana and Hamza Hussain begin building
                </p>
              </div>
            </motion.div>

            {/* Card 3 - July 2025 */}
            <motion.div 
              className="bg-white rounded-2xl shadow-sm border border-[#d9d9d9] overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="bg-[#9747ff] h-64 md:h-96 flex items-center justify-center">
                <span className="text-white text-4xl md:text-6xl font-bold">2025</span>
              </div>
              <div className="px-6 md:px-12 py-6 md:py-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#000000] mb-2">July 2025</h3>
                <p className="text-[#000000] text-lg md:text-2xl leading-[1.05]">Launch of StellarPay & George</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Blog Section */}
      <motion.div 
        className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16"
        ref={blogAnimation.ref}
        initial={blogAnimation.initial}
        animate={blogAnimation.animate}
        transition={blogAnimation.transition}
      >
        {/* Header */}
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-[#000000] mb-12 md:mb-16 text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          StellarPay Articles
        </motion.h2>
        {/* Blog Cards Container */}
        <div className="relative ml-[-20]">
            <Carousel
            showDots={false}
            responsive={responsive}
            ssr={false} 
            infinite={false}
            autoPlay={false}
            containerClass="w-full max-w-[1000px] lg:max-w-[1300px] mx-auto"
            dotListClass="mt-8"
            itemClass="px-2 md:px-4"  
            customButtonGroup={<ButtonGroup />}
            renderButtonGroupOutside={true}
            arrows={false}
          >
            <a href="https://substack.com/inbox/post/171660194?r=95wx4&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false&triedRedirect=true">
              <div className="relative w-[300px] md:w-[400px] h-[450px] md:h-[600px] overflow-hidden rounded-lg">
            <div className="bg-white rounded-2xl shadow-sm border border-[#d9d9d9] overflow-hidden">
              <div className="bg-[#0065ff] h-64 md:h-96 flex items-center justify-center">
              <Image src="/images/genius-act-article-cover.png" alt="" width={400} height={400} className="w-full h-full object-cover" />
              </div>
              <div className="px-6 md:px-12 py-6 md:py-8 h-40 md:h-48">
                <h3 className="text-xl md:text-2xl font-bold text-[#000000] mb-2">August 2025</h3>
                <p className="text-[#000000] text-lg md:text-2xl leading-[1.05]">
                One Big Beautiful Bill and the GENIUS Act: A New Era for Cross-Border Payments
                </p>
              </div>
            </div>
              </div>
              </a>

            <a href="https://www.flagright.com/post/stellarpay-chooses-flagright-for-transaction-monitoring-aml-screening">
            <div className="relative w-[300px] md:w-[400px] h-[450px] md:h-[600px] overflow-hidden rounded-lg">
            <div className="bg-white rounded-2xl shadow-sm border border-[#d9d9d9] overflow-hidden">
              <div className="bg-[#0065ff] h-64 md:h-96 flex items-center justify-center">
              <Image src="/images/flagright-square.png" alt="" width={400} height={400} className="w-full h-full object-cover" />
              </div>
              <div className="px-6 md:px-12 py-6 md:py-8 h-40 md:h-48">
                <h3 className="text-xl md:text-2xl font-bold text-[#000000] mb-2">July 2025</h3>
                <p className="text-[#000000] text-lg md:text-2xl leading-[1.05]">
                StellarPay announces partnership with Flagright
                </p>
              </div>
            </div>
              </div>
              </a>
              
              <a href="https://substack.com/@catangana/p-161829302">
              <div className="relative w-[300px] md:w-[400px] h-[450px] md:h-[600px] overflow-hidden rounded-lg">
            <div className="bg-white rounded-2xl shadow-sm border border-[#d9d9d9] overflow-hidden">
              <div className="bg-[#0065ff] h-64 md:h-96 flex items-center justify-center">
              <Image src="/images/reflections-square.png" alt="" width={400} height={400} className="w-full h-full object-cover" />
              </div>
              <div className="px-6 md:px-12 py-6 md:py-8 h-40 md:h-48">
                <h3 className="text-xl md:text-2xl font-bold text-[#000000] mb-2">April 2025</h3>
                <p className="text-[#000000] text-lg md:text-2xl leading-[1.05]">
                StellarPay: Reflections as we near launch
                </p>
              </div>
            </div>
              </div>
              </a>

              <a href="https://substack.com/home/post/p-152662510">
              <div className="relative w-[300px] md:w-[400px] h-[450px] md:h-[600px] overflow-hidden rounded-lg">
            <div className="bg-white rounded-2xl shadow-sm border border-[#d9d9d9] overflow-hidden">
              <div className="bg-[#0065ff] h-64 md:h-96 flex items-center justify-center">
              <Image src="/images/financial-innovation-square.png" alt="" width={400} height={400} className="w-full h-full object-cover" />
              </div>
              <div className="px-6 md:px-12 py-6 md:py-8 h-40 md:h-48">
                <h3 className="text-xl md:text-2xl font-bold text-[#000000] mb-2">Dec 2024</h3>
                <p className="text-[#000000] text-lg md:text-2xl leading-[1.05]">
                Rethinking Financial Innovation for the African Continent
                </p>
              </div>
            </div>
              </div>
              </a>

          </Carousel>
      </div>
      </motion.div>

      <motion.section 
        className="bg-white flex items-center mb-12 md:mb-20"
        ref={connectAnimation.ref}
        initial={connectAnimation.initial}
        animate={connectAnimation.animate}
        transition={connectAnimation.transition}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16 w-full items-center justify-center">
          <div className="space-y-6 md:space-y-8">
            <motion.h1 
              className="text-[#000000] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Connecting the world through finance
            </motion.h1>
          </div>
          <motion.div 
            className="mt-8 md:mt-10 flex items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/news">
              <Button className="bg-[#1877f2] hover:bg-[#0052cc] text-white px-6 md:px-10 py-3 md:py-7 rounded-[4px] text-lg md:text-xl font-medium">
                News & media
              </Button>
              </Link>
          </motion.div>
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