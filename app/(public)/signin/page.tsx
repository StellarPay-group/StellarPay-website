"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex flex-row justify-between items-center p-4">
        <Link href="/">
          <Button variant="ghost" className="text-xl md:text-[24px] mb-1 font-bold text-[#191c1f]">StellarPay</Button>
        </Link>
      </header>





      <main className="flex flex-col justify-center items-center p-8">


        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-col">
            <Image src="/images/stellarbanking_logo.png" alt="StellarPay" width={100} height={100} className="mx-auto mb-[20px]" />
            <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
            <p className="text-md text-[#191c1f] mb-[20px]">Enter your phone number</p>
            <div className="flex flex-row">
              <input type="text" placeholder="+1" className="mb-[20px] w-[60px] lg:h-[60px] rounded-[10px] border border-gray-300 p-[10px] text-[20px] mr-[10px]" onChange={(e) => { }} maxLength={4} />
              <input type="text" placeholder="Mobile number" className="w-[340px] h-[60px] rounded-[10px] border border-gray-300 p-[10px] text-[20px]" onChange={(e) => { }} maxLength={10} />
            </div>
            <Link href="/api/auth/signin">
              <button className="bg-[#0065ff] text-white px-4 py-2 rounded-[10px] border border-gray-300 h-[60px] w-[420px] text-[20px]">Continue</button>
            </Link>
            <p className="text-center text-md text-[#191c1f] mt-[20px]">OR</p>
            <div className="flex flex-row justify-center items-center">
              <Link href="/api/auth/signin">
                <button className="mt-[20px] w-[200px] h-[60px] rounded-[10px] border 
              border-gray-300 p-[10px] text-[18px] mr-[10px]">
                <div className="flex flex-row items-center">
                  <Image src="/images/GoogleLogo.png" alt="Google" width={20} height={20} />
                  <p className="text-[16px] ml-[10px]">Sign in with Google</p>
                </div>
              </button>
              </Link>
              <Link href="/api/auth/signin">
                <button className="mt-[20px] w-[200px] h-[60px] rounded-[10px] border border-gray-300 p-[10px] text-[18px] mr-[10px]">
                  <div className="flex flex-row items-center">
                    <Image src="/images/AppleLogo.png" alt="Apple" width={20} height={20} />
                    <p className="text-[16px] ml-[10px]">Sign in with Apple</p>
                  </div>
                </button>
              </Link>
            </div>
            <p className="mt-[20px] text-md">Don't have an account? </p>
            <Link href="/signup">
              <button className="mt-[20px] bg-[#0065ff] text-white px-4 py-2 rounded-[10px] border border-gray-300 h-[60px] w-[420px] text-[20px]">Create account</button>
            </Link>
          </div>

          <div className="flex flex-col justify-center items-center ml-[100px]">
            <Image src="/images/qr-code.png" alt="QR Code" width={200} height={200} className="mb-[20px]" />
            <p className="text-center text-lg font-bold text-[#191c1f]">Log in with QR code</p>
            <p className="text-center text-md text-[#191c1f] mt-[20px] w-[300px]">Scan this code with your phone camera to log in instantly</p>
          </div>

        </div>
      </main>


      <footer className="flex flex-row mb-[100px] ml-[40px]">
        <p className="mr-[60px] text-sm md:text-md">English (United States)</p>
        <Link href="/privacy-policy" className="block text-[#000000] underline hover:no-underline text-sm md:text-md">
          Privacy policy
        </Link>
      </footer>

    </div>
  );
} 