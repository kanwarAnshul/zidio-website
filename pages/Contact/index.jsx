import React from 'react'

const ContactPage = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">Get in Touch</h3>
            <p className="mt-4 text-gray-600">Feel free to reach out to us with any questions or concerns.</p>

            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-800">Call us Any Time</h4>
              <p className="text-gray-600">+918455807965</p>
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-800">Send E-Mail</h4>
              <p className="text-gray-600">support@zidio.in</p>
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-800">Opening Hours</h4>
              <p className="text-gray-600">Mon - Fri (9.00 - 5.30)</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">Send Us a Message</h3>
            <form className="mt-4">
              <div className="flex flex-col mb-4">
                <label className="text-gray-700" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  required
                  className="mt-1 p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="flex flex-col mb-4">
                <label className="text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  required
                  className="mt-1 p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="flex flex-col mb-4">
                <label className="text-gray-700" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  required
                  rows="4"
                  className="mt-1 p-2 border border-gray-300 rounded-md"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-500 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
