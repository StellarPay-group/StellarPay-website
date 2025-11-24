"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Zap, Send, ChevronLeft, ChevronRight, Linkedin} from 'lucide-react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AnimatePresence, motion } from 'framer-motion';
import { useScrollAnimation } from '@/lib/useScrollAnimation';
import { ExpandCard } from "@/components/ui/expandCard";
import { act, useEffect, useState } from "react";
import Head from "next/head";
import GetTheApp from "@/components/popup/getTheApp";
import { getDeviceType, getUrlForDevice } from "@/lib/device";

export default function LinqUseCases() {

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1400 }, items: 3, slidesToSlide: 1 },
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
  const [showSPad, setShowSPad] = useState(false);
  const [actionItemShown, setActionItemShown] = useState(0);
  const [email, setEmail] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const a = getDeviceType();
      console.log(a)
      if (a !== 0) {
      } else {
        setShowSPad(true);
      }
    }, 1000);
  }, []);
  



  // needed for blog component
  type ArrowProps = {
    next?: () => void;
    previous?: () => void;
    onClick?: () => void;
    carouselState?: { currentSlide: number; totalItems: number; slidesToShow: number };
  };
  

  return (
    <>
          <Head>
        <title>LinQ - Seamless mobile money account linking & API integration | Stellar</title>
        <meta
          name="description"
          content="LinQ is the secure account linking solution for Africa. Enable users to safely connect their bank accounts, mobile money wallets, and crypto in seconds. Trusted infrastructure powering fintech across the continent."
        />
      </Head>
    <main className="bg-[#ffffff]">

    {showSPad && (<motion.div className='pl-[5px] pr-[12px] z-100 flex-row items-center justify-between hidden md:flex fixed top-0 bg-[#0363fe] h-[55px] w-full' transition={{ duration: 0.2, ease: "easeOut" }} initial={{top: '-80px'}} animate={{top: '0px'}}>
          <div className='flex flex-row items-center justify-center w-full'>
          <a href='/'>
            <p className='text-white text-center'>🎉 Meet StellarPay! True bilateral money movement at your fingertips →</p>
          </a>
          <Link href="/">
          <div className="ml-5 border-2 border-gray-700 bg-black rounded-lg py-1 px-3 flex flex-row items-center justify-center space-x-2">
            <p className='text-white font-medium text-xs md:text-[15px]'>See what's new</p>
          </div>
        </Link>
          </div>
          <div><Image src="/images/close.png" alt='EN' width={600} height={600} className='w-[30px] h-[30px]' onClick={() => setShowSPad(false)}/></div>
        </motion.div>)}
        {showSPad && (<motion.div className='hidden md:block h-[65px] w-full'></motion.div>)}

      {/* Navigation/Header */}
      <section 
        className="w-full bg-[#ffffff]" 
        role="banner" 
        aria-label="Main navigation"
      >
         <div className="px-4 py-4">
          <div className="py-2 md:px-8 border-gray-100 md:border-1 rounded-3xl flex items-center justify-between max-w-7xl mx-auto">
            {/* Left side - Logo and navigation */}
            <div className="flex items-center space-x-2 md:space-x-8">
              <nav className="flex items-center space-x-1">
            <Link href="/linq">
          <div className="flex flex-row items-center justify-center space-x-2">
            <Image
              className="mt-[-4px] md:mt-0 w-[26px] md:w-[28px] h-[28px] md:h-[30px]"
              src="/images/sp-transparent.png"
              alt="logo"
              width={100}
              height={100}
            />
            <p className='hidden md:flex font-bold text-sm md:text-[18px]'>Stellar</p>
          </div>
        </Link>
              </nav>
            </div>

            <div className="flex items-center space-x-2 md:space-x-8">
              <nav className="hidden md:flex items-center space-x-4 md:space-x-6">
            <Link href="/features">
          <div className="flex flex-row items-center justify-center space-x-2">
            <p className='text-gray-600 font-regular text-xs md:text-[15px]'>Products</p>
          </div>
        </Link>
        <Link href="/linq/use-cases">
        {/* <Link href="/linq/use-cases"> */}
          <div className="flex flex-row items-center justify-center space-x-2">
            <p className='text-gray-600 font-regular text-xs md:text-[15px]'>Use Cases</p>
          </div>
        </Link>
        <Link href="#contact">
          <div className="flex flex-row items-center justify-center space-x-2">
            <p className='text-gray-600 font-regular text-xs md:text-[15px]'>Resources</p>
          </div>
        </Link>
        <Link href="#contact">
          <div className="flex flex-row items-center justify-center space-x-2">
            <p className='text-gray-600 font-regular text-xs md:text-[15px]'>Pricing</p>
          </div>
        </Link>
        <Link href="#contact">
          <div className="flex flex-row items-center justify-center space-x-2">
            <p className='text-gray-600 font-regular text-xs md:text-[15px]'>Releases</p>
          </div>
        </Link>
              </nav>
            </div>

            {/* Right side - About us, language, auth */}
            <div className="flex items-center space-x-2 md:space-x-7">
            <Link href="/linq/use-cases">
            {/* <Link href="/linq/use-cases"> */}
          <div className="flex flex-row md:hidden items-center justify-center mr-1">
            <p className='text-gray-600 font-medium text-xs md:text-[15px]'>Use Cases</p>
          </div>
        </Link>
            <Link href="#contact">
          <div className="border-2 border-gray-700 bg-black rounded-lg py-1 px-3 flex flex-row items-center justify-center space-x-2">
            <p className='text-white font-medium text-xs md:text-[15px]'>Talk to sales</p>
          </div>
        </Link>
        <Link href="/linq">
          <div className="shadow-sm border-2 border-gray-300 bg-white rounded-lg py-1 px-4 flex flex-row items-center justify-center space-x-2">
            <p className='text-black font-medium text-xs md:text-[15px]'>Log In</p>
          </div>
        </Link>
          <div className="hidden md:flex flex-row items-center justify-center space-x-1">
          <Image
              className="w-[22px] h-[20px]"
              src="/images/en.png"
              alt="EN"
              width={100}
              height={100}
            />
            <p className='text-black font-medium text-xs md:text-[15px]'>English</p>
            {/* <Link href=''>
            <Image
              className="mb-[4px] ml-[4px] w-[20px] h-[20px]"
              src="/images/ar.png"
              alt="arrow"
              width={100}
              height={100}
            />
            </Link> */}
          </div>
            </div>
          </div>
        </div>
      </section>


      {/* Hero Section */}
      <section
            className="h-auto
    w-full
    xl:pt-5
    xl:pb-10
    flex flex-row
    justify-center
    items-center
    pt-0
    px-8 md:px-6
    bg-[url('/images/background-use-cases.png')]
    bg-cover
    bg-bottom
    bg-no-repeat"
          >
            <div className='relative mt-10 md:mt-0 self-center'>
            <div className="max-w-[300px] md:max-w-xl mx-auto flex flex-col items-start">
            <div className="border-1 shadow-md border-gray-300 bg-white py-1 w-[290px] rounded-[30px] mb-9">
            <h2 className="text-[18px] font-semibold text-black text-center">Billing & Recurring payments</h2>
            </div>
            <div>
              <h1 className="text-center md:text-start leading-tight md:tight text-black font-semibold text-[30px] md:text-[40px] md:text-[54px] mb-2">Make Mobile Money payments faster and more reliable
              </h1>
            </div>
            <div className='flex flex-col self-center md:self-start md:flex-row md:space-x-5 space-y-5 md:space-y-0 mb-10 mt-10'>
                    <a href='#contact'>
            <div className="border-1 border-gray-700 bg-gray-900 rounded-xl py-2 px-7 flex flex-row items-center justify-center space-x-2">
            <p className='text-white font-medium text-xs md:text-[19px]'>Talk with our team</p>
          </div>
          </a>
          <a href='#contact'>
          <div className="border-1 border-gray-700 bg-black rounded-xl py-2 px-11 flex flex-row items-center justify-center space-x-2">
            <p className='text-white font-medium text-xs md:text-[19px]'>Get on waitlist</p>
          </div>
          </a>
            </div>
           
            </div>
            
            </div>
            <div className='hidden lg:flex flex-row self-center mt-[50px] justify-center rounded-3xl w-full md:w-[650px] h-auto md:h-[482px] bg-gradient-to-br from-[#0065ff] via-[#0084FF] via-[#0065ff] to-[#0065ff] px-[20px] py-[20px] md:px-0 md:py-0'>
            <div>
            <Image src="/images/center-window.png" alt="center window" width={744} height={908} className="hidden md:block w-auto h-full mb-0" />
            </div>
            </div>
          </section>

          <section
            className="flex flex-col items-start px-8 md:px-6 py-5 bg-[#FCFCFD] bg-cover"
            ref={heroAnimation.ref}
          >
          <Image src="/images/companies-large.png" alt="companies" width={2560} height={120} className="hidden md:block w-full h-auto" />
          <Image src="/images/companies-small.png" alt="companies mobile" width={2560} height={120} className="block md:hidden w-full h-auto" />
          </section>


            <section
            className="pt-0 md:pt-15 pb-10 mt-0 flex flex-col items-center pt-0 px-8 md:px-6 bg-[#FCFCFD] bg-cover"
            ref={heroAnimation.ref}
          >
                        <h1 className='max-w-[300px] md:max-w-7xl mt-15 text-left md:text-center font-bold text-[#0065ff] text-[18px] md:text-[30px] leading-tight mb-10 md:mb-0'>Why LinQ</h1>
            <h2 className='max-w-7xl mx-auto mt-0 md:mt-5 text-start font-semibold text-[#111111] text-[30px] md:text-[40px] leading-tight mb-0'>A technology-first approach to payments and finance</h2>


            <div className='mt-10 md:mt-40 ml-0 md:ml-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-x-5 space-y-10'>
                <div className='w-[260px] md:w-[320px]'>
                <Image src="/images/spf.png" alt="stop payment failures" width={100} height={100} className="ml-10 w-16 h-auto" />
                <div className='border-[#5f5bff] border-l-2'>
                <h1 className='ml-10 text-black font-bold text-[20px] mt-5'>Stop payment failures</h1>
                </div>
                <p className='ml-10 text-[#414141] font-medium text-[18px] mt-5'>LinQ pulls account and routing numbers directly from the bank—no more typos.<br />
                We operate on and optimise at every level of the financial stack.</p>
                </div>
                <div className='w-[260px] md:w-[320px]'>
                <Image src="/images/krp.png" alt="keep recurring payments" width={100} height={100} className="ml-10 w-16 h-auto" />
                <div className='border-[#5f5bff] border-l-2'>
                <h1 className='ml-10 text-black font-bold text-[20px] mt-5'>Keep recurring payments</h1>
                </div>
                <p className='ml-10 text-[#414141] font-medium text-[18px] mt-5'>Easy linking, balance checks, and recovery tools keep bill payments on schedule with less churn.</p>
                </div>
                <div className='w-[260px] md:w-[320px]'>
                <Image src="/images/bcc.png" alt="boost customer conversion" width={100} height={100} className="ml-10 w-16 h-auto" />
                <div className='border-[#5f5bff] border-l-2'>
                <h1 className='ml-10 text-black font-bold text-[20px] mt-5'>Boost customer conversion</h1>
                </div>
                <p className='ml-10 text-[#414141] font-medium text-[18px] mt-5'>With coverage across 95% of accounts, more customers know LinQ and complete sign-up.Our systems operate with 99.99%+ uptime and are highly scalable and redundant. </p>
                </div>
                <div className='w-[260px] md:w-[320px]'>
                <Image src="/images/spf.png" alt="intelligent optimization" width={100} height={100} className="ml-10 w-16 h-auto" />
                <div className='border-[#5f5bff] border-l-2'>
                <h1 className='ml-10 text-black font-bold text-[20px] mt-5'>Intelligent Optimisation</h1>
                </div>
                <p className='ml-10 text-[#414141] font-medium text-[18px] mt-5'>Our machine learning models train on millions of data points and help increase revenue across conversion, fraud, revenue recovery, and more.</p>
                </div>
            </div>


            </section>

            
            <section
            className="max-w-[300px] md:max-w-7xl mx-auto pt-10 md:pt-40 flex flex-col bg-[#ffffff] bg-cover"
            ref={heroAnimation.ref}
          >
            <h2 className='md:mr-[30px] text-center self-center font-semibold text-[#000000] text-[30px] md:text-[54px] leading-tight mb-0 md:mb-15'>Turn every setup into success</h2>

            
            <div className='mx-2 md:mx-0 mt-5 md:mt-15 flex flex-col md:flex-row items-center justify-between'>
              <div className='w-[100px] md:w-[320px] flex flex-col'>
                <h2 className='text-[#0065ff] text-center text-[30px] md:text-[50px] font-medium'>40%</h2>
                <p className='text-[16px] text-center text-[#454545] font-regular'>Instant account verification cuts return rates by up to 40%

                </p>
              </div>
              <div className='mt-10 md:mt-0 w-[100px] md:w-[320px] flex flex-col'>
                <h2 className='text-[#0065ff] text-center text-[30px] md:text-[50px] font-medium'>7 Seconds</h2>
                <p className='text-[16px] text-center text-[#454545] font-regular'>Link a mobile money account in an average of 7 seconds

                </p>
              </div>
              <div className='mt-10 md:mt-0 w-[100px] md:w-[320px] flex flex-col'>
                <h2 className='text-[#0065ff] text-center text-[30px] md:text-[50px] font-medium'>40% savings</h2>
                <p className='text-[16px] text-center text-[#454545] font-regular'>Pay by mobile money reduces payment costs by an average of 40%
                </p>
              </div>
            </div>

            </section>


<section
className="pt-20 mt-20 pb-80 flex flex-col items-center pt-0 px-8 md:px-6 bg-[#FCFCFD] bg-cover"
ref={heroAnimation.ref}
>

            <div className='max-w-[280px] md:max-w-7xl self-center flex flex-col md:flex-row'>
           
           <Image
              className="mb-10 md:mb-0 self-center w-[280px] md:w-[726px] h-[160px] md:h-[383px]"
              src="/images/graph.png"
              alt="graph"
              width={726}
              height={383}
            />


              <div className='md:ml-[50px] max-w-[450px] flex flex-col  self-center'>
              <div className="self-center shadow-md border-gray-300 bg-white py-1 w-[150px] rounded-[30px] mb-5">
            <h2 className="text-[18px] font-semibold text-black text-center">Integration</h2>
            </div>
              <h2 className='text-center md:text-start font-semibold text-[#000000] text-[36px] leading-tight mb-10 mt-0'>Effortless account linking</h2>
              <p className='text-center md:text-start font-regular text-gray-500 text-[16px] leading-tight mb-10'>No delays or drop-offs. LinQ makes it easy for customers to connect their accounts instantly—so every connection has a chance to become a paying customer.
              </p>
                <div className='flex flex-row'>
                <Image
              className="w-[25px] h-[25px] mt-1 mr-3"
              src="/images/instantLogin.png"
              alt="instant login"
              width={25}
              height={25}
            />
            <h2 className='font-bold text-[20px] text-[#242424]'>Instant login or fallback</h2>
                </div>
                <p className='max-w-[300px] text-start font-regular text-gray-600 text-[16px] leading-tight mt-2 mb-6'> Biometrics, credentials, and manual entry are all validated in real time.
              </p>
              <div className='flex flex-row'>
                <Image
              className="w-[25px] h-[25px] mt-1 mr-3"
              src="/images/status.png"
              alt="status"
              width={25}
              height={25}
            />
            <h2 className='font-bold text-[20px] text-[#242424]'>Status checked instantly</h2>
                </div>
                <p className='max-w-[300px] text-start font-regular text-gray-600 text-[16px] leading-tight mt-2 mb-6'>Accounts are confirmed open and active before bill payments begin.
              </p>
              <div className='flex flex-row'>
                <Image
              className="w-[25px] h-[25px] mt-1 mr-3"
              src="/images/oneClick.png"
              alt="one click"
              width={25}
              height={25}
            />
            <h2 className='font-bold text-[20px] text-[#242424]'>One-click for returning users</h2>
                </div>
                <p className='max-w-[300px] text-start font-regular text-gray-600 text-[16px] leading-tight mt-2 mb-10'>Remembered customers can link instantly without re-entering details.
              </p>
              </div>

            </div>

 

            </section>

            <section
  className="relative flex flex-col items-start mt-[-200px] pl-[20px] md:pl-[100px] pt-[100px] md:pt-[280px] pb-[180px] bg-[url('/images/backbone.png')] bg-cover bg-top bg-no-repeat"
>
  <h2 className="font-semibold text-[18px] text-[#9fe870] mt-25 md:mt-5 mb-10">Global scale</h2>
  <h2 className="w-[280px] md:w-[440px] font-semibold text-[25px] md:text-[40px] text-[#ffffff] leading-tight mb-5">
    The backbone for internet business
  </h2>
  <h2 className="w-[280px] md:w-[550px] font-regular text-[18px] text-[#ffffff] mb-10">
    For ambitious companies around the world, LinQ makes moving money in and out of mobile money zones as simple,
    borderless and programmable as the rest of the internet.
  </h2>

  <div className='z-10 mt-0 md:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-x-20'>
                <div className='w-[280px]'>
                <div className='border-[#00d4ff] border-l-1'>
                <h1 className='ml-5 text-white font-bold text-[16px] mt-5'>250M+</h1>
                </div>
                <p className='ml-3 text-[#ffffff] font-medium text-[16px] mt-5'>PossibleAPI requests per day, peaking at 13,000 requests a second.</p>
                </div>
                
                <div className='w-[280px]'>
                <div className='border-[#00d4ff] border-l-1'>
                <h1 className='ml-5 text-white font-bold text-[16px] mt-5'>90%</h1>
                </div>
                <p className='ml-3 text-[#ffffff] font-medium text-[16px] mt-5'>of African adults have a mobile money wallet in their pocket.</p>
                </div>
                <div className='w-[280px]'>
                <div className='border-[#00d4ff] border-l-1'>
                <h1 className='ml-5 text-white font-bold text-[16px] mt-5'>135+</h1>
                </div>
                <p className='ml-3 text-[#ffffff] font-medium text-[16px] mt-5'>currencies and payment methods supported.</p>
                </div>
                <div className='w-[280px]'>
                <div className='border-[#00d4ff] border-l-1'>
                <h1 className='ml-5 text-white font-bold text-[16px] mt-5'>35+</h1>
                </div>
                <p className='ml-3 text-[#ffffff] font-medium text-[16px] mt-5'>countries with local acquiring, optimising acceptance rates.</p>
                </div>
            </div>


  <Image
    className="absolute hidden md:block right-[0] top-[100px] w-[377px] h-[745px] pointer-events-none"
    src="/images/globe-1.png"
    alt="logo"
    width={739}
    height={745}
  />
</section>

<section
className="pt-20 pb-80 flex flex-col items-center pt-0 px-8 md:px-6 bg-[#FCFCFD] bg-cover relative"
ref={heroAnimation.ref}
>

            <div className='max-w-[280px] md:max-w-7xl self-center flex flex-col md:flex-row'>
           

              <div className='items-center flex flex-col  self-center'>
              <div className="self-center shadow-sm border-gray-300 border-1 bg-white py-1 w-[150px] rounded-[10px] mb-10">
            <h2 className="text-[18px] font-semibold text-black text-center">Get a demo</h2>
            </div>
            <h2 className="text-[14px] font-bold text-[#74748B] text-center mb-10">EXPERIENCE OUR PRODUCTS</h2>
              <h2 className='max-w-[300px] md:max-w-6xl text-center md:text-start font-bold text-[#000000] text-[25px] md:text-[36px] leading-tight mb-10 md:mb-5 mt-0'>See how LinQ API works</h2>
              <p className='max-w-[300px] md:max-w-[600px] text-center font-regular text-gray-500 text-[20px] leading-tight mb-10'>See how our solutions can transform your business. Experience firsthand the power of our financial infrastructure with a live demonstration tailored to your needs.

              </p>

              <div className="flex flex-row justify-between w-[280px] md:w-[450px] border border-gray-300 rounded-lg mb-10 p-3 ">
              <input
        type="text"
        placeholder="Enter your email"
        className="w-full placeholder-[#1A1A1A]"
        onChange={(e) => setEmail(e.target.value)}
      />
        <Image
              className="ml-5 mt-0 w-[30px] h-[25px]"
              src="/images/mail.png"
              alt="logo"
              width={30}
              height={25}
            />
      </div>

      <button
onClick={() => {
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isValid) {
    alert('Please enter a valid email address')
    setEmail('')
  } else { 
    alert(`Email entered: ${email}`);
    setEmail('')
  }
}}
    className="bg-gradient-to-b from-[#232323] to-[#494949] text-white rounded-lg px-3 py-2 text-md mb-0 md:mb-35"
  >
    Talk with our team
  </button>

              </div>
              </div>
              <Image
    className="absolute bottom-[0px] w-[280px] md:w-[739px] h-[140px] md:h-[350px] pointer-events-none"
    src="/images/globe-2.png"
    alt="logo"
    width={739}
    height={745}
  />

            </section>

       

      {/* Footer */}
      <footer 
        className="z-10 bg-[#000000] text-[#ffffff] px-4 md:px-6 py-16"
      >

      

        <div className="ml-5 sm:ml-0 mx-auto flex flex-col sm:flex-row justify-center">
          {/* Upper section with three columns */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12 md:gap-20 mb-12 md:mr-[200px]">
            {/* Company and team */}
            <div className="text-left">
              <h3 className="font-bold mb-3 md:mb-4 text-[#ffffff] text-sm md:text-base">Company</h3>
              <div className="space-y-1 md:space-y-4">
                <Link href="/meet-the-team" className="font-light block text-[#ffffff] opacity-80 no-underline text-xs md:text-sm">
                  Company and team
                </Link>
                <Link href="/features" className="font-light block text-[#ffffff] opacity-80 no-underline text-xs md:text-sm">
                  Products
                </Link>
                <Link href="#" className="font-light block text-[#ffffff] opacity-80 no-underline text-xs md:text-sm">
                  Service Status
                </Link>
                <Link href="/news" className="font-light block text-[#ffffff] opacity-80 no-underline text-xs md:text-sm">
                  News & Updates
                </Link>
                <div className="hidden lg:block flex flex-col mt-20">
                <p className="text-[#ffffff] opacity-100 text-xs md:text-xs">© 2025 Stellar Technologies, inc.</p>
                </div>
              </div>
            </div>

            {/* Stellar Products */}
            <div className="text-left">
            <h3 className="font-bold mb-3 md:mb-4 text-sm text-[#ffffff] md:text-base">Products</h3>
              <div className="space-y-1 md:space-y-4">
                <Link href="#" className="font-light block text-[#ffffff] opacity-80 no-underline text-xs md:text-sm">
                  StellarPay
                </Link>
                <Link href="/linq" className="font-light block text-[#ffffff] opacity-80 no-underline text-xs md:text-sm">
                  Stellar for Business
                </Link>
                <Link href="http://www.meetgeorge.app" className="font-light block text-[#ffffff] opacity-80 no-underline text-xs md:text-sm">
                  George
                </Link>
                <Link href="http://www.meetgeorge.app" className="font-light block text-[#ffffff] opacity-80 no-underline text-xs md:text-sm">
                  APi
                </Link>
              </div>
            </div>

                        {/* Stellar Products */}
                        <div className="text-left">
            <h3 className="text-[#ffffff] font-bold mb-3 md:mb-4 text-sm md:text-base">Policies</h3>
              <div className="space-y-1 md:space-y-4">
                <Link href="/privacy-policy#your-rights" className="font-light block text-[#ffffff] opacity-80 no-underline text-xs md:text-sm">
                  Legal
                </Link>
                <Link href="/privacy-policy#contact-us" className="font-light block text-[#ffffff] opacity-80 no-underline text-xs md:text-sm">
                  Complaints
                </Link>
                <Link href="/privacy-policy" className="font-light block text-[#ffffff] opacity-80 no-underline text-xs md:text-sm">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="font-light block text-[#ffffff] opacity-80 no-underline text-xs md:text-sm">
                  Terms & Conditions
                </Link>
                <Link href="/privacy-policy#cookies-and-tracking-technologies" className="font-light block text-[#ffffff] opacity-80 no-underline text-xs md:text-sm">
                  Cookie Policy
                </Link>
              </div>



            </div>


          </div>


    
        </div>
      </footer>
    </main>
    </>
  );
} 