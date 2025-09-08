"use client";

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Shield, CheckCircle, Landmark, ChevronDown, ChevronUp, Linkedin } from 'lucide-react';
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/lib/useScrollAnimation';
import { useEffect, useMemo, useState } from 'react';
import GetTheApp from '@/components/popup/getTheApp';
import { useCurrencyConversion, useExchangeRate } from '@/lib/payment_queries';
import type { CurrencyListOption } from '@/lib/country.types';
import { currencies } from '@/lib/country.types';


function useConvertedAmount(fromCurrency: string, toCurrency: string, debouncedAmount: any) {
  const { data: conversionReceive } = useCurrencyConversion(
    fromCurrency,
    debouncedAmount.toString(),
    toCurrency,
    true
  );
  
  if (!conversionReceive || !toCurrency) return 0.00;
  const converted = conversionReceive[toCurrency]["amount"];
  return parseFloat(converted.toFixed(2)) || 0.00;
}

const getArrivalDay = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const today = new Date();
  const dayOfWeek = today.getDay();
  const arrivalDay = days[dayOfWeek + 1];
  return arrivalDay;
}

const getSavings = (inputAmount: number) => {
  return Math.round((inputAmount * 0.040387) * 100) / 100;
}

const getFees = (amountInUSD: number) => {
  if (!amountInUSD || amountInUSD <= 0) {
    return { ACHFee: 0, ourFee: 0, totalFee: 0, amountWeWillConvert: 0 };
  }

  const ACHFee = Math.round(amountInUSD * 0.00279 * 100) / 100;
  const ourFee = Math.round(amountInUSD * 0.00427 * 100) / 100;
  const totalFee = Math.round((ACHFee + ourFee) * 100) / 100;
  const amountWeWillConvert = Math.round((amountInUSD - totalFee) * 100) / 100;

  return { ACHFee, ourFee, totalFee, amountWeWillConvert };
};

