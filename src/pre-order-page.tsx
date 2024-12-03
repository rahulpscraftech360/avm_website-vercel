// import { useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { ChevronLeft, ChevronRight, CheckCircle, CreditCard, Truck, ShieldCheck } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Checkbox } from "@/components/ui/checkbox"

// export default function PreOrderPage() {
//   const [orderSuccess, setOrderSuccess] = useState(false)

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // In a real app, you'd handle the form submission here
//     setOrderSuccess(true)
//   }

//   return (
//     <div className="min-h-screen bg-[#1a2b47] text-white">
//       <header className="bg-[#152238] py-4">
//         <div className="container mx-auto px-4 flex justify-between items-center">
//           <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-400">
//             AVM
//           </Link>
//           <Link href="/" className="text-gray-300 hover:text-white flex items-center">
//             <ChevronLeft className="mr-2" /> Back to Home
//           </Link>
//         </div>
//       </header>

//       <main className="container mx-auto px-4 py-12">
//         <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-400">
//           Pre-order Your AVM Device
//         </h1>

//         {orderSuccess ? (
//           <div className="max-w-md mx-auto text-center bg-[#152238] p-8 rounded-lg shadow-lg">
//             <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
//             <h2 className="text-2xl font-bold mb-4">Thank You for Your Pre-order!</h2>
//             <p className="text-gray-300 mb-4">
//               We've received your pre-order for the AVM device. You'll be among the first to experience the future of wearable AI technology.
//             </p>
//             <p className="text-gray-300 mb-4">
//               We'll send you an email with further details and updates on your order.
//             </p>
//             <Link href="/">
//               <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full">
//                 Return to Home
//               </Button>
//             </Link>
//           </div>
//         ) : (
//           <div className="grid md:grid-cols-2 gap-12">
//             <div>
//               <div className="bg-[#152238] p-6 rounded-lg shadow-lg mb-8">
//                 <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
//                 <div className="aspect-square relative mb-4">
//                   <Image
//                     src="/placeholder.svg?height=400&width=400"
//                     alt="AVM Device"
//                     layout="fill"
//                     objectFit="cover"
//                     className="rounded-lg"
//                   />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">AVM AI-Powered Wearable</h3>
//                 <p className="text-gray-300 mb-4">
//                   Experience the future of wearable technology with AVM. Capture your thoughts, ideas, and conversations with ease.
//                 </p>
//                 <ul className="space-y-2 text-gray-300">
//                   <li className="flex items-center">
//                     <CheckCircle className="w-5 h-5 text-orange-500 mr-2" />
//                     High-Quality Audio Recording
//                   </li>
//                   <li className="flex items-center">
//                     <CheckCircle className="w-5 h-5 text-orange-500 mr-2" />
//                     Automated Transcription
//                   </li>
//                   <li className="flex items-center">
//                     <CheckCircle className="w-5 h-5 text-orange-500 mr-2" />
//                     24-48 Hours Battery Life
//                   </li>
//                   <li className="flex items-center">
//                     <CheckCircle className="w-5 h-5 text-orange-500 mr-2" />
//                     Sleek and Stylish Design
//                   </li>
//                 </ul>
//               </div>
//               <div className="bg-[#152238] p-6 rounded-lg shadow-lg">
//                 <h2 className="text-2xl font-semibold mb-4">Why Pre-order?</h2>
//                 <ul className="space-y-4">
//                   <li className="flex items-start">
//                     <CreditCard className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0 mt-1" />
//                     <div>
//                       <h3 className="font-semibold">Exclusive Pre-order Price</h3>
//                       <p className="text-gray-300">Secure your AVM device at the special price of ₹499.</p>
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <Truck className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0 mt-1" />
//                     <div>
//                       <h3 className="font-semibold">Priority Shipping</h3>
//                       <p className="text-gray-300">Be among the first to receive the AVM device.</p>
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <ShieldCheck className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0 mt-1" />
//                     <div>
//                       <h3 className="font-semibold">Extended Warranty</h3>
//                       <p className="text-gray-300">Enjoy an additional 6 months of warranty coverage.</p>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="bg-[#152238] p-6 rounded-lg shadow-lg">
//               <h2 className="text-2xl font-semibold mb-6">Complete Your Pre-order</h2>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <Label htmlFor="name" className="text-gray-300">Full Name</Label>
//                   <Input id="name" required className="bg-[#1a2b47] text-white border-gray-600" />
//                 </div>
//                 <div>
//                   <Label htmlFor="email" className="text-gray-300">Email Address</Label>
//                   <Input id="email" type="email" required className="bg-[#1a2b47] text-white border-gray-600" />
//                 </div>
//                 <div>
//                   <Label htmlFor="phone" className="text-gray-300">Phone Number</Label>
//                   <Input id="phone" type="tel" required className="bg-[#1a2b47] text-white border-gray-600" />
//                 </div>
//                 <div>
//                   <Label htmlFor="address" className="text-gray-300">Shipping Address</Label>
//                   <Input id="address" required className="bg-[#1a2b47] text-white border-gray-600" />
//                 </div>
//                 <div>
//                   <Label className="text-gray-300">Color Preference</Label>
//                   <RadioGroup defaultValue="black" className="flex space-x-4">
//                     <div className="flex items-center space-x-2">
//                       <RadioGroupItem value="black" id="black" />
//                       <Label htmlFor="black" className="text-gray-300">Black</Label>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <RadioGroupItem value="silver" id="silver" />
//                       <Label htmlFor="silver" className="text-gray-300">Silver</Label>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <RadioGroupItem value="gold" id="gold" />
//                       <Label htmlFor="gold" className="text-gray-300">Gold</Label>
//                     </div>
//                   </RadioGroup>
//                 </div>
//                 <div>
//                   <Label htmlFor="quantity" className="text-gray-300">Quantity</Label>
//                   <Select>
//                     <SelectTrigger className="bg-[#1a2b47] text-white border-gray-600">
//                       <SelectValue placeholder="Select quantity" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="1">1</SelectItem>
//                       <SelectItem value="2">2</SelectItem>
//                       <SelectItem value="3">3</SelectItem>
//                       <SelectItem value="4">4</SelectItem>
//                       <SelectItem value="5">5</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Checkbox id="terms" required />
//                   <Label htmlFor="terms" className="text-sm text-gray-300">
//                     I agree to the terms and conditions
//                   </Label>
//                 </div>
//                 <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full flex items-center justify-center">
//                   Complete Pre-order <ChevronRight className="ml-2" />
//                 </Button>
//               </form>
//             </div>
//           </div>
//         )}
//       </main>

//       <footer className="bg-[#0f1a2e] py-12 mt-12">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div>
//               <Image src="/placeholder.svg?height=40&width=40" alt="AVM Logo" width={40} height={40} className="rounded-full mb-4" />
//               <p className="text-sm text-gray-400">Experience the future of AI wearables with AVM.</p>
//             </div>
//             {['Products', 'Company', 'Support'].map((column, index) => (
//               <div key={index}>
//                 <h4 className="text-lg font-bold mb-4">{column}</h4>
//                 <ul className="space-y-2">
//                   {['Link 1', 'Link 2', 'Link 3', 'Link 4'].map((link, linkIndex) => (
//                     <li key={linkIndex}>
//                       <a href="#" className="text-sm text-gray-400 hover:text-white">{link}</a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//           <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
//             © 2024 AVM. All rights reserved.
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }
