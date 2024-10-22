import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import logo from '../../public/images/logo(dark).png';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-5 gap-x-8">
          {/* Company Section */}
          <div>
            <img src={logo} alt="Zidio Development Logo" className="mb-4" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li><a href="#">About</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Our Services</a></li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li><a href="#">IT Solutions</a></li>
              <li><a href="#">Cyber Security</a></li>
              <li><a href="#">Digital Marketing</a></li>
              <li><a href="#">Machine Learning</a></li>
              <li><a href="#">Cloud Services</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold text-white">Subscribe to our Newsletter</h3>
            <p className="mt-2 text-gray-300">
              Stay updated with our latest articles and offers.
            </p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-grow rounded-md border-0 bg-white/5 px-3 py-2 text-white placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="ml-2 rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-400"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Additional Footer Section */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-gray-400 flex justify-between items-center">
          <p>© 2024 @ Zidio Development. Designed by Team ZIDIO.</p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            <div className="flex space-x-4 ml-4">
              <a href="#" aria-label="Facebook">
                <FaFacebookF className="h-6 w-6 text-white hover:text-blue-600" />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter className="h-6 w-6 text-white hover:text-blue-400" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn className="h-6 w-6 text-white hover:text-blue-700" />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram className="h-6 w-6 text-white hover:text-pink-600" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
