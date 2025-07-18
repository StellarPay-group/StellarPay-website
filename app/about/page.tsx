"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen w-full flex flex-col items-center">
      {/* Header/Nav */}
      <header className="w-full flex justify-between items-center px-8 py-6 max-w-screen-xl mx-auto">
        <span className="font-bold text-2xl text-[#0065FF]">StellarPay</span>
        <nav className="flex gap-4 items-center">
          <Button variant="ghost" className="text-[#191C1F]">Log in</Button>
          <Button className="bg-[#0065FF] text-white">Sign Up</Button>
          <Button variant="ghost" className="text-[#191C1F] flex items-center gap-1">
            EN
            <Image src="/about-icon-1.svg" alt="Chevron" width={20} height={20} />
          </Button>
          <span className="ml-4 font-medium text-[#191C1F]">About us</span>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full flex flex-col items-center px-4 py-16 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-2 text-black">About Us</h2>
        <p className="text-lg text-[#0E0F0C] mb-6 text-center max-w-2xl">
          Money shouldn't be this complicated. Whether you're sending cash abroad, balancing your family's budget, or scaling your business — we've all felt how broken and frustrating finances can be. That's exactly why we're here. Our goal is simple. To eliminate the friction that stands between you and your intentions with your money. Whether it's sending money, spending money, or managing money, our mission is to make faster and affordable transactions anywhere you are - your new reality.
        </p>
        <p className="text-lg font-medium text-[#0E0F0C] mb-8 text-center max-w-2xl">
          We're creating a platform so intuitive, so smooth, so versatile that you'll never need another financial app again. How? By doing what we do best: consistently building faster, superior, smarter solutions all while making every transfer cheaper than the last to reach our goal of driving costs toward zero.
        </p>
        <div className="flex flex-col md:flex-row gap-8 w-full justify-center mb-12">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-semibold text-[#0E0F0C] mb-2">Honest.</span>
            <span className="text-lg text-[#433B3B]">See, Track or Monitor Money Transparently</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-semibold text-[#0E0F0C] mb-2">Lightning-fast.</span>
            <span className="text-lg text-[#0E0F0C]">Transact at the speed of light</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-semibold text-[#0E0F0C] mb-2">Effortless.</span>
            <span className="text-lg text-black">Send, Request or Spend Effortlessly</span>
          </div>
        </div>
        <Button className="bg-[#0065FF] text-white px-8 py-3 rounded-full text-lg font-bold mb-8">Get Started</Button>
        <h3 className="text-5xl font-bold text-center text-black mb-4">Getting better and better</h3>
      </section>

      {/* Timeline Section */}
      <section className="w-full max-w-6xl px-4 py-12 mx-auto">
        <h4 className="text-3xl font-bold text-[#0065FF] mb-8">What we've done so far</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-[#0065FF] rounded-2xl p-6 flex flex-col items-center">
            <span className="text-4xl font-bold text-white mb-2">2024</span>
            <span className="text-lg text-white mb-2">Survey website reaches 70k signups validating our idea</span>
            <span className="text-lg text-white">June 2024</span>
          </div>
          <div className="bg-[#005B13] rounded-2xl p-6 flex flex-col items-center">
            <span className="text-4xl font-bold text-white mb-2">2024</span>
            <span className="text-lg text-white mb-2">Our founders Christian Atangana and Hamza Hussain begin building</span>
            <span className="text-lg text-white">August 2024</span>
          </div>
          <div className="bg-[#9747FF] rounded-2xl p-6 flex flex-col items-center">
            <span className="text-4xl font-bold text-white mb-2">2025</span>
            <span className="text-lg text-white mb-2">Launch of StellarPay & George</span>
            <span className="text-lg text-white">July 2025</span>
          </div>
        </div>
      </section>

      {/* Store Badges */}
      <div className="flex flex-row gap-6 mb-16">
        <Image src="/about-app-store-badge.svg" alt="App Store" width={150} height={50} />
        <Image src="/about-google-play-badge.svg" alt="Google Play" width={170} height={50} />
      </div>

      {/* Footer */}
      <footer className="w-full bg-white border-t border-gray-200 py-8 px-4 flex flex-col items-center">
        <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-center mb-4">
          <span className="font-bold text-2xl text-[#0065FF] mb-2 md:mb-0">StellarPay</span>
          <div className="flex flex-wrap gap-4 text-sm text-[#0E0F0C]">
            <a href="#" className="hover:underline">Modern slavery statement</a>
            <a href="#" className="hover:underline">Country site map</a>
            <a href="#" className="hover:underline">Complaints</a>
            <a href="#" className="hover:underline">Cookie Policy</a>
            <a href="#" className="hover:underline">Privacy policy</a>
            <a href="#" className="hover:underline">Legal</a>
          </div>
        </div>
        <div className="text-xs text-[#0E0F0C] mb-2">StellarPay is a Money Service Business authorized to operate in most states. In other states, the program is sponsored by Community Federal Savings Bank, to which we’re a service provider.</div>
        <div className="text-xs text-[#0E0F0C]">© Stellar Technologies Inc 2025</div>
        <div className="flex gap-4 mt-4">
          <a href="#" aria-label="Social 1">
            <Image src="/about-icon-1.svg" alt="Social 1" width={24} height={24} />
          </a>
          <a href="#" aria-label="Social 2">
            <Image src="/about-icon-2.svg" alt="Social 2" width={24} height={24} />
          </a>
          <a href="#" aria-label="Social 3">
            <Image src="/about-icon-3.svg" alt="Social 3" width={24} height={24} />
          </a>
        </div>
      </footer>
    </main>
  );
} 