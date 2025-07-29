"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Zap, Send, ChevronLeft, ChevronRight} from 'lucide-react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default function AboutPage() {

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 3 },
    tablet:  { breakpoint: { max: 1023.98, min: 464 }, items: 2, slidesToSlide: 2 },
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
            <div className="flex items-center space-x-8">
              <Link href="/">
                <Button variant="ghost" className="text-2xl font-bold text-[#191c1f]">StellarPay</Button>
              </Link>
              <nav className="flex items-center space-x-1">
                <Button variant="default" className="bg-[#0065ff] hover:bg-[#0065ff]/90 text-white rounded-full px-6 py-2 text-sm font-medium font-semibold">Personal</Button>
                <Button variant="ghost" className="text-[#191c1f] hover:bg-[#f7f7f7] rounded-full px-6 py-2 text-sm font-medium font-semibold">Business</Button>
                <Button variant="ghost" className="text-[#191c1f] hover:bg-[#f7f7f7] rounded-full px-6 py-2 text-sm font-medium font-semibold">George</Button>
              </nav>
            </div>

            {/* Right side - About us, language, auth */}
            <div className="flex items-center space-x-6">
              <Button variant="ghost" className="text-[#191c1f] hover:bg-[#f7f7f7] text-sm font-medium font-semibold">About us</Button>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-red-500 relative overflow-hidden rounded-full">
                  {/* Put flag img here later */}
                </div>
                <span className="text-[#191c1f] text-sm font-medium font-semibold">EN</span>
              </div>
              <Button variant="ghost" className="text-[#191c1f] hover:bg-[#f7f7f7] text-sm font-medium font-semibold">Log in</Button>
              <Button variant="default" className="bg-[#0065ff] hover:bg-[#0065ff]/90 text-white rounded-full px-6 py-2 text-sm font-medium font-semibold">Sign Up</Button>
            </div>
          </div>
        </div>
      </section>


      {/* Hero Section */}
        <section className="bg-[#0e0f0c] text-white py-30 px-6">
          <div className="max-w-xl mx-auto flex items-center -translate-x-24">
            <h2 className="text-[130px] font-bold leading-tight">
              Meet.<br />StellarPay.
            </h2>
          </div>
        </section>  

      {/* About Us Section */}
      <div className="bg-white flex items-center px-8 md:px-16 py-16">
        <div className="max-w-[140rem] mx-auto">
          <h1 className="text-[#000000] text-4xl font-bold mb-10">About Us</h1>

          <div className="flex items-center">
            <div className="text-[#000000] text-lg leading-relaxed max-w-6xl pr-96">
              <p>Money shouldn't be this complicated.</p>
              <p>
                Whether you're sending cash abroad, balancing your family's budget, or scaling your business — we've all
                felt how broken and frustrating finances can be.
              </p>
              <p>That's exactly why we're here.</p>

              <p>
                Our goal is simple. To eliminate the friction that stands between you and your intentions with your money.
              </p>

              <p>
                Whether it's sending money, spending money, or managing money, our mission is to make faster and
                affordable transactions anywhere you are - your new reality.
              </p>
            </div>

            <div className="flex-shrink-0 mb-10">
              <Button className="bg-[#0065ff] hover:bg-[#0052cc] text-white px-8 py-3 rounded-full text-lg font-medium">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Traits Section */}
      <div className="bg-[#0065ff] py-36 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-15">
            {/* Lightning-fast Card */}
            <div className="bg-[#ffffff] rounded-2xl p-8">
              <div className="mb-6">
                <Zap className="w-8 h-8 text-[#000000]" />
              </div>
              <h3 className="text-4xl font-bold text-[#0e0f0c] mb-4 text-left">Lightning-fast.</h3>
              <p className="text-[#433b3b] text-xl font-semibold leading-relaxed text-left">Transact at the speed of light</p>
            </div>

            {/* Effortless Card */}
            <div className="bg-[#ffffff] rounded-2xl p-8">
              <div className="mb-6">
                <Send className="w-8 h-8 text-[#000000]" />
              </div>
              <h3 className="text-4xl font-bold text-[#0e0f0c] mb-4 text-left">Effortless.</h3>
              <p className="text-[#433b3b] text-xl font-semibold leading-relaxed text-left">Send, Request or Spend Effortlessly</p>
            </div>

            {/* Honest Card */}
            <div className="bg-[#ffffff] rounded-2xl p-8">
              <div className="mb-6 h-8">{/* Empty div to maintain alignment with other cards */}</div>
              <h3 className="text-4xl font-bold text-[#0e0f0c] mb-4 text-left">Honest.</h3>
              <p className="text-[#433b3b] text-xl font-semibold leading-relaxed text-left">
                See, Track or Monitor Money Transparently
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Getting Better Section */}
      <section className="bg-white flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-16 w-full">
          <div className="space-y-8">
            <h1 className="text-[#000000] text-7xl font-semibold leading-tight text-center">
              Getting better and better
            </h1>

            <div className="max-w-2xl mx-auto">
              <p className="text-[#000000] text-xl leading-relaxed font-semibold">
                {
                  "We're creating a platform so intuitive, so smooth, so versatile that you'll never need another financial app again."
                }
              </p>
              <p className="text-[#000000] text-xl leading-relaxed font-semibold mt-4">
                {
                  "How? by doing what we do best: consistently building faster, superior, smarter solutions all while making every transfer cheaper than the last to reach our goal of driving costs toward zero."
                }
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Timeline Section */}
      <div className="w-full max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <h2 className="text-4xl font-bold text-[#000000] mb-16 text-left">What we've done so far</h2>
        {/* Timeline Cards Container */}
        <div className="relative">
            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 h-12 w-12 rounded-full bg-white shadow-md hover:bg-gray-50"
            >
              <ChevronLeft className="h-6 w-6 text-[#000000]" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 h-12 w-12 rounded-full bg-white shadow-md hover:bg-gray-50"
            >
              <ChevronRight className="h-6 w-6 text-[#000000]" />
            </Button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 - June 2024 */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#d9d9d9] overflow-hidden">
              <div className="bg-[#0065ff] h-96 flex items-center justify-center">
                <span className="text-white text-6xl font-bold">2024</span>
              </div>
              <div className="px-12 py-8">
                <h3 className="text-2xl font-bold text-[#000000] mb-2">June 2024</h3>
                <p className="text-[#000000] text-2xl leading-[1.05]">
                  Survey website reaches 70k signups validating our idea
                </p>
              </div>
            </div>

            {/* Card 2 - August 2024 */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#d9d9d9] overflow-hidden">
              <div className="bg-[#005b13] h-96 flex items-center justify-center">
                <span className="text-white text-6xl font-bold">2024</span>
              </div>
              <div className="px-12 py-8">
                <h3 className="text-2xl font-bold text-[#000000] mb-2">August 2024</h3>
                <p className="text-[#000000] text-2xl leading-[1.05]">
                  Our founders Christian Atangana and Hamza Hussain begin building
                </p>
              </div>
            </div>

            {/* Card 3 - July 2025 */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#d9d9d9] overflow-hidden">
              <div className="bg-[#9747ff] h-96 flex items-center justify-center">
                <span className="text-white text-6xl font-bold">2025</span>
              </div>
              <div className="px-12 py-8">
                <h3 className="text-2xl font-bold text-[#000000] mb-2">July 2025</h3>
                <p className="text-[#000000] text-2xl leading-[1.05]">Launch of StellarPay & George</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="w-full max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <h2 className="text-4xl font-bold text-[#000000] mb-16 text-left">StellarPay Articles</h2>
        {/* Blog Cards Container */}
        <div className="relative ml-[-20]">
            <Carousel
            showDots={false}
            responsive={responsive}
            ssr={false} 
            infinite={false}
            autoPlay={false}
            containerClass={`w-[1000px] md:w-[1000px] lg:w-[1300px]`}
            dotListClass="mt-8"
            itemClass="px-4"  
            customButtonGroup={<ButtonGroup />}
            renderButtonGroupOutside={true}
            arrows={false}
          >
            <div className="relative w-[400px] h-[600px] overflow-hidden rounded-lg">
            <div className="bg-white rounded-2xl shadow-sm border border-[#d9d9d9] overflow-hidden">
              <div className="bg-[#0065ff] h-96 flex items-center justify-center">
              <Image src="/images/blog1.png" alt="" width={400} height={400} />
              </div>
              <div className="px-12 py-8">
                <h3 className="text-2xl font-bold text-[#000000] mb-2">October 2007</h3>
                <p className="text-[#000000] text-2xl leading-[1.05]">
                  StellarPay empower
                </p>
              </div>
            </div>
              </div>
              <div className="relative w-[400px] h-[600px] overflow-hidden rounded-lg">
            <div className="bg-white rounded-2xl shadow-sm border border-[#d9d9d9] overflow-hidden">
              <div className="bg-[#0065ff] h-96 flex items-center justify-center">
              <Image src="/images/blog2.png" alt="" width={400} height={400} />
              </div>
              <div className="px-12 py-8">
                <h3 className="text-2xl font-bold text-[#000000] mb-2">October 2007</h3>
                <p className="text-[#000000] text-2xl leading-[1.05]">
                  Coming soon
                </p>
              </div>
            </div>
              </div>
              <div className="relative w-[400px] h-[600px] overflow-hidden rounded-lg">
            <div className="bg-white rounded-2xl shadow-sm border border-[#d9d9d9] overflow-hidden">
              <div className="bg-[#0065ff] h-96 flex items-center justify-center">
              <Image src="/images/blog3.png" alt="" width={400} height={400} />
              </div>
              <div className="px-12 py-8">
                <h3 className="text-2xl font-bold text-[#000000] mb-2">October 2007</h3>
                <p className="text-[#000000] text-2xl leading-[1.05]">
                  Coming soon
                </p>
              </div>
            </div>
              </div>
              <div className="relative w-[400px] h-[600px] overflow-hidden rounded-lg">
            <div className="bg-white rounded-2xl shadow-sm border border-[#d9d9d9] overflow-hidden">
              <div className="bg-[#0065ff] h-96 flex items-center justify-center">
              <Image src="/images/blog4.png" alt="" width={400} height={400} />
              </div>
              <div className="px-12 py-8">
                <h3 className="text-2xl font-bold text-[#000000] mb-2">October 2007</h3>
                <p className="text-[#000000] text-2xl leading-[1.05]">
                  Coming soon
                </p>
              </div>
            </div>
              </div>
          </Carousel>
      </div>
      </div>
      

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
                <Link href="#" className="text-[#000000] hover:text-[#0065ff]">
                  <Facebook className="w-6 h-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-[#000000] hover:text-[#0065ff]">
                  <Twitter className="w-6 h-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-[#000000] hover:text-[#0065ff]">
                  <Instagram className="w-6 h-6" />
                  <span className="sr-only">Instagram</span>
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
                <Link href="#" className="block text-[#000000] underline hover:no-underline">
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
              . In other states, the program is sponsored by Community Federal Savings Bank, to which we're a service
              provider.
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
} 