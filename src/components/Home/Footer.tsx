import { Mail, Instagram, Youtube, Twitter, LinkedinIcon, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-forest-light text-gray-300" id='footer'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo.png" className='w-56' alt="logo" />
            </div>
            <p className="text-mint-dark">
              Professional video editing services that bring your stories to life.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>reflexverse@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:scale-110">Services</a></li>
              <li><a href="#portfolio" className="hover:scale-110">Portfolio</a></li>
              <li><a href="#about" className="hover:scale-110">About</a></li>
              <li><a href="#testimonials" className="hover:scale-110">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:scale-110">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:scale-110">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="hover:scale-110">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:scale-110">
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a href="#" className="hover:scale-110">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Reflexverse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}