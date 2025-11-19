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
import { act, useState } from "react";
import Head from "next/head";
import GetTheApp from "@/components/popup/getTheApp";
import { getUrlForDevice } from "@/lib/device";


export default function Features() {

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

  const [actionItemShown, setActionItemShown] = useState(0);
  const [drop1, setDrop1] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const [drop3, setDrop3] = useState(false);
  const [field1, setField1] = useState("");
const [field2, setField2] = useState("");
const [field3, setField3] = useState("");
const [field4, setField4] = useState("");
const [field5, setField5] = useState("");
const [field6, setField6] = useState("");



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
          <div className="flex flex-row items-center justify-center space-x-2">
            <p className='text-gray-600 font-regular text-xs md:text-[15px]'>Use Cases</p>
          </div>
        </Link>
        <Link href="/linq#contact">
          <div className="flex flex-row items-center justify-center space-x-2">
            <p className='text-gray-600 font-regular text-xs md:text-[15px]'>Resources</p>
          </div>
        </Link>
        <Link href="/linq#contact">
          <div className="flex flex-row items-center justify-center space-x-2">
            <p className='text-gray-600 font-regular text-xs md:text-[15px]'>Pricing</p>
          </div>
        </Link>
        <Link href="/linq#contact">
          <div className="flex flex-row items-center justify-center space-x-2">
            <p className='text-gray-600 font-regular text-xs md:text-[15px]'>Releases</p>
          </div>
        </Link>
              </nav>
            </div>

            {/* Right side - About us, language, auth */}
            <div className="flex items-center space-x-2 md:space-x-7">
            <Link href="/linq/use-cases">
          <div className="flex flex-row md:hidden items-center justify-center mr-1">
            <p className='text-gray-600 font-medium text-xs md:text-[15px]'>Use Cases</p>
          </div>
        </Link>
            <Link href="/linq#contact">
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
            className="mt-[-30px] md:mt-0 flex flex-col items-start pt-0 mb-30 px-8 md:px-6 bg-[url('/images/main-background.png')] bg-cover bg-top bg-no-repeat"
          >
            <div className='relative top-[60px] self-center'>
            <div className="max-w-[300px] md:max-w-3xl mx-auto flex flex-col items-center">
            <div className="bg-[#0065ff] py-1 w-[70px] rounded-[8px] mb-2">
            <h2 className="text-[18px] font-semibold text-white text-center">Beta</h2>
            </div>
            <div className="border-1 shadow-md border-gray-300 bg-white py-1 w-[140px] rounded-[30px] mb-7">
            <h2 className="text-[18px] font-semibold text-black text-center">Meet LinQ</h2>
            </div>
            <div>
              <h1 className="text-center leading-tight md:leading-[75px] text-black font-semibold text-[40px] md:text-[65px] mb-7">The highest standard in account linking</h1>
            </div>
            <div>
              <h1 className="text-center leading-tight md:leading-[27px] text-gray-500 font-regular text-[18px] md:text-[22px] md:mx-14 mb-12">Stellar LinQ securely connects your customer’s mobile money accounts to your app or service in seconds-delivering the highest conversion rates in the industry.</h1>
            </div>
            <div className='flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0 mb-18'>
              <a href='/linq#contact'>
            <div className="border-1 border-gray-700 bg-gray-900 rounded-xl py-2 px-7 flex flex-row items-center justify-center space-x-2">
            <p className='text-white font-medium text-xs md:text-[19px]'>Talk with our team</p>
          </div>
          </a>
          <a href='/linq#contact'>
          <div className="border-1 border-gray-700 bg-black rounded-xl py-2 px-11 flex flex-row items-center justify-center space-x-2">
            <p className='text-white font-medium text-xs md:text-[19px]'>View API docs</p>
          </div>
          </a>
            </div>
            <div className='flex flex-row justify-between rounded-3xl w-full md:w-[1200px] h-auto md:h-[526px] bg-gradient-to-br from-[#0065ff] via-[#0084FF] via-[#0065ff] to-[#0065ff] mb-[-23px] px-[20px] py-[20px] md:px-0 md:py-0'>
            
            <div className='flex flex-col items-center md:items-start md:ml-[75px] md:mt-[75px] max-w-[450px]'>
            <Image src="/images/left-window.png" alt="left icon" width={75} height={75} className="w-[75px] h-[75px]" />
            <h2 className='font-medium mt-[16px] text-[32px] text-white'>
              Apps & sites
            </h2>
            <p className='font-light mt-[16px] text-[17px] text-gray-100'>
            Build seamless financial experiences with LinQ.
Stellar LinQ links your users’ accounts in seconds, so they can pay, get paid, or subscribe without friction — anywhere.
Unify your access to bank and mobile money accounts through a single API.
            </p>
            <Image src="/images/examples.png" alt="examples" width={600} height={150} className="mt-[8px] w-[250px] md:w-[375px] h-auto md:h-[100px]" />
            </div>
            <div>
            <Image src="/images/right-window.png" alt="right window" width={440} height={512} className="hidden md:block w-[350px] h-[512px] mb-0" />
            </div>
            </div>
            </div>
            </div>
          </section>

      <section 
        id="mission"
        className="bg-[#ffffff] flex items-center"
        ref={betterAnimation.ref}
      >
        <div className="mt-5 max-w-7xl mx-auto px-4 md:px-6 w-full">
          <div className="">
            <h1 
              className="text-[#000000] text-center text-[30px] md:text-[54px] lg:text-[54px] xl:text-[54px] font-medium"
            >
              Access the largest mobile money ecosystem
            </h1>


            <div className='mx-2 md:mx-0 mt-15 flex flex-row justify-between'>
              <div className='w-[100px] md:w-[320px] flex flex-col'>
                <h2 className='text-[#0065ff] text-[30px] md:text-[54px] font-medium'>100+</h2>
                <p className='text-[16px] text-[#454545] font-regular'>Mobile money operators across Africa, Asia, and Latin America
                </p>
              </div>
              <div className='w-[100px] md:w-[320px] flex flex-col'>
                <h2 className='text-[#0065ff] text-[30px] md:text-[54px] font-medium'>50M+ Users</h2>
                <p className='text-[16px] text-[#454545] font-regular'>Active mobile money accounts across Africa, Asia, and Latin America

                </p>
              </div>
              <div className='w-[100px] md:w-[320px] flex flex-col'>
                <h2 className='text-[#0065ff] text-[30px] md:text-[54px] font-medium'>&lt;1 Day</h2>
                <p className='text-[16px] text-[#454545] font-regular'>Average time to go live with LinQ
                </p>
              </div>
            </div>
              
          </div>

        </div>
      </section>

      <section
            className="mt-15 flex flex-col items-start pt-0 px-8 md:px-6 bg-[#FCFCFD] bg-cover"
            ref={heroAnimation.ref}
          >
            <div className='max-w-7xl self-center pt-15 md:pt-20 pb-5 flex flex-col md:flex-row'>
                <div className="w-[280px] md:w-[500px] flex flex-col items-center md:items-start">
                <div className="border-1 shadow-md border-gray-300 bg-white py-1 w-[160px] rounded-[30px] mb-6">
            <h2 className="text-[18px] font-regular text-black text-center">See it in action</h2>
            </div>
            <h2 className='font-semibold text-black text-[30px] md:text-[36px] leading-tight mb-4'>Flexible by design. <br /> Seamless when it ships.</h2>
            <p className='text-[#747860] font-regular text-[18px] mb-6'>Stellar LinQ is modular, instantly connecting customers to any financial use cade in a format that fits your experience - so they can move, manage and move money without disruption.</p>
                      <a href='/linq/use-cases'>
            <div className="border-1 border-black bg-black py-2 w-[160px] rounded-[30px] mb-6 mt-4 md:mt-10">
            <h2 className="text-[15px] font-medium text-white text-center">Use cases</h2>
            </div>
            </a>
                </div>
                <Image src="/images/phone-1.png" alt="phone 1" width={275} height={424} className="mt-10 md:mt-0 md:ml-[20px] w-[255px] md:w-[302px] h-[454px] md:h-[466px]" />
                <Image src="/images/phone-2.png" alt="phone 2" width={275} height={424} className="md:ml-[-40px] w-[255px] md:w-[302px] h-[454px] md:h-[466px]" />
                <Image src="/images/phone-3b.png" alt="phone 3" width={275} height={424} className="md:ml-[-40px] w-[255px] md:w-[302px] h-[454px] md:h-[466px]" />
                <Image src="/images/phone-4b.png" alt="phone 4" width={275} height={424} className="md:ml-[-40px] w-[255px] md:w-[302px] h-[454px] md:h-[466px] mr-[-100px]" />
            </div>
            </section>

            <section
            className="pt-10 flex flex-col pt-0 px-8 md:px-6 bg-[#FCFCFD] bg-cover"
            ref={heroAnimation.ref}
          >
            <div className="self-center border-1 shadow-md border-gray-300 bg-white py-1 w-[160px] rounded-[30px] mb-10">
            <h2 className="text-[18px] font-regular text-black text-center">How it works</h2>
            </div>
            <h2 className='self-center font-semibold text-[#292932] text-[30px] text-[36px] leading-tight mb-4'>See LinQ in action</h2>
            
            <div className='max-w-7xl self-center pt-5 md:pt-15 pb-5 flex flex-col md:flex-row'>
            
            <div className="w-[280px] md:w-[500px] flex flex-col md:mr-[60px] md:mt-[20px]">
              <div onClick={() => setActionItemShown(0)} className={`pl-[20px]  ${
      actionItemShown === 0 ? "border-l-2 border-[#0065ff]" : "border-l-2 border-gray-200"
    }`}>
            <p className='text-[#292932] font-semibold text-[20px] mb-3'>Verify with a phone number</p>
            <p className='text-[#747860] font-regular text-[18px] mb-4 mr-5'>Customer enters their mobile money number. We automatically detect their provider</p>
            <hr />
            </div>
            <div onClick={() => setActionItemShown(1)} className={`pl-[20px]  ${
      actionItemShown === 1 ? "border-l-2 border-[#0065ff]" : "border-l-2 border-gray-200"
    }`}>
            <p className='mt-3 text-[#292932] font-semibold text-[20px] mb-3'>Choose a provider</p>
            <p className='text-[#747860] font-regular text-[18px] mb-4 mr-5'>Select your mobile money operator from the list of available providers.</p>
            <hr />
            </div>
            <div onClick={() => setActionItemShown(2)} className={`pl-[20px]  ${
      actionItemShown === 2 ? "border-l-2 border-[#0065ff]" : "border-l-2 border-gray-200"
    }`}>
            <p className='mt-3 text-[#292932] font-semibold text-[20px] mb-3'>Link account securely</p>
            <p className='text-[#747860] font-regular text-[18px] mb-4 mr-5'>Customer confirms with their PIN. Account is linked and ready for payments.</p>
            <hr />
            </div>
            </div>

            <div className='flex flex-col items-center mt-[40px] md:mt-0 px-[20px] md:px-[40px] py-[40px] rounded-[50px] shadow-sm bg-[#fdfdfd] w-[300px] md:w-[500px] h-[350px] md:h-[400px]'>
            <div className="flex items-center justify-center w-[55px] h-[55px] rounded-[55px] bg-[#0065ff]">
  <h1 className="text-center font-medium text-[26px] text-white">
    {actionItemShown + 1}
  </h1>
</div>

{actionItemShown === 0 && (<><Image src="/images/edit.png" alt="edit" width={65} height={28} className="mt-5 mr-5 self-end w-[65px] h-auto" />
            <div className='py-[18px] flex flex-col justify-between bg-white w-full mx-10 rounded-[30px] border-gray-200 border-2 h-[148px]'>
            
            <div className='flex flex-row items-center bg-white ml-9 mr-6 border-gray-200 border-2 h-[44px]'>
              <p className='ml-[20px] text-black font-medium font-[20px]'>Enter phone number</p>
              </div>

            <div className='flex flex-row justify-start ml-7 mr-5'>
              <div className='flex flex-row items-center rounded-xl shadow-sm bg-white border-purple-500 border-2 h-[44px] w-[200px] md:w-75'>
              <p className='ml-[20px] text-black font-regular text-[14px] md:text-[16px]'>+254 712 354 678 |</p>
              </div>

              <div className='ml-2 flex flex-row items-center rounded-xl shadow-sm bg-white border-black border-2 h-[44px] w-[44px] justify-center'>
              <Image src="/images/send1.png" alt="send" width={44} height={44} className="self-center w-[22px] md:w-[28px] h-auto" />
              </div>
              </div>
            </div></>)}


          {(actionItemShown === 1) && (<div className='mr-20 flex flex-col justify-between w-[250px] md:w-80 mt-[30px] h-[160px] md:h-[190px]'>
            <div className='w-full flex flex-row items-center rounded-xl shadow-sm bg-white border-purple-500 border-2 h-[44px] ml-10'>
              <p className='ml-[20px] text-black font-regular font-[20px]'>M-Pesa</p>
              </div>

              <div className='w-full flex flex-row items-center rounded-xl shadow-sm bg-white border-purple-500 border-2 h-[44px] ml-10'>
              <p className='ml-[20px] text-black font-regular font-[20px]'>MTN Mobile Money</p>
              </div>

              <div className='w-full flex flex-row items-center rounded-xl shadow-sm bg-white border-purple-500 border-2 h-[44px] ml-10'>
              <p className='ml-[20px] text-black font-regular font-[20px]'>Airtel Money</p>
              </div>

            </div>)}

            {actionItemShown === 2 && (
 <div className='py-[20px] flex flex-col justify-between bg-white w-full mt-5 md:mt-10 mx-10 rounded-[30px] h-[185px]'>
            
 <div className='rounded-xl self-center flex flex-row items-center bg-white w-[120px] border-gray-200 border-2 h-[35px]'>
   <p className='ml-[20px] text-black font-medium font-[20px]'>Enter PIN</p>
   </div>

   <div className='flex self-center flex-row items-center justify-center rounded-lg shadow-sm bg-white border-purple-500 border-2 h-[35px] w-[70px]'>
   <p className='text-center text-gray-500 font-regular font-[20px]'>****</p>
   </div>

   <div className="flex items-center justify-center rounded-md self-center bg-white w-[120px] h-[30px] border-2 border-gray-200">
  <div className="flex items-center space-x-1">
    <p className="text-center text-[#37cf15] font-medium text-[14px]">Connected</p>
    <p className="hidden md:block text-gray-600 text-[13px]">▼</p>
  </div>
</div>

 </div>
            )}

            </div>
          
                </div>
      
            </section>


            
            <section
            className="pt-20 mt-0 flex flex-col items-start pt-0 px-8 md:px-6 bg-[#FCFCFD] bg-cover"
            ref={heroAnimation.ref}
          >
            <div className='max-w-[280px] md:max-w-7xl self-center pt-5 md:pt-10 pb-5 flex flex-col md:flex-row'>
                <div className="w-[280px] md:w-[450px] flex flex-col md:mr-[350px]">
                <div className="mt-0 md:mt-[20px] border-1 shadow-md border-gray-300 bg-white py-1 w-[290px] md:w-[320px] rounded-[30px] mb-10">
            <h2 className="text-[18px] font-regular text-black text-center">Industry-leading performance</h2>
            </div>
            <h2 className='font-semibold text-black text-[30px] md:text-[36px] leading-tight mb-4 md:mb-10'>Built for simplicity. <br /> Engineered for scale.</h2>
            <p className='text-[#000000] font-regular text-[18px]'>Stellar LinQ adapts to any use case, connecting customers to mobile money accounts in a format that fits seamlessly into your experience - enabling payments without friction.</p>
                </div>
                <div className='mt-[40px] md:mt-0 flex flex-col justify-between bg-[#0669ff] rounded-2xl w-[290px] md:w-[370px] h-[350px] md:h-[370px] pt-[30px] pb-[30px] px-[30px]'>
                <Image src="/images/plug.png" alt="apple" width={286} height={96.9} className="w-full h-auto" />
                <div className='flex flex-col'>
                <h2 className='font-medium text-white text-[33px] leading-tight mb-[10px] mx-[5px]'>Plug-n-play</h2>
                <p className='text-white font-light text-[17px] mx-[5px]'>Deploy in a matter of minutes. Smart 
presets let you start syncing with 
your customers wallets with a quick 
configuration. 
</p>
</div>
                </div>
                
            </div>
            </section>

            <section
            className="pt-30 mt-0 flex flex-col items-center pt-0 px-8 md:px-6 bg-[#FCFCFD] bg-cover"
            ref={heroAnimation.ref}
          >
            <h2 className='max-w-4xl text-center font-semibold text-[#111111] text-[38px] leading-tight mb-10'>Tap into the fasted growing financial ecosystems</h2>
           
            </section>

            <section
            className="pt-0 md:pt-10 mt-0 flex flex-col items-center pt-0 bg-[#FCFCFD] bg-cover"
            ref={heroAnimation.ref}
          >
        <Image src="/images/flags3.png" alt="flags" width={1425} height={208} className="w-full h-auto" />
            </section>


            <section
            className="pt-30 flex flex-col pt-0 px-8 md:px-6 bg-[#FCFCFD] bg-cover"
            ref={heroAnimation.ref}
          >
            <div className="self-center border-1 shadow-md border-gray-300 bg-white py-1 w-[160px] rounded-[30px] mb-8">
            <h2 className="text-[18px] font-regular text-black text-center">Integration</h2>
            </div>
            <h2 className='text-center md:text-start self-center font-semibold text-[#292932] text-[30px] md:text-[36px] leading-tight mb-10'>Set up fast. Ship faster.</h2>

            <p className='self-center max-w-xl text-center text-[#747860] font-regular text-[18px] mb-4'>Skip the complex infrastructure and lengthy set up.<br />
Our prebuilt SDKs, quick start templates, and dashboard-guided 
configuration let you integrate and go live in hours, not weeks.</p>
            
            <div className='pl-0 md:pl-15 pt-8 pb-10 max-w-[1450px]'>
            <Carousel
            showDots={true}
            responsive={responsive}
            ssr={false} 
            infinite={false}
            autoPlay={false}
            dotListClass="mt-10"
            itemClass="px-4"  
            containerClass="pb-16"
            renderButtonGroupOutside={false}
            arrows={true}
          >
              <div className='flex flex-col justify-between items-center shadow-md rounded-2xl border-white border-2 h-[483px] w-[280px] md:w-[440px] pt-[30px] pb-[10px]'>
              <div className='rounded-xl self-center flex flex-row items-start bg-white w-[250px] md:w-[380px] border-gray-200 border-2 h-[140px] md:h-[220px] px-[20px] py-[15px]'>
                <div>
              <Image src="/images/link-response.png" alt="link response" width={804} height={64} className="w-100 h-auto" />
                 <div className='mt-[10px]'><hr /></div>
                 </div>
                </div>
                <div className='flex flex-col mx-[25px]'>
                <p className='text-[#292932] font-semibold text-[20px] mb-3'>Go live in hours, not days.</p>
                <p className='text-[#747680] font-regular text-[16px] mb-4 mr-5'>With ready-made UI components and backend code, you only need a developer and an afternoon - integrate Stellar LinQ before lunch and launch by dinner</p>
                </div>
              </div>

              <div className='flex flex-col justify-between items-center shadow-md rounded-2xl border-white border-2 h-[483px] w-[280px] md:w-[440px] pt-[15px] pb-[10px]'>
              <div className='flex flex-col justify-between mt-[30px] h-[160px]'>
            <div className='self-center flex flex-row items-center rounded-xl shadow-sm bg-white border-purple-500 border-2 h-[44px] w-[220px] md:w-[280px]'>
              <p className='ml-[20px] text-black font-regular font-[20px]'>Primary color</p>
              </div>

              <div className="flex flex-row">
              <div className='flex flex-row items-center rounded-xl shadow-sm bg-white border-purple-500 border-2 h-[44px] w-[150px] md:w-[280px]'>
              <p className='ml-[20px] text-black font-regular font-[20px]'>Logo</p>
              </div>
              <div className='justify-center flex flex-row items-center rounded-lg bg-white border-gray-200 border-2 h-[44px] w-[76px] ml-[10px]'>
              <p className='text-center text-black font-medium font-[20px]'>Update</p>
              </div>
              </div>

              <div className='self-center flex flex-row items-center rounded-xl shadow-sm bg-white border-purple-500 border-2 h-[44px] w-[220px] md:w-[280px]'>
              <p className='ml-[20px] text-black font-regular font-[20px]'>Account Selection</p>
              </div>

            </div>
                <div className='flex flex-col mx-[25px]'>
                <p className='text-[#292932] font-semibold text-[20px] mb-3'>Configure without writing code</p>
                <p className='text-[#747680] font-regular text-[16px] mb-4 mr-5'>Our dashboard provides intuitive tools for configuration -
add users, set up webhooks and customise settings 
without touching your code base.</p>
                </div>
              </div>

              <div className='flex flex-col justify-between items-center shadow-md rounded-2xl border-white border-2 h-[483px] w-[280px] md:w-[440px] pt-[30px] pb-[10px]'>

              <div className='self-center flex flex-row items-center rounded-xl shadow-sm bg-white border-purple-500 border-2 h-[44px] w-[260px] md:w-[320px]'>
              <div className="flex flex-row justify-between w-full">
              <p className='ml-[20px] text-black font-regular text-[14px] md:text-[16px]'>http://hosted.stellarlinq.com</p>
               <p className="text-gray-600 text-[13px] mr-[20px] self-center mt-[2px]">| ▼</p>
             </div>
            
              </div>

              
 <div className='pt-[10px] md:pt-[30px] border-2 border-gray-200 flex flex-col justify-between bg-white  mx-10 rounded-t-[30px] mt-[20px] md:mt-0 h-[120px] md:h-[185px] w-[270px] md:w-[380px]'>
            

            <Image src="/images/deploy.png" alt="link response" width={120} height={58} className="self-center w-[60px] h-auto" />
              <p className='self-center w-[250px] md:w-[320px] text-center text-black font-regular mx-[20px] md:mx-0 font-[12px] mb-[20px] md:mb-0'>Eneo uses <b>Stellar</b> to connect your financial accounts</p>
  
              <div className="hidden md:flex rounded-t-md self-center bg-white w-[300px] h-[50px] border-t-2 border-l-2 border-r-2 border-gray-200 mb-0">

           </div>
           
            </div>
                <div className='flex flex-col mx-[25px]'>
                <p className='text-[#292932] font-semibold text-[20px] mb-3'>Deploy without building infrastructure</p>
                <p className='text-[#747680] font-regular text-[16px] mb-4 mr-10'>Stellar LinQ can host the complete linking flow for you, providing a secure URL to embed directly into your web or mobile applcation.</p>
                </div>
              </div>
</Carousel>
                </div>
      
            </section>

            
            <section
            className="pt-20 flex flex-col pt-0 px-8 md:px-6 bg-[#FCFCFD] bg-cover"
            ref={heroAnimation.ref}
          >
            <div className="mr-[30px] self-center border-1 shadow-md border-gray-300 bg-white py-1 w-[160px] rounded-[30px] mb-12">
            <h2 className="text-[18px] font-regular text-black text-center">Security</h2>
            </div>
            <h2 className='mr-[30px] text-center self-center font-semibold text-[#292932] text-[30px] md:text-[36px] leading-tight mb-10 md:mb-15'>Security and compliance<br  />you can count on</h2>

            <div className='max-w-[280px] md:max-w-7xl self-center flex flex-row mb-[300px]'>
              <div className='max-w-xl flex flex-col  md:mr-[70px] self-center'>
              <h2 className='text-start font-semibold text-[#000000] text-[24px] md:text-[30px] leading-tight mb-3'>Built for the new era of open banking</h2>
              <p className='text-start font-semibold text-[#000000] text-[18px] md:text-[22px] leading-tight mb-10'>Stellar’s security is always evolving to meet or exceed rigorous industry standards—from creating customer-facing privacy tools to using unique insights from the Stellar Network to stop fraud before it happens.</p>

            <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        >
              <hr />
              <div className='flex flex-row justify-between mb-5 '>
              <p onClick={() => setDrop1(!drop1)} className='text-start font-semibold text-[#000000] text-[22px] leading-tight mt-2 mr-2 mx:mr-0'>Limit the risk of fraud in real time
              </p>
             { drop1 === true && (<Image src="/images/up.png" alt="up" width={24} height={13} onClick={() => setDrop1(false)}className="w-[24px] h-[13px] mt-4 mr-1" />)}
             { drop1 === false && (<Image src="/images/down.png" alt="up" width={24} height={13} onClick={() => setDrop1(true)}className="w-[24px] h-[13px] mt-4 mr-1" />)}
              </div>

              <AnimatePresence>
    {drop1 && (
      <motion.p
        key="content"
        initial={{ opacity: 0, height: 0, y: -10 }}
        animate={{ opacity: 1, height: "auto", y: 0 }}
        exit={{ opacity: 0, height: 0, y: -10 }}
        transition={{ duration: 0.35 }}
        className="text-start font-regular text-[#000000] text-[18px] md:text-[22px] leading-tight mb-10 overflow-hidden"
      >
        Stellar LinQ monitors device IDs, SIM details, mobile carrier
        signals, and more—identifying suspicious activity in real-time
        to keep bad actors off your platform.
      </motion.p>
    )}
  </AnimatePresence>
            </motion.div >

            <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        >
              <hr />
              <div className='flex flex-row justify-between mb-5 '>
              <p onClick={() => setDrop2(!drop2)} className='text-start font-semibold text-[#000000] text-[22px] leading-tight mt-2'>Certified security at global standards
              </p>
             { drop2 === true && (<Image src="/images/up.png" alt="up" width={24} height={13} onClick={() => setDrop2(false)}className="w-[24px] h-[13px] mt-4 mr-1" />)}
             { drop2 === false && (<Image src="/images/down.png" alt="up" width={24} height={13} onClick={() => setDrop2(true)}className="w-[24px] h-[13px] mt-4 mr-1" />)}
              </div>

              <AnimatePresence>
    {drop2 && (
      <motion.p
        key="content"
        initial={{ opacity: 0, height: 0, y: -10 }}
        animate={{ opacity: 1, height: "auto", y: 0 }}
        exit={{ opacity: 0, height: 0, y: -10 }}
        transition={{ duration: 0.35 }}
        className="text-start font-regular text-[#000000] text-[18px] md:text-[22px] leading-tight mb-10 overflow-hidden"
      >
Stellar LinQ meets internationally recognised security certifications, including ISO 27001, ISO 27701, and SSAE18 SOC 2 compliance.
      </motion.p>
    )}
  </AnimatePresence>
            </motion.div >

            <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        >
              <hr />
              <div className='flex flex-row justify-between mb-5 '>
              <p onClick={() => setDrop3(!drop3)} className='text-start font-semibold text-[#000000] text-[22px] leading-tight mt-2'>Put customers in control of their data
              </p>
             { drop3 === true && (<Image src="/images/up.png" alt="up" width={24} height={13} onClick={() => setDrop3(false)}className="w-[24px] h-[13px] mt-4 mr-1" />)}
             { drop3 === false && (<Image src="/images/down.png" alt="up" width={24} height={13} onClick={() => setDrop3(true)}className="w-[24px] h-[13px] mt-4 mr-1" />)}
              </div>

              <AnimatePresence>
    {drop3 && (
      <motion.p
        key="content"
        initial={{ opacity: 0, height: 0, y: -10 }}
        animate={{ opacity: 1, height: "auto", y: 0 }}
        exit={{ opacity: 0, height: 0, y: -10 }}
        transition={{ duration: 0.35 }}
        className="text-start font-regular text-[#000000] text-[18px] md:text-[22px] leading-tight mb-10 overflow-hidden"
      >
We embed privacy controls directly into our products, empowering your customers to manage their data while we work industry-wide to raise privacy standards.
      </motion.p>
    )}
  </AnimatePresence>
            </motion.div >

              </div>

              <div className='self-center hidden md:flex rounded-3xl w-[549px] h-[511px] justify-center bg-gradient-to-br from-[#0065ff] via-[#0084FF] via-[#0065ff] to-[#0065ff]'>
              <Image src="/images/center-window.png" alt=" window" width={440} height={512} className="w-[440px] h-[511px] mb-0" />
              </div>
            </div>

 

            </section>

            <section
            id='contact'
            className="mt-0 md:mt-10 flex flex-col items-start pt-0 px-8 md:px-20 pb-[200px] bg-[url('/images/main-background.png')] bg-cover bg-top bg-no-repeat"
          >
            <div className='px-[40px] py-[27px] flex flex-col md:flex-row justify-between bg-black rounded-2xl w-full mt-[-160px]'>
            <div className='w-[280px] md:w-[344px] flex md:ml-[100px]'>
              <h1 className='leading-tight text-[#fcfcfd] font-regular text-[30px] md:text-[46px] mt-[10px] md:mt-[70px]'>
              Boost conversion with the highest standard in account linking
              </h1>
            </div>
            <div className='mt-[40px] md:mt-0 w-[250px] md:w-[548px] h-[650px] md:h-[523px] bg-white rounded-2xl px-[20px] md:px-[50px] py-[20px] md:py-[70px]'>
  <h1 className='leading-tight text-black font-medium text-[30px] mb-6'>
    Let's get started
  </h1>

  {/* Fields */}
  <div className="space-y-4 md:space-y-8">

    {/* Row 1 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="First name"
        className="border border-gray-300 rounded-lg p-3 w-full"
        onChange={(e) => setField1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last name"
        className="border border-gray-300 rounded-lg p-3 w-full"
        onChange={(e) => setField2(e.target.value)}
      />
    </div>

    {/* Row 2 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="Company name"
        className="border border-gray-300 rounded-lg p-3 w-full"
        onChange={(e) => setField3(e.target.value)}
      />
      <input
        type="text"
        placeholder="Company email"
        className="border border-gray-300 rounded-lg p-3 w-full"
        onChange={(e) => setField4(e.target.value)}
      />
    </div>

    {/* Row 3 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="Country"
        className="border border-gray-300 rounded-lg p-3 w-full"
        onChange={(e) => setField5(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone number"
        className="border border-gray-300 rounded-lg p-3 w-full"
        onChange={(e) => setField6(e.target.value)}
      />
    </div>

  </div>

  <div className='mt-6'>By submitting this form, I confirm that I have read and understood Stellar's <u><a href='https://www.stellarpay.app/privacy-policy'>Privacy Statement</a></u> </div>

  {/* Submit Button */}
  <button
    onClick={() => {
      alert(
        `Field 1: ${field1}\nField 2: ${field2}\nField 3: ${field3}\nField 4: ${field4}\nField 5: ${field5}\nField 6: ${field6}`
      );
    }}
    className="mt-3 bg-gradient-to-b from-[#232323] to-[#494949] text-white rounded-lg px-6 py-2 text-md"
  >
    Talk with our team
  </button>
</div>
            </div>
            </section>
      

      {/* Footer */}
      <footer 
        className="bg-[#000000] text-[#ffffff] px-4 md:px-6 py-16"
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