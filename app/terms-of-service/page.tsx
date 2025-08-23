"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin} from 'lucide-react';


export default function TermsOfService() {
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
              <Button variant="ghost" className="text-[#191c1f] hover:bg-[#f7f7f7] rounded-full px-4 md:px-6 py-2 text-xs md:text-[17px] font-medium font-semibold">Personal</Button>
              </Link>
              <Link href="/news">
                <Button variant="ghost" className="text-[#191c1f] hover:text-[#1b6ce8] hover:bg-[#f7f7f7] rounded-full px-4 md:px-6 py-2 text-xs md:text-[17px] font-medium font-semi">Business</Button>
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
      </section>

      <section className="bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-10">
          <h1 className="mt-[100px] text-[#191c1f] text-4xl font-bold text-center">Terms & Conditions</h1>


        <p className="text-[#191c1f] text-xl font-medium mt-[20px] font-bold">Stellar Technologies, Inc. (doing business as “StellarPay”) 
        <br />
        <span className="font-normal">Effective Date: January 2025 </span>
        <br />
        <span className="font-normal">Last Updated: March 2025</span></p>

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
                <Link href="/privacy-policy#your-rights" className="block text-[#000000] hover:text-[#0065ff] underline hover:no-underline">
                  Legal
                </Link>
                <Link href="/privacy-policy#contact-us" className="block text-[#000000] hover:text-[#0065ff] underline hover:no-underline">
                  Complaints
                </Link>
              </div>

              <div className="space-y-2">
                <Link href="/privacy-policy" className="block text-[#000000] underline hover:no-underline">
                  Privacy policy
                </Link>
                <Link href="/terms-of-service" className="block text-[#000000] underline hover:no-underline">
                  Terms & Conditions
                </Link>
              </div>

              <div className="space-y-2">
                <Link href="/privacy-policy#cookies-and-tracking-technologies" className="block text-[#000000] underline hover:no-underline">
                  Cookie Policy
                </Link>
                <Link href="#" className="block text-[#000000] underline hover:no-underline">
                  Country site map
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="text-center space-y-4">
            <p className="text-[#000000]">© Stellar Technologies Inc 2025</p>
            <p className="text-[#000000] max-w-4xl mx-auto">
              StellarPay is a Money Service Business authorized to operate in{" "}
              <Link href="/privacy-policy#us-state-privacy-rights" className="underline hover:no-underline">
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