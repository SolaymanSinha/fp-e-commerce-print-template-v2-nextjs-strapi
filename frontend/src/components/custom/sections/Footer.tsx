import { Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Our Company */}
          <div>
            <h2 className="text-white text-xl font-bold mb-4">ABOUT OUR COMPANY</h2>
            <p className="mb-4">
              <span className="text-white">ihopeprint.com</span> delivers the best product on the right time with the competitive price! The iHope Team presents world class quality printing and 99% customer satisfaction guaranteed. We give our full support in moving your business while we are committed to print your success!
            </p>
            <p>
              <span className="text-white">ihopeprint.com</span> is a top and reliable online printing company across New York. Our primary goal is to offer high quality services and excellent customer satisfaction. iHope provides all kind of design and printing services. iHope also provides web development service.
            </p>
          </div>

          {/* Free Proofs */}
          <div>
            <h2 className="text-white text-xl font-bold mb-4">FREE PROOFS</h2>
            <p>
              <span className="text-white">ihopeprint.com</span> is competitive enough to ensure high quality printing so you can have your error free files without spending a single cent or even order commitment.
            </p>
          </div>

          {/* Main Office */}
          <div>
            <h2 className="text-white text-xl font-bold mb-4">MAIN OFFICE</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1" />
                <p>169-22 Hillside Avenue FL 2 Jamaica, NY 11432, USA</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <p>347 829 3281</p>
              </div>
              <div>
                <p className="ml-7">347 829 3286</p>
                <p className="ml-7">+19295387903</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <p>ihopedesigns@gmail.com</p>
              </div>
              <div className="ml-7">
                <p>customercare@ihopeprint.com</p>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h2 className="text-white text-xl font-bold mb-4">BUSINESS HOURS</h2>
            <p className="mb-4">Our service available to help you seven days a week</p>
            <div className="space-y-2">
              <p>Mon-Sat: 10:00 am to 8:00 pm</p>
              <p>Sunday: 10:00 am to 7:00 pm</p>
            </div>
          </div>
        </div>

        {/* Social Media and Payment Methods */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-800">
          <div className="flex gap-4 mb-4 md:mb-0">
            {['facebook', 'instagram', 'twitter', 'youtube', 'linkedin'].map((social) => (
              <Link
                key={social}
                href={`https://${social}.com`}
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`/logo.png`}
                  alt={`${social} icon`}
                  className="w-8 h-8"
                  width={32}
                  height={32}
                />
              </Link>
            ))}
          </div>
          <div className="flex gap-4">
            {['paypal', 'visa', 'mastercard', 'maestro'].map((payment) => (
              <Image
                key={payment}
                src={`/logo.png`}
                alt={`${payment} payment method`}
                className="h-8"
                width={32}
                height={32}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

