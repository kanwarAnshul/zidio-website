import { FaIndustry, FaPhoneAlt, FaUsers, FaBuilding, FaRocket } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">About Zidio Development Pvt. Ltd.</h2>
          <p className="mt-4 text-gray-600">Innovating the Future of Software Development</p>
        </div>

        {/* Overview Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h3>
          <p className="text-gray-700 mb-6">
            Welcome to Zidio Development Pvt. Ltd. We are a trailblazing software development company where innovation meets expertise. Our team of skilled developers and creative thinkers specializes in turning complex ideas into user-friendly digital solutions. From custom software to cutting-edge mobile apps, we're dedicated to engineering excellence and pushing the boundaries of technology.
          </p>
          <p className="text-gray-700 mb-6">
            At Zidio, we believe in the power of collaboration, continuous learning, and adapting to the ever-evolving digital landscape. We're not just developers; we're visionaries committed to delivering impactful software solutions that drive success for businesses globally.
          </p>
          <p className="text-gray-700 mb-6">
            Stay connected with us for insights into our groundbreaking projects, tech trends, career opportunities, and our journey in shaping the future of technology. Let's innovate together!
          </p>
        </div>

        {/* Company Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
            <FaPhoneAlt className="text-indigo-600 text-4xl mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Phone</h4>
            <p className="text-gray-600">+91 8455807965</p>
          </div>

          {/* Website Info */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
            <FaRocket className="text-indigo-600 text-4xl mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Website</h4>
            <a href="https://zidio.in/" className="text-indigo-600 hover:text-indigo-500 transition">
              https://zidio.in/
            </a>
          </div>

          {/* Industry Info */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
            <FaIndustry className="text-indigo-600 text-4xl mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Industry</h4>
            <p className="text-gray-600">Software Development</p>
          </div>

          {/* Company Size */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
            <FaUsers className="text-indigo-600 text-4xl mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Company Size</h4>
            <p className="text-gray-600">51-200 Employees</p>
          </div>

          {/* Headquarters */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
            <HiOutlineLocationMarker className="text-indigo-600 text-4xl mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Headquarters</h4>
            <p className="text-gray-600">Bengaluru, Karnataka</p>
          </div>

          {/* Founded */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
            <FaBuilding className="text-indigo-600 text-4xl mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Founded</h4>
            <p className="text-gray-600">2023</p>
          </div>
        </div>

        {/* Specialties Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Specialties</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
            <li className="hover:text-indigo-600 transition">Software Development</li>
            <li className="hover:text-indigo-600 transition">Data Science</li>
            <li className="hover:text-indigo-600 transition">Web Development</li>
            <li className="hover:text-indigo-600 transition">Android App Development</li>
            <li className="hover:text-indigo-600 transition">UI/UX Design</li>
            <li className="hover:text-indigo-600 transition">Frontend & Backend Development</li>
            <li className="hover:text-indigo-600 transition">Full Stack Development</li>
            <li className="hover:text-indigo-600 transition">Agile Methodologies</li>
            <li className="hover:text-indigo-600 transition">Data Analytics & Business Intelligence</li>
            <li className="hover:text-indigo-600 transition">E-commerce Solutions</li>
            <li className="hover:text-indigo-600 transition">Cross-Platform Compatibility</li>
            <li className="hover:text-indigo-600 transition">Scalable System Architecture</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
