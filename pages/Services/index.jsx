import { FaShieldAlt, FaUsers, FaChartLine, FaCloud } from 'react-icons/fa';

const services = [
  {
    name: 'Cost Effective Solutions',
    icon: FaChartLine,
    description: 'Affordable and efficient solutions tailored to your needs.',
  },
  {
    name: 'Expert & Dedicated Team Members',
    icon: FaUsers,
    description: 'A skilled team committed to delivering quality service.',
  },
  {
    name: '24/7 Free Technical Support',
    icon: FaShieldAlt,
    description: "We're here to assist you around the clock.",
  },
  {
    name: '100% Customer Satisfaction',
    icon: FaCloud,
    description: 'Your satisfaction is our top priority.',
  },
];

const testimonials = [
  {
    name: 'John Doe',
    quote: 'This team exceeded our expectations and delivered top-notch services.',
    company: 'CEO, Tech Solutions',
  },
  {
    name: 'Jane Smith',
    quote: 'The support we received was excellent, and the solutions were cost-effective.',
    company: 'CTO, InnovateX',
  },
];

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer a wide range of software solutions including cost-effective tech, 24/7 support, and customer satisfaction as our priority.',
  },
  {
    question: 'How can I get support?',
    answer: 'You can reach our technical support team via email or phone, 24/7.',
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Introduction Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
          <p className="mt-4 text-lg text-gray-600">
            At Zidio, we deliver reliable, high-quality services designed to meet your needs. Our team of experts is dedicated to ensuring you get the best solutions at the best price.
          </p>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105"
            >
              <service.icon className="h-16 w-16 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <a
                href="#"
                className="mt-4 inline-flex items-center justify-center px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-md hover:bg-indigo-500 transition"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-800">What Our Clients Say</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="text-indigo-600">{testimonial.company}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-800">Frequently Asked Questions</h2>
          <div className="mt-10 space-y-8 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;
