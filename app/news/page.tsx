"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Zap, Send, ChevronLeft, ChevronRight, Linkedin} from 'lucide-react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default function NewsPage() {

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 1 },
    tablet:  { breakpoint: { max: 1023.98, min: 464 }, items: 2, slidesToSlide: 1 },
    mobile:  { breakpoint: { max: 463.98,  min: 0 }, items: 1, slidesToSlide: 1 }
  };

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
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Left side - Logo and navigation */}
            <div className="flex items-center space-x-2 md:space-x-8">
              <Link href="/">
                <Button variant="ghost" className="text-xl md:text-[24px] mb-1 font-bold text-[#191c1f]">StellarPay</Button>
              </Link>
              <nav className="hidden md:flex items-center space-x-1">
              <Link href="/">
              <Button variant="ghost" className="text-[#191c1f] hover:bg-[#f7f7f7] rounded-full px-4 md:px-6 py-2 text-xs md:text-[17px] font-medium font-semi">Personal</Button>
              </Link>
              <Link href="/news">
                <Button variant="ghost" className="text-[#1b6ce8] hover:text-[#1b6ce8] hover:bg-[#f7f7f7] rounded-full px-4 md:px-6 py-2 text-xs md:text-[17px] font-medium font-bold">Business</Button>
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

          <div className="max-w-[1470px] w-xl rounded-[30px] mt-16 bg-blue-50 p-8 py-16 flex flex-col items-center justify-between gap-10">
          <div className="flex-1 max-w-lg">
            <h2 className="text-4xl text-center font-semibold text-[#0E0F0C] mb-8 font-[500] ">Press inquiries</h2>
            <p className="text-[#000000] text-xl font-[400] mb-4 text-center">Got a media enquiry? Get in touch with us at discovery@stellarpay.app. </p>
            <p className="text-[#000000] text-xl font-[400] mb-8 text-center">
            Please note this email can’t respond to customer requests.</p>
            <Button className="bg-[#0065ff] hover:bg-[#0052cc] text-white px-8 py-5 rounded-full text-lg font-medium mx-auto block leading-none flex items-center justify-center">Get in touch</Button>
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
          <a href="https://www.flagright.com/post/stellarpay-chooses-flagright-for-transaction-monitoring-aml-screening">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {/* Card 1 - June 2024 */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#d9d9d9] overflow-hidden">
              <div className="bg-[#0065ff] h-96 flex items-center justify-center">
              <Image src="/images/stellarbanking_cover.png" alt="" width={400} height={400} />
              </div>
              <div className="px-8 py-8">
                <h3 className="text-2xl font-[700] text-[#000000] mb-2">StellarPay announces partnership with Flagright</h3>
                <h3 className="text-lg font-[500] text-gray-500 text-[#000000] mb-2">July 17, 2025</h3>
                <p className="text-[#000000] text-xl leading-[1.05]">
                StellarPay partners with Flagright to launch with real-time AML screening, transaction monitoring, and case management across its crypto-fiat payments platform.
                </p>
              </div>
            </div>

          </div>
          </a>
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

            <Button className="bg-[#0065ff] hover:bg-[#0052cc] text-white px-8 py-7 rounded-full text-lg font-medium mx-auto block leading-none mb-10 flex items-center justify-center">Get StellarPay</Button>
          </div>
        </div>
      </section>

      {/* Store Badges */}
      <div className="bg-[#0065ff] flex flex-col items-center justify-center px-4 py-50">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-[#fffffe] text-8xl font-bold tracking-tight">StellarPay</h1>

          {/* Subtitle */}
          <p className="text-[#fffffe] text-xl md:text-2xl lg:text-3xl font-semibold">A new way to money</p>
        </div>
        <div className="w-full flex justify-center mt-12">
          <a href="https://apps.apple.com/ca/app/george/id6743195041">
        <Image src="/images/appleStore.png" alt="apple" width={175} height={90} style={{marginRight: 20}} />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.stellar.stellarai.app">
        <Image src="/images/googleStore.png" alt="google" width={193} height={95} />
        </a>
        </div>
      </div>
     
     
      {/* Footer */}
      <footer className="bg-[#ffffff] text-[#000000] px-6 py-35">
        <div className="max-w-6xl mx-auto">
          {/* Upper section with three columns */}
          <div className="grid grid-cols-3 gap-4 mb-50">
            {/* Company and team */}
            <div>
              <h3 className="font-medium mb-4">Company and team</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-[#000000] underline hover:no-underline">
                  Company and team
                </Link>
                <Link href="#" className="block text-[#000000] underline hover:no-underline">
                  Service status
                </Link>
              </div>
            </div>

            {/* Stellar Products */}
            <div>
              <h3 className="font-medium mb-4">Stellar Products</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-[#000000] underline hover:no-underline">
                  International money transfers
                </Link>
                <Link href="#" className="block text-[#000000] underline hover:no-underline">
                  StellarPay account
                </Link>
              </div>
            </div>

            {/* Follow us */}
            <div>
              <h3 className="font-medium mb-4">Follow us</h3>
              <div className="flex space-x-4">
                <Link href="https://www.facebook.com/Stellarpaymain" className="text-[#000000] hover:text-[#0065ff]">
                  <Facebook className="w-6 h-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="https://x.com/JoinStellarPay" className="text-[#000000] hover:text-[#0065ff]">
                  <Twitter className="w-6 h-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="https://www.instagram.com/stellarpay/" className="text-[#000000] hover:text-[#0065ff]">
                  <Instagram className="w-6 h-6" />
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
          <div className="border-t border-[#000000] mb-8"></div>

          {/* Lower section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
            {/* StellarPay logo */}
            <div className="lg:col-span-1">
              <div className="text-[#0065ff] text-3xl font-bold">StellarPay</div>
            </div>

            {/* Legal links columns */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <Link href="#" className="block text-[#000000] hover:text-[#0065ff]">
                  Legal
                </Link>
                <Link href="#" className="block text-[#000000] hover:text-[#0065ff]">
                  Complaints
                </Link>
              </div>

              <div className="space-y-2">
                <Link href="/privacy-policy" className="block text-[#000000] underline hover:no-underline">
                  Privacy policy
                </Link>
                <Link href="#" className="block text-[#000000] underline hover:no-underline">
                  Country site map
                </Link>
              </div>

              <div className="space-y-2">
                <Link href="#" className="block text-[#000000] underline hover:no-underline">
                  Cookie Policy
                </Link>
                <Link href="#" className="block text-[#000000] underline hover:no-underline">
                  Modern slavery statement
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="text-center space-y-4">
            <p className="text-[#000000]">© Stellar Technologies Inc 2025</p>
            <p className="text-[#000000] max-w-4xl mx-auto">
              StellarPay is a Money Service Business authorized to operate in{" "}
              <Link href="#" className="underline hover:no-underline">
                most states
              </Link>
              .
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
} 