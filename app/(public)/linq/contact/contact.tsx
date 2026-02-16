"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Zap, Send, ChevronLeft, ChevronRight, Linkedin} from 'lucide-react';
import Carousel from "react-multi-carousel";
import { useRouter } from "next/navigation";
import "react-multi-carousel/lib/styles.css";
import { AnimatePresence, motion } from 'framer-motion';
import { useAllCountry_Phone } from "@/lib/country_query";
import { Country_Phone } from "@/lib/country.types";
import { useScrollAnimation } from '@/lib/useScrollAnimation';
import { ExpandCard } from "@/components/ui/expandCard";
import { act, useEffect, useMemo, useState } from "react";
import Head from "next/head";
import GetTheApp from "@/components/popup/getTheApp";
import { getDeviceType, getUrlForDevice } from "@/lib/device";
import { saveContactInfo } from "./save_contact_info";
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from "@headlessui/react";


export default function Contact() {

          const router = useRouter();

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1400 }, items: 3, slidesToSlide: 1 },
    tablet:  { breakpoint: { max: 1399.99, min: 800 }, items: 2, slidesToSlide: 1 },
    mobile:  { breakpoint: { max: 799.99,  min: 0 }, items: 1, slidesToSlide: 1 }
  };

  const {data: countries, isLoading} = useAllCountry_Phone();

  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query) return countries;
  
    const lowerQuery = query.toLowerCase();
  
    return countries.filter(
      (c) =>
        c.code.toLowerCase().includes(lowerQuery) ||
        c.areaCode?.includes(lowerQuery)
    );
  }, [countries, query]);

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
  const [isFocused, setIsFocused] = useState(false);
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);
  const [drop3, setDrop3] = useState(false);
  const [field1, setField1] = useState("");
const [field2, setField2] = useState("");
const [field3, setField3] = useState("");
const [field4, setField4] = useState("");
const [countryCode, setCountryCode] = useState<Country_Phone | null>({ code: 'US', flag: 'https://flagcdn.com/w320/us.png', areaCode: '+1' });
const [field6, setField6] = useState("");
const [showLinqAd, setShowLinqAd] = useState(false);


  // needed for blog component
  type ArrowProps = {
    next?: () => void;
    previous?: () => void;
    onClick?: () => void;
    carouselState?: { currentSlide: number; totalItems: number; slidesToShow: number };
  };

  useEffect(() => {
    setTimeout(() => {
      const a = getDeviceType();
      console.log(a)
      if (a !== 0) {
      } else {
        setShowLinqAd(true);
      }
    }, 1000);
  }, []);
  

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
{/* 
    {showLinqAd && (<motion.div className='pl-[5px] pr-[12px] z-100 flex-row items-center justify-between hidden md:flex fixed top-0 bg-[#0363fe] h-[55px] w-full' transition={{ duration: 0.2, ease: "easeOut" }} initial={{top: '-80px'}} animate={{top: '0px'}}>
          <div className='flex flex-row items-center justify-center w-full'>
          <a href='/'>
            <p className='text-white text-center text-xs md:text-[15px]'>🎉 Meet StellarPay! True bilateral money movement at your fingertips →</p>
          </a>
          <Link href="/">
          <div className="ml-15 border-t-1 border-gray-700 bg-black rounded-lg py-2 px-5 flex flex-row items-center justify-center space-x-2">
            <p className='text-white font-medium text-xs md:text-[16px]'>See what's new</p>
          </div>
        </Link>
          </div>
          <div><Image src="/images/close.png" alt='EN' width={600} height={600} className='w-[30px] h-[30px]' onClick={() => setShowLinqAd(false)}/></div>
        </motion.div>)}
        {showLinqAd && (<motion.div className='hidden md:block h-[65px] w-full'></motion.div>)} */}

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
              <nav className="hidden lg:flex items-center space-x-4 md:space-x-6">
            <Link href="http://meetgeorge.app/products">
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
        <Link href="/linq/contact">
          <div className="flex flex-row items-center justify-center space-x-2">
            <p className='text-gray-600 font-regular text-xs md:text-[15px]'>Resources</p>
          </div>
        </Link>
        <Link href="/linq/contact">
          <div className="flex flex-row items-center justify-center space-x-2">
            <p className='text-gray-600 font-regular text-xs md:text-[15px]'>Pricing</p>
          </div>
        </Link>
        <Link href="/linq/contact">
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
          <div className="flex flex-row lg:hidden items-center justify-center mr-1">
            <p className='text-gray-600 font-medium text-xs md:text-[15px]'>Use Cases</p>
          </div>
        </Link>
            <Link href="/linq/contact">
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


      <section
            id='contact'
            className="mt-0 md:mt-10 flex flex-col items-start pt-0 px-8 md:px-20 pb-[70px]"
          >
            <div className='max-w-7xl self-center py-10 flex flex-col lg:flex-row justify-between bg-black rounded-2xl w-full'>

            <div className='block md:hidden w-[240px] md:w-[324px] flex flex-col mx-auto md:mr-[160px]'>
              <h1 className='leading-tight text-center md:text-start text-[#fcfcfd] font-semibold text-[28px] sm:text-[28px] md:text-[40px] mt-[10px] md:mt-[40px]'>
              Boost conversion with the highest standard in account linking
              </h1>
            </div>
         
            <div className='self-center mt-[40px] md:mt-0 mx-5 md:mx-10 w-auto md:w-[548px] md:h-[523px] bg-white rounded-2xl px-[20px] md:px-[50px] py-[20px] md:py-[60px]'>
  <h1 className='leading-tight text-black font-semibold text-[30px] mb-6'>
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
    <Combobox value={countryCode} onChange={(value) => value && setCountryCode(value)}>
  <div className="relative inline-block">
    {/* Input + Button */}
    <div className="flex flex-row items-center">
      <div className='pl-[15px] h-[50px] border flex flex-row border-gray-300 w-full rounded-lg justify-start'>
        <div className='flex flex-row items-center min-w-0 w-auto max-w-[150px]'>
      <img
            src={countryCode?.flag || ''}
            alt={`flag`}
            className="my-auto w-6 h-4 mr-2 object-cover"
          />
      <ComboboxInput
        className={`my-auto bg-transparent flex-1 p-2 min-w-0 w-auto text-black text-[16px] font-normal text-right ${
          isFocused ? 'placeholder:text-gray-300' : 'placeholder:text-black'
        }
        ${
          (countryCode !== null && countryCode?.areaCode?.length !== undefined &&countryCode?.areaCode?.length > 2) ? 'max-w-[100px]' : 'max-w-[80px]'
        }
        `}
        defaultValue={countryCode?.code + ' (' + countryCode?.areaCode + ')' || '+1'}
        placeholder={countryCode?.code + ' (' + countryCode?.areaCode + ')' || '+1'}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(event) => setQuery(event.target.value)}
      />
            <ComboboxButton className="ml-0">
        <p className="text-gray-300 text-[10px] md:text-[16px] xl:text-[18px] font-bold">▼</p>
      </ComboboxButton>
      </div>
      </div>

    </div>

    {/* Dropdown positioned directly under input */}
    <ComboboxOptions className="absolute top-full left-0 mt-1 w-[150px] max-h-[200px] overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg z-10">
      {filtered.map((item) => (
        <ComboboxOption
          key={item.code}
          value={item}
          className="flex flex-row items-center px-3 py-2 text-black text-[14px] hover:bg-gray-100 cursor-pointer"
        >
          <img
            src={item.flag || ''}
            alt={`${item.code} flag`}
            className="w-6 h-4 mr-2 object-cover"
          />
          {item.areaCode || ''} ({item.code})
        </ComboboxOption>
      ))}
    </ComboboxOptions>
  </div>
