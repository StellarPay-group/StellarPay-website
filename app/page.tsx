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
import { useState } from 'react';
import { countries } from '@/components/conversion/country_data';
import GetTheApp from '@/components/popup/getTheApp';


const getConvertedAmount = (amount: number, fromCountry: string, toCountry: string) => {
  const fromCurrencyData = countries.find(country => country.currency_code === fromCountry);
  const toCurrencyData = countries.find(country => country.currency_code === toCountry);
  if (!fromCurrencyData || !toCurrencyData) return 0;
  return (amount * toCurrencyData.convert_factor) / fromCurrencyData.convert_factor;
}

const getArrivalDay = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const today = new Date();
  const dayOfWeek = today.getDay();
  const arrivalDay = days[dayOfWeek + 1];
  return arrivalDay;
}

const getSavings = (amount: number) => {
  return Math.round((amount * 0.040387) * 100) / 100;
}

const getFees = (amount: number, fromCurrency: string): {
  ACHFee: number;
  ourFee: number;
  totalFee: number;
  amountWeWillConvert: number;
} => {
  const amountInUSD = getConvertedAmount(amount, fromCurrency, 'USD');
  if (!amount || amount <= 0) return {
    ACHFee: 0,
    ourFee: 0,
    totalFee: 0,
    amountWeWillConvert: 0
  };
  const ACHFee = Math.round(amountInUSD * 0.00279 * 100) / 100;
  const ourFee = Math.round(amountInUSD * 0.00427 * 100) / 100;
  const totalFee = Math.round((ACHFee + ourFee) * 100) / 100;
  const amountWeWillConvert = Math.round((amountInUSD - totalFee) * 100) / 100;
  return {
    ACHFee,
    ourFee,
    totalFee,
    amountWeWillConvert
  };
}

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

  const [fromCountry, setFromCountry] = useState(countries[0] || null);
  const [toCountry, setToCountry] = useState(countries[0] || null);
  const [query, setQuery] = useState('');
  const [amount, setAmount] = useState(0);
  const [amountMinusFees, setAmountMinusFees] = useState(0);
  const [receivedAmount, setReceivedAmount] = useState(0);
  const filteredCountries = query === '' ? countries : countries.filter((country) => {
    return country.name.toLowerCase().includes(query.toLowerCase()) || country.currency_code.toLowerCase().includes(query.toLowerCase());
  });

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
              <Link href="/news">
                <Button variant="ghost" className="text-[#191c1f] hover:bg-[#f7f7f7] rounded-full px-4 md:px-6 py-2 text-xs md:text-[17px] font-medium font-semibold">Business</Button>
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
                <div className="w-5 h-5 bg-green-500 relative overflow-hidden rounded-full">
                  {/* Put flag img here later */}
                </div>
                    <span className="text-[#191c1f] text-xs md:text-[17px] font-medium font-semibold">EN</span>
              </div>
              <Button variant="ghost" className="text-[#191c1f] hover:bg-[#f7f7f7] text-xs md:text-[17px] font-medium font-semibold">Log in</Button>
              <Button variant="default" className="bg-[#0065ff] hover:bg-[#0065ff]/90 text-white rounded-full px-3 md:px-6 py-2 text-xs md:text-[17px] font-medium font-semibold">Sign Up</Button>
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
          className="text-base sm:text-lg md:text-xl lg:text-2xl font-[600] text-gray-700 mb-4 md:mb-4 max-w-3xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Send and receive globally.<br/>Move money where it matters — from splitting dinner with friends to sending to family overseas. Instant, simple and ultra-secure.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-4 mb-14 md:mb-20 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <a onClick={() => setShowPopup(true)} className="px-8 sm:px-12 py-3 rounded-full font-semibold bg-blue-600 text-white shadow hover:bg-blue-700 transition text-sm sm:text-base">Get The App</a>
        </motion.div>
        {showPopup && <GetTheApp onClose={() => setShowPopup(false)} onSubmit={() => {}} />}
        {/* Hero Illustration */}
        <motion.div 
          className="w-full flex justify-center mt-8 px-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <Image 
            src="/images/hero-illustration.png" 
            alt="StellarPay Hero Illustration" 
            width={600} 
            height={400}
            className="w-full max-w-[600px] h-auto"
          />
        </motion.div>

        <motion.div 
          className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 mb-12 md:mb-24 px-4 mt-8 md:mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <a href="https://apps.apple.com/ca/app/george/id6743195041">
            <Image src="/images/appleStore.png" alt="apple" width={150} height={70} className="w-[120px] sm:w-[150px] h-auto" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.stellar.stellarai.app">
            <Image src="/images/googleStore.png" alt="google" width={167} height={70} className="w-[134px] sm:w-[167px] h-auto" />
          </a>
        </motion.div>
      </motion.section>
     
     
      {/* === StellarPay Section === */}
      <motion.section 
        className="bg-white py-8 md:py-12 pb-1 px-4"
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
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 md:px-6 py-2 rounded-full font-semibold text-sm md:text-base">
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
                    <input type="text" className="w-[150px] p-2 text-black font-bold text-[24px] rounded-md" defaultValue={amount} inputMode="decimal" pattern="[0-9]*\.?[0-9]*" onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9.]/g, '');
                      const parts = value.split('.');
                      e.target.value = parts.length > 2 ? parts[0] + '.' + parts.slice(1).join('') : value;
                      setAmount(parseFloat(value));
                    }} placeholder="0" />
                    <div className="relative">
                    <Combobox value={fromCountry} onChange={(value) => value && setFromCountry(value)}>
                      <ComboboxInput
                        className="max-w-[70px] mr-[0px] bg-transparent p-2 text-black placeholder-black text-[24px] rounded-md font-bold"
                        defaultValue={fromCountry?.currency_code}
                          placeholder={fromCountry?.currency_code}
                        onChange={(event) => setQuery(event.target.value)}
                      />
                      <ComboboxButton>
                        <p className="text-gray-300 text-[20px] mr-[10px] font-bold">▼</p>
                      </ComboboxButton>
                          <ComboboxOptions className="max-h-[200px] overflow-x-hidden overflow-y-auto absolute top-full right-0 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                        {filteredCountries.map((country) => (
                          <ComboboxOption className="px-3 py-2 text-black text-[14px] hover:bg-gray-100 cursor-pointer" key={country.id} value={country}>
                            {country.name} ({country.currency_code})
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
                      <p className="text-black font-semibold text-[18px]">{getFees(amount, fromCountry?.currency_code).ACHFee} {fromCountry?.currency_code}</p>
                    </div>
                  <p className="text-[18px] text-[#0065ff] font-semibold">Connected bank account (ACH) fee</p>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center mb-[5px]">
                      <p className="text-gray-300 mr-[8px] text-[18px]">•</p>
                      <p className="text-black font-semibold text-[18px]">{getFees(amount, fromCountry?.currency_code).ourFee} {fromCountry?.currency_code}</p>
                    </div>
                  <p className="text-[18px] text-[#454745]">Our fee</p>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center mb-[5px]">
                    <p className="text-gray-600 mr-[8px] text-[18px] font-semibold">-</p>
                      <p className="text-black font-semibold text-[18px]">{getFees(amount, fromCountry?.currency_code).totalFee} {fromCountry?.currency_code}</p>
                    </div>
                  <p className="text-[18px] text-[#454745]">Total fees</p>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center mb-[5px]">
                    <p className="text-gray-600 mr-[5px] text-[18px] font-semibold">=</p>
                      <p className="text-black font-semibold text-[18px]">{getFees(amount, fromCountry?.currency_code).amountWeWillConvert} {fromCountry?.currency_code}</p>
                    </div>
                  <p className="text-[18px] text-[#454745]">Total amount we'll convert</p>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center mb-[5px]">
                      <p className="text-gray-600 mr-[8px] text-[18px] font-semibold">*</p>
                      <p className="text-[#0065ff] font-semibold text-[18px]">0.9319 = {Math.round(getFees(amount, fromCountry?.currency_code).amountWeWillConvert * 0.9319 * 100) / 100} {fromCountry?.currency_code}</p>
                    </div>
                  <p className="text-[18px] text-[#0065ff] font-semibold">Guaranteed rate (8h)</p>
                  </div>
                  
                  <p className="text-[#454745] text-[16px] mt-[10px] mb-[5px]">Recipient gets</p>
                
                  <div className="items-center p-1 rounded-md border border-gray-300">
                  <div className="flex flex-row justify-between items-center">
                    <p className="w-[150px] p-2 text-black font-bold text-[24px] rounded-md">{Math.round(getConvertedAmount(getFees(amount, fromCountry?.currency_code).amountWeWillConvert * 0.9319, fromCountry?.currency_code, toCountry?.currency_code) * 100) / 100}</p>
                    <div className="relative">
                    <Combobox value={toCountry} onChange={(value) => value && setToCountry(value)}>
                      <ComboboxInput
                        className="max-w-[70px] mr-[0px] bg-transparent p-2 text-black placeholder-black text-[24px] rounded-md font-bold"
                        defaultValue={toCountry?.currency_code}
                          placeholder={toCountry?.currency_code}
                        onChange={(event) => setQuery(event.target.value)}
                      />
                      <ComboboxButton>
                        <p className="text-gray-300 text-[20px] mr-[10px] font-bold">▼</p>
                      </ComboboxButton>
                          <ComboboxOptions className="max-h-[200px] overflow-x-hidden overflow-y-auto absolute top-full right-0 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                        {filteredCountries.map((country) => (
                          <ComboboxOption className="px-3 py-2 text-black text-[14px] hover:bg-gray-100 cursor-pointer" key={country.id} value={country}>
                            {country.name} ({country.currency_code})
                          </ComboboxOption>
                        ))}
                      </ComboboxOptions>
                    </Combobox>
                    </div>
