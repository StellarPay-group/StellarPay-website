"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Zap, Send, ChevronLeft, ChevronRight, Linkedin} from 'lucide-react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/lib/useScrollAnimation';
import { ExpandCard } from "@/components/ui/expandCard";
import { useState } from "react";
import GetTheApp from "@/components/popup/getTheApp";

export default function Features() {

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 1 },
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

  const [showPopup, setShowPopup] = useState(false);


  // needed for blog component
  type ArrowProps = {
    next?: () => void;
    previous?: () => void;
    onClick?: () => void;
    carouselState?: { currentSlide: number; totalItems: number; slidesToShow: number };
  };
  

  return (
    <main className="bg-[#f5f5f7]">

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
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Left side - Logo and navigation */}
            <div className="flex items-center space-x-2 md:space-x-8">
              <Link href="/">
                <Button variant="ghost" className="text-xl md:text-[24px] mb-1 font-bold text-[#191c1f]">StellarPay</Button>
              </Link>
              <nav className="hidden md:flex items-center space-x-1">
              <Link href="/">
              <Button variant="ghost" className="text-[#191c1f] hover:bg-[#f7f7f7] rounded-full px-4 md:px-6 py-2 text-xs md:text-[17px] font-medium font-semibold">Personal</Button>
              </Link>
              <Link href="/features">
                <Button variant="ghost" className="text-[#1b6ce8] hover:text-[#1b6ce8] hover:bg-[#f7f7f7] rounded-full px-4 md:px-6 py-2 text-xs md:text-[17px] font-medium font-bold">Features</Button>
              </Link>
                <Link href="https://www.meetgeorge.app/">
                <Button variant="ghost" className="text-[#191c1f] hover:bg-[#f7f7f7] rounded-full px-4 md:px-6 py-2 text-xs md:text-[17px] font-medium font-semibold">George</Button>
                </Link>
              </nav>
            </div>

            {/* Right side - About us, language, auth */}
            <div className="flex items-center space-x-2 md:space-x-6">
              <Link href="\about" className="hidden sm:block">
                <Button variant="ghost" className="text-[#191c1f] hover:text-[#1b6ce8] hover:bg-[#f7f7f7] text-xs md:text-[17px] font-medium font-semibold">About us</Button>
              </Link>
              <div className="hidden md:flex items-center space-x-2">
              <div>
                  <Image src="/images/english_flag_logo-2.png" alt='EN' width={20} height={20} />
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
        className="bg-[#0065ff] text-white pt-10 md:pt-30 px-8 md:px-6"
        ref={heroAnimation.ref}
        initial={heroAnimation.initial}
        animate={heroAnimation.animate}
        transition={heroAnimation.transition}
      >
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-6xl text-[40px] md:text-[60px] lg:text-[60px] py-10 font-bold leading-tight">
            Features
          </h2>
          <Image src="/images/featuresHeader.png" alt="features" width={700} height={360} className="w-[250px] md:w-[600px] h-auto ml-[20px] md:ml-[50px]" />
        </div>
      </motion.section>  


      {/* Getting Better Section */}
      <motion.section 
        id="mission"
        className="bg-[#f5f5f7] flex items-center"
        ref={betterAnimation.ref}
        initial={betterAnimation.initial}
        animate={betterAnimation.animate}
        transition={betterAnimation.transition}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-10 w-full">
          <div className="">
            <motion.h1 
              className="text-[#000000] text-2xl md:text-[32px] lg:text-[36px] xl:text-[42px] mt-[20px] font-bold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Built For People Who Move Money Across Borders
            </motion.h1>

                <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-bold my-[20px]">
                {
                  "Send. Receive. Relax."
                }
              </p>

              <p className="text-gray-700 text-lg md:text-lg leading-relaxed font-semi my-[20px] mr-[50px]">
                {
                  "Moving money should feel simple. With StellarPay you can send cash home, split with friends, or get paid in seconds — all with bank-level security."
                }
              </p>

              <div className="flex flex-col md:flex-row mt-[50px]">
                <div className="rounded-2xl bg-white w-[360px] h-[525px]">
                  <div className="flex flex-col">
                    <h2 className="text-black font-bold text-[26px] mt-[30px] mx-[25px]">StellarTags</h2>
                    <p className="text-gray-500 font-semi text-[18px] mt-[15px] mx-[25px]">No long account numbers. Just send to @james or @aisha</p>
                    <div className="flex rounded-xl bg-[#0363fe] w-[65px] h-[40px] justify-center items-center mt-[25px] mx-[25px] mb-[25px]" onClick={() => setShowPopup(true)}>
                  <h2 className="font-bold text-white text-lg text-center">P2P</h2>
                </div>
                </div>
                <Image src="/images/stellartags.png" alt="features" width={700} height={360} className="h-auto mb-0 w-full" />
                </div>

                <div className="rounded-2xl bg-white w-[400px]  md:w-[630px] h-[525px] mt-[40px] md:mt-[0px] md:ml-[50px]">
                  <div className="flex flex-col">
                    <h2 className="text-black font-bold text-[26px] mt-[30px] mx-[25px]">Send home. Send abroad. Send anywhere.</h2>
                    <p className="text-gray-500 font-semi text-[18px] mt-[15px] mx-[25px] md:mb-[18px]">North America ↔ Africa money transfers in seconds.</p>
                    <div className="flex rounded-xl bg-[#0363fe] w-[85px] h-[40px] justify-center items-center mt-[25px] mx-[25px] mb-[60px]" onClick={() => setShowPopup(true)}>
                  <h2 className="font-bold text-white text-lg text-center">Global</h2>
                </div>
                </div>
                <Image src="/images/sendhome.png" alt="features" width={700} height={360} className="h-auto mb-0 w-[550px]" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row mt-[40px]">
                <div className="rounded-2xl bg-white w-[530px] h-[450px]">
                  <div className="flex flex-col">
                    <h2 className="text-black font-bold text-[26px] mt-[30px] mx-[25px]">Deposit how they need</h2>
                    <p className="text-gray-500 font-semi text-[18px] mt-[15px] mx-[25px] mb-[60px]">Straight to mobile money, a bank account, their StellarPay Wallet and more.</p>
                </div>
                <div className="flex flex-row items-center justify-between mb-0">
                <Image src="/images/deposit.png" alt="features" width={350} height={180} className="h-auto w-[300px]" />
                <div className="flex rounded-xl bg-[#0363fe] w-[120px] h-[40px] justify-center items-center mt-[25px] mx-[25px] mb-[25px]" onClick={() => setShowPopup(true)}>
                  <h2 className="font-bold text-white text-lg text-center">Try it out!</h2>
                </div>
                </div>
                </div>

                <div className="rounded-2xl bg-white w-[430px] h-[450px] mt-[40px] md:mt-[0px] md:ml-[60px]">
                <Image src="/images/featuresBody.png" alt="features" width={500} height={500} className="h-auto mb-0 w-full" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row mt-[40px]">
                <div className="rounded-2xl bg-white w-[400px] md:w-[580px] h-[525px]">
                  <div className="flex flex-col">
                    <h2 className="text-black font-bold text-[26px] mt-[30px] mx-[25px]">It's all social</h2>
                    <p className="text-gray-500 font-semi text-[18px] mt-[15px] mx-[25px]">Share a note, add an emoji, or keep it discreet with private mode.</p>
                    <div className="flex rounded-xl bg-[#0363fe] w-[240px] h-[40px] justify-center items-center mt-[25px] mx-[25px] mb-[-10px]" onClick={() => setShowPopup(true)}>
                  <h2 className="font-bold text-white text-lg text-center">@Friends and Family</h2>
                </div>
                </div>
                <Image src="/images/socialwithpopup.png" alt="features" width={700} height={360} className="h-auto mb-0 w-full" />
                </div>

                <div className="rounded-2xl bg-white w-[400px] h-[525px] mt-[40px] md:mt-[0px] md:ml-[50px]">
                  <div className="flex flex-col">
                    <h2 className="text-black font-bold text-[26px] mt-[30px] mx-[25px]">Security You Can Trust</h2>
                    <p className="text-gray-500 font-semi text-[18px] mt-[15px] mx-[25px]">Every transaction is protected with AES-256 and SSL/TLS encryption. 24/7.</p>
                    <div className="flex rounded-xl bg-[#0363fe] w-[130px] h-[40px] justify-center items-center mt-[25px] mx-[25px]" onClick={() => setShowPopup(true)}>
                  <h2 className="font-bold text-white text-lg text-center">Learn More</h2>
                </div>
                </div>
                <Image src="/images/security.png" alt="features" width={700} height={360} className="h-auto mb-0 w-full" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row mt-[40px]">
                <div className="rounded-2xl bg-white w-[330px] h-[550px]">
                  <div className="flex flex-col">
                    <h2 className="text-black font-bold text-[24px] mt-[30px] mx-[25px]">Top up easily</h2>
                    <p className="text-gray-500 font-semi text-[16px] mt-[15px] mx-[25px]">Link your bank, mobile money wallet or debit card and you're ready to go.</p>
                    <div className="flex rounded-xl bg-[#0363fe] w-[120px] h-[35px] justify-center items-center mt-[25px] mx-[25px] mb-[80px]" onClick={() => setShowPopup(true)}>
                  <h2 className="font-bold text-white text-[16px] text-center">Learn more</h2>
                </div>
                </div>
                <Image src="/images/top-up.png" alt="features" width={700} height={360} className="h-auto mb-0 w-full" />
                </div>

                <div className="flex flex-col">
                <div className="rounded-2xl bg-white w-[310px] h-[225px] mt-[40px] md:mt-[0px] md:ml-[20px]">
                  <div className="flex flex-col">
                    <h2 className="text-black font-bold text-[24px] mt-[30px] mx-[25px]">Best in-class support</h2>
                    <p className="text-gray-500 font-semi text-[16px] mt-[15px] mx-[25px]">Whether you want to browse our Help Centre for solutions or chat to us directly, we’ve got you — even on a Sunday.</p>
                </div>
                </div>
                <div>
                <Image src="/images/trustpilot.png" alt="features" width={320} height={200} className="w-[330px] h-auto " />
                </div>
                <div className="flex justify-center items-center" onClick={() => setShowPopup(true)}>
                  <Image
                    src="/images/review.png"
                    alt="features"
                    width={300}
                    height={100}
                    className="h-auto mb-0 w-[300px] ml-[20px]"
                  />
                </div>
                </div>

                <div className="rounded-2xl bg-white w-[350px] h-[550px] mt-[40px] md:mt-[0px] md:ml-[20px]">
                <div className="flex flex-col">
                    <h2 className="text-black font-bold text-[24px] mt-[30px] mx-[25px]">Spend abroad like a local</h2>
                    <p className="text-gray-500 font-semi text-[16px] mt-[15px] mx-[25px]">Use your Stellar card around the world with no hidden fees. Hold, transfer, and spend money in 10+ currencies</p>
                    <div className="flex rounded-xl bg-[#ff7700] w-[120px] h-[35px] justify-center items-center mt-[25px] mx-[25px] mb-[20px]" onClick={() => setShowPopup(true)}>
                  <h2 className="font-bold text-white text-[16px] text-center">Coming soon</h2>
                </div>
                </div>
                <Image src="/images/stellarcard.png" alt="features" width={700} height={360} className="h-auto mb-0 w-[300px]" />
                </div>
              </div>
              
          </div>

        </div>
      </motion.section>


      {/* Store Badges */}
      <motion.div 
        className="bg-[#0065ff] flex flex-col items-center justify-center px-4 mt-[50px] py-16 md:py-50"
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
                <Link href="/meet-the-team" className="block text-[#000000] underline hover:no-underline text-xs md:text-sm">
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
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="https://www.instagram.com/stellarpay/" className="text-[#000000] hover:text-[#0065ff]">
                  <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="https://www.linkedin.com/company/stellarpaytoday/" className="text-[#000000] hover:text-[#0065ff]">
                  <Linkedin className="w-6 h-6" />
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
                <Link href="/privacy-policy#your-rights" className="block text-[#000000] hover:text-[#0065ff] underline hover:no-underline text-xs md:text-sm">
                  Legal
                </Link>
                <Link href="/privacy-policy#contact-us" className="block text-[#000000] hover:text-[#0065ff] underline hover:no-underline text-xs md:text-sm">
                  Complaints
                </Link>
              </div>

              <div className="space-y-1 md:space-y-2 text-center sm:text-left">
                <Link href="/privacy-policy" className="block text-[#000000] underline hover:no-underline text-xs md:text-sm">
                  Privacy policy
                </Link>
                <Link href="/terms-of-service" className="block text-[#000000] underline hover:no-underline text-xs md:text-sm">
                  Terms of service
                </Link>
              </div>

              <div className="space-y-1 md:space-y-2 text-center sm:text-left">
                <Link href="/privacy-policy#cookies-and-tracking-technologies" className="block text-[#000000] underline hover:no-underline text-xs md:text-sm">
                  Cookie Policy
                </Link>
                <Link href="#" className="block text-[#000000] underline hover:no-underline text-xs md:text-sm">
                  Country site map
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="text-center space-y-3 md:space-y-4">
            <p className="text-[#000000] text-xs md:text-sm">© Stellar Technologies Inc 2025</p>
            <p className="text-[#000000] max-w-4xl mx-auto text-xs md:text-sm px-4">
              StellarPay is a Money Service Business authorized to operate in{" "}
              <Link href="/privacy-policy#us-state-privacy-rights" className="underline hover:no-underline">
                most states
              </Link>
              .
            </p>
          </div>
        </div>
      </motion.footer>

      {showPopup && <GetTheApp onClose={() => setShowPopup(false)} onSubmit={() => {}} />}

    </main>
  );
} 