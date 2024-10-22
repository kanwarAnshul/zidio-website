export default function ContactUs() {
  return (
    <section className="bg-white py-24 px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
        <p className="mt-4 text-lg text-gray-600">We're here to help you with any inquiries!</p>

        <div className="mt-10 space-y-6">
          <div className="group flex items-center justify-center p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <div className="mr-4 text-center">
              <h3 className="text-lg font-semibold text-gray-900">Call Us Anytime</h3>
              <p className="mt-2 text-gray-600">
                <a href="tel:+918455807965" className="text-indigo-600 hover:underline">
                  +91 84558 07965
                </a>
              </p>
            </div>
          </div>

          <div className="group flex items-center justify-center p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <div className="mr-4 text-center">
              <h3 className="text-lg font-semibold text-gray-900">Send E-Mail</h3>
              <p className="mt-2 text-gray-600">
                <a href="mailto:support@zidio.in" className="text-indigo-600 hover:underline">
                  support@zidio.in
                </a>
              </p>
            </div>
          </div>

          <div className="group flex items-center justify-center p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <div className="mr-4 text-center">
              <h3 className="text-lg font-semibold text-gray-900">Opening Hours</h3>
              <p className="mt-2 text-gray-600">Mon - Fri (9:00 AM - 5:00 PM)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
