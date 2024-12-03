import React from "react";
//import "./AVMLandingPage.css"; // Assuming you're using CSS modules or global CSS for styling
import { FaChevronRight } from "react-icons/fa";
import logoPlaceholder from "./assets/images/landscape-placeholder-svgrepo-com.svg"; // Replace with actual path
import bgPlaceholder from "./assets/images/landscape-placeholder-svgrepo-com.svg"; // Replace with actual path
import devicePlaceholder from "./assets/images/landscape-placeholder-svgrepo-com.svg"; // Replace with actual path
import showcasePlaceholder from "./assets/images/landscape-placeholder-svgrepo-com.svg"; // Replace with actual path

// export default function AVMLandingPage() {
//   const features = [
//     "Advanced AI Integration",
//     "Seamless Connectivity",
//     "Intuitive Interface",
//     "Elegant Design",
//   ];

//   return (
//     <div className="min-h-screen bg-[#1a2b47] text-white">
//       {/* Header */}
//       <header className="container mx-auto px-4 py-6 flex justify-between items-center">
//         <img
//           src={logoPlaceholder}
//           alt="AVM Logo"
//           className="h-10 w-10 rounded-full"
//         />
//         <nav className="hidden md:flex space-x-6">
//           {["Home", "About", "Products", "Contact", "FAQ"].map((item) => (
//             <a href="#" key={item} className="hover:text-orange-500">
//               {item}
//             </a>
//           ))}
//         </nav>
//       </header>

//       {/* Main */}
//       <main>
//         {/* Hero Section */}
//         <section className="relative h-screen flex items-center">
//           <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
//             <img
//               src={bgPlaceholder}
//               alt="Background"
//               className="w-full h-full object-cover opacity-50"
//             />
//           </div>
//           <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center">
//             <div className="md:w-1/2 mb-8 md:mb-0">
//               <h1 className="text-4xl md:text-6xl font-bold mb-4">
//                 Introducing the AI Wearable AVM Device: Your
//               </h1>
//               <div className="flex space-x-4 mb-8">
//                 <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full flex items-center">
//                   Preorder Now <FaChevronRight className="ml-2" />
//                 </button>
//                 <button className="bg-transparent border border-white hover:bg-white hover:text-[#1a2b47] text-white px-6 py-3 rounded-full">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//             <div className="md:w-1/2 relative">
//               <img
//                 src={devicePlaceholder}
//                 alt="AVM Device"
//                 className="w-[600px] h-[600px] rounded-lg"
//               />
//               <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-500 rounded-lg"></div>
//               <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-500 rounded-lg"></div>
//             </div>
//           </div>
//         </section>

