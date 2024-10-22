import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Battery, Globe, Lock, Mic, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import exampleImage from "./assets/images/avm.jpg";
export default function Dashboard() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">AVM Pendant</h1>
          <div className="space-x-4">
            <Button variant="ghost">Features</Button>
            <Button variant="ghost">About</Button>
            <Link to="Contact">
              <Button variant="ghost">Contact</Button>
            </Link>
            <Link to="Privacy">
              <Button variant="ghost">Privacy</Button>
            </Link>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Your AI Companion for Daily Life
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Enhance productivity and communication with a wearable second memory
          </p>
          <Button size="lg">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </section>
        <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-4">Stylish and Functional</h3>
            <p className="text-gray-600 mb-4">
              The AVM Pendant seamlessly blends into your daily wear while
              providing advanced functionality. It's not just a gadget; it's a
              fashion statement that enhances your productivity.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mic className="mr-2 h-4 w-4 text-blue-500" />
                High-Quality Audio Recording
              </li>
              <li className="flex items-center">
                <Zap className="mr-2 h-4 w-4 text-blue-500" />
                Automated Transcription
              </li>
              <li className="flex items-center">
                <Battery className="mr-2 h-4 w-4 text-blue-500" />
                Long Battery Life
              </li>
            </ul>
          </div>
          <div className=" h-64 rounded-lg flex items-center justify-center">
            <img src={exampleImage} alt="Description of image" />
          </div>
        </section>
        <section className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-8">Key Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Smart Integration</CardTitle>
              </CardHeader>
              <CardContent>
                Seamlessly connects with your devices and platforms
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Productivity Boost</CardTitle>
              </CardHeader>
              <CardContent>
                Enhances communication and organization in your daily life
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>User-Friendly Design</CardTitle>
              </CardHeader>
              <CardContent>
                Intuitive interface for easy interaction and query
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="bg-blue-50 rounded-lg p-8 mb-16">
          <h3 className="text-3xl font-bold mb-4">
            Who Benefits from the AVM Pendant?
          </h3>
          <p className="text-gray-600 mb-4">
            Ideal for professionals and tech-savvy individuals aged 25-45 who
            lead busy lifestyles and value productivity tools that seamlessly
            integrate into their daily routines.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Globe className="mr-2 h-4 w-4 text-blue-500" />
              Urban and suburban professionals
            </li>
            <li className="flex items-center">
              <Lock className="mr-2 h-4 w-4 text-blue-500" />
              Those who prioritize privacy and data security
            </li>
            <li className="flex items-center">
              <Zap className="mr-2 h-4 w-4 text-blue-500" />
              Individuals looking to enhance their productivity and organization
            </li>
          </ul>
        </section>
        <section className="text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Enhance Your Daily Life?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Join the waitlist and be the first to experience the AVM Pendant
          </p>
          <Button size="lg">
            Join Waitlist
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </section>
      </main>
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          &copy; 2024 AVM Pendant. All rights reserved.
        </div>
      </footer>
    </div>
  );
}