</div>
                  </div>
                      <p className={`text-[${amount > 0 ? '#454745' : '#ffffff'}] text-[18px] mt-[10px]`}>You could save up to {getSavings(getFees(amount, fromCountry?.currency_code).amountWeWillConvert * 0.9319)} {fromCountry?.currency_code}</p>
                      <p className={`text-[${amount > 0 ? '#454745' : '#ffffff'}] text-[18px] mt-[5px] mb-[5px]`}>Should arrive by {getArrivalDay()}</p>
                  </div>
                  <div className="flex items-center justify-center">
                  <button className="bg-[#ffffff] hover:bg-[#ffffff]/90 border border-[#0065ff] text-[#0065ff] rounded-full px-3 md:px-6 py-3 text-xs md:text-[18px] font-medium font-semibold w-[80%]">
                    Compare price
                  </button>
                  </div>
                  <div className="flex items-center justify-center">
                  <button className="bg-[#0065ff] hover:bg-[#0065ff]/90 text-white rounded-full px-3 md:px-6 py-3 mt-[20px] text-xs md:text-[18px] font-medium font-semibold w-[80%]" onClick={() => setShowPopup(true)}>
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 max-w-5xl py-8 md:py-12 pb-4 md:pb-8 mx-auto">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full md:w-auto"
          >
            <Image
              src="/images/money-transfer.png" 
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
            <p className="text-gray-600 text-base md:text-lg mb-2">
              Send money to friends across the street or family across the ocean —
              all from one StellarPay account.
            </p>
            <p className="text-gray-600 text-base md:text-lg mb-2">
              Connect your account and make peer-to-peer or international payments
              in seconds.
            </p>
            <p className="text-gray-600 text-base md:text-lg mb-2">No paperwork.</p>
            <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8">
              No hidden fees. Just fast, connected money.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
              <button className="bg-blue-600 text-white px-4 md:px-6 py-2 rounded-full hover:bg-blue-700 transition text-sm md:text-base">
                Open an account
              </button>
              <a href="#how-it-works" className="underline hover:text-blue-800 font-semibold text-sm md:text-base">
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl w-full py-8 md:py-12">
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
            <p className="text-gray-600 text-base md:text-lg mb-2">
              When you send money with StellarPay, it's there — right away. 
            </p>
            <p className="text-gray-600 text-base md:text-lg mb-2">
              No waiting, no agents, and no guessing. Just tap, send, track, and done. 
            </p>
            <p className="text-gray-600 text-base md:text-lg mb-6">
              Whether it's $5 for takeout or $500 for school fees, we move at the speed of life. 
            </p>

            <div className="flex justify-center md:justify-start">
              <button className="bg-blue-600 text-white px-4 md:px-6 py-2 rounded-full hover:bg-blue-700 transition text-sm md:text-base" onClick={() => setShowPopup(true)}>
                Try your first transfer
              </button>
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
              src="/images/instant-availability.png" 
              alt="People eating outside"
              width={400}
              height={300}
              className="w-full max-w-[400px] h-auto mx-auto"
            />
          </motion.div>
        </div>
      </motion.section>


      {/* Mobile money section */}
      <motion.section 
        className="bg-white px-4 md:px-6 py-8 md:py-5 flex items-center justify-center"
        ref={mobileAnimation.ref}
        initial={mobileAnimation.initial}
        animate={mobileAnimation.animate}
        transition={mobileAnimation.transition}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 max-w-5xl w-full py-8 md:py-12">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full md:w-auto"
          >
            <Image
              src="/images/mobile-money-included.png" 
              alt="People eating outside"
              width={480}
              height={360}
              className="w-full max-w-[480px] h-auto mx-auto"
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
              Mobile money included. Just like it should be.
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-4">
              Connecting you directly with leading mobile money platforms like MTN Mobile Money, 
              Orange Money, and others — so your loved ones can revieve funds instantly, no matter 
              where they are or what device they use. Whether it's sending money to a village in 
              Cameroon, paying school fees in Accra, or topping up a phone in Nairobi — StellarPay 
              works where real life happens.
            </p>
            <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8">
              No banks required. No complicated steps. Just tap, send, recieve — all on your phone.
            </p>

            <div className="flex justify-center md:justify-start">
              <button className="bg-blue-600 text-white px-4 md:px-6 py-2 rounded-full hover:bg-blue-700 transition text-sm md:text-base" onClick={() => setShowPopup(true)}>
                Send to mobile money
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      
      {/* Security Section */}
      <motion.section 
        className="w-full px-4 sm:px-8 md:px-12 lg:px-[112px] xl:px-[120px] 2xl:px-[128px] py-12 md:py-20"
        ref={securitySectionAnimation.ref}
        initial={securitySectionAnimation.initial}
        animate={securitySectionAnimation.animate}
        transition={securitySectionAnimation.transition}
      >
        <div className="aspect-[1225/664] max-w-[1470px] w-full mx-auto rounded-[30px] md:rounded-[60px] bg-blue-50 p-4 md:p-8 py-12 md:py-20 flex flex-col md:flex-row items-start justify-between gap-6 md:gap-10">
          <motion.div 
            className="pl-4 md:pl-8 flex-1 max-w-lg text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0E0F0C] mb-4 md:mb-8">Security you can feel. Protection you can trust.</h2>
            <p className="text-[#454745] text-base md:text-lg mb-4 md:mb-8">Your peace of mind is built into every transfer. We use bank-grade encryption, real-time fraud detection, and offer 24/7 in-app support — so your money is always in safe hands.</p>
            <p className="text-[#454745] text-base md:text-lg mb-6">No shady conversions. No surprise fees. Just total transparency.</p>
            <Button className="text-white px-8 md:px-16 py-4 md:py-6 rounded-full text-sm md:text-lg font-semibold bg-black mx-auto md:mx-0 block leading-none flex items-center justify-center">Learn more</Button>
          </motion.div>
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Image src="/images/security-illustration.png" alt="Security Illustration" width={310} height={449} className="shadow-lg w-full max-w-[310px] h-auto"
            />
          </motion.div>
        </div>
      </motion.section>



      {/* Meet StellarPay section */}
      <motion.section 
        className="flex flex-col items-center justify-center px-4 md:px-0 py-8 md:py-4 bg-white text-center"
        ref={meetAnimation.ref}
        initial={meetAnimation.initial}
        animate={meetAnimation.animate}
        transition={meetAnimation.transition}
      >
        <motion.h1 
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-4 md:mb-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Meet StellarPay
        </motion.h1>
        <motion.p 
          className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 mb-8 md:mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          A new way to money. 
        </motion.p>

        <motion.div 
          className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 mb-12 md:mb-24 px-4"
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

        <motion.div 
          className="w-full overflow-hidden px-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
        <Carousel
        showDots={false}
        responsive={responsive}
        ssr={false} 
        infinite={false}
        autoPlay={false}
        containerClass="w-full max-w-[1000px] lg:max-w-[1400px] mx-auto"
        dotListClass="mt-8"
        itemClass="px-2 md:px-4"  
        customButtonGroup={<ButtonGroup />}
        renderButtonGroupOutside={true}
        arrows={false}
      >
        <div className="relative w-[300px] md:w-[400px] h-[450px] md:h-[600px] overflow-hidden rounded-lg">
        <Image src="/images/carousel_7.png" alt="" layout="fill" objectFit='cover'/>
          </div>
          <div className="relative w-[300px] md:w-[400px] h-[450px] md:h-[600px] overflow-hidden rounded-lg">
        <Image src="/images/carousel_2.png" alt="" layout="fill" objectFit='cover'/>
          </div>
          <div className="relative w-[300px] md:w-[400px] h-[450px] md:h-[600px] overflow-hidden rounded-lg">
        <Image src="/images/carousel_3.png" alt="" layout="fill" objectFit='cover'/>
          </div>
          <div className="relative w-[300px] md:w-[400px] h-[450px] md:h-[600px] overflow-hidden rounded-lg">
        <Image src="/images/carousel_6.png" alt="" layout="fill" objectFit='cover'/>
          </div>
          <div className="relative w-[300px] md:w-[400px] h-[450px] md:h-[600px] overflow-hidden rounded-lg">
        <Image src="/images/carousel_5.png" alt="" layout="fill" objectFit='cover'/>
          </div>
      </Carousel>
        </motion.div>

      </motion.section>
      {/* Meet George section */}
      <motion.section 
        className="w-full px-4 sm:px-8 md:px-12 lg:px-[112px] xl:px-[120px] 2xl:px-[128px] py-12 md:py-20"
        ref={georgeAnimation.ref}
        initial={georgeAnimation.initial}
        animate={georgeAnimation.animate}
        transition={georgeAnimation.transition}
      >
        <div className="aspect-[1225/472] max-w-[1470px] w-full mx-auto bg-[#0065ff] rounded-2xl md:rounded-3xl p-6 md:p-12">
          <div className="space-y-6 md:space-y-8">
            <motion.div 
              className="inline-flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-[#000000] text-[#ffffff] px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium white-border">Artificial Intelligence | 01</div>
            </motion.div>
            <motion.div 
              className="space-y-3 md:space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h1 className="text-[#ffffff] text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">Meet George</h1>
              <p className="text-[#ffffff] text-base md:text-lg">Money talks - George listens.</p>
            </motion.div>
            <motion.div 
              className="space-y-4 md:space-y-6 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <p className="text-[#ffffff] text-base md:text-lg leading-relaxed">Unlock financial clarity with an intelligent financial companion.</p>
              <p className="text-[#ffffff] text-base md:text-lg leading-relaxed">
                Understand your transactions, set goals and identify your unique needs with a seamlessly
                integrated AI solution.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>



      {/* Footer */}
      <motion.footer 
        className="bg-[#ffffff] text-[#000000] px-4 md:px-6 py-16 md:py-35"
        ref={footerAnimation.ref}
        initial={footerAnimation.initial}
        animate={footerAnimation.animate}
        transition={footerAnimation.transition}
      >
        <div className="max-w-6xl mx-auto">
          {/* Upper section with three columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 mb-12 md:mb-50">
            {/* Company and team */}
            <div className="text-center sm:text-left">
              <h3 className="font-medium mb-3 md:mb-4 text-sm md:text-base">Company and team</h3>
              <div className="space-y-1 md:space-y-2">
                <Link href="#" className="block text-[#000000] underline hover:no-underline text-xs md:text-sm">
                  Company and team
                </Link>
                <Link href="#" className="block text-[#000000] underline hover:no-underline text-xs md:text-sm">
                  Service status
                </Link>
              </div>
            </div>

            {/* Stellar Products */}
            <div className="text-center sm:text-left">
              <h3 className="font-medium mb-3 md:mb-4 text-sm md:text-base">Stellar Products</h3>
              <div className="space-y-1 md:space-y-2">
                <Link href="#" className="block text-[#000000] underline hover:no-underline text-xs md:text-sm">
                  International money transfers
                </Link>
                <Link href="#" className="block text-[#000000] underline hover:no-underline text-xs md:text-sm">
                  StellarPay account
                </Link>
              </div>
            </div>

            {/* Follow us */}
            <div className="text-center sm:text-left">
              <h3 className="font-medium mb-3 md:mb-4 text-sm md:text-base">Follow us</h3>
              <div className="flex justify-center sm:justify-start space-x-4">
                <Link href="https://www.facebook.com/Stellarpaymain" className="text-[#000000] hover:text-[#0065ff]">
                  <Facebook className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="https://x.com/JoinStellarPay" className="text-[#000000] hover:text-[#0065ff]">
                  <Twitter className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="sr-only">X</span>
                </Link>
                <Link href="https://www.instagram.com/stellarpay/" className="text-[#000000] hover:text-[#0065ff]">
                  <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="https://www.linkedin.com/company/stellarpaytoday/" className="text-[#000000] hover:text-[#0065ff]">
                  <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="sr-only">Linkedin</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Divider line */}
          <div className="border-t border-[#000000] mb-6 md:mb-8"></div>

          {/* Lower section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            {/* StellarPay logo */}
            <div className="lg:col-span-1 text-center md:text-left">
              <div className="text-[#0065ff] text-2xl md:text-3xl font-bold">StellarPay</div>
            </div>

            {/* Legal links columns */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              <div className="space-y-1 md:space-y-2 text-center sm:text-left">
                <Link href="/privacy-policy#your-rights" className="block text-[#000000] hover:text-[#0065ff] text-xs md:text-sm">
                  Legal
                </Link>
                <Link href="/privacy-policy#contact-us" className="block text-[#000000] hover:text-[#0065ff] text-xs md:text-sm">
                  Complaints
                </Link>
              </div>

              <div className="space-y-1 md:space-y-2 text-center sm:text-left">
                <Link href="/privacy-policy" className="block text-[#000000] underline hover:no-underline text-xs md:text-sm">
                  Privacy policy
                </Link>
                <Link href="#" className="block text-[#000000] underline hover:no-underline text-xs md:text-sm">
                  Country site map
                </Link>
              </div>

              <div className="space-y-1 md:space-y-2 text-center sm:text-left">
                <Link href="/privacy-policy#cookies-and-tracking-technologies" className="block text-[#000000] underline hover:no-underline text-xs md:text-sm">
                  Cookie Policy
                </Link>
                <Link href="#" className="block text-[#000000] underline hover:no-underline text-xs md:text-sm">
                  Modern slavery statement
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="text-center space-y-3 md:space-y-4">
            <p className="text-[#000000] text-xs md:text-sm">© Stellar Technologies Inc 2025</p>
            <p className="text-[#000000] max-w-4xl mx-auto text-xs md:text-sm px-4">
              StellarPay is a Money Service Business authorized to operate in{" "}
              <Link href="#" className="underline hover:no-underline">
                most states
              </Link>
              .
            </p>
          </div>
        </div>
      </motion.footer>

    </main>
  );
}