//         {/* Features Section */}
//         <section className="py-20 bg-[#152238]">
//           <div className="container mx-auto px-4">
//             <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
//               Unlock Your Potential
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {features.map((feature, index) => (
//                 <div
//                   key={index}
//                   className="border border-blue-500 rounded-lg p-6"
//                 >
//                   <h3 className="text-xl font-bold mb-4">{feature}</h3>
//                   <p className="text-sm text-gray-300">
//                     Experience the future of wearable technology with our
//                     cutting-edge features.
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Preorder Section */}
//         <section className="py-20">
//           <div className="container mx-auto px-4 text-center">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               Preorder the AVM Device and experience
//             </h2>
//             <h3 className="text-2xl md:text-3xl font-bold mb-8">
//               the future of wearable technology
//             </h3>
//             <p className="max-w-2xl mx-auto mb-12 text-gray-300">
//               Be among the first to own this revolutionary device. Preorder now
//               and step into a world where technology seamlessly integrates with
//               your lifestyle.
//             </p>
//             <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold">
//               Preorder Now
//             </button>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-[#0f1a2e] py-12">
//         <div className="container mx-auto px-4 text-center">
//           <p className="text-sm text-gray-400">
//             © 2024 AVM. All rights reserved.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Mic,
//   Zap,
//   Battery,
//   Smartphone,
//   CheckCircle,
//   Instagram,
//   Twitter,
//   Facebook,
// } from "lucide-react";
// // import { Mic, Zap, Battery, Smartphone, CheckCircle, } from 'lucide-react'

// function AVMLandingPage2() {
//   const [showPreorderForm, setShowPreorderForm] = useState(false);
//   const [preorderSuccess, setPreorderSuccess] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   // Detect if the user is on a mobile device
//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 768px)");
//     setIsMobile(mediaQuery.matches);

//     const handleResize = () => setIsMobile(mediaQuery.matches);
//     mediaQuery.addEventListener("change", handleResize);

//     return () => mediaQuery.removeEventListener("change", handleResize);
//   }, []);

//   const videoUrl = isMobile
//     ? "https://cdn.shopify.com/s/files/1/0879/7490/4100/files/mobile_video.gif"
//     : "https://cdn.shopify.com/s/files/1/0879/7490/4100/files/friend_meeting_576.gif?v=1722314158";

//   const handlePreorder = (e) => {
//     e.preventDefault();
//     // In a real app, you'd handle the form submission here
//     setPreorderSuccess(true);
//   };
//   const url = "https://pages.razorpay.com/pl_PSIOdLNSuo4UKT/view";

//   const handlePreOrder = () => {
//     // Redirect to the Razorpay URL
//     window.open(url, "_blank", "noopener,noreferrer");
//   };
//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
//         <div
//           className="absolute inset-0 z-0 bg-cover bg-center"
//           style={{
//             backgroundImage: `url('${videoUrl}')`,
//             opacity: 0.5,
//             backgroundSize: "cover",
//           }}
//         ></div>

//         <div className="relative z-10 space-y-6 px-4">
//           <h1 className="text-5xl font-bold tracking-tight">
//             Introducing AVM - Your AI, Your Style
//           </h1>
//           <p className="text-xl">
//             Pre-order Now for ₹499 and Experience the Future of Wearable Tech
//           </p>
//           <Button
//             size="lg"
//             onClick={handlePreOrder}
//             className="bg-purple-600 hover:bg-purple-700 text-white"
//           >
//             Pre-order Now
//           </Button>
//         </div>
//       </section>

//       {/* Why AVM Section */}
//       <section className="py-20 bg-gray-800">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             Why Choose AVM?
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 icon: <Mic className="w-12 h-12 mb-4 text-purple-500" />,
//                 title: "Sleek & Stylish",
//                 description:
//                   "Designed as an elegant necklace that seamlessly combines fashion and technology.",
//               },
//               {
//                 icon: <Zap className="w-12 h-12 mb-4 text-purple-500" />,
//                 title: "Enhanced Productivity",
//                 description:
//                   "Capture high-quality audio, transcribe it automatically, and stay on top of your tasks effortlessly.",
//               },
//               {
//                 icon: <Battery className="w-12 h-12 mb-4 text-purple-500" />,
//                 title: "Long-Lasting Performance",
//                 description: "Enjoy up to 48 hours of use with USB-C charging.",
//               },
//               {
//                 icon: <Smartphone className="w-12 h-12 mb-4 text-purple-500" />,
//                 title: "Seamless Device Sync",
//                 description:
//                   "Easily sync with smartphones, PCs, and tablets for hassle-free access.",
//               },
//             ].map((item, index) => (
//               <div key={index} className="text-center">
//                 {item.icon}
//                 <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//                 <p className="text-gray-400">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             Key Features of AVM
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               "High-Quality Audio Recording",
//               "Automated Transcription (Multiple Vernacular Languages)",
//               "Push-Button Recording",
//               "24-48 Hours Battery Life",
//               "Multi-Device Sync",
//               "Compact & Comfortable Design",
//               "Personalized AI Suggestions",
//               "Future Updates",
//             ].map((feature, index) => (
//               <div key={index} className="flex items-center space-x-4">
//                 <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0" />
//                 <span>{feature}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Target Audience Section */}
//       <section className="py-20 bg-gray-800">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             Who Is AVM For?
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Professionals & Entrepreneurs",
//                 description: "Keep track of meetings, client calls, and notes.",
//               },
//               {
//                 title: "Students & Researchers",
//                 description: "Ideal for lectures and seminar notes.",
//               },
//               {
//                 title: "Tech Enthusiasts & Fashion Lovers",
//                 description: "Merging cutting-edge technology with style.",
//               },
//             ].map((item, index) => (
//               <div key={index} className="text-center">
//                 <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//                 <p className="text-gray-400">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Pre-order Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-6">Pre-order AVM Now!</h2>
//           <p className="text-xl mb-8">
//             Be among the first to experience the future of wearable AI
//             technology. Pre-order now for the exclusive price of just ₹499!
//           </p>
//           {/* <Button
//             size="lg"
//             onClick={() => setShowPreorderForm(true)}
//             className="bg-purple-600 hover:bg-purple-700 text-white"
//           >
//             Pre-order Now
//           </Button> */}
//           <Button
//             size="lg"
//             onClick={() => handlePreOrder()}
//             className="bg-purple-600 hover:bg-purple-700 text-white"
//           >
//             Pre-order Now
//           </Button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-10 bg-gray-800">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="mb-4 md:mb-0">
//               <p>Email: contact@avm.com</p>
//               <p>Phone: +91 1234567890</p>
//             </div>
//             {/* <div className="flex space-x-4">
//               <a href="#" className="text-purple-500 hover:text-purple-400">
//                 Instagram
//               </a>
//               <a href="#" className="text-purple-500 hover:text-purple-400">
//                 Twitter
//               </a>
//               <a href="#" className="text-purple-500 hover:text-purple-400">
//                 Facebook
//               </a>
//             </div> */}
//             <div className="flex space-x-6">
//               <a
//                 href="#"
//                 className="text-gray-300 hover:text-purple-500 transition duration-300"
//               >
//                 <Instagram className="w-6 h-6" />
//                 <span className="sr-only">Instagram</span>
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-300 hover:text-purple-500 transition duration-300"
//               >
//                 <Twitter className="w-6 h-6" />
//                 <span className="sr-only">Twitter</span>
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-300 hover:text-purple-500 transition duration-300"
//               >
//                 <Facebook className="w-6 h-6" />
//                 <span className="sr-only">Facebook</span>
//               </a>
//             </div>
//           </div>
//           <div className="mt-6 text-center">
//             <p className="text-sm text-gray-400">Stay Ahead. Stay Organized.</p>
//           </div>
//         </div>
//       </footer>

//       {/* Pre-order Form Modal */}
//       {showPreorderForm && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full">
//             <h2 className="text-2xl font-bold mb-4">Pre-order AVM</h2>
//             {preorderSuccess ? (
//               <div className="text-center">
//                 <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
//                 <p className="text-xl">Thank you for your pre-order!</p>
//                 <p className="mt-2">
//                   We'll contact you soon with further details.
//                 </p>
//                 <Button
//                   onClick={() => {
//                     setShowPreorderForm(false);
//                     setPreorderSuccess(false);
//                   }}
//                   className="mt-4"
//                 >
//                   Close
//                 </Button>
//               </div>
//             ) : (
//               <form onSubmit={handlePreorder}>
//                 <div className="space-y-4">
//                   <div>
//                     <Label htmlFor="name">Name</Label>
//                     <Input id="name" required />
//                   </div>
//                   <div>
//                     <Label htmlFor="email">Email</Label>
//                     <Input id="email" type="email" required />
//                   </div>
//                   <div>
//                     <Label htmlFor="phone">Phone</Label>
//                     <Input id="phone" type="tel" required />
//                   </div>
//                   <Button
//                     type="submit"
//                     className="w-full bg-purple-600 hover:bg-purple-700 text-white"
//                   >
//                     Complete Pre-order
//                   </Button>
//                 </div>
//               </form>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AVMLandingPage2;

import {
  Mic,
  Zap,
  Battery,
  Smartphone,
  CheckCircle,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function AVMLandingPage() {
  const [showPreorderForm, setShowPreorderForm] = useState(false);
  const [preorderSuccess, setPreorderSuccess] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the user is on a mobile device
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const videoUrl = isMobile
    ? "https://cdn.shopify.com/s/files/1/0879/7490/4100/files/mobile_video.gif"
    : "https://cdn.shopify.com/s/files/1/0879/7490/4100/files/friend_meeting_576.gif?v=1722314158";

  const handlePreorder = (e) => {
    e.preventDefault();
    // In a real app, you'd handle the form submission here
    setPreorderSuccess(true);
  };

  const url = "https://pages.razorpay.com/pl_PSIOdLNSuo4UKT/view";

  const handlePreOrder = () => {
    // Redirect to the Razorpay URL
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <img
          src="/logo.png"
          alt="AVM Logo"
          className="h-10 w-10 rounded-full"
        />
        <nav className="hidden md:flex space-x-6">
          {["Home", "About", "Products", "Contact", "FAQ"].map((item) => (
            <a href="#" key={item} className="hover:text-purple-500">
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Main */}
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${videoUrl}')`,
              opacity: 0.5,
              backgroundSize: "cover",
            }}
          ></div>

          <div className="relative z-10 space-y-6 px-4">
            <h1 className="text-5xl font-bold tracking-tight">
              Introducing AVM - Your AI, Your Style
            </h1>
            <p className="text-xl">
              Pre-order Now for ₹499 and Experience the Future of Wearable Tech
            </p>
            <Button
              size="lg"
              onClick={handlePreOrder}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Pre-order Now
            </Button>
          </div>
        </section>

        {/* Why AVM Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose AVM?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Mic className="w-12 h-12 mb-4 text-purple-500" />,
                  title: "Sleek & Stylish",
                  description:
                    "Designed as an elegant necklace that seamlessly combines fashion and technology.",
                },
                {
                  icon: <Zap className="w-12 h-12 mb-4 text-purple-500" />,
                  title: "Enhanced Productivity",
                  description:
                    "Capture high-quality audio, transcribe it automatically, and stay on top of your tasks effortlessly.",
                },
                {
                  icon: <Battery className="w-12 h-12 mb-4 text-purple-500" />,
                  title: "Long-Lasting Performance",
                  description:
                    "Enjoy up to 48 hours of use with USB-C charging.",
                },
                {
                  icon: (
                    <Smartphone className="w-12 h-12 mb-4 text-purple-500" />
                  ),
                  title: "Seamless Device Sync",
                  description:
                    "Easily sync with smartphones, PCs, and tablets for hassle-free access.",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  {item.icon}
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Key Features of AVM
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "High-Quality Audio Recording",
                "Automated Transcription (Multiple Vernacular Languages)",
                "Push-Button Recording",
                "24-48 Hours Battery Life",
                "Multi-Device Sync",
                "Compact & Comfortable Design",
                "Personalized AI Suggestions",
                "Future Updates",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Who Is AVM For?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Professionals & Entrepreneurs",
                  description:
                    "Keep track of meetings, client calls, and notes.",
                },
                {
                  title: "Students & Researchers",
                  description: "Ideal for lectures and seminar notes.",
                },
                {
                  title: "Tech Enthusiasts & Fashion Lovers",
                  description: "Merging cutting-edge technology with style.",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pre-order Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Pre-order AVM Now!</h2>
            <p className="text-xl mb-8">
              Be among the first to experience the future of wearable AI
              technology. Pre-order now for the exclusive price of just ₹499!
            </p>
            <Button
              size="lg"
              onClick={() => handlePreOrder()}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Pre-order Now
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>Email: contact@avm.com</p>
              <p>Phone: +91 1234567890</p>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-300 hover:text-purple-500 transition duration-300"
              >
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>

              <a
                href="#"
                className="text-gray-300 hover:text-purple-500 transition duration-300"
              >
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a>

              <a
                href="#"
                className="text-gray-300 hover:text-purple-500 transition duration-300"
              >
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">Stay Ahead. Stay Organized.</p>
          </div>
        </div>
      </footer>

      {/* Pre-order Form Modal */}
      {showPreorderForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Pre-order AVM</h2>
            {preorderSuccess ? (
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <p className="text-xl">Thank you for your pre-order!</p>
                <p className="mt-2">
                  We'll contact you soon with further details.
                </p>
                <Button
                  onClick={() => {
                    setShowPreorderForm(false);
                    setPreorderSuccess(false);
                  }}
                  className="mt-4"
                >
                  Close
                </Button>
              </div>
            ) : (
              <form onSubmit={handlePreorder}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    Complete Pre-order
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default AVMLandingPage;
