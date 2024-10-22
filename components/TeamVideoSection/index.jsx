import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import meeting from '../../public/images/meeting.jpg'; // Ensure the image path is correct
import logo from '../../public/images/logo.png'; // Ensure the image path is correct

export default function TeamVideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

      <div className="relative mx-auto max-w-2xl lg:max-w-4xl text-center">
        <img
          alt="Team Logo"
          src={logo}
          className="mx-auto h-12"
        />
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mt-10">
          Watch Now
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-700">
          Our Best Working Process System with Team Expert Leaders
        </p>

        {/* Play Video Button */}
        <div className="mt-10">
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 p-4 text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.25l13.5 6.75-13.5 6.75V5.25z"
              />
            </svg>
            <span className="ml-2 text-lg font-semibold">Play Video</span>
          </button>
        </div>

        
      </div>

      {/* Video Modal */}
      <Dialog
        as="div"
        className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-75" />
          <div className="inline-block w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-xl transition-all transform">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Update this URL for your video
                title="Team Working Process"
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
            <div className="p-4">
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </section>
  );
}
