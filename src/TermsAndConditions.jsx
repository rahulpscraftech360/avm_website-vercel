import React, { useState } from "react";
import { ChevronDown, ChevronUp, Lock, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const TermsAndConditions = () => {
  const [expandedSections, setExpandedSections] = useState({
    usage: false,
    privacy: false,
    connectivity: false,
    limitations: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">AVM </h1>
          <div className="space-x-4">
            <Button
              variant="ghost"
              className="hover:bg-purple-700 hover:text-white"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              className="hover:bg-purple-700 hover:text-white"
            >
              Privacy
            </Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Terms & Conditions</h2>
          <p className="text-xl text-gray-400 mb-8">
            Understand the terms of use for your AVM Pendant
          </p>
        </section>

        <div className="space-y-6 max-w-3xl mx-auto">
          {[
            {
              title: "Device Usage Terms",
              icon: <Globe className="mr-2 h-6 w-6 text-purple-500" />,
              content: [
                "The device is designed for personal and professional use",
                "High-quality audio recording is permitted with consent of all parties",
                "Automated transcription services are subject to accuracy limitations",
                "Device is intended for users aged 18 and above",
              ],
            },
            {
              title: "Privacy and Data Protection",
              icon: <Lock className="mr-2 h-6 w-6 text-purple-500" />,
              content: [
                "All recordings are encrypted and securely stored",
                "User data is not shared with third parties without explicit consent",
                "Users can delete their recordings and personal data at any time",
                "Compliance with local and international data protection regulations",
              ],
            },
            {
              title: "Device Connectivity",
              icon: <Shield className="mr-2 h-6 w-6 text-purple-500" />,
              content: [
                "Compatible with iOS and Android platforms",
                "Bluetooth Low Energy (BLE) connectivity required",
                "Internet access needed for cloud synchronization",
                // "Multi-device sync available with supported platforms",
              ],
            },
          ].map((section, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-purple-600 rounded-lg overflow-hidden"
            >
              <div
                className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-700"
                onClick={() =>
                  toggleSection(section.title.toLowerCase().replace(/\s+/g, ""))
                }
              >
                <div className="flex items-center">
                  {section.icon}
                  <h2 className="text-xl font-semibold text-white">
                    {section.title}
                  </h2>
                </div>
                {expandedSections[
                  section.title.toLowerCase().replace(/\s+/g, "")
                ] ? (
                  <ChevronUp className="text-purple-500" />
                ) : (
                  <ChevronDown className="text-purple-500" />
                )}
              </div>
              {expandedSections[
                section.title.toLowerCase().replace(/\s+/g, "")
              ] && (
                <div className="p-4 border-t border-purple-600 text-gray-300">
                  <ul className="list-disc pl-6 space-y-2">
                    {section.content.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          {/* <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            Accept Terms
          </Button> */}
        </div>
      </main>

      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            &copy; 2024 AVM Pendant. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TermsAndConditions;
