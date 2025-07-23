import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Shield, CheckCircle, Landmark } from 'lucide-react';

export default function HomePage() {
  return (
    <main>

      {/* Navigation/Header */}
      <section className="w-full bg-[#ffffff]" role="banner" aria-label="Main navigation">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Left side - Logo and navigation */}
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold text-[#191c1f]">StellarPay</div>
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
      <section className="flex flex-col items-center justify-center px-4 md:px-0 py-20 md:py-32 bg-white text-center">
        <div className="aspect-[1098/269] max-w-[1098px] w-full flex items-center justify-center mx-auto ">
          <h1 className="font-black text-center text-[91.9px] leading-[1.05] max-w-full">
            MONEY THAT MOVES<br />AT THE SPEED OF NOW
          </h1>
        </div>
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
          Send and receive globally.<br/>Move money where it matters — from splitting dinner with friends to sending to family overseas. Instant, simple and ultra-secure.
        </p>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-12">
          <a href="#get-started" className="px-12 py-3 rounded-full font-semibold bg-blue-600 text-white shadow hover:bg-blue-700 transition">Get The App</a>
        </div>
        {/* Hero Illustration Placeholder */}
        <div className="w-full flex justify-center mt-8">
          <Image src="/images/hero-illustration.png" alt="StellarPay Hero Illustration" width={600} height={400} />
        </div>
      </section>
     
     
      {/* === StellarPay Section === */}
      <section className="bg-white py-12 pb-1 px-4">
        <div className="bg-black text-white mx-auto py-16 px-10 w-[calc(100vw-2.5cm)] max-w-none">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className='pt-6 pl-6 md:pl-12'>
              <h2 className="text-5xl font-bold mb-12">
                Do more with StellarPay
              </h2>
              <p className="text-3xl font-semi-bold mb-12 font-semibold">
                Money should move like messages — <br /> instantly, everywhere.
              </p>
              <p className="text-lg mb-12">
                Use our calculator to check prices for transfers in any of 40+ currencies. Whether scheduling
                payments or putting down deposits — over half our transfers get there in under 20 seconds. Use it
                to believe it.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-semibold">
                Learn how to send money
              </button>
            </div>

            {/* Right Content (Image) */}
            <div className="pt-6 w-full flex justify-center">
              <Image
                src="/images/stellarpay-calculator.png"
                alt="StellarPay Calculator UI"
                width={500}
                height={600}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>


      {/* 3 Icons Section */}
      <section className="bg-[#ffffff] py-12 px-4" aria-labelledby="security-features">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-px bg-gray-200 mb-12"></div> 
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Security Experts Feature */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#0065ff] rounded-full flex items-center justify-center">
                  <Landmark className="w-8 h-8 text-[#ffffff]" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-[#454745] text-base leading-relaxed font-semibold">
                  Secured by security experts with decades of experience protecting billions in transactions
                </p>
              </div>
            </div>

            {/* Regulation Feature */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#0065ff] rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-[#ffffff]" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-[#454745] text-base leading-relaxed font-semibold">
                  Regulated by financial authorities and with licenses as a money transmitter in every country we operate
                </p>
              </div>
            </div>

            {/* Support Feature */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#0065ff] rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-[#ffffff]" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-[#454745] text-base leading-relaxed font-semibold">
                  Always-on support with dedicated fraud and security teams at work 24/7 to keep your money safe
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* One app section */}
      <section className="bg-white px-12 py-5 flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-5xl py-12 pb-8 mx-auto">
          {/* Left - Image */}
          <Image
            src="/images/money-transfer.png" 
            alt="Person with money and heart glasses"
            width={470}
            height={590}
          />

          {/* Right - Text Section */}
          <div className="flex-1">
            <h2 className="text-3xl font-semibold mb-4">
              One app. Money transfers. Anywhere.
            </h2>
            <p className="text-gray-600 text-lg mb-2">
              Send money to friends across the street or family across the ocean —
              all from one StellarPay account.
            </p>
            <p className="text-gray-600 text-lg mb-2">
              Connect your account and make peer-to-peer or international payments
              in seconds.
            </p>
            <p className="text-gray-600 text-lg mb-2">No paperwork.</p>
            <p className="text-gray-600 text-lg mb-8">
              No hidden fees. Just fast, connected money.
            </p>

            <div className="flex gap-4 items-center">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Open an account
              </button>
              <a href="#how-it-works" className="underline hover:text-blue-800 font-semibold">
                See how it works
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Instant availability section */}
      <section className="bg-white px-6 py-5 flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl w-full py-12">
          {/* Left - Text Section */}
          <div className="flex-1">
            <h2 className="text-3xl font-semibold mb-4">
              Instant availability, everywhere.
            </h2>
            <p className="text-gray-600 text-lg mb-2">
              When you send money with StellarPay, it's there — right away. 
            </p>
            <p className="text-gray-600 text-lg mb-2">
              No waiting, no agents, and no guessing. Just tap, send, track, and done. 
            </p>
            <p className="text-gray-600 text-lg mb-4">
              Whether it's $5 for takeout or $500 for school fees, we move at the speed of life. 
            </p>

            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Try your first transfer
              </button>
            </div>
          </div>

          {/* Right - Image */}
          <Image
            src="/images/instant-availability.png" 
            alt="People eating outside"
            width={400}
            height={300}
          />
        </div>
      </section>


      {/* Mobile money section */}
      <section className="bg-white px-6 py-5 flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-5xl w-full py-12">
          {/* Left - Image */}
          <Image
            src="/images/mobile-money-included.png" 
            alt="People eating outside"
            width={480}
            height={360}
          />

          {/* Right - Text Section */}
          <div className="flex-1">
            <h2 className="text-3xl font-semibold mb-4">
              Mobile money included. Just like it should be.
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              Connecting you directly with leading mobile money platforms like MTN Mobile Money, 
              Orange Money, and others — so your loved ones can revieve funds instantly, no matter 
              where they are or what device they use. Whether it's sending money to a village in 
              Cameroon, paying school fees in Accra, or topping up a phone in Nairobi — StellarPay 
              works where real life happens.
            </p>
            <p className="text-gray-600 text-lg mb-8">
              No banks required. No complicated steps. Just tap, send, recieve — all on your phone.
            </p>

            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Send to mobile money
              </button>
            </div>
          </div>
        </div>
      </section>

      
      {/* Security Section */}
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-[112px] xl:px-[120px] 2xl:px-[128px] py-20">
        <div className="aspect-[1225/664] max-w-[1470px] w-full mx-auto rounded-[60px] bg-blue-50 p-8 py-20 flex flex-col md:flex-row items-start justify-between gap-10">
          <div className="pl-8 flex-1 max-w-lg">
            <h2 className="text-5xl font-semibold text-[#0E0F0C] mb-8 ">Security you can feel. Protection you can trust.</h2>
            <p className="text-[#454745] text-lg mb-8">Your peace of mind is built into every transfer. We use bank-grade encryption, real-time fraud detection, and offer 24/7 in-app support — so your money is always in safe hands.</p>
            <p className="text-[#454745] text-lg mb-6">No shady conversions. No surprise fees. Just total transparency.</p>
            <Button className="text-white px-16 py-6 rounded-full text-lg font-semibold bg-black mx-auto block leading-none flex items-center justify-center">Learn more</Button>
          </div>
          <div className="flex-1 flex justify-center">
            <Image src="/images/security-illustration.png" alt="Security Illustration" width={310} height={449} className="shadow-lg"
            />
          </div>
        </div>
      </section>



      {/* Meet StellarPay section */}
      <section className="flex flex-col items-center justify-center px-4 md:px-0 py-20 md:py-32 bg-white text-center">
        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 max-w-4xl mx-auto">
          Meet StellarPay
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto">
          A new way to money. 
        </p>
        {/* I am not sure how to do the slider thing... */}
      </section>


      {/* Meet George section */}
      <section className="w-full px-4 sm:px-8 md:px-12 lg:px-[112px] xl:px-[120px] 2xl:px-[128px] py-20">
        <div className="aspect-[1225/472] max-w-[1470px] w-full mx-auto bg-[#0065ff] rounded-3xl p-12">
          <div className="space-y-8">
            <div className="inline-flex">
              <div className="bg-[#000000] text-[#ffffff] px-6 py-3 rounded-full text-sm font-medium white-border">Artificial Intelligence | 01</div>
            </div>
            <div className="space-y-4">
              <h1 className="text-[#ffffff] text-5xl font-semibold leading-tight">Meet George</h1>
              <p className="text-[#ffffff] text-lg ">Money talks - George listens.</p>
            </div>
            <div className="space-y-6 max-w-2xl">
              <p className="text-[#ffffff] text-lg leading-relaxed">Unlock financial clarity with an intelligent financial companion.</p>
              <p className="text-[#ffffff] text-lg leading-relaxed">
                Understand your transactions, set goals and identify your unique needs with a seamlessly
                integrated AI solution.
              </p>
            </div>
          </div>
        </div>
      </section>



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