export default function HomePage() {

  const [showPopup, setShowPopup] = useState(false);

  // React Multi Carousel implementation source: https://www.npmjs.com/package/react-multi-carousel
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 1 },
    tablet:  { breakpoint: { max: 1023.98, min: 464 }, items: 2, slidesToSlide: 1 },
    mobile:  { breakpoint: { max: 463.98,  min: 0 }, items: 1, slidesToSlide: 1 }
  };
  

  type ArrowProps = {
    next?: () => void;
    previous?: () => void;
    carouselState?: { currentSlide: number; totalItems: number; slidesToShow: number };
  };

  const ButtonGroup = ({ next, previous, carouselState, ...rest }: ArrowProps) => {
    if (!carouselState) return null;
    const leftDisabled = carouselState?.currentSlide === 0;
    const rightDisabled = carouselState?.currentSlide + carouselState?.slidesToShow >= carouselState?.totalItems;
    return (
      <motion.div 
        className="flex justify-center gap-4 mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
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
      </motion.div>
    );
  };

  // Scroll animation hooks
  const heroAnimation = useScrollAnimation(0);
  const featuresAnimation = useScrollAnimation(0.2);
  const calculatorAnimation = useScrollAnimation(0.4);
  const securityAnimation = useScrollAnimation(0.2);
  const appAnimation = useScrollAnimation(0.3);
  const instantAnimation = useScrollAnimation(0.4);
  const mobileAnimation = useScrollAnimation(0.3);
  const securitySectionAnimation = useScrollAnimation(0.2);
  const meetAnimation = useScrollAnimation(0.3);
  const georgeAnimation = useScrollAnimation(0.2);
  const footerAnimation = useScrollAnimation(0.1);

  const [query, setQuery] = useState('');
  const [amount, setAmount] = useState(100);
  const [debouncedAmount, setDebouncedAmount] = useState(0);
  const [achFee, setAchFee] = useState(0);
  const [ourFee, setOurFee] = useState(0);
  const [totalFee, setTotalFee] = useState(0);
  const [amountWeWillConvert, setAmountWeWillConvert] = useState(0);
  const [guaranteedRate, setGuaranteedRate] = useState(0);
  const [fromCurrency, setFromCurrency] = useState({ code: "USD", display_code: "USD", name: "United States Dollar" });
  const [toCurrency, setToCurrency] = useState({ code: "XAF", display_code: "FCFA", name: "Central Africa" });
  
  const filtered = useMemo(() => {
    if (!query) return currencies;
  
    const lowerQuery = query.toLowerCase();
  
    return currencies.filter(
      (c) =>
        c.code.toLowerCase().includes(lowerQuery) ||
        c.display_code.toLowerCase().includes(lowerQuery) ||
        c.name.toLowerCase().includes(lowerQuery)
    );
  }, [currencies, query]);

  useEffect(() => {
    async function fetchFees() {

      const fees = getFees(amount);
      setAchFee(fees.ACHFee);
      setOurFee(fees.ourFee);
      setTotalFee(fees.totalFee);
      setAmountWeWillConvert(fees.amountWeWillConvert);
      setGuaranteedRate(fees.amountWeWillConvert * 0.9319);
    }
    if (amount && amount > 0) {
      fetchFees();
    }
  }, [amount, fromCurrency, toCurrency]);


  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedAmount(amount);
    }, 300);
    return () => clearTimeout(timer);
  }, [amount]);



  return (
      <main>

      {/* Navigation/Header */}
      <motion.section 
        className="w-full bg-[#ffffff]" 
        role="banner" 
        aria-label="Main navigation"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="px-4 py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Left side - Logo and navigation */}
            <div className="flex items-center space-x-2 md:space-x-8">
              <Link href="/">
                <Button variant="ghost" className="text-xl md:text-[24px] mb-1 font-bold text-[#191c1f]">StellarPay</Button>
              </Link>
              <nav className="hidden md:flex items-center space-x-1">
              <Link href="/">
              <Button variant="ghost" className="text-[#1b6ce8] hover:text-[#1b6ce8] hover:bg-[#f7f7f7] rounded-full px-4 md:px-6 py-2 text-xs md:text-[17px] font-medium font-bold">Personal</Button>
              </Link>
              <Link href="/features">
                <Button variant="ghost" className="text-[#191c1f] hover:bg-[#f7f7f7] rounded-full px-4 md:px-6 py-2 text-xs md:text-[17px] font-medium font-semibold">Features</Button>
              </Link>
                <Link href="https://www.meetgeorge.app/">
                <Button variant="ghost" className="text-[#191c1f] hover:bg-[#f7f7f7] rounded-full px-4 md:px-6 py-2 text-xs md:text-[17px] font-medium font-semibold">George</Button>
                </Link>
              </nav>
            </div>

            {/* Right side - About us, language, auth */}
            <div className="flex items-center space-x-2 md:space-x-6">
              <Link href="\about" className="hidden sm:block">
                <Button variant="ghost" className="text-[#191c1f] hover:bg-[#f7f7f7] text-xs md:text-[17px] font-medium font-semibold">About us</Button>
              </Link>
              <div className="hidden md:flex items-center space-x-2">
              <div>
                  <Image src="/images/us-flag.png" alt='EN' width={20} height={20} />
                  </div>
                    <span className="text-[#191c1f] text-xs md:text-[17px] font-medium font-semibold">EN</span>
              </div>
              <Link href="/signin">
                <Button variant="ghost" className="text-[#191c1f] hover:bg-[#f7f7f7] text-xs md:text-[17px] font-medium font-semibold">Log in</Button>
              </Link>
              <Link href="/signup">
                <Button variant="default" className="bg-[#0065ff] hover:bg-[#0065ff]/90 text-white rounded-full px-3 md:px-6 py-2 text-xs md:text-[17px] font-medium font-semibold">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Hero Section */}
      <motion.section 
        className="flex flex-col items-center justify-center px-4 md:px-0 py-20 md:py-32 bg-white text-center"
        ref={heroAnimation.ref}
        initial={heroAnimation.initial}
        animate={heroAnimation.animate}
        transition={heroAnimation.transition}
      >
        <motion.div 
          className="w-full max-w-[1098px] flex items-center justify-center mx-auto px-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="font-black text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[91.9px] leading-[1.05] max-w-full mb-14 md:mb-20 ">
            MONEY THAT MOVES<br />AT THE SPEED OF NOW
          </h1>
        </motion.div>
        <motion.p 
          className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-700 mb-4 md:mb-10 max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Send and receive globally.<br/>Move money where it matters — from splitting dinner with friends to sending to family overseas. Instant, simple and ultra-secure.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-4 mb-9 xl:mb-0 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <a onClick={() => setShowPopup(true)} className="px-8 sm:px-12 py-3 lg:py-4 rounded-full font-semibold bg-black text-white shadow hover:bg-black transition text-sm sm:text-base">Get the app</a>
        </motion.div>
        {showPopup && <GetTheApp onClose={() => setShowPopup(false)} onSubmit={() => {}} />}
        {/* Hero Illustration */}
        <motion.div 
          className="w-full flex justify-center mt-0 px-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
        <div className="relative hidden lg:block w-[calc(100%-20px)] overflow-hidden">
          <Image 
            src="/images/Picture27.png" 
            alt="StellarPay Hero Illustration" 
            width={1800} 
            height={1200}
            className="w-400px md:w-full lg:w-full h-auto relative right-[-40px]"
          />
        </div>
        <div className="relative block lg:hidden">
        <Image 
            src="/images/main-intro-new.png" 
            alt="StellarPay Hero Illustration" 
            width={1200} 
            height={800}
            className="w-400px md:w-700px lg:w-[1100px] h-auto"
          />
        </div>
        </motion.div>

        <motion.div 
          className="w-full flex flex-row justify-center items-center gap-5 px-4 mt-[30px] lg:mt-[-50px] xl:mt-[-110px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
                    <a onClick={() => window.open("https://c2s.app/q/hXL6WV7")} className="w-[100px] lg:w-[150px] py-3 rounded-full font-semibold bg-[#0065ff] text-white shadow transition text-sm sm:text-base">Send</a>
                    <a onClick={() => window.open("https://c2s.app/q/hXL6WV7")} className="w-[100px] lg:w-[150px] py-3 rounded-full font-semibold bg-black text-white shadow hover:bg-black transition text-sm sm:text-base">Receive</a>
                    <a onClick={() => window.open("https://c2s.app/q/hXL6WV7")} className="w-[100px] lg:w-[150px] py-3 rounded-full font-semibold bg-black text-white shadow hover:bg-black transition text-sm sm:text-base">Spend</a>
        </motion.div>
      </motion.section>
     
     
      {/* === StellarPay Section === */}
      <motion.section 
        className="bg-white py-0 pb-1 px-4"
        ref={calculatorAnimation.ref}
        initial={calculatorAnimation.initial}
        animate={calculatorAnimation.animate}
        transition={calculatorAnimation.transition}
      >
        <div className="bg-black text-white mx-auto py-8 md:py-16 px-4 md:px-10 w-full max-w-none">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            {/* Left Content */}
            <motion.div 
              className='pt-4 md:pt-6 pl-4 md:pl-6 lg:pl-12'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-12">
                Do more with StellarPay
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl font-semi-bold mb-6 md:mb-12 font-semibold">
                Money should move like messages — <br className="hidden sm:block" /> instantly, everywhere.
              </p>
              <p className="text-base md:text-lg mb-6 md:mb-12">
                Use our calculator to check prices for transfers in any of 40+ currencies. Whether scheduling
                payments or putting down deposits — over half our transfers get there in under 20 seconds. Use it
                to believe it.
              </p>
              <button className="bg-[#0065ff] hover:bg-[#0065ff]/90 text-white px-4 md:px-6 py-4 rounded-full font-semibold text-sm md:text-lg" onClick={() => setShowPopup(true)}>
                Learn how to send money
              </button>
            </motion.div>

            {/* Right Content (Image) */}
            <motion.div 
              className="pt-4 md:pt-6 w-full flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
                <div
                    className="rounded-[25px] shadow-xl w-full max-w-[500px] h-[650px] bg-white"
                  >
                    <div className="mx-[25px] my-[25px]">
                
                  <div className="items-center p-1 rounded-md border border-gray-300">
                  <div className="flex flex-row justify-between items-center">
                    <input type="text" className="w-[150px] p-2 text-black font-bold text-[24px] rounded-md" defaultValue={amount || 0} inputMode="decimal" pattern="[0-9]*\.?[0-9]*" onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9.]/g, '');
                      const parts = value.split('.');
                      e.target.value = parts.length > 2 ? parts[0] + '.' + parts.slice(1).join('') : value;
                      setAmount(parseFloat(value));
                    }} placeholder="0" />
                    <div className="relative">
                    <Combobox value={fromCurrency} onChange={(value) => value && setFromCurrency(value)}>
                      <ComboboxInput
                        className="max-w-[80px] mr-[0px] bg-transparent p-2 text-black placeholder-black text-[24px] rounded-md font-bold text-right"
                        defaultValue={fromCurrency?.display_code || 'USD'}
                          placeholder={fromCurrency?.display_code || 'USD'}
                        onChange={(event) => setQuery(event.target.value)}
                      />
                      <ComboboxButton>
                        <p className="text-gray-300 text-[20px] mr-[10px] font-bold">▼</p>
                      </ComboboxButton>
                          <ComboboxOptions className="max-h-[200px] overflow-x-hidden overflow-y-auto absolute top-full right-0 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                        {filtered.map((item) => (
                          <ComboboxOption className="px-3 py-2 text-black text-[14px] hover:bg-gray-100 cursor-pointer" key={item.code} value={item}>
                            {item.name || ''}
                          </ComboboxOption>
                        ))}
                      </ComboboxOptions>
                    </Combobox>
                    </div>
