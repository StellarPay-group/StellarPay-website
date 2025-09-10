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
        className="bg-white py-0 pb-1 px-0"
        ref={calculatorAnimation.ref}
        initial={calculatorAnimation.initial}
        animate={calculatorAnimation.animate}
        transition={calculatorAnimation.transition}
      >
        <div className="bg-black text-white mx-auto py-8 md:py-16 px-4 md:px-10 w-full max-w-none">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
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
                    className="rounded-[25px] shadow-xl w-full max-w-[500px] h-[580px] sm:h-[600px] md:h-[650px] bg-white"
                  >
                    <div className="mx-[15px] sm:mx-[25px] my-[30px]">
                
                  <div className="items-center p-1 rounded-md border border-gray-300">
                  <div className="flex flex-row justify-between items-center">
                    <input type="text" className="w-[70px] sm:w-[100px] md:w-[150px] p-2 text-black font-bold text-[18px] md:text-[24px] rounded-md" defaultValue={amount || 0} inputMode="decimal" pattern="[0-9]*\.?[0-9]*" onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9.]/g, '');
                      const parts = value.split('.');
                      e.target.value = parts.length > 2 ? parts[0] + '.' + parts.slice(1).join('') : value;
                      setAmount(parseFloat(value));
                    }} placeholder="0" />
                    <div className="relative">
                    <Combobox value={fromCurrency} onChange={(value) => value && setFromCurrency(value)}>
                      <ComboboxInput
                        className="max-w-[80px] mr-[0px] bg-transparent p-2 text-black placeholder-black text-[18px] md:text-[24px] rounded-md font-bold text-right"
                        defaultValue={fromCurrency?.display_code || 'USD'}
                          placeholder={fromCurrency?.display_code || 'USD'}
                        onChange={(event) => setQuery(event.target.value)}
                      />
                      <ComboboxButton>
                        <p className="text-gray-300 text-[10px] md:text-[20px] mr-[10px] font-bold">▼</p>
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
                  <p className="text-[#454745] text-[13px] md:text-[16px]">You send exactly</p>
                  <div className="flex flex-row justify-between items-center mt-[10px]">
                    <div className="flex flex-row items-center mb-[5px]">
                      <p className="text-gray-300 mr-[8px] text-[14px] md:text-[18px]">•</p>
                      <p className="text-black font-semibold text-[14px] md:text-[18px]">{achFee !== null ? `${achFee} ${fromCurrency?.display_code ?? "USD"}` : "Loading..."}</p>
                    </div>
                  <p className="hidden md:block text-[18px] text-[#0065ff] font-semibold">Connected bank account (ACH) fee</p>
                  <p className="block md:hidden text-[14px] text-[#0065ff] font-semibold">ACH fee</p>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center mb-[5px]">
                      <p className="text-gray-300 mr-[8px] text-[14px] md:text-[18px]">•</p>
                      <p className="text-black font-semibold text-[14px] md:text-[18px]">{ourFee !== null ? `${ourFee} ${fromCurrency?.display_code ?? "USD"}` : "Loading..."}</p>
                    </div>
                  <p className="text-[14px] md:text-[18px] text-[#454745]">Our fee</p>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center mb-[5px]">
                    <p className="text-gray-600 mr-[8px] text-[14px] md:text-[18px] font-semibold">-</p>
                      <p className="text-black font-semibold text-[14px] md:text-[18px]">{totalFee !== null ? `${totalFee} ${fromCurrency?.display_code ?? "USD"}` : "Loading..."}</p>
                    </div>
                  <p className="text-[14px] md:text-[18px] text-[#454745]">Total fees</p>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center mb-[5px]">
                    <p className="text-gray-600 mr-[5px] text-[14px] md:text-[18px] font-semibold">=</p>
                      <p className="text-black font-semibold text-[14px] md:text-[18px]">{amountWeWillConvert !== null ? `${amountWeWillConvert} ${fromCurrency?.display_code ?? "USD"}` : "Loading..."}</p>
                    </div>
                  <p className="hidden md:block text-[18px] text-[#454745]">Total amount we'll convert</p>
                  <p className="block md:hidden text-[14px] text-[#454745] font-semibold">Total amount</p>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center mb-[5px]">
                      <p className="hidden md:block text-gray-600 mr-[8px] text-[14px] md:text-[18px] font-semibold">*</p>
                      <p className="block md:hidden text-gray-600 mr-[8px] text-[14px] md:text-[18px] font-semibold">=</p>
                      <p className="hidden md:block text-[#0065ff] font-semibold text-[18px]">0.9319 = {Math.round(guaranteedRate * 100) / 100} {fromCurrency?.display_code}</p>
                      <p className="block md:hidden text-[#0065ff] font-semibold text-[14px]">{Math.round(guaranteedRate * 100) / 100} {fromCurrency?.display_code}</p>
                    </div>
                  <p className="hidden md:block text-[18px] text-[#0065ff] font-semibold">Guaranteed rate (8h)</p>
                  <p className="block md:hidden text-[14px] text-[#0065ff] font-semibold">Guaranteed rate</p>
                  </div>
                  
                  <p className="text-[#454745] text-[13px] md:text-[16px] mt-[10px] mb-[5px]">Recipient gets</p>
                
                  <div className="items-center p-1 rounded-md border border-gray-300">
                  <div className="flex flex-row justify-between items-center">
                    <p className="w-[70px] sm:w-[100px] md:w-[150px] p-2 text-black font-bold text-[18px] md:text-[24px] rounded-md">{Math.round(useConvertedAmount(fromCurrency?.code, toCurrency?.code, guaranteedRate) * 100) / 100}</p>
                    <div className="relative">
                    <Combobox value={toCurrency} onChange={(value) => value && setToCurrency(value)}>
                      <ComboboxInput
                        className="max-w-[80px] mr-[0px] bg-transparent p-2 text-black placeholder-black text-[18px] md:text-[24px] rounded-md font-bold text-right"
                        defaultValue={toCurrency?.display_code}
                          placeholder={toCurrency?.display_code}
                        onChange={(event) => setQuery(event.target.value)}
                      />
                      <ComboboxButton>
                        <p className="text-gray-300 text-[10px] md:text-[20px] mr-[10px] font-bold">▼</p>
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
                      <p className={`text-[${amount > 0 ? '#454745' : '#ffffff'}] text-[14px] md:text-[18px] mt-[10px]`}>You could save up to {getSavings(amountWeWillConvert * 0.9319)} {fromCurrency?.display_code}</p>
                      <p className={`text-[${amount > 0 ? '#454745' : '#ffffff'}] text-[14px] md:text-[18px] mt-[5px] mb-[5px]`}>Should arrive by {getArrivalDay()}</p>
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
        <div className="w-full h-px bg-gray-200 mt-8 md:mt-12"></div> 
      </motion.section>

      <div className="flex items-center justify-center mx-[20px]">
        <div className='max-w-md md:max-w-3xl flex flex-col'>
        <h1 className='text-black text-3xl md:text-5xl lg:text-6xl text-center font-bold mt-[10px]'>
          Send more with StellarPay
        </h1>
        <h2 className='text-black text-lg md:text-2xl text-center font-bold mt-[40px]'>
        Fast, secure, and borderless. 
        </h2>
        <h2 className='text-black text-lg md:text-2xl text-center font-bold mb-[48px]'>
        StellarPay makes sending money simple—whether it’s across town or across the world.
        </h2>
        </div>
      </div>

                      
      <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-12 md:gap-[30px] mb-18">
        <div className="w-[260px] xl:w-[300px] bg-[#e3e8ee] rounded-2xl h-[550px]">
          <div className="">
            <div className="flex flex-col mx-[30px] xl:mx-[40px]">
              <div className="flex justify-center">
        <Image src="/images/send.png" alt="send" width={150} height={70} className="w-[150px] h-auto mt-10" />
        </div>
        <div></div>
        <h2 className="text-center font-bold text-[18px] mt-8">Send</h2>
        <h2 className="text-center font-bold text-[20px] mt-8">Money that moves<br />as fast as you.</h2>
        <p className="text-center font-normal text-[15px] mt-8">Tap, send, and it’s there — across town or across the world.</p>
        <div className="flex justify-center mt-7">
        <a onClick={() => window.open("https://c2s.app/q/hXL6WV7")} className="w-[100px] py-2 rounded-full font-normal bg-[#0065ff] text-white shadow transition text-[15px] text-center">Try it out</a>
        </div>
        </div>
        </div>
        </div>
        <div className="w-[260px] xl:w-[300px] bg-[#e3e8ee] rounded-2xl h-[550px]">
        <div className="">
            <div className="flex flex-col mx-[30px] xl:mx-[40px]">
              <div className="flex justify-center">
        <Image src="/images/receive.png" alt="send" width={150} height={70} className="w-[190px] h-auto mt-10" />
        </div>
        <h2 className="text-center font-bold text-[18px] mt-14">Receive</h2>
        <h2 className="text-center font-bold text-[20px] mt-8">Funds that land<br /> where life happens.</h2>
        <p className="text-center font-normal text-[15px] mt-8">Bank accounts, mobile wallets, or cash-out — instantly available.</p>
        <div className="flex justify-center mt-8">
        <a onClick={() => window.open("https://c2s.app/q/hXL6WV7")} className="w-[100px] py-2 rounded-full font-normal bg-[#0065ff] text-white shadow transition text-[15px] text-center">Try it out</a>
        </div>
        </div>
        </div>
        </div>
        <div className="w-[260px] xl:w-[300px] bg-[#e3e8ee] rounded-2xl h-[550px]">
        <div className="">
            <div className="flex flex-col mx-[30px] xl:mx-[40px]">
              <div className="flex justify-center">
        <Image src="/images/instant.png" alt="send" width={150} height={70} className="w-[160px] h-auto mt-10" />
        </div>
        <h2 className="text-center font-bold text-[18px] mt-9">Instant</h2>
        <h2 className="text-center font-bold text-[20px] mt-8">No waiting. <br />
        No hidden fees.</h2>
        <p className="text-center font-normal text-[15px] mt-8">Your money is always moving at the speed of life.</p>
        <div className="flex justify-center mt-12">
        <a onClick={() => window.open("https://c2s.app/q/hXL6WV7")} className="w-[100px] py-2 rounded-full font-normal bg-[#0065ff] text-white shadow transition text-[15px] text-center">Try it out</a>
        </div>
        </div>
        </div>
        </div>
        <div className="w-[260px] xl:w-[300px] bg-[#e3e8ee] rounded-2xl h-[550px]">
        <div className="">
            <div className="flex flex-col mx-[30px] xl:mx-[40px]">
              <div className="flex justify-center">
        <Image src="/images/social.png" alt="send" width={200} height={70} className="w-[200px] h-auto mt-10" />
        </div>
        <h2 className="text-center font-bold text-[18px] mt-8">Social</h2>
        <h2 className="text-center font-bold text-[20px] mt-8">Transfers with a<br /> personal touch.</h2>
        <p className="text-center font-normal text-[15px] mt-8">Share, connect, and send with StellarTags — money made social.</p>
        <div className="flex justify-center mt-8">
        <a onClick={() => window.open("https://c2s.app/q/hXL6WV7")} className="w-[100px] py-2 rounded-full font-normal bg-[#0065ff] text-white shadow transition text-[15px] text-center">Try it out</a>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
      
      
      {/* Security Section */}
      <motion.section 
        className="bg-black w-full px-4 sm:px-8 md:px-12 lg:px-[15%] xl:px-[20%] py-12 md:py-30"
        ref={securitySectionAnimation.ref}
        initial={securitySectionAnimation.initial}
        animate={securitySectionAnimation.animate}
        transition={securitySectionAnimation.transition}
      >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-200 mb-[10px]">Security you can feel.</h2>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-200 mb-4 md:mb-8">Protection you can trust.</h2>
            <p className="text-gray-200 font-normal sm:font-semibold text-sm sm:text-base md:text-xl xl:text-2xl mb-4 md:mb-8 max-w-3xl xl:max-w-4xl">Your peace of mind is built into every transfer.<br /> We use bank-grade encryption, real-time fraud detection, and offer 24/7 in-app support — so your money is always in safe hands.</p>
            <p className="text-gray-200 font-normal sm:font-semibold text-sm sm:text-base md:text-xl xl:text-2xl mb-4 md:mb-12 max-w-3xl xl:max-w-4xl">No shady conversions. No surprise fees. Just total transparency.</p>
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
        className="flex flex-col md:flex-row w-full px-0 sm:px-8 md:px-12 lg:px-[112px] xl:px-[120px] 2xl:px-[128px] py-12 md:py-20"
        ref={georgeAnimation.ref}
        initial={georgeAnimation.initial}
        animate={georgeAnimation.animate}
        transition={georgeAnimation.transition}
      >
         <div>
          <div className='mx-auto md:mx-[0px] relative w-[280px] md:w-[500px] lg:w-[650px] xl:w-[750px] h-[350px] md:h-[550px] bg-[#F55A2B] rounded-3xl py-[26px]'>
                        <h2 className='ml-[5px] md:ml-[0px] absolute top-10/28 left-19/40 -translate-x-1/2 -translate-y-1/2 text-[60px] md:text-[80px] xl:text-[100px] text-white font-bold text-center z-9'>George</h2>
                        <div className='hidden md:block absolute top-8/20 left-10/40 -translate-x-1/2 -translate-y-1/2 bg-white h-[220px] lg:h-[230px] w-[170px] lg:w-[200px] rounded-xl z-10'>
                        <h2 className='font-bold text-[18px] text-center mx-[10px] lg:mx-[20px] mt-[20px]'>All accounts in one place</h2>
                        <p className='font-semibold text-[13px] text-center mx-[8px] lg:mx-[16px] mt-[4px] lg:mt-[8px]'>Connect unlimited banks, credit cards, and investment accounts completely free</p>
                        <Image src="/images/accounts.png" alt='f' width={350} height={100} className="w-35 h-10 mt-[8px] lg:mt-[12px] mx-auto" />
                        </div>
                        <div className='hidden md:block absolute top-8/20 right-10/40 translate-x-1/2 -translate-y-1/2 bg-white h-[180px] w-[170px] lg:w-[200px] rounded-2xl z-10'>
                        <div className='bg-white w-full h-[33%] rounded-t-2xl flex flex-col justify-center'>
                          <h2 className='text-black font-semi text-[24px] ml-[28px]'>Sync</h2>
                        </div>
                        <div className='bg-[#005fff] w-full h-[34%] flex flex-col justify-center'>
                        <h2 className='text-white font-semi text-[24px] ml-[28px]'>Plan</h2>
                        </div>
                        <div className='bg-white w-full h-[33%] rounded-b-2xl flex flex-col justify-center'>
                        <h2 className='text-black font-semi text-[24px] ml-[28px]'>Breathe</h2>
                        </div>
                        </div>
                        <div className='px-[10px] py-[10px] absolute bottom-0 h-[170px] md:h-[180px] lg:h-[190px] w-full bg-[#eff3fc] rounded-b-2xl'>
                          <h2 className='font-bold text-black text-[18px] md:text-[22px] xl:text-[24px] text-center md:text-start ml-[0px] md:ml-[20px] mt-[0px] lg:mt-[8px] xl:mt-[14px]'>Money talks - George listens.</h2>
                          <p className='block md:hidden font-normal text-black text-[12px] text-start ml-[0px] mt-[2px]'>Unlock financial clarity with an intelligent financial companion. 
                          Understand your transactions, set goals and identify your unique needs with your personal fianncial AI.</p>
                          <p className='hidden md:block font-normal text-gray-600 text-[13px] text-start ml-[20px] mr-[60px] mt-[5px]'>Unlock financial clarity with an intelligent financial companion. <br />
                          Understand your transactions, set goals and identify your unique needs with your personal fianncial AI.</p>
                          <div className='mx-auto md:mx-[20px] h-[30px] md:h-[35px] lg:h-[40px] w-[100px] md:w-[220px] lg:w-[240px] bg-black rounded-lg flex flex-col justify-center mt-[8px] md:mt-[14px]'>
                            <a href='http://www.meetgeorge.app'><p className='text-[12px] md:text-[14px] lg:text-[15px] font-semibold text-white text-center'>Learn more</p></a>
                          </div>
                        </div>
         </div>
         </div>
         <div className='mx-auto md:mx-[0px] mt-[40px] lg:mt-[0px] lg:mt-[0px] w-[280px] md:w-[370px] h-[240px] md:h-[300px] bg-[#0363fe] rounded-3xl py-[26px] px-[26px] md:ml-[50px] xl:ml-[100px]'>
                        <h2 className='text-[22px] xl:text-[26px] text-white font-bold'>Contact our Stellar team</h2>
                        <h2 className='text-[14px] md:text-[18px] text-gray-200 font-semi mt-[10px]'>Discover how we can help your business.</h2>
                        <a href='/meet-the-team'>
                        <div className='mx-auto md:mx-0 flex flex-row items-center justify-center mt-[20px] rounded-2xl bg-black w-[140px] h-[40px] md:h-[45px]'><p className='text-white text-[14px] md:text-[18px] font-semibold'>Get in touch</p></div>
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
                <Link href="http://www.meetgeorge.app" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-sm">
                  APi
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