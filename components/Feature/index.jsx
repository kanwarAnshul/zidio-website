import { StarIcon, UsersIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: '3+ Year Experience',
    description: 'Over 3 years of expertise delivering unparalleled solutions and insights for your success',
    icon: StarIcon,
    link: 'Read More',
  },
  {
    name: 'Dedicated Members',
    description: 'Passionate team members dedicated to exceeding expectations and achieving mutual success',
    icon: UsersIcon,
    link: 'Read More',
  },
  {
    name: 'Valuable Support',
    description: 'Tailored support and guidance ensuring reliability and innovation every step of the way',
    icon: ChatBubbleLeftIcon,
    link: 'Read More',
  },
];

export default function FeatureSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Imagine Features
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Zidio offers tailored software solutions to help streamline your business, enhance security, and scale with ease. We focus on delivering innovative technology so you can focus on growing your business.
          </p>
        </div>
        <div className="mx-auto mt-16 w-full sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="flex flex-col items-center space-y-10 sm:flex-row sm:space-y-0 sm:space-x-8 lg:space-x-8"> {/* Add flex-col for small screens and flex-row for larger screens */}
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className="relative p-6 rounded-lg shadow-lg transition transform hover:bg-blue-600 hover:text-white hover:scale-105 w-full max-w-xs"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Icon Positioned at the Top Center, Slightly Outside */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 h-16 w-16 flex items-center justify-center rounded-full shadow-lg transition duration-300 bg-blue-600">
                  <feature.icon aria-hidden="true" className="h-8 w-8 text-white transition duration-300" />
                </div>
                <div className="pt-10 text-center">
                  <h3 className="text-lg font-semibold">{feature.name}</h3>
                  <p className="mt-2 text-base">{feature.description}</p>
                  <p className="mt-4">
                    <a href="#" className="text-indigo-200 underline hover:text-indigo-100">
                      {feature.link}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
