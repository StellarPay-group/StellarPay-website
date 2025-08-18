"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin} from 'lucide-react';


export default function PrivacyPolicy() {




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

      <section className="bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-10">
          <h1 className="mt-[100px] text-[#191c1f] text-4xl font-bold text-center">StellarPay Privacy Policy</h1>


        <p className="text-[#191c1f] text-xl font-medium mt-[20px] font-bold">Stellar Technologies, Inc. (doing business as “StellarPay”) 
        <br />
        <span className="font-normal">Effective Date: January 2025 </span>
        <br />
        <span className="font-normal">Last Updated: April 2025</span></p>

        <h2 className="text-[#191c1f] text-2xl font-bold mt-[20px]">Introduction</h2>
        <p className="text-[#191c1f] text-xl font-normal mt-[20px]">
StellarPay, by Stellar Technologies Inc., is a digital finance platform designed to simplify 
cross-border payments and everyday financial management. StellarPay enables individuals to 
send, receive, and manage money across borders quickly, securely, and affordably. To deliver 
these services, StellarPay relies on data to ensure identity verification, compliance, security, and 
seamless user experiences. 
</p>
<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
This Privacy Policy outlines how and why we collect, use, share, and store your personal 
information, as well as your rights regarding that information. It is designed to comply with 
applicable data protection laws, including the General Data Protection Regulation (GDPR), the 
California Consumer Privacy Act (CCPA/CPRA), and other relevant privacy regulations in the 
jurisdictions in which we operate. Please read this policy carefully to understand our practices 
and your rights regarding your personal data. 
</p>
<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
StellarPay is the data controller of the personal data you provide to us or that we collect. A “data 
controller” refers to the organization that determines the purposes and means of processing 
your personal data and is responsible for protecting it
        </p>

        <h2 className="text-[#191c1f] text-2xl font-bold mt-[20px]">Data Controller</h2>
        <p className="text-[#191c1f] text-xl font-normal mt-[20px]">
StellarPay is operated by Stellar Technologies Inc, a Delaware corporation, with its registered 
address at 317 E 90th Street, New York, New York 10128, USA.  
</p>
<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
Any questions regarding this Privacy policy, or how we handle personal data, may be directed to 
our support team at support@stellarpay.app. If you request that your account be deleted, 
StellarPay will delete all retained personal information in accordance with the deletion and 
retention policies outlined below. 
</p>
<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
Please note that StellarPay does not directly or indirectly transfer any personal data for 
monetization-related services.
        </p>

        <h2 className="text-[#191c1f] text-2xl font-bold mt-[20px]">How and Why We Collect Data</h2>
        <p className="text-[#191c1f] text-xl font-normal mt-[20px]">
In the course of using StellarPay, engaging with our platform, or corresponding with our team, 
you provide us with or we collect various pieces of personal data. We collect and use this data 
to provide our services, improve our product and offerings, ensure security, and comply with 
legal requirements. 
</p>
<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
We do not sell, distribute, or lease your personal data to third parties. We only share your 
personal data with trusted third parties where it is necessary to operate and improve our 
services or to comply with legal and regulatory obligations. We do not collect sensitive personal 
information such as race, ethnicity, religious or philosophical beliefs, political beliefs, sexual 
orientation, genetic information, or health information. 
</p>
<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
We will not discriminate against you if you choose to exercise any of the rights described in this 
Privacy Policy. 
</p>
<br /><br />

<h2 className="text-[#191c1f] text-4xl font-bold mt-[20px]">What Information Do We Collect?</h2>
        <p className="text-[#191c1f] text-xl font-normal mt-[20px]">
        In order to provide you with secure and seamless financial services, StellarPay collects various 
types of personal information. This section outlines the types of data we collect and the ways in 
which it may be gathered.
</p>


        <h2 className="text-[#191c1f] text-2xl font-bold mt-[20px]">Information You Provide to Us</h2>
        <p className="text-[#191c1f] text-xl font-normal mt-[20px]">
        We collect personal information that you voluntarily provide when you do one of the following:<br />
<span   className="ml-4">●  Register for a StellarPay account</span> <br />
<span className="ml-4">●  Initiate or complete a financial transaction</span> <br />
<span className="ml-4">●  Contact customer support or submit inquiries</span> <br />
<span className="ml-4">●  Participate in surveys, promotions, or referral programs</span> <br />
<span className="ml-4">●  Provide documents or verification details</span> <br /><br />
 
The information collected in any of the stages above may include:<br /><br />
 
<b>Contact & Account Information</b><br />
<span className="ml-4">●  Full name</span>   <br />
<span className="ml-4">●  Email address</span> <br />
<span className="ml-4">●  Phone number</span> <br />
<span className="ml-4">●  Mailing address</span> <br />
<span className="ml-4">●  Date of birth</span> <br />
<span className="ml-4">●  Username and password</span> <br />
<span className="ml-4">●  Contact preferences</span> <br /><br />
 
<b>Identity & Verification Information</b><br />
<span className="ml-4">●  Government-issued identification (e.g. passport, driver’s license)</span> <br />
<span className="ml-4">●  Selfies or facial scans for biometric verification</span> <br />
<span className="ml-4">●  Proof of address (e.g. utility bills)</span> <br />
<span className="ml-4">●  Social Security Number or Tax Identification Number (where applicable)</span> <br /><br />
 
<b>Financial & Payment Information</b><br />
<span className="ml-4">●  Debit/credit card numbers</span> <br />
<span className="ml-4">●  Bank account numbers</span> <br />
<span className="ml-4">●  Billing addresses</span> <br />
<span className="ml-4">●  Payment and top-up method information</span> <br /><br />
 
<b>Transaction Data</b><br />
<span className="ml-4">●  Transaction dates, amounts, currencies, exchange rates</span> <br />
<span className="ml-4">●  Sender and recipient details</span> <br />
<span className="ml-4">●  Messages sent or received with transfers</span> <br />
<span className="ml-4">●  Remittance purpose and notes</span> <br />
<span className="ml-4">●  Source of funds and destination country</span> <br /><br />
 
<b>Communication & Support Interactions</b><br />
<span className="ml-4">●  Emails, messages, and transcripts from chat support</span> <br />
<span className="ml-4">●  Audio (if phone support is used), feedback, and correspondence</span> <br /><br />
 
<b>Information We Collect Automatically</b><br />
When you access or use StellarPay’s Services—whether via our app, website, or APIs—we<br /> 
automatically collect certain technical and usage data:<br /><br />
 
<b>Device & Network Information</b><br />
<span className="ml-4"> ●  Device model and type (e.g. iOS/Android)</span> <br />
<span className="ml-4">●  Operating system and browser details</span> <br />
<span className="ml-4">●  IP address and geolocation (based on IP)</span> <br />
<span className="ml-4">●  Device ID and language settings</span> <br />
<span className="ml-4">●  Mobile carrier and network information</span> <br /><br />
 
<b>Usage and Activity Data</b><br />
<span className="ml-4">●  Features used and interaction logs</span> <br />
<span className="ml-4">●  Session duration, click behavior, and navigation paths</span> <br />
<span className="ml-4">●  Date/time stamps of access and activity</span> <br />
<span className="ml-4">●  Error logs and crash reports</span> <br /><br />
 

<b>Cookies & Tracking Technologies</b><br />
We use cookies and similar technologies to:<br />
<span className="ml-4">●  Remember your login</span> <br />
<span className="ml-4">●  Analyze behavior for service improvements</span> <br />
<span className="ml-4">●  Enable fraud detection and session security</span>  <br /><br />
</p>

<h2 className="text-[#191c1f] text-2xl font-bold mt-[20px]">Sensitive Personal Information</h2>
        <p className="text-[#191c1f] text-xl font-normal mt-[20px]">
        Where required for legal, compliance, or fraud prevention purposes—and only with your explicit 
consent where required—we may collect:<br />
<b className="ml-4">●  Biometric data</b> (e.g. facial recognition used in identity verification) <br />
<b className="ml-4">●  Financial identifiers</b> (e.g. government-issued IDs, income verification documents) <br /><br />
 
We take special care to protect sensitive personal information, and process it only when 
necessary and permitted by law.<br /><br />
        </p>

        <h2 className="text-[#191c1f] text-2xl font-bold mt-[20px]">Information from Connected Services & Permissions</h2>
        <p className="text-[#191c1f] text-xl font-normal mt-[20px]">
        If you opt to connect your account with a third-party service or provide access via your device, 
we may collect:<br />
<span className="ml-4">●  <b>Contacts</b> (to enable sending money to saved recipients)</span> <br />
<span className="ml-4">●  <b>Device camera</b> (for ID or document upload)</span> <br />
<span className="ml-4">●  <b>Push notifications</b> (to alert you of transfers or important activity)</span> <br /><br />
 
You can revoke permissions at any time via your device settings.<br /><br />
        </p>

        <br /><br />

        <h2 className="text-[#191c1f] text-4xl font-bold mt-[20px]">How We Process Your Information</h2>
        <p className="text-[#191c1f] text-xl font-normal mt-[20px]">
        StellarPay processes your personal information to operate our platform, fulfill remittance and 
financial service requests, ensure compliance with regulatory obligations, and improve your 
experience. We only process your information when we have a legal basis to do so, such as 
fulfilling a contract with you, meeting a legal obligation, or when you have given us consent.
</p>

        <p className="text-[#191c1f] text-xl font-normal mt-[20px]">
        We use your data to facilitate the creation and ongoing use of your account, verify your identity 
through KYC/AML procedures, process financial transactions such as international transfers or 
account top-ups, and send you important service communications. We also process your data to 
deliver customer support, evaluate service performance, and build product features that improve 
the platform over time. <br />
        </p>

        <p className="text-[#191c1f] text-xl font-normal mt-[20px]">
        Additionally, your personal information may be used for system monitoring, fraud prevention, 
internal analytics, compliance with anti-money laundering laws, and obligations imposed by 
financial regulators. In limited cases, we may also process your data for marketing or
promotional purposes, but only where permitted by law or with your explicit consent. All data is 
processed in accordance with applicable data protection laws and industry best practices
        </p>

        <p className="text-[#191c1f] text-xl font-normal mt-[20px]">
        Your information is securely stored on servers located in New York, New York, USA. For 
international users, we ensure compliance with applicable data protection laws. <br /><br />
        </p>

        <h2 className="text-[#191c1f] text-2xl font-bold mt-[20px]">Third Parties We Share Data With</h2>
        <p className="text-[#191c1f] text-xl font-normal mt-[20px]">
        To deliver StellarPay’s services securely, efficiently, and at scale, we partner with trusted 
third-party vendors and infrastructure providers. These partners enable critical parts of our 
product experience, such as payments processing, identity verification, fraud detection, data 
storage, and analytics. We only work with providers that are contractually obligated to safeguard 
your data and who comply with applicable privacy and data protection laws.
</p>
<p className="text-[#191c1f] text-xl font-normal mt-[20px]">
Our current vendors include:<br />
<span className="ml-4">●  <b>LinkIO</b>: For payment initiation, financial data aggregation, and facilitating seamless bank 
account connectivity and transfers within regulated environments.</span> <br />
<span className="ml-4">●  <b>Yellow Card</b>: For cross-border crypto-to-fiat on- and off-ramp services, enabling 
compliant currency exchange in African markets.</span> <br />
<span className="ml-4">●  <b>Persona</b>: For real-time identity verification (KYC), document validation, and fraud 
prevention in line with financial regulations.</span> <br />
<span className="ml-4">●  <b>Amazon Web Services (AWS)</b>: For secure cloud hosting, data infrastructure, and 
scalable compute capacity with ISO 27001, SOC 2, and GDPR-compliant architecture.</span> <br />
<span className="ml-4">●  <b>Google Analytics</b>: For aggregated and anonymized performance tracking, user 
behavior insights, and product usage metrics.</span> <br />
</p>

        <p className="text-[#191c1f] text-xl font-normal mt-[20px]">
        We may also share limited information with affiliates or regulatory entities when required by law 
or to comply with anti-money laundering (AML) obligations. In all cases, data sharing is 
minimized, access is restricted, and usage is governed by strict confidentiality and purpose 
limitation clauses.
        </p>

        <p className="text-[#191c1f] text-xl font-normal mt-[20px]">
        We do not sell your personal data, and we ensure that all data processors act only under our 
        instruction and only for the specific services outlined above.
        </p>

        <p className="text-[#191c1f] text-xl font-normal mt-[20px]">
        At StellarPay, we take your privacy seriously and are committed to securing your personal 
information through rigorous organizational and technical safeguards. We implement industry 
best practices to help ensure the confidentiality, integrity, and availability of your data throughout 
its lifecycle.
        </p>

<br /><br />
<section id="your-rights"></section>
        <h2 className="text-[#191c1f] text-4xl font-bold mt-[20px]">The Security of Your Personal Information</h2>
        <p className="text-[#191c1f] text-xl font-normal mt-[20px]">
        At StellarPay, we take your privacy seriously and are committed to securing your personal 
information through rigorous organizational and technical safeguards. We implement industry 
best practices to help ensure the confidentiality, integrity, and availability of your data throughout 
its lifecycle.<br />
        <span className="ml-4">  ●  <b>Encryption</b>: All personal data is encrypted both in transit and at rest using modern 
cryptographic protocols.</span> <br />
<span className="ml-4">●  <b>Role-Based Access Controls</b>: Access to sensitive information is strictly limited to 
authorized personnel based on job responsibilities.</span> <br />
<span className="ml-4">●  <b>Infrastructure Compliance</b>: Our systems are hosted on AWS cloud infrastructure that 
complies with ISO 27001, SOC 2, and GDPR standards.</span> <br />
<span className="ml-4">●  <b>Regular Security Audits</b>: We conduct vulnerability assessments, penetration testing, 
and ongoing system monitoring to identify and mitigate potential risks.</span> <br />
<span className="ml-4">●  <b>Secure Integrations</b>: All third-party integrations are managed through secure API 
gateways and utilize encrypted SSL/TLS connections to protect data in transit.</span> <br />
        </p>

        <p className="text-[#191c1f] text-xl font-normal mt-[20px]">
        We encourage users to use our services within a secure environment and contact us 
        immediately at support@stellarpay.app if you suspect unauthorized access to your data
        </p>

<br /><br />
        <h2 className="text-[#191c1f] text-4xl font-bold mt-[20px]">Your Rights</h2>
        <p className="text-[#191c1f] text-xl font-normal mt-[20px]">
        You have the following rights in relation to your personal data:<br />
        <span className="ml-4">●  <b>Right of Access</b>: You can request a copy of the personal information we hold about you 
to verify that we are lawfully processing it.</span> <br />
<span className="ml-4">●  <b>Right to Correction</b>: You may request correction of incomplete or inaccurate 
information we hold about you.</span> <br />
<span className="ml-4">●  <b>Right to Erasure</b>: You can request the deletion or removal of your personal information 
where there is no legitimate reason for us to keep it. Please note that we may not be 
able to comply with your request for erasure for legal reasons.</span>  <br />
<span className="ml-4">●  <b>Right to Object</b>: You may object to processing of your personal data where we are 
relying on a legitimate interest and where it affects your fundamental rights and 
freedoms.</span> <br />
<span className="ml-4">●  <b>Right to Restrict Processing</b>: You may request that we suspend the processing of your 
personal information, for example to establish its accuracy or the reason for processing 
it.</span> <br />
<span className="ml-4">●  <b>Right to Data Portability</b>: You may request the transfer of your personal data to you or 
another provider in a machine-readable format, where applicable.</span> <br />
<span className="ml-4">●  <b>Right to Withdraw Consent</b>: If we rely on your consent to process personal information, 
you may withdraw that consent at any time.</span> <br />
        </p>

        <p className="text-[#191c1f] text-xl font-normal mt-[20px]">
        To exercise any of your rights, please contact us at support@stellarpayapp. We will respond to 
        your request consistent with applicable law and subject to proper verification. Please note that it
        may take a few weeks for us to respond to your request, especially in cases where the request 
is complex.
        </p>

        <p className="text-[#191c1f] text-xl font-normal mt-[20px]">
        We do not charge a fee to access your personal data or exercise your rights unless the request 
is clearly unfounded, repetitive, or excessive. In such cases, we may charge a reasonable fee or 
refuse to comply with your request.
        </p>

        <h2 className="text-[#191c1f] text-2xl font-bold mt-[20px]">Marketing Preferences</h2>
        <p className="text-[#191c1f] text-xl font-normal mt-[20px]">
        You can opt out of marketing communications at any time by clicking the unsubscribe link in our 
emails or updating your preferences in your account settings. Note that you will still receive 
important service-related communications (e.g., payment confirmations, account changes).
        </p>

        <h2 className="text-[#191c1f] text-2xl font-bold mt-[20px]">Managing Your Account</h2>
        <p className="text-[#191c1f] text-xl font-normal mt-[20px]">
        You may review and update your account information at any time by logging into your StellarPay 
profile. If you wish to delete your account entirely, you can initiate a request, and—unless 
retention is required by law—we will delete your data within a commercially reasonable 
timeframe.
        </p>

        <br /><br />

        <section id="cookies-and-tracking-technologies"></section>
        <h2 className="text-[#191c1f] text-4xl font-bold mt-[20px]">Our Use of Cookies</h2>
        <p className="text-[#191c1f] text-xl font-normal mt-[20px]">
        Our website uses cookies to distinguish you from other users of our site. This helps us improve 
your experience, remember preferences, and deliver relevant features. Cookies also help us 
analyze site performance and usage. Through continuing use of our website, you agree to our 
use of cookies. 
        </p>

        <p className="text-[#191c1f] text-xl font-normal mt-[20px]">
        Cookies are small data files placed on your browser or device that store user preferences and 
other types of data. We use both first-party and third-party cookies.
        </p>

        <p className="text-[#191c1f] text-xl font-normal mt-[20px]">
        We use this information to tailor our website content and the advertisements you see—both 
during and after your visit—to better match your interests. We may also share this data with 
trusted third parties for the same purpose. You can manage cookie preferences in your browser 
settings. Blocking all cookies may impact your ability to access certain features of our services.
        </p>

        <br /><br />
        <h2 className="text-[#191c1f] text-4xl font-bold mt-[20px]">Children’s Privacy</h2>
        <p className="text-[#191c1f] text-xl font-normal mt-[20px]">
        StellarPay is not intended for or directed to individuals under the age of 18. We do not knowingly 
        collect personal data from children or anyone under the age of 18. By using our Services, you 
        affirm that you are at least 18 years old, or that you are the parent or guardian of a minor and 
        consent to their use of our Services.
        </p>

        <p className="text-[#191c1f] text-xl font-normal mt-[20px]">
        If we become aware that we have unintentionally collected personal information from a user 
        under 18, we will take immediate steps to delete such information from our systems. If you 
        believe we may have collected data from a minor, please contact us at support@stellarpay.app 
        so we can take appropriate action.
        </p>

        <br /><br />
        <h2 className="text-[#191c1f] text-4xl font-bold mt-[20px]">Customer Protection Measures</h2>
        <p className="text-[#191c1f] text-xl font-normal mt-[20px]">
        Protecting our users goes beyond safeguarding data—we’re equally committed to ensuring the 
security of your financial activity. To support this, we have implemented a Customer Protection 
Policy that includes:<br />
<span className="ml-4">●  <b>Transaction Monitoring</b>: We use automated systems to monitor transactions for 
suspicious activity, fraud, or unauthorized use.</span> <br />
<span className="ml-4">●  <b>Account Alerts</b>: We notify users of key account activities (e.g., logins from new devices, 
changes to security settings, large transfers).</span> <br />
<span className="ml-4">●  <b>Dispute Resolution</b>: If you believe a transaction was unauthorized or incorrect, you may 
file a dispute within 30 days of the transaction date by contacting us at 
support@stellarpay.app.</span> <br />
<span className="ml-4">●  <b>Encryption and Identity Verification</b>: We use strong encryption and multi-step identity 
verification (e.g., biometric login, 2FA) to ensure only authorized users access your 
account.</span> <br />
<br />
Please note that while we take robust steps to protect your account, you are responsible for 
keeping your login credentials secure. If you suspect your account has been compromised, 
contact us at support@stellarpay.app. <br /><br /><br />
        </p>

        <h2 className="text-[#191c1f] text-4xl font-bold mt-[20px]">U.S. State Privacy Rights</h2>
        <p className="text-[#191c1f] text-xl font-normal mt-[20px]">
        Residents of certain U.S. states have specific privacy rights under applicable legislation, such 
as the California Consumer Privacy Act (CCPA), Virginia Consumer Data Protection Act 
(VCDPA), Colorado Privacy Act (CPA), and similar laws in Florida, Utah, and others.
        </p>

        <h2 className="text-[#191c1f] text-2xl font-bold mt-[20px]">Categories of Information Collected</h2>
        <p className="text-[#191c1f] text-xl font-normal mt-[20px]">
        We may collect the following categories of personal information noted below. We never sell your 
personal information. : <br />
<span className="ml-4">●  <b>Identifiers</b> (e.g., name, email, phone number)</span> <br />
<span className="ml-4">●  <b>Personal records</b> (e.g., billing address, financial data)</span> <br />
<span className="ml-4">●  <b>Biometric data</b> (e.g., facial ID for KYC)</span> <br />
<span className="ml-4">●  <b>Geolocation data</b> (e.g., IP-based location)</span> <br />
<span className="ml-4">●  <b>Sensitive data</b> (e.g., government-issued IDs, bank account credentials)</span> <br />
        </p>

        <p className="text-[#191c1f] text-2xl font-bold mt-[20px]">Your State-Specific Rights May Include</p>
        <p className="text-[#191c1f] text-xl font-normal mt-[20px]">
<span className="ml-4">●  The right to access, correct, or delete personal data</span> <br />
<span className="ml-4">●  The right to opt out of targeted advertising or profiling</span> <br />
<span className="ml-4">●  The right to limit the use of sensitive personal information</span> <br />
<span className="ml-4">●  The right to appeal a denied privacy request (where applicable)</span> <br />
<br />
To exercise the rights noted above, please email us at support@stellarpay.app, or submit a 
request via our website or your StellarPay account.We may verify your identity or request written 
authorization if you're acting on behalf of another individual. <br /><br />
For California residents, you may also invoke your rights by requesting details on how we share 
information with third parties for direct marketing.<br /><br />
        </p>
<br /><br />
<section id="contact-us">
        <h2 className="text-[#191c1f] text-4xl font-bold mt-[20px]">Privacy Policy Updates</h2>
        <p className="text-[#191c1f] text-xl font-normal mt-[20px]">
        We may update this Privacy Policy as required by law.  If we change the Policy and collect more 
information from you, we will notify you at the time we collect that information of what our policy 
is at that time. Additionally, we will update the “Last Updated” date at the top, posting the new 
Privacy Policy, or providing other notices as required by law. We recommend reviewing this 
Privacy Policy each time you access our Services to stay informed of our privacy practices.
        </p>

        <p className="text-[#191c1f] text-xl font-normal mt-[20px]">
        This policy applies to all of StellarPay’s functionalities. If you do not accept this policy, you may 
not use the service.
        </p>
<br /><br />

        <h2 className="text-[#191c1f] text-4xl font-bold mt-[20px]">Contact Us</h2>
        <p className="text-[#191c1f] text-xl font-normal mt-[20px]">
        If you have any questions, concerns, or requests related to this Privacy Policy or your personal 
            data, please reach out to: <br />
<span className="ml-4">●  <b>Email</b>: support@stellarpay.app</span>  <br />
<span className="ml-4">●  <b>Website</b>: Use the "Contact Us" option on our website</span> <br />
<br />
Thank you for trusting StellarPay with your data. We are committed to safeguarding your privacy 
while helping you make smarter financial decisions. 
        </p>
        <br /><br />
        </section>




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
                <Link href="/privacy-policy#your-rights" className="block text-[#000000] hover:text-[#0065ff]">
                  Legal
                </Link>
                <Link href="/privacy-policy#contact-us" className="block text-[#000000] hover:text-[#0065ff]">
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
                <Link href="/privacy-policy#cookies-and-tracking-technologies" className="block text-[#000000] underline hover:no-underline">
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