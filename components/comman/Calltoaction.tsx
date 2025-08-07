import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Phone } from 'lucide-react'

function Calltoaction() {
  return (
    <section className="bg-[#012E71] text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready for a Fresh Start This Season?
        </h2>
        <p className="mb-6">
          Book your seasonal cleaning today and enjoy a spotless space!
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-white text-[#012E71] hover:bg-gray-100">
            <Phone className="w-5 h-5 mr-2" />
            Contact Us Now
          </Button>
        </Link>
      </section>
  )
}

export default Calltoaction
