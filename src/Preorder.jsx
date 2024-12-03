import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  CreditCard,
  Truck,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

function PreOrderPage() {
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd handle the form submission here
    setOrderSuccess(true);
  };

  const handleHomeClick = () => {
    // In a real React app, you'd use React Router
    window.location.href = "/";
  };

  const url = "https://pages.razorpay.com/pl_PSIOdLNSuo4UKT/view";

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Razorpay Payment",
          text: "Make your payment through Razorpay.",
          url,
        })
        .then(() => console.log("Thanks for sharing!"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      // Fallback for browsers that don't support navigator.share
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };
  return (
    <div className="min-h-screen bg-[#1a2b47] text-white">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-white">
          Pre-order Your AVM Device
        </h1>

        {orderSuccess ? (
          <div className="max-w-md mx-auto text-center bg-[#152238] p-8 rounded-lg shadow-lg">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              Thank You for Your Pre-order!
            </h2>
            <p className="text-gray-300 mb-4">
              We've received your pre-order for the AVM device. You'll be among
              the first to experience the future of wearable AI technology.
            </p>
            <p className="text-gray-300 mb-4">
              We'll send you an email with further details and updates on your
              order.
            </p>
            <Button
              onClick={handleHomeClick}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full"
            >
              Return to Home
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-[#152238] p-6 rounded-lg shadow-lg ">
                <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
                <div className="aspect-square relative mb-4">
                  <div
                    className="w-full h-full bg-cover bg-center rounded-lg"
                    style={{
                      backgroundImage:
                        "url(https://res.cloudinary.com/dw30tfofi/image/upload/c_pad,w_680,h_680/v1733208510/b_fw5shk.png)",
                      backgroundSize: "cover",
                    }}
                  />
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  AVM AI-Powered Wearable
                </h3>
                <p className="text-gray-300 mb-4">
                  Experience the future of wearable technology with AVM. Capture
                  your thoughts, ideas, and conversations with ease.
                </p>
                <ul className="space-y-2 text-gray-300">
                  {[
                    "High-Quality Audio Recording",
                    "Automated Transcription",
                    "24-48 Hours Battery Life",
                    "Sleek and Stylish Design",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-[#152238] p-6 rounded-lg shadow-lg">
              <div className="">
                <h2 className="text-2xl font-semibold mb-4">Why Pre-order?</h2>
                <ul className="space-y-4">
                  {[
                    {
                      icon: CreditCard,
                      title: "Exclusive Pre-order Price",
                      description:
                        "Secure your AVM device at the special price of ₹499.",
                    },
                    {
                      icon: Truck,
                      title: "Priority Shipping",
                      description:
                        "Be among the first to receive the AVM device.",
                    },
                    {
                      icon: ShieldCheck,
                      title: "Extended Warranty",
                      description:
                        "Enjoy an additional 6 months of warranty coverage.",
                    },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <item.icon className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6"></form>
              <div className="mt-auto">
                <div className="mt-5 pt-5"></div>
                <h2 className="text-2xl font-semibold mb-6">
                  Complete Your Pre-order
                </h2>

                <button
                  onClick={() =>
                    (window.location.href =
                      "https://pages.razorpay.com/pl_PSIOdLNSuo4UKT/view")
                  }
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full flex items-center justify-center text-lg"
                >
                  Pre-order <ChevronRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default PreOrderPage;
