
const jobListings = [
  {
    title: 'Frontend Developer',
    location: 'Bangalore, India',
    description: 'Looking for a passionate Frontend Developer with experience in React and JavaScript.',
    link: '#', // Link to the specific job details
  },
  {
    title: 'Backend Developer',
    location: 'Remote',
    description: 'Join our team as a Backend Developer. Experience with Node.js and Express is a plus.',
    link: '#',
  },
  {
    title: 'UI/UX Designer',
    location: 'Bangalore, India',
    description: 'We are seeking a creative UI/UX Designer to enhance user experience across our platforms.',
    link: '#',
  },
  {
    title: 'Data Scientist',
    location: 'Remote',
    description: 'Looking for a Data Scientist with expertise in machine learning and data analysis.',
    link: '#',
  },
  // Add more job listings as needed
];

export default function CareerPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Careers at Zidio</h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          Join our team and help us shape the future of technology. Explore our current job openings and apply today!
        </p>

        {/* Job Listings */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobListings.map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
              <p className="text-gray-600">{job.location}</p>
              <p className="text-gray-500 mt-2">{job.description}</p>
              <a
                href={job.link}
                className="mt-4 inline-block bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500"
              >
                View Details
              </a>
            </div>
          ))}
        </div>

        {/* Application Form */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Apply for a Position</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 p-2 rounded-md"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 p-2 rounded-md"
                required
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Position you are applying for"
                className="border border-gray-300 p-2 rounded-md w-full"
                required
              />
            </div>
            <div className="mt-4">
              <textarea
                placeholder="Cover Letter"
                rows="4"
                className="border border-gray-300 p-2 rounded-md w-full"
                required
              />
            </div>
            <div className="mt-4">
              <input
                type="file"
                className="border border-gray-300 p-2 rounded-md w-full"
                required
              />
              <p className="text-gray-500 mt-1">Upload your resume (PDF or DOC)</p>
            </div>
            <button
              type="submit"
              className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
