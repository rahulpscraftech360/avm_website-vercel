import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

import React from "react";
import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">AVM Pendant</h1>
          <Link to="/">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-16">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">
              Last updated: June 12, 2024
            </p>
            <p className="mb-4">
              This Privacy Policy describes Our policies and procedures on the
              collection, use and disclosure of Your information when You use
              the Service and tells You about Your privacy rights and how the
              law protects You.
            </p>
            <p className="mb-4">
              We use Your Personal data to provide and improve the Service. By
              using the Service, You agree to the collection and use of
              information in accordance with this Privacy Policy.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">
              Interpretation and Definitions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-semibold mb-2">Interpretation</h3>
            <p className="mb-4">
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </p>
            <h3 className="text-xl font-semibold mb-2">Definitions</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Account:</strong> A unique account created for You to
                access our Service or parts of our Service.
              </li>
              <li>
                <strong>Company:</strong> Refers to CFT360 DESIGN STUDIO PRIVATE
                LIMITED, located in Bangalore, Karnataka, India.
              </li>
              <li>
                <strong>Device:</strong> Any device that can access the Service
                such as a computer, a cellphone or a digital tablet.
              </li>
              <li>
                <strong>Personal Data:</strong> Any information that relates to
                an identified or identifiable individual.
              </li>
              <li>
                <strong>Service:</strong> Refers to the AVM Pendant Application.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">
              Collecting and Using Your Personal Data
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-semibold mb-2">
              Types of Data Collected
            </h3>
            <h4 className="text-lg font-semibold mb-2">Personal Data</h4>
            <p className="mb-4">
              While using Our Service, We may ask You to provide Us with certain
              personally identifiable information that can be used to contact or
              identify You. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Usage Data</li>
            </ul>
            <h4 className="text-lg font-semibold mb-2">Usage Data</h4>
            <p>
              Usage Data is collected automatically when using the Service. It
              may include information such as Your Device's Internet Protocol
              address, browser type, browser version, pages visited, time and
              date of visits, time spent on pages, unique device identifiers,
              and other diagnostic data.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">
              Use of Your Personal Data
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The Company may use Personal Data for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain our Service</li>
              <li>To manage Your Account</li>
              <li>For the performance of a contract</li>
              <li>To contact You</li>
              <li>
                To provide You with news, special offers and general information
              </li>
              <li>To manage Your requests</li>
              <li>For business transfers</li>
              <li>
                For other purposes such as data analysis and improving our
                Service
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              If you have any questions about this Privacy Policy, You can
              contact us:
            </p>
            <p className="mt-2">
              By email:{" "}
              <a
                href="mailto:apps.@cft360@gmail.com"
                className="text-blue-600 hover:underline"
              >
                apps.@cft360@gmail.com
              </a>
            </p>
          </CardContent>
        </Card>
      </main>
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          &copy; 2024 AVM Pendant. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
