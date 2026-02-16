"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Zap, Send, ChevronLeft, ChevronRight, Linkedin} from 'lucide-react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import GetTheApp from "@/components/popup/getTheApp";
import { getUrlForDevice } from "@/lib/device";


export default function NewsPage() {

  const [showPopup, setShowPopup] = useState(false);

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 1 },
    tablet:  { breakpoint: { max: 1023.98, min: 464 }, items: 2, slidesToSlide: 1 },
    mobile:  { breakpoint: { max: 463.98,  min: 0 }, items: 1, slidesToSlide: 1 }
  };

  const [showDropdown, setShowDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

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
      <section className="w-full bg-[#ffffff]" role="banner" aria-label="Main navigation">
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
      </section>


      {/* Hero Section */}
        <section className="relative bg-[#0e0f0c] text-white h-[450px]">
          <Image src="/images/newsbanner.png" alt="" fill className="object-cover object-center" priority />
        </section>  

      {/* About Us Section */}
      <div className="bg-white flex items-center px-8 md:px-16 py-16">
        <div className="max-w-[140rem] w-full flex flex-col justify-center items-center">
        <div className="flex-shrink-0 mb-10">
          <Link href="/about">
              <Button className="bg-[#0065ff] hover:bg-[#0052cc] text-white px-8 py-5 rounded-full text-lg font-medium">
                Read all about us
              </Button>
              </Link>
            </div>
          <h1 className="text-[#000000] text-4xl font-bold mb-10">News & Media</h1>

          <div className="flex justify-center">
            <div className="text-[#000000] text-lg leading-relaxed max-w-md text-center">
              <p>Stay connected with StellarPay's news and developments - plus direct access to our press team.</p>
            </div>
          </div>

          <div className="max-w-[1470px] w-[280px] md:w-xl rounded-[30px] mt-16 bg-blue-50 p-8 py-12 md:py-16 flex flex-col items-center justify-between gap-10">
          <div className="flex-1 max-w-lg">
            <h2 className="text-4xl text-center font-semibold text-[#0E0F0C] mb-8 font-[500] ">Press inquiries</h2>
            <p className="text-[#000000] text-xl font-[400] mb-4 text-start md:text-center">Got a media enquiry? Get in touch with us at discovery@stellarpay.app. </p>
            <p className="text-[#000000] text-xl font-[400] mb-8 text-start md:text-center">
            Please note this email can’t respond to customer requests.</p>
            <Button className="bg-[#0065ff] hover:bg-[#0052cc] text-white px-8 py-5 rounded-full text-lg font-medium mx-auto block leading-none flex items-center justify-center" onClick={() => getUrlForDevice(() => {setShowPopup(true)})}>Get in touch</Button>
          </div>
        </div>
        </div>
      </div>

      



      {/* Latest Section */}
      <div className="w-full max-w-5xl mx-auto px-4 py-16 mb-8">
        {/* Header */}
        <h2 className="text-5xl font-medium text-[#000000] mb-16 text-left">Latest news</h2>
        {/* Timeline Cards Container */}
        <div className="relative">
          {/* Cards Grid */}
          
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Card 1 - June 2024 */}
            <a href="https://substack.com/inbox/post/171660194?r=95wx4&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false&triedRedirect=true">
            <div className="bg-white rounded-2xl shadow-sm border border-[#d9d9d9] overflow-hidden">
              <div className="bg-[#010e32] flex items-center justify-center">
              <Image src="/images/genius-act-article-cover.png" alt="" width={400} height={400} />
              </div>
              <div className="px-8 py-8 h-97 flex flex-col">
                <div>
              <h3 className="text-lg font-[500] text-[#000000] mb-2">Aug 22, 2025</h3>
                <h3 className="text-2xl font-[700] text-[#000000] mb-2">One Big Beautiful Bill and the GENIUS Act: A New Era for Cross-Border Payments</h3>
                <h3 className="text-gray-500 text-xl leading-[1.05] mb-8">Author: Tommy Ruggles</h3>
                </div>
                <p className="text-[#000000] text-xl leading-[1.05] mt-auto mb-[1px]">
                The landscape for cross-border payments just changed overnight.
                </p>
              </div>
            </div>
            </a>


            <a href="https://www.flagright.com/post/stellarpay-chooses-flagright-for-transaction-monitoring-aml-screening">
            <div className="bg-white rounded-2xl shadow-sm border border-[#d9d9d9] overflow-hidden">
              <div className="bg-[#010e32] flex items-center justify-center">
              <Image src="/images/flagright-square-2.png" alt="" width={400} height={400} />
              </div>
              <div className="px-8 py-8 h-99 flex flex-col">
                <div>
              <h3 className="text-lg font-[500] text-[#000000] mb-2">Jul 17, 2025</h3>
                <h3 className="text-2xl font-[700] text-[#000000] mb-2">StellarPay announces partnership with Flagright</h3>
                <h3 className="text-gray-500 text-xl leading-[1.05] mb-8">Author: Joseph Ibitola</h3>
                </div>
                <p className="text-[#000000] text-xl leading-[1.05] mt-auto mb-[1px]">
                StellarPay Chooses Flagright for Transaction Monitoring & AML Screening.
                </p>
              </div>
            </div>
            </a>


            <a href="https://substack.com/@catangana/p-161829302">
            <div className="bg-white rounded-2xl shadow-sm border border-[#d9d9d9] overflow-hidden">
              <div className="bg-[#010e32] flex items-center justify-center">
              <Image src="/images/reflections-square.png" alt="" width={400} height={400} />
              </div>
              <div className="px-8 py-8 h-96 flex flex-col">
              <div>
              <h3 className="text-lg font-[500] text-[#000000] mb-2">Apr 21, 2025</h3>
                <h3 className="text-2xl font-[700] text-[#000000] mb-2">StellarPay: Reflections as we near launch</h3>
                <h3 className="text-gray-500 text-xl leading-[1.05]">Author: Christian Atangana</h3>
                </div>
                <p className="text-[#000000] text-xl leading-[1.05] mt-auto mb-[1px]">
                The journey of a thousand miles starts with the first step.
                </p>
              </div>
            </div>
            </a>

            <a href="https://substack.com/home/post/p-152662510">
            <div className="bg-white rounded-2xl shadow-sm border border-[#d9d9d9] overflow-hidden">
              <div className="bg-[#010e32] flex items-center justify-center">
              <Image src="/images/financial-innovation-square.png" alt="" width={400} height={400} />
              </div>
              <div className="px-8 py-8 h-96 flex flex-col">
                <div>
              <h3 className="text-lg font-[500] text-[#000000] mb-2">Dec 06, 2024</h3>
                <h3 className="text-2xl font-[700] text-[#000000] mb-2">Rethinking Financial Innovation for the African Continent</h3>
                <h3 className="text-gray-500 text-xl leading-[1.05]">Author: Christian Atangana</h3>
                </div>
                <p className="text-[#000000] text-xl leading-[1.05] mt-auto mb-[1px]">
                Over the years, Africa has become synonymous with untapped potential.
                </p>
              </div>
            </div>
            </a>

          </div>


        </div>
      </div>
      
      <section className="bg-white flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-16 w-full">
          <div className="space-y-8">
            <h1 className="text-[#000000] text-5xl font-semibold leading-tight text-center">
              Questions? We're here to help.
            </h1>

            <div className="max-w-lg mx-auto">
              <p className="text-[#000000] text-xl leading-relaxed font-semibold">
                {
                  "Already a customer? We're here to help - chat with us in-app or check out our Contact Us page for more ways to reach us."
                }
              </p>
            </div>

            <Button className="bg-[#0065ff] hover:bg-[#0052cc] text-white px-8 py-7 rounded-full text-lg font-medium mx-auto block leading-none mb-10 flex items-center justify-center" onClick={() => getUrlForDevice(() => {setShowPopup(true)})}>Get StellarPay</Button>
          </div>
        </div>
      </section>

      {/* Store Badges */}
      <section 
        className="bg-[#0363fe] flex flex-col items-center justify-center px-4 md:px-0 py-8 md:py-30 text-center"
      >
        <h1 
          className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl text-white font-bold leading-tight mb-4 md:mb-6 max-w-4xl mx-auto"
        >
          Meet StellarPay
        </h1>
        <p 
          className="text-base md:text-lg lg:text-xl xl:text-3xl text-white font-semibold mb-8 md:mb-10 max-w-2xl mx-auto"
        >
          A new way to money. 
        </p>

        <div 
          className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 mb-5 md:mb-5 px-4"
        >
          <a href="https://apps.apple.com/app/stellarpay/id6450455712">
            <Image src="/images/appleStore.png" alt="apple" width={150} height={70} className="w-[120px] sm:w-[150px] h-auto" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.stellar.mobile">
            <Image src="/images/googleStore.png" alt="google" width={167} height={70} className="w-[134px] sm:w-[167px] h-auto" />
          </a>
        </div>
        </section>
     
     
    
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

      {showPopup && <GetTheApp onClose={() => setShowPopup(false)} onSubmit={() => {}} />}

    </main>
  );
} 