</Combobox>
      <input
        type="text"
        inputMode="numeric"
        placeholder={isPhoneFocused ? 'Phone (no country code)' : 'Phone number'}
        className="border border-gray-300 rounded-lg p-3 w-full"
        onChange={(e) => setField6(e.target.value)}
        onFocus={() => setIsPhoneFocused(true)}
        onBlur={() => setIsPhoneFocused(false)}
      />
    </div>

  </div>

  <div className='mt-6'>By submitting this form, I confirm that I have read and understood Stellar's <u><a href='https://www.stellarpay.app/privacy-policy'>Privacy Statement</a></u> </div>

  {/* Submit Button */}
  <button
    onClick={() => {
      saveContactInfo(field1, field2, field3, field4, countryCode?.code || '', countryCode?.areaCode || '', field6);
    }}
    className="mt-6 bg-gradient-to-b from-[#232323] to-[#494949] text-white rounded-lg px-6 py-2 text-md"
  >
    Talk with our team
  </button>
</div>
<div className='hidden md:block w-[240px] md:w-[324px] flex flex-col mx-auto md:mr-[160px]'>
              <h1 className='leading-tight text-center md:text-start text-[#fcfcfd] font-semibold text-[24px] sm:text-[30px] md:text-[40px] mt-[10px] md:mt-[40px]'>
              Boost conversion with the highest standard in account linking
              </h1>
            </div>
            </div>
            
            </section>
         
      

        {/* Footer */}
        <footer 
        className="bg-[#000000] text-[#ffffff] px-4 md:px-6 py-16"
      >



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
                <Link href="/linq/contact" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-[16px] font-light">
                  Pricing
                </Link>
                <Link href="/linq/contact" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-[16px] font-light">
                  Service Status
                </Link>
                <Link href="/news" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-[16px] font-light">
                  News & Updates
                </Link>
                <Link href="/linq/contact" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-[16px] font-light">
                  Contact us
                </Link>
                <div className="hidden lg:block flex flex-col mt-20">
                <p className="text-[#ffffff] opacity-80 text-xs md:text-sm font-light">
                © 2026 Stellar Technologies, inc.
                </p>
                </div>
              </div>
            </div>

            {/* Stellar Products */}
            <div className="text-left">
              <Link href='http://www.meetgeorge.app/products'>
            <h3 className="font-bold mb-3 md:mb-4 text-sm md:text-[17px] text-[#ffffff] md:text-base">Products</h3>
            </Link>
              <div className="space-y-1 md:space-y-4">
                <Link href="http://www.stellarpay.app" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-[16px] font-light">
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

            <div className="block lg:hidden text-center space-y-3 md:space-y-4 mt-10 md:mt-0 mb-10">
          <div className="grid grid-cols-1 ">
            <div className="lg:col-span-1 text-left">
              <div className="flex flex-row">
              </div>
            <p className="text-[#ffffff] opacity-80 text-xs md:text-sm">© 2026 Stellar Technologies, inc.</p>
                </div>
          </div>
          </div>


          </div>

          


          {/* Bottom section */}
          <div className="hidden sm:block ml-[80px] md:ml-[150px] max-w-[22%] text-center space-y-3 md:space-y-4">
          </div>
        </div>
      </footer>
    </main>
    </>
  );
} 