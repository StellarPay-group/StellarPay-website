import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main>

      {/* Navigation/Header */}
      <header className="w-full flex justify-between items-center px-8 py-6 max-w-screen-xl mx-auto">
        <span className="font-bold text-2xl text-[#0065FF]">StellarPay</span>
        <nav className="flex gap-4 items-center">
          <Button variant="ghost" className="text-[#191C1F]">Log in</Button>
          <Button className="bg-[#0065FF] text-white">Sign Up</Button>
        </nav>
      </header>


      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 md:px-0 py-20 md:py-32 bg-white text-center">
        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 max-w-4xl mx-auto">
          MONEY THAT MOVES <br/>AT THE SPEED OF NOW
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto">
          Send and receive globally. Move money where it matters — from splitting dinner with friends to sending to family overseas. Instant, simple and ultra-secure.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <a href="#get-started" className="px-8 py-3 rounded-full font-semibold bg-blue-600 text-white shadow hover:bg-blue-700 transition">Get Started</a>
          <a href="#learn-more" className="px-8 py-3 rounded-full font-semibold border border-blue-600 text-blue-600 hover:bg-blue-50 transition">Learn More</a>
        </div>
        {/* Hero Illustration Placeholder */}
        <div className="w-full flex justify-center mt-8">
          <Image src="/images/hero-illustration.png" alt="StellarPay Hero Illustration" width={600} height={400} />
        </div>
      </section>
     
     
      {/* === StellarPay Section === */}
      <section className="bg-black text-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Do more with <span className="text-blue-400">StellarPay</span>
            </h2>
            <p className="text-lg mb-4">
              Money should move like messages — <br /> instantly, everywhere.
            </p>
            <p className="text-gray-400 mb-6">
              Use our calculator to check prices for transfers in any of 40+ currencies. Whether scheduling
              payments or putting down deposits — over half our transfers get there in under 20 seconds. Use it
              to believe it.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-semibold">
              Learn how to send money
            </button>
          </div>

          {/* Right Content (Image) */}
          <div className="w-full flex justify-center">
            <Image
              src="/images/stellarpay-calculator.png" alt="StellarPay Calculator UI" width={500} height={600} className="rounded-2xl shadow-xl" />
          </div>
        </div>
      </section>


      {/* 3 Icons Section */}
      <section className="w-full max-w-7xl px-4 py-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6 flex items-center">
            <div className="w-full flex-row justify-right mt-8">
              <Image src="/images/home_page_circle_one.png" alt="StellarPay Hero Illustration" width={100} height={100} />
            </div>
            <span className="text-lg text-black mb-2">Secured by security experts with decades of experience protecting billions in transactions.</span>
          </div>
          <div className="bg-white rounded-2xl p-6 flex items-center">
            <div className="w-full flex justify-center mt-8">
              <Image src="/images/home_page_circle_two.png" alt="StellarPay Hero Illustration" width={600} height={400} />
            </div>
            <span className="text-lg text-black mb-2">Regulated by financial authorities and with licenses as a money transmitter in every country we operate.</span>
          </div>
          <div className="bg-white rounded-2xl p-6 flex items-center">
            <div className="w-full flex justify-center mt-8">
              <Image src="/images/home_page_circle_three.png" alt="StellarPay Hero Illustration" width={600} height={400} />
            </div>
            <span className="text-lg text-black mb-2">Always-on support with dedicated fraud and security teams at work 24/7 to keep your money safe.</span>
          </div>
        </div>
      </section>
      

      {/* One app section */}
      <section className="bg-white px-6 py-5 flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl w-full py-12">
          {/* Left - Image */}
          <Image
            src="/images/money-transfer.png" 
            alt="Person with money and heart glasses"
            width={400}
            height={300}
          />

          {/* Right - Text Section */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">
              One app. Money transfers. Anywhere.
            </h2>
            <p className="text-gray-600 mb-2">
              Send money to friends across the street or family across the ocean —
              all from one StellarPay account.
            </p>
            <p className="text-gray-600 mb-2">
              Connect your account and make peer-to-peer or international payments
              in seconds.
            </p>
            <p className="text-gray-600 mb-2">No paperwork.</p>
            <p className="text-gray-600 mb-4">
              No hidden fees. Just fast, connected money.
            </p>

            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Open an account
              </button>
              <a href="#how-it-works" className="underline text-blue-600 hover:text-blue-800">
                See how it works
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Instant availability section */}
      <section className="bg-white px-6 py-5 flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl w-full py-12">
          {/* Left - Text Section */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">
              Instant availability, everywhere.
            </h2>
            <p className="text-gray-600 mb-2">
              When you send money with StellarPay, it's there — right away. 
            </p>
            <p className="text-gray-600 mb-2">
              No waiting, no agents, and no guessing. Just tap, send, track, and done. 
            </p>
            <p className="text-gray-600 mb-4">
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl w-full py-12">
          {/* Left - Image */}
          <Image
            src="/images/mobile-money-included.png" 
            alt="People eating outside"
            width={400}
            height={300}
          />

          {/* Right - Text Section */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">
              Mobile money included. Just like it should be.
            </h2>
            <p className="text-gray-600 mb-2">
              Connecting you directly with leading mobile money platforms like MTN Mobile Money, 
              Orange Money, and others — so your loved ones can revieve funds instantly, no matter 
              where they are or what device they use. 
            </p>
            <p className="text-gray-600 mb-2">
              Whether it's sending money to a village in Cameroon, paying school fees in Accra, 
              or topping up a phone in Nairobi — StellarPay works where real life happens.
            </p>
            <p className="text-gray-600 mb-2">

            </p>
            <p className="text-gray-600 mb-4">
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
      <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-xl mx-auto py-20 px-4 gap-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto border border-blue-50 rounded-xl p-8 bg-blue-50">
          <div className="flex-1 max-w-lg">
            <h2 className="text-3xl font-bold text-[#0E0F0C] mb-4">Security you can feel. Protection you can trust.</h2>
            <p className="text-[#454745] mb-6">Your peace of mind is built into every transfer. We use bank-grade encryption, real-time fraud detection, and offer 24/7 in-app support — so your money is always in safe hands. No shady conversions. No surprise fees. Just total transparency.</p>
            <Button variant="outline" className="border-[#0E0F0C] text-[#0E0F0C] px-8 py-4 rounded-full text-lg font-semibold">Learn more</Button>
          </div>
          <div className="flex-1 flex justify-center">
            <Image src="/images/security-illustration.png" alt="Security Illustration" width={310} height={449} className="rounded-3xl shadow-lg" />
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
      <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto my-4">
        <h3 className="text-2xl font-bold mb-3">Meet George</h3>
        <p className="text-lg mb-4">Money talks - George listens.</p>
        <p className="text-lg mb-4">
          Unlock financial clarity with an intelligent financial comparison. 
          Understanding your transactions, set goals and identify your unique 
          needs with a seemingly integrated AI solution.
        </p>
      </div>
      

      {/* Footer */}
      <footer className="w-full bg-[#F8FAFF] py-8 mt-16">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-8 gap-4">
          <span className="text-[#0E0F0C] text-sm">© Stellar Technologies Inc 2025</span>
          <div className="flex gap-6 text-[#0E0F0C] text-sm">
            <a href="#" className="hover:underline">Privacy policy</a>
            <a href="#" className="hover:underline">Legal</a>
            <a href="#" className="hover:underline">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}