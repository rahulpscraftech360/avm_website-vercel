import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, CreditCard, Lock, Smartphone } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/components/ui/use-toast"

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [upiId, setUpiId] = useState('')
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardExpiry, setCardExpiry] = useState('')
  const [cardCvv, setCardCvv] = useState('')
  const { toast } = useToast()

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  const handlePayment = async () => {
    // In a real application, you would make an API call to your backend to create an order
    const order = await createRazorpayOrder()

    const options = {
      key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your actual Razorpay key
      amount: order.amount,
      currency: order.currency,
      name: 'AVM AI-Powered Wearable',
      description: 'Purchase of AVM Device',
      order_id: order.id,
      handler: function (response: any) {
        toast({
          title: "Payment Successful",
          description: `Payment ID: ${response.razorpay_payment_id}`,
        })
      },
      prefill: {
        name: cardName,
        email: 'customer@example.com',
        contact: '9999999999'
      },
      theme: {
        color: '#3399cc'
      }
    }

    const razorpay = new window.Razorpay(options)
    razorpay.open()
  }

  const createRazorpayOrder = async () => {
    // This function should make an API call to your backend to create a Razorpay order
    // For demonstration purposes, we're returning a mock order
    return {
      id: 'order_' + Math.random().toString(36).substr(2, 9),
      amount: 49900, // Amount in paise
      currency: 'INR',
    }
  }

  return (
    <div className="min-h-screen bg-[#1a2b47] text-white">
      <header className="bg-[#152238] py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-400">
            AVM
          </Link>
          <Link href="/pre-order" className="text-gray-300 hover:text-white flex items-center">
            <ChevronLeft className="mr-2" /> Back to Pre-order
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-400">
          Complete Your Payment
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-[#152238] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
            <div className="flex items-center mb-6">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="AVM Device"
                width={100}
                height={100}
                className="rounded-lg mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold">AVM AI-Powered Wearable</h3>
                <p className="text-gray-300">Quantity: 1</p>
              </div>
            </div>
            <div className="border-t border-gray-600 pt-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>₹499.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-bold text-lg mt-4">
                <span>Total</span>
                <span>₹499.00</span>
              </div>
            </div>
          </div>
          <div className="bg-[#152238] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Payment Details</h2>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-2 mb-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card" className="text-gray-300">Credit/Debit Card</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="upi" id="upi" />
                <Label htmlFor="upi" className="text-gray-300">UPI</Label>
              </div>
            </RadioGroup>

            {paymentMethod === 'card' && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="cardName" className="text-gray-300">Name on Card</Label>
                  <Input 
                    id="cardName" 
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    required 
                    className="bg-[#1a2b47] text-white border-gray-600" 
                  />
                </div>
                <div>
                  <Label htmlFor="cardNumber" className="text-gray-300">Card Number</Label>
                  <div className="relative">
                    <Input 
                      id="cardNumber" 
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      required 
                      className="bg-[#1a2b47] text-white border-gray-600 pl-10" 
                      placeholder="1234 5678 9012 3456" 
                    />
                    <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry" className="text-gray-300">Expiry Date</Label>
                    <Input 
                      id="expiry" 
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      required 
                      className="bg-[#1a2b47] text-white border-gray-600" 
                      placeholder="MM/YY" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv" className="text-gray-300">CVV</Label>
                    <Input 
                      id="cvv" 
                      value={cardCvv}
                      onChange={(e) => setCardCvv(e.target.value)}
                      required 
                      className="bg-[#1a2b47] text-white border-gray-600" 
                      placeholder="123" 
                    />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'upi' && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="upiId" className="text-gray-300">UPI ID</Label>
                  <div className="relative">
                    <Input 
                      id="upiId" 
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      required 
                      className="bg-[#1a2b47] text-white border-gray-600 pl-10" 
                      placeholder="yourname@upi" 
                    />
                    <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center text-sm text-gray-300 mt-6 mb-4">
              <Lock className="w-4 h-4 mr-2" />
              Your payment information is secure and encrypted
            </div>
            <Button 
              onClick={handlePayment}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full flex items-center justify-center"
            >
              Pay ₹499.00 <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </main>

      <footer className="bg-[#0f1a2e] py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image src="/placeholder.svg?height=40&width=40" alt="AVM Logo" width={40} height={40} className="rounded-full mb-4" />
              <p className="text-sm text-gray-400">Experience the future of AI wearables with AVM.</p>
            </div>
            {['Products', 'Company', 'Support'].map((column, index) => (
              <div key={index}>
                <h4 className="text-lg font-bold mb-4">{column}</h4>
                <ul className="space-y-2">
                  {['Link 1', 'Link 2', 'Link 3', 'Link 4'].map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-sm text-gray-400 hover:text-white">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            © 2024 AVM. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}