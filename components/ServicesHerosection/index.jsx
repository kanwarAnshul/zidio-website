import React from 'react';
import {
  UsersIcon,
  StarIcon,
  QuestionMarkCircleIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/outline';
import hosting from '../../public/images/hosting.png';
import cloud from '../../public/images/cloud.png';
import vector from '../../public/images/vector.png';
import developer from '../../public/images/developer.png';
import design from '../../public/images/design.png';
import marketing from '../../public/images/marketing.png';

const services = [
  {
    name: 'Cost Effective Solutions',
    icon: UsersIcon,
    description: 'Affordable and efficient solutions tailored to your needs.',
  },
  {
    name: 'Expert & Dedicated Team Members',
    icon: UsersIcon,
    description: 'A skilled team committed to delivering quality service.',
  },
  {
    name: '24/7 Free Technical Support',
    icon: QuestionMarkCircleIcon,
    description: "We’re here to assist you around the clock.",
  },
  {
    name: '100% Customer Satisfaction',
    icon: StarIcon,
    description: 'Your satisfaction is our top priority.',
  },
];

const additionalServices = [
  {
    title: 'Graphic Design',
    description: 'Monotonectally synergize grants to business visualize strategic infomediaries.',
    image: design,
  },
  {
    title: 'Cloud Solutions',
    description: 'Deliver scalable cloud solutions to enhance your business’s flexibility and operational efficiency.',
    image: cloud,
  },
  {
    title: 'Web Development',
    description: 'Design and build responsive, high-performance websites using the latest web technologies.',
    image: developer,
  },
  {
    title: 'Digital Marketing',
    description: 'Boost your online presence with tailored digital marketing strategies that drive engagement and growth.',
    image: marketing,
  },
  {
    title: '3D Vector Illustration',
    description: "Create stunning 3D vector illustrations to elevate your brand's visual appeal.",
    image: vector,
  },
  {
    title: 'Hosting Services',
    description: 'Reliable hosting services to keep your website up and running seamlessly.',
    image: hosting,
  },
];

export default function ServiceHeroSection() {
  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100 py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-8">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl text-center mb-8">
          Your Reliable Partner for IT Services
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Service Section */}
          <div>
            <p className="text-gray-500 text-lg leading-relaxed text-center mb-12">
              At Zidio, we’re your trusted IT services partner, ensuring your success with reliable, tailored solutions.
            </p>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out bg-white p-6 flex flex-col items-start"
                >
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-blue-500" aria-hidden="true" />
                    <h3 className="ml-3 font-semibold text-gray-900 text-xl">{service.name}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>

            {/* About More Button */}
            <div className="mt-12 text-center">
              <button className="inline-flex items-center text-white h-12 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-lg font-medium rounded-md shadow-md transition-transform duration-300 transform hover:scale-105">
                About More
                <ArrowRightCircleIcon className="h-5 w-5 ml-2" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Right Side - Image Gallery */}
          <div className="grid grid-cols-2 gap-6">
            <img
              src="https://images.unsplash.com/photo-1709715357520-5e1047a2b691?q=80&w=2071&auto=format&fit=crop"
              alt="Service Image 1"
              className="w-full h-60 object-cover rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=1964&auto=format&fit=crop"
              alt="Service Image 2"
              className="w-full h-60 object-cover rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1531498860502-7c67cf02f657?q=80&w=2070&auto=format&fit=crop"
              alt="Service Image 3"
              className="w-full h-60 object-cover rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1631624226983-655dea38053d?q=80&w=1887&auto=format&fit=crop"
              alt="Service Image 4"
              className="w-full h-60 object-cover rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>

        {/* Additional Service Offerings */}
        <div className="mt-24 bg-gradient-to-r from-blue-100 to-white p-8 rounded-lg">
          <h2 className="text-base font-semibold text-blue-500 text-center">Deploy faster</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-center text-gray-900">
            Everything you need to deploy your app
          </p>
          <p className="mt-6 text-lg leading-8 text-center text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
            {additionalServices.map((service) => (
              <div
                className="bg-white border-2 hover:border-blue-400 border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105 relative"
                key={service.title}
              >
                <img
                  alt={service.title}
                  src={service.image}
                  className="rounded-t-lg w-full h-48 object-contain"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <a
                    href="#"
                    className="inline-block mt-4 px-4 py-2 text-sm text-white bg-blue-500 hover:bg-blue-700 rounded-md transition-colors duration-300"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
