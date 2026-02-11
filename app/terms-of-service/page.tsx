"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin} from 'lucide-react';
import { useState } from "react";


export default function TermsOfService() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  return (
    <main>

      {/* Navigation/Header */}
      <section className="w-full bg-[#ffffff]" role="banner" aria-label="Main navigation">
      <div className="px-4 py-4">
          <div className="md:mt-1 flex items-center justify-between max-w-7xl mx-auto">
            {/* Left side - Logo and navigation */}
            <div onMouseLeave={() => setShowDropdown(false)} className="flex items-center space-x-2 md:space-x-6">
              <Link href="/">
                <Button variant="ghost" className="hover:bg-[#fbfbfb] text-xl md:text-[30px] mb-1 font-bold text-[#191c1f]">StellarPay</Button>
              </Link>
              <nav className="hidden lg:flex items-center space-x-2">
              <div>
              <Button onMouseEnter={() => setShowDropdown(true)} variant="ghost" className="flex flex-row hover:bg-[#f7f7f7] rounded-full px-4 md:pl-5 md:pr-4 py-2 mb-[1px]">
                <h1 className='text-[#000000] hover:text-[#000000] text-xs md:text-[17px] font-semibold'>
                  Personal
                </h1>
                <div><Image src="/images/chevron-down.png" alt='v' className='mt-[1px]' width={11} height={5} /></div>
              </Button>
              {showDropdown && (
        <div className="flex justify-center absolute mt-0 w-32 bg-white shadow-lg border py-2 border-gray-200 rounded-lg z-50">
              <Link href="/features">
                <Button variant="ghost" className="text-start text-[#000000] hover:bg-[#f7f7f7] rounded-full px-4 md:px-3 py-2 text-xs md:text-[17px] font-medium font-semibold">Features</Button>
              </Link>
        </div>
      )}
              </div>  
              <Link href="/linq">
                <Button variant="ghost" className="px-2 md:px-4 py-2 hover:bg-[#f7f7f7] rounded-full text-[#000000] hover:text-[#000000] mt-[1px] text-xs md:text-[17px] font-semibold">API</Button>
              </Link>
                <Link href="https://www.meetgeorge.app/">
                <Button variant="ghost" className="px-2 md:px-4 py-2 hover:bg-[#f7f7f7] rounded-full text-[#000000] hover:text-[#000000] text-xs md:text-[17px] font-semibold">George</Button>
                </Link>

              </nav>
            </div>

            {/* Right side - About us, language, auth */}
            <div onMouseLeave={() => setShowLanguageDropdown(false)} className="flex items-center space-x-2 md:space-x-2">
              <Link href="\about" className="hidden sm:block">
                <Button variant="ghost" className="border-[#1b6cd8] ml-3 px-2 md:px-5 py-2 hover:bg-[#f7f7f7] rounded-full text-[#000000] hover:text-[#000000] text-xs md:text-[17px] font-semibold">About us</Button>
              </Link>
              <div className="hidden md:flex items-center">
              <div>
              <Button onMouseEnter={() => setShowLanguageDropdown(true)} variant="ghost" className="flex flex-row hover:bg-[#f7f7f7] rounded-full px-4 md:pl-4 md:pr-4 py-2 ">
              <Image src="/images/us-flag.png" alt='EN' width={25} height={25} />
                <h1 className='text-[#000000] hover:text-[#000000] text-xs md:text-[17px] font-semibold'>
                  EN
                </h1>
                <div><Image src="/images/chevron-down.png" alt='v' className='mt-[1px]' width={11} height={5} /></div>
              </Button>
              {showLanguageDropdown && (
        <div className="mt-0 flex justify-center absolute mt-0 w-28 bg-white border py-2 border-gray-200 rounded-lg z-50">
                <Button onClick={() => setShowLanguageDropdown(false)} variant="ghost" className="flex items-center text-start text-[#000000] hover:bg-[#ffffff] rounded-full px-4 md:px-3 py-1 text-xs md:text-[17px] font-medium font-semibold">
                <Image src="/images/us-flag.png" alt='EN' width={25} height={25} />
                <h1 className='mr-2 text-[#000000] hover:text-[#000000] text-xs md:text-[17px] font-semibold'>
                  EN
                </h1>
                </Button>
        </div>
      )}
                  </div>
              </div>
              <Link href="/signin">
                <Button variant="ghost" className="px-2 md:px-4 py-2 hover:bg-[#f7f7f7] rounded-full text-[#000000] hover:text-[#000000] text-xs md:text-[17px] font-semibold">Log in</Button>
              </Link>
              <Link href="/signup">
                <Button variant="default" className="ml-2 bg-[#0065ff] hover:bg-[#0065ff]/90 text-white rounded-full px-3 md:px-6 py-2 text-xs md:text-[17px] font-semibold">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-10">
          <h1 className="mt-[100px] text-[#191c1f] text-4xl font-bold text-center">Terms & Conditions</h1>


        <p className="text-[#191c1f] text-xl font-medium mt-[20px] font-bold">Stellar Technologies, Inc. (doing business as “StellarPay”) 
        <br />
        <span className="font-normal">Effective Date: January 2025 </span>
        <br />
        <span className="font-normal">Last Updated: January 2026</span></p>

       <h2 className="text-[#191c1f] text-2xl font-bold mt-[10px]">1. Services</h2>

<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
1.1 StellarPay’s products and services include, but are not limited to, artificial intelligence-powered conversational platforms, content generation tools, and APIs for businesses and developers. These may be accessible via websites, mobile applications, SDKs, APIs, and other technological platforms (hereinafter referred to as "the Services").
</p>
<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
1.2 StellarPay’s technology is based on advanced language models that process text, images, and other inputs to generate responses ("Outputs"). Users can provide feedback on these outputs to help improve our services.
</p>
<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
1.3 As technology evolves and legal frameworks change, StellarPay may modify, add, upgrade, suspend, or terminate parts of the Services at its discretion.
</p>
<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
1.4 StellarPay strives to maintain industry-standard cybersecurity measures to ensure safe and stable operations. However, we do not guarantee uninterrupted or error-free service.
</p>
<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
1.5 The availability and features of StellarPay may vary by region. Some services may be restricted in certain jurisdictions.
</p>

<h2 className="text-[#191c1f] text-2xl font-bold mt-[10px]">2. User Accounts</h2>

<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
2.1 The Services are primarily intended for adults. If you are under 18, you must obtain permission from a legal guardian before using StellarPay
</p>
<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
2.2 To use certain features, users must create an account by providing accurate and up-to-date information. False or misleading information may result in suspension or termination of access.
</p>
<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
2.3 Users are responsible for safeguarding their account credentials. Any activity conducted under an account is the sole responsibility of the account holder.
</p>
<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
2.4 StellarPay reserves the right to terminate accounts involved in malicious activity, such as fraudulent registrations, unauthorized access, or violations of these Terms.
</p>
<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
2.5 Users may request account deletion. However, StellarPay may retain certain data to comply with legal requirements or resolve disputes.
</p>

<h2 className="text-[#191c1f] text-2xl font-bold mt-[10px]">3. Acceptable Use Policy</h2>

<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
3.1 Users are granted a limited, non-exclusive, revocable license to use StellarPay’s Services for lawful purposes. Unauthorized reproduction, modification, or exploitation of our technology is prohibited.
</p>
<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
3.2 When using the Services, users must not:Provide misleading or harmful inputs that promote falsehoods, violence, or illegal activity.Use the Services to generate or distribute harmful, defamatory, offensive, or discriminatory content.Engage in activities that violate privacy rights, intellectual property laws, or any other applicable regulations.Attempt to bypass security measures or interfere with the normal operation of StellarPay
</p>
<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
3.3 Users publishing or disseminating outputs generated by the Services must:Verify accuracy before sharing content.Clearly indicate that the content is AI-generated.Refrain from distributing content that violates these Terms.
</p>


<h2 className="text-[#191c1f] text-2xl font-bold mt-[10px]">4. Intellectual Property Rights</h2>

<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
4.1 All proprietary rights to the StellarPay platform, including software, algorithms, and AI-generated content, belong to StellarPay or its licensors.
</p>
<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
4.2 By using the Services, you grant StellarPay a non-exclusive, worldwide, royalty-free license to use, process, and improve submitted inputs for service enhancement and compliance monitoring.
</p>
<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
4.3 Users must not use StellarPay’s trademarks, branding, or copyrighted materials without explicit permission.
</p>

<h2 className="text-[#191c1f] text-2xl font-bold mt-[10px]">5. Privacy & Data Protection</h2>

<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
5.1 StellarPay is committed to protecting user privacy. For details on data collection, storage, and usage, please refer to the StellarPay Privacy Policy.
</p>
<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
5.2 We do not knowingly collect personal data from minors under 18 without parental consent.
</p>
<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
5.3 Users are responsible for ensuring that any personal data shared with StellarPay complies with applicable privacy laws.
</p>

<h2 className="text-[#191c1f] text-2xl font-bold mt-[10px]">6. Disclaimers & Liability Limitations</h2>

<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
6.1 No Warranties: StellarPay provides the Services on an "as-is" and "as-available" basis, without warranties of any kind.
</p>
<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
6.2 Limitations of Liability: To the fullest extent permitted by law, StellarPay shall not be liable for any indirect, incidental, or consequential damages arising from the use of our Services.
</p>
<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
6.3 Indemnification: Users agree to indemnify and hold StellarPay harmless from any claims, damages, or liabilities resulting from their violation of these Terms.
</p>

<h2 className="text-[#191c1f] text-2xl font-bold mt-[10px]">7. Modifications to Terms</h2>

<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
7.1 StellarPay reserves the right to update these Terms. Users will be notified of significant changes through the Services or by email.
</p>
<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
7.2 Continued use of the Services after modifications constitutes acceptance of the revised Terms.
</p>

<h2 className="text-[#191c1f] text-2xl font-bold mt-[10px]">8. Governing Law & Dispute Resolution</h2>

<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
8.1 These Terms shall be governed by and interpreted in accordance with the laws of Delaware, USA.
</p>
<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
8.2 Any disputes shall be resolved through arbitration in Delaware, except where prohibited by local laws.
</p>

<h2 className="text-[#191c1f] text-2xl font-bold mt-[10px]">9. Termination & Suspension</h2>

<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
9.1 StellarPay reserves the right to suspend or terminate access to the Services for violations of these Terms or illegal activity.
</p>
<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
9.2 Upon termination, users must cease using StellarPay’s Services and may lose access to stored data.
</p>

<h2 className="text-[#191c1f] text-2xl font-bold mt-[10px]">10. Contact Us</h2>


<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
For questions or concerns about these Terms, please contact <span className="font-bold">support@stellarpay.app</span>.
<br />
Online Complaints and Feedback Portal: Click the "Contact us" button on the product site interface after logging in.
<br />
Contact Email: <span className="font-bold">support@stellarpay.app</span>
<br />
Contact Address:<br />
<span className="font-bold">Stellar Technologies Inc</span><br />
<span className="font-bold">317 E 90th Street</span><br />
<span className="font-bold">New York, New York 10128, USA</span>
</p>







<br /><br />
<br /><br />





        </div>
        </section>



 {/* Store Badges */}
 <section 
        className="bg-[#0363fe] flex flex-col items-center justify-center px-4 md:px-0 py-8 md:py-30 text-center"
      >
        <h1 
          className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl text-white font-bold leading-tight mb-4 md:mb-6 max-w-4xl mx-auto"
        >
          Meet StellarPay
        </h1>
        <p 
          className="text-base md:text-lg lg:text-xl xl:text-3xl text-white font-semibold mb-8 md:mb-10 max-w-2xl mx-auto"
        >
          A new way to money. 
        </p>

        <div 
          className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 mb-5 md:mb-5 px-4"
        >
          <a href="https://apps.apple.com/app/stellarpay/id6450455712">
            <Image src="/images/appleStore.png" alt="apple" width={150} height={70} className="w-[120px] sm:w-[150px] h-auto" />
          </a>
          <a href="https://play.google.com/store/apps/dev?id=8934712149181103165">
            <Image src="/images/googleStore.png" alt="google" width={167} height={70} className="w-[134px] sm:w-[167px] h-auto" />
          </a>
        </div>
        </section>
     
     
  {/* Footer */}
  <footer 
        className="bg-[#000000] text-[#ffffff] px-4 md:px-6 py-16"
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
            <p className="text-[#ffffff] opacity-80 text-xs md:text-sm">© 2026 Stellar Technologies, inc.</p>
                </div>
          </div>
          </div>

        <div className="ml-5 sm:ml-0 mx-auto flex flex-col sm:flex-row justify-center">
          {/* Upper section with three columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12 md:gap-20 mb-12">
            {/* Company and team */}
            <div className="text-left">
              <Link href='/about'>
              <h3 className="font-bold mb-3 md:mb-4 text-[#ffffff] text-sm md:text-[17px]">Company</h3>
              </Link>
              <div className="space-y-1 md:space-y-4">
                <Link href="/meet-the-team" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-[16px] font-light">
                  Company and team
                </Link>
                <Link href="#" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-[16px] font-light">
                  Pricing
                </Link>
                <Link href="#" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-[16px] font-light">
                  Service Status
                </Link>
                <Link href="/news" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-[16px] font-light">
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
              <Link href='http://www.meetgeorge.app/products'>
            <h3 className="font-bold mb-3 md:mb-4 text-sm md:text-[17px] text-[#ffffff] md:text-base">Products</h3>
            </Link>
              <div className="space-y-1 md:space-y-4">
                <Link href="#" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-[16px] font-light">
                  StellarPay
                </Link>
                <Link href="/linq" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-[16px] font-light">
                  Stellar for Business
                </Link>
                <Link href="http://www.meetgeorge.app" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-[16px] font-light">
                  George
                </Link>
                <Link href="/linq" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-[16px] font-light">
                  APi
                </Link>
              </div>
            </div>

                        {/* Stellar Products */}
                        <div className="text-left">
                          <Link href='/privacy-policy'>
            <h3 className="text-[#ffffff] font-bold mb-3 md:mb-4 text-sm md:text-[17px]">Policies</h3>
            </Link>
              <div className="space-y-1 md:space-y-4">
                <Link href="/privacy-policy#your-rights" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-[16px] font-light">
                  Legal
                </Link>
                <Link href="/privacy-policy#contact-us" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-[16px] font-light">
                  Complaints
                </Link>
                <Link href="/privacy-policy" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-[16px] font-light">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-[16px] font-light">
                  Terms & Conditions
                </Link>
                <Link href="/privacy-policy#cookies-and-tracking-technologies" className="block text-[#ffffff] opacity-80 no-underline text-xs md:text-[16px] font-light">
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
            <p className="text-[#ffffff] opacity-80 text-xs md:text-sm font-light">© 2026 Stellar Technologies, inc.</p>
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
      </footer>

    </main>
  );
} 