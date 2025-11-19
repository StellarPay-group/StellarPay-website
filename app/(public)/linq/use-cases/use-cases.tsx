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
            <Link href="/linq">
          <div className="flex flex-row items-center justify-center space-x-2">
            <p className='text-gray-600 font-regular text-xs md:text-[15px]'>Products</p>
          </div>
        </Link>
        <Link href="/linq/use-cases">
          <div className="flex flex-row items-center justify-center space-x-2">
            <p className='text-gray-600 font-regular text-xs md:text-[15px]'>Use Cases</p>
          </div>
        </Link>
        <Link href="/linq">
          <div className="flex flex-row items-center justify-center space-x-2">
            <p className='text-gray-600 font-regular text-xs md:text-[15px]'>Resources</p>
          </div>
        </Link>
        <Link href="/linq">
          <div className="flex flex-row items-center justify-center space-x-2">
            <p className='text-gray-600 font-regular text-xs md:text-[15px]'>Pricing</p>
          </div>
        </Link>
        <Link href="/linq">
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
            <Link href="/linq">
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
            className="    aspect-[2/1]
    w-full
    xl:mt-[-100px]
    flex flex-row
    justify-center
    items-center
    pt-0
    px-8 md:px-6
    bg-[url('/images/background-use-cases.png')]
    bg-cover
    bg-top
    bg-no-repeat"
          >
            <div className='relative top-[0px] self-center'>
            <div className="max-w-[300px] md:max-w-xl mx-auto flex flex-col items-start">
            <div className="border-1 shadow-md border-gray-300 bg-white py-1 w-[290px] rounded-[30px] mb-9">
            <h2 className="text-[18px] font-semibold text-black text-center">Billing & Recurring payments</h2>
            </div>
            <div>
              <h1 className="text-start leading-tight md:tight text-black font-semibold text-[40px] md:text-[54px] mb-2">Make Mobile Money payments faster and more reliable
              </h1>
            </div>
            <div className='flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0 mb-10 mt-10'>
            <div className="border-1 border-gray-700 bg-gray-900 rounded-xl py-2 px-7 flex flex-row items-center justify-center space-x-2">
            <p className='text-white font-medium text-xs md:text-[19px]'>Talk with our team</p>
          </div>
          <div className="border-1 border-gray-700 bg-black rounded-xl py-2 px-11 flex flex-row items-center justify-center space-x-2">
            <p className='text-white font-medium text-xs md:text-[19px]'>Get on waitlist</p>
          </div>
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
          <Image src="/images/companies-large.png" alt="companies" width={2560} height={120} className="w-full h-auto" />
          </section>


            <section
            className="pt-15 mt-0 flex flex-col items-center pt-0 px-8 md:px-6 bg-[#FCFCFD] bg-cover"
            ref={heroAnimation.ref}
          >
            <h2 className='max-w-2xl mt-5 text-center font-semibold text-[#111111] text-[40px] leading-tight mb-0'>Disconnection from Africa is costing you revenue</h2>
           
            </section>


            <section
            className="pt-20 flex flex-col pt-0 px-8 md:px-6 bg-[#FCFCFD] bg-cover"
            ref={heroAnimation.ref}
          >
            <div className='pl-0 md:pl-15 pt-0 pb-10 max-w-[1450px]'>
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
              <div className='rounded-xl self-center flex flex-row items-start bg-white w-[250px] md:w-[380px] border-gray-200 border-3 h-[140px] md:h-[220px] px-[20px] py-[15px]'>
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

              <div className='flex flex-col justify-between items-center shadow-md rounded-2xl border-white border-3 h-[483px] w-[280px] md:w-[440px] pt-[15px] pb-[10px]'>
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

              <div className='flex flex-col justify-between items-center shadow-md rounded-2xl border-white border-3 h-[483px] w-[280px] md:w-[440px] pt-[30px] pb-[10px]'>

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
            <h2 className='mr-[30px] text-center self-center font-semibold text-[#000000] text-[30px] md:text-[40px] leading-tight mb-10 md:mb-15'>Why mobile money wins for bill pay</h2>

            <div className='max-w-[280px] md:max-w-7xl self-center flex flex-row mb-[150px]'>
            <div className='self-center hidden md:flex rounded-3xl w-[472px] h-[341px] justify-center bg-[#0065ff]'>
            <div className='self-center mr-20 flex flex-col justify-between w-[250px] md:w-80 h-[170px]'>
            <div className='w-full flex flex-row items-center rounded-xl shadow-sm bg-white border-purple-500 border-2 h-[44px] ml-10'>
              <p className='ml-[20px] text-black font-regular font-[20px]'>M-Pesa</p>
              </div>

              <div className='w-full flex flex-row items-center rounded-xl shadow-sm bg-white border-purple-500 border-2 h-[44px] mr-10'>
              <p className='ml-[20px] text-black font-regular font-[20px]'>MTN Mobile Money</p>
              </div>

              <div className='w-full flex flex-row items-center rounded-xl shadow-sm bg-white border-purple-500 border-2 h-[44px] ml-10'>
              <p className='ml-[20px] text-black font-regular font-[20px]'>Airtel Money</p>
              </div>

            </div>
            </div>

              <div className='ml-[200px] max-w-[450px] flex flex-col  self-center'>
              <h2 className='text-start font-semibold text-[#000000] text-[24px] md:text-[36px] leading-tight mb-3'>Seamless account linking</h2>
              <p className='text-start font-regular text-[#000000] text-[18px] md:text-[20px] leading-tight mb-10'>No friction, no drop-offs. LinQ makes it easy for customers to connect their mobile money wallets, bank accounts, or crypto wallets instantly—so every connection becomes a completed transfer.
              </p>

              </div>
            </div>

 

            </section>

            <section
            className=" flex flex-col items-start pt-0 pb-[500px] bg-[url('/images/main-background.png')] bg-cover bg-top bg-no-repeat"
          >
            <div className='px-[40px] py-20 flex flex-col md:flex-row justify-center bg-black w-full'>
            <div className='justify-center items-center flex flex-col'>
            <div className="self-center border-1 shadow-md border-gray-300 bg-white py-1 w-[140px] rounded-[30px] mb-10"> 
            <h2 className="text-[18px] font-medium text-black text-center">Integration</h2>
            </div>
              <h1 className='ltext-center leading-tight text-[#fcfcfd] font-semibold text-[40px]'>
              Build the billing stack that fits
              </h1>
              <p className='self-center max-w-xl text-center text-[#eeeeee] font-regular text-[18px] mt-10 mb-4'>Skip the complex infrastructure and lengthy set up.<br />
Our prebuilt SDKs, quick start templates, and dashboard-guided 
configuration let you integrate and go live in hours, not weeks.</p>
            
            </div>
            <div className='ml-[100px] mt-[40px] md:mt-0 w-[250px] md:w-[548px] h-[700px] md:h-[523px] bg-white rounded-2xl px-[20px] md:px-[50px] py-[20px] md:py-[70px]'>
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