</div>

                  </div>
                  <p className="text-[#454745] text-[16px]">You send exactly</p>
                  <div className="flex flex-row justify-between items-center mt-[10px]">
                    <div className="flex flex-row items-center mb-[5px]">
                      <p className="text-gray-300 mr-[8px] text-[18px]">•</p>
                      <p className="text-black font-semibold text-[18px]">{achFee !== null ? `${achFee} ${fromCurrency?.display_code ?? "USD"}` : "Loading..."}</p>
                    </div>
                  <p className="text-[18px] text-[#0065ff] font-semibold">Connected bank account (ACH) fee</p>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center mb-[5px]">
                      <p className="text-gray-300 mr-[8px] text-[18px]">•</p>
                      <p className="text-black font-semibold text-[18px]">{ourFee !== null ? `${ourFee} ${fromCurrency?.display_code ?? "USD"}` : "Loading..."}</p>
                    </div>
                  <p className="text-[18px] text-[#454745]">Our fee</p>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center mb-[5px]">
                    <p className="text-gray-600 mr-[8px] text-[18px] font-semibold">-</p>
                      <p className="text-black font-semibold text-[18px]">{totalFee !== null ? `${totalFee} ${fromCurrency?.display_code ?? "USD"}` : "Loading..."}</p>
                    </div>
                  <p className="text-[18px] text-[#454745]">Total fees</p>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center mb-[5px]">
                    <p className="text-gray-600 mr-[5px] text-[18px] font-semibold">=</p>
                      <p className="text-black font-semibold text-[18px]">{amountWeWillConvert !== null ? `${amountWeWillConvert} ${fromCurrency?.display_code ?? "USD"}` : "Loading..."}</p>
                    </div>
                  <p className="text-[18px] text-[#454745]">Total amount we'll convert</p>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center mb-[5px]">
                      <p className="text-gray-600 mr-[8px] text-[18px] font-semibold">*</p>
                      <p className="text-[#0065ff] font-semibold text-[18px]">0.9319 = {Math.round(guaranteedRate * 100) / 100} {fromCurrency?.display_code}</p>
                    </div>
                  <p className="text-[18px] text-[#0065ff] font-semibold">Guaranteed rate (8h)</p>
                  </div>
                  
                  <p className="text-[#454745] text-[16px] mt-[10px] mb-[5px]">Recipient gets</p>
                
                  <div className="items-center p-1 rounded-md border border-gray-300">
                  <div className="flex flex-row justify-between items-center">
                    <p className="w-[150px] p-2 text-black font-bold text-[24px] rounded-md">{Math.round(useConvertedAmount(fromCurrency?.code, toCurrency?.code, guaranteedRate) * 100) / 100}</p>
                    <div className="relative">
                    <Combobox value={toCurrency} onChange={(value) => value && setToCurrency(value)}>
                      <ComboboxInput
                        className="max-w-[80px] mr-[0px] bg-transparent p-2 text-black placeholder-black text-[24px] rounded-md font-bold text-right"
                        defaultValue={toCurrency?.display_code}
                          placeholder={toCurrency?.display_code}
                        onChange={(event) => setQuery(event.target.value)}
                      />
                      <ComboboxButton>
                        <p className="text-gray-300 text-[20px] mr-[10px] font-bold">▼</p>
                      </ComboboxButton>
                          <ComboboxOptions className="max-h-[200px] overflow-x-hidden overflow-y-auto absolute top-full right-0 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                          {filtered.map((item) => (
                          <ComboboxOption className="px-3 py-2 text-black text-[14px] hover:bg-gray-100 cursor-pointer" key={item.code} value={item}>
                            {item.name || ''}
                          </ComboboxOption>
                        ))}
                        </ComboboxOptions>
                        </Combobox>
                      </div>
                    </div>
                  </div>
                      <p className={`text-[${amount > 0 ? '#454745' : '#ffffff'}] text-[18px] mt-[10px]`}>You could save up to {getSavings(amountWeWillConvert * 0.9319)} {fromCurrency?.display_code}</p>
                      <p className={`text-[${amount > 0 ? '#454745' : '#ffffff'}] text-[18px] mt-[5px] mb-[5px]`}>Should arrive by {getArrivalDay()}</p>
                  </div>
                  <div className="flex items-center justify-center">
                  <button className="bg-[#ffffff] hover:bg-[#ffffff]/90 border border-[#0065ff] text-[#0065ff] rounded-full px-3 md:px-6 py-4 text-xs md:text-[18px] font-medium font-semibold w-[80%]" onClick={() => setShowPopup(true)}>
                    Compare price
                  </button>
                  </div>
                  <div className="flex items-center justify-center">
                  <button className="bg-[#0065ff] hover:bg-[#0065ff]/90 border border-[#0065ff] text-white rounded-full px-3 md:px-6 py-4 mt-[20px] text-xs md:text-[18px] font-medium font-semibold w-[80%]" onClick={() => setShowPopup(true)}>
                    Send money now
                  </button>
                  </div>
                </div>
            </motion.div>
          </div>
        </div>
      </motion.section>


      {/* 3 Icons Section */}
      <motion.section 
        className="bg-[#ffffff] py-8 md:py-12 px-4" 
        aria-labelledby="security-features"
        ref={featuresAnimation.ref}
        initial={featuresAnimation.initial}
        animate={featuresAnimation.animate}
        transition={featuresAnimation.transition}
      >
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-px bg-gray-200 mb-8 md:mb-12"></div> 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {/* Security Experts Feature */}
            <motion.div 
              className="flex items-start gap-3 md:gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#0065ff] rounded-full flex items-center justify-center">
                  <Landmark className="w-6 h-6 md:w-8 md:h-8 text-[#ffffff]" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-[#454745] text-sm md:text-base leading-relaxed font-semibold">
                  Secured by security experts with decades of experience protecting billions in transactions
                </p>
              </div>
            </motion.div>

            {/* Regulation Feature */}
            <motion.div 
              className="flex items-start gap-3 md:gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#0065ff] rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-[#ffffff]" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-[#454745] text-sm md:text-base leading-relaxed font-semibold">
                  Regulated by financial authorities and with licenses as a money transmitter in every country we operate
                </p>
              </div>
            </motion.div>

            {/* Support Feature */}
            <motion.div 
              className="flex items-start gap-3 md:gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#0065ff] rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 md:w-8 md:h-8 text-[#ffffff]" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-[#454745] text-sm md:text-base leading-relaxed font-semibold">
                  Always-on support with dedicated fraud and security teams at work 24/7 to keep your money safe
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      

      {/* One app section */}
      <motion.section 
        className="bg-white px-4 md:px-12 py-8 md:py-5 flex items-center justify-center"
        ref={appAnimation.ref}
        initial={appAnimation.initial}
        animate={appAnimation.animate}
        transition={appAnimation.transition}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 max-w-6xl py-8 md:py-12 pb-4 md:pb-8 mx-auto">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full md:w-auto"
          >
            <Image
              src="/images/oneapp.png" 
              alt="Person with money and heart glasses"
              width={470}
              height={590}
              className="w-full max-w-[470px] h-auto mx-auto"
            />
          </motion.div>

          {/* Right - Text Section */}
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              One app. Money transfers. Anywhere.
            </h2>
            <p className="font-medium text-gray-700 text-base md:text-lg mb-2 max-w-xl md:pr-10">
              Send money to friends across the street or family across the ocean —
              all from one StellarPay account.
            </p>
            <p className="font-medium text-gray-700 text-base md:text-lg mb-2 max-w-xl md:pr-10">
              Connect your account and make peer-to-peer or international payments
              in seconds.
            </p>
            <p className="font-medium text-gray-700 text-base md:text-lg mb-2 max-w-xl md:pr-10">No paperwork.</p>
            <p className="font-medium text-gray-700 text-base md:text-lg mb-6 md:mb-8 max-w-xl md:pr-10">
              No hidden fees. Just fast, connected money.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
              <a href="/signup">
              <button className="bg-blue-600 text-white px-4 md:px-6 py-3 rounded-full hover:bg-blue-700 transition text-sm md:text-base font-semi">
                Open an account
              </button>
              </a>
              <a href="about" className="underline hover:text-blue-800 font-semibold text-sm md:text-base">
                See how it works
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>


      {/* Instant availability section */}
      <motion.section 
        className="bg-white px-4 md:px-6 py-8 md:py-5 flex items-center justify-center"
        ref={instantAnimation.ref}
        initial={instantAnimation.initial}
        animate={instantAnimation.animate}
        transition={instantAnimation.transition}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl w-full">
          {/* Left - Text Section */}
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Instant availability, everywhere.
            </h2>
            <p className="font-medium text-gray-700 text-base md:text-lg mb-2 max-w-xl md:pr-10">
              When you send money with StellarPay, it's there — right away. 
            </p>
            <p className="font-medium text-gray-700 text-base md:text-lg mb-2 max-w-xl md:pr-20">
              No waiting, no agents, and no guessing. Just tap, send, track, and done. 
            </p>
            <p className="font-medium text-gray-700 text-base md:text-lg mb-6 md:mb-8 max-w-xl md:pr-20">
              Whether it's $5 for takeout or $500 for school fees, we move at the speed of life. 
            </p>

            <div className="flex justify-center md:justify-start">
              <a onClick={() => setShowPopup(true)}>
              <button className="bg-blue-600 text-white px-4 md:px-6 py-3 rounded-full hover:bg-blue-700 transition text-sm md:text-base">
                Try your first transfer
              </button>
              </a>
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full md:w-auto"
          >
            <Image
              src="/images/instant.png" 
              alt="Peole eating outside"
              width={450}
              height={330}
              className="w-full max-w-[450px] h-auto mx-auto"
            />
          </motion.div>
        </div>
      </motion.section>


      {/* Mobile money section */}
      <motion.section 
        className="bg-white px-4 md:px-6 py-6 md:py-3 flex items-center justify-center"
        ref={mobileAnimation.ref}
        initial={mobileAnimation.initial}
        animate={mobileAnimation.animate}
        transition={mobileAnimation.transition}
      >
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12 max-w-6xl w-full py-2 md:py-2">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full md:w-auto"
          >
            <Image
              src="/images/mobile.png" 
              alt="People eating outside"
              width={400}
              height={360}
              className="w-full max-w-[440px] h-auto mx-auto"
            />
          </motion.div>

          {/* Right - Text Section */}
          <motion.div 
            className="flex-1 text-center md:text-left mt-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Mobile money included. Just like it should be.
            </h2>
            <p className="font-medium text-gray-700 text-base md:text-lg mb-2">
              Connecting you directly with leading mobile money platforms like MTN Mobile Money, 
              Orange Money, and others — so your loved ones can revieve funds instantly, no matter 
              where they are or what device they use.</p>
              <p className="font-medium text-gray-700 text-base md:text-lg mb-2"> Whether it's sending money to a village in 
              Cameroon, paying school fees in Accra, or topping up a phone in Nairobi — StellarPay 
              works where real life happens.
            </p>
            <p className="font-medium text-gray-700 text-base md:text-lg mb-6 md:mb-8 max-w-xl md:pr-10">
              No banks required. No complicated steps. Just tap, send, recieve — all on your phone.
            </p>

            <div className="flex justify-center md:justify-start">
              <button className="bg-blue-600 text-white px-4 md:px-6 py-3 rounded-full hover:bg-blue-700 transition text-sm md:text-base" onClick={() => setShowPopup(true)}>
                Send to mobile money
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      
      {/* Security Section */}
      <motion.section 
        className="bg-black w-full px-4 sm:px-8 md:px-12 lg:px-[15%] xl:px-[20%] py-12 md:py-30"
        ref={securitySectionAnimation.ref}
        initial={securitySectionAnimation.initial}
        animate={securitySectionAnimation.animate}
        transition={securitySectionAnimation.transition}
      >
            <h2 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-200 mb-[10px]">Security you can feel.</h2>
            <h2 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-200 mb-4 md:mb-8">Protection you can trust.</h2>
            <p className="text-gray-200 font-semibold text-base md:text-xl xl:text-2xl mb-4 md:mb-8 max-w-3xl xl:max-w-4xl">Your peace of mind is built into every transfer.<br /> We use bank-grade encryption, real-time fraud detection, and offer 24/7 in-app support — so your money is always in safe hands.</p>
            <p className="text-gray-200 font-semibold text-base md:text-xl xl:text-2xl mb-4 md:mb-12 max-w-3xl xl:max-w-4xl">No shady conversions. No surprise fees. Just total transparency.</p>
            <a href="/security">
            <Button className="text-black px-8 md:px-16 py-4 md:py-7 rounded-full text-sm md:text-lg font-semibold bg-gray-200 mx-auto md:mx-0 block leading-none flex items-center justify-center">Learn more</Button>
            </a>
      </motion.section>



      {/* Meet StellarPay section */}
      <motion.section 
        className="bg-[#0363fe] flex flex-col items-center justify-center px-4 md:px-0 py-8 md:py-30 text-center"
        ref={meetAnimation.ref}
        initial={meetAnimation.initial}
        animate={meetAnimation.animate}
        transition={meetAnimation.transition}
      >
        <motion.h1 
          className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl text-white font-bold leading-tight mb-4 md:mb-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Meet StellarPay
        </motion.h1>
        <motion.p 
          className="text-base md:text-lg lg:text-xl xl:text-3xl text-white font-semibold mb-8 md:mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          A new way to money. 
        </motion.p>

        <motion.div 
          className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 mb-5 md:mb-5 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <a href="https://apps.apple.com/ca/app/george/id6743195041">
            <Image src="/images/appleStore.png" alt="apple" width={150} height={70} className="w-[120px] sm:w-[150px] h-auto" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.stellar.stellarai.app">
            <Image src="/images/googleStore.png" alt="google" width={167} height={70} className="w-[134px] sm:w-[167px] h-auto" />
          </a>
        </motion.div>

      
      </motion.section>
      {/* Meet George section */}
      <motion.section 
        className="flex flex-col md:flex-row w-full px-4 sm:px-8 md:px-12 lg:px-[112px] xl:px-[120px] 2xl:px-[128px] py-12 md:py-20"
        ref={georgeAnimation.ref}
        initial={georgeAnimation.initial}
        animate={georgeAnimation.animate}
        transition={georgeAnimation.transition}
      >
         <div>
          <a href='http://www.meetgeorge.app'>
         <Image
            src="/images/george.png"
            alt="Previous"
            width={1000}
            height={750}
            className="w-[500px] md:w-[900px] h-[250px] md:h-[500px]"
          />
          </a>
         </div>
         <div className='mt-[10px] md:mt-[0px] ml-[0px] md:ml-[40px] w-[330px] md:w-[370px] h-[240px] md:h-[300px] bg-[#0363fe] rounded-3xl py-[26px] px-[26px]'>
                        <h2 className='text-[22px] md:text-[26px] text-white font-bold'>Contact our Stellar team</h2>
                        <h2 className='text-[14px] md:text-[18px] text-white font-semi mt-[10px]'>Discover how we can help your business.</h2>
                        <a href='/meet-the-team'>
                        <div className='flex flex-row items-center justify-center mt-[20px] rounded-2xl bg-black w-[140px] h-[45px]'><p className='text-white text-[18px] font-semibold'>Get in touch</p></div>
                        </a>
         </div>
      </motion.section>



      {/* Footer */}
      <motion.footer 
        className="bg-[#000000] text-[#ffffff] px-4 md:px-6 py-16"
        ref={footerAnimation.ref}
        initial={footerAnimation.initial}
        animate={footerAnimation.animate}
        transition={footerAnimation.transition}
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
              <h3 className="font-bold mb-3 md:mb-4 text-[#ffffff] text-sm md:text-base">Company</h3>
              <div className="space-y-1 md:space-y-4">
                <Link href="/meet-the-team" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-sm">
                  Company and team
                </Link>
                <Link href="/features" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-sm">
                  Products
                </Link>
                <Link href="#" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-sm">
                  Service Status
                </Link>
                <Link href="/news" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-sm">
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
            <h3 className="font-bold mb-3 md:mb-4 text-sm text-[#ffffff] md:text-base">Products</h3>
              <div className="space-y-1 md:space-y-4">
                <Link href="#" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-sm">
                  StellarPay
                </Link>
                <Link href="/news" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-sm">
                  Stellar for Business
                </Link>
                <Link href="http://www.meetgeorge.app" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-sm">
                  George
                </Link>
              </div>
            </div>

                        {/* Stellar Products */}
                        <div className="text-left">
            <h3 className="text-[#ffffff] font-bold mb-3 md:mb-4 text-sm md:text-base">Policies</h3>
              <div className="space-y-1 md:space-y-4">
                <Link href="/privacy-policy#your-rights" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-sm">
                  Legal
                </Link>
                <Link href="/privacy-policy#contact-us" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-sm">
                  Complaints
                </Link>
                <Link href="/privacy-policy" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-sm">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-sm">
                  Terms & Conditions
                </Link>
                <Link href="/privacy-policy#cookies-and-tracking-technologies" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-sm">
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
            <p className="text-[#ffffff] opacity-80 text-xs md:text-sm">© 2025 Stellar Technologies, inc.</p>
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
      </motion.footer>
      </main>
  );
}