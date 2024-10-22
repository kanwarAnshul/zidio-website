import animesh from '../../public/images/animesh.png'
import harsa from '../../public/images/harsa.png'
import chandan from '../../public/images/chandan.png'
import salma from '../../public/images/salma.png'

const people = [
  {
    name: 'Animesh Sigh',
    role: 'Full stack web developer',
    about: 'A Full Stack Web Developer is proficient in both front-end and back-end development, capable of creating seamless and efficient web applications from concept to deployment.',
    imageUrl:
     animesh,
    social: {
      linkedin: '#',
      twitter: '#',
      facebook: '#',
    },
  },
  {
    name: 'Harsa Dash',
    role: 'Developer Team Lead',
    about:
      ' A Team Lead plays a crucial role in guiding and managing a team of developers, designers, and other professionals towards achieving project goals.',
    imageUrl:harsa,
    social: {
      linkedin: '#',
      twitter: '#',
      facebook: '#',
    },
  },
  {
    name: 'Chandan Mishra',
    role: 'Data Scientist',
    about: ' A Data Scientist is responsible for collecting, analyzing, and interpreting large datasets to uncover insights that can drive decision-making and business strategy',
    imageUrl:chandan,
    social: {
      linkedin: '#',
      twitter: '#',
      facebook: '#',
    },
  },
  {
    name: 'Salma Husna Salsabia',
    role: 'UI/UX Designer',
    about: 'A **UI/UX Designer** specializes in creating intuitive, engaging, and visually appealing interfaces that enhance user experience and satisfaction. ',
    imageUrl:salma,
    social: {
      linkedin: '#',
      twitter: '#',
      facebook: '#',
    },
  },


]

export default function TeamSection() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Meet our leadership</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best
          results for our clients.
        </p>
      </div>

      <div className="mx-auto mt-16  grid max-w-7xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {people.map((person) => (
          <div
            key={person.name}
            className="relative border-[1.5px] hover:border-blue-500 flex flex-col items-center overflow-hidden rounded-lg bg-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              className="h-40 w-40 rounded-full mt-6 object-cover shadow-lg"
              src={person.imageUrl}
              alt={`${person.name}`}
            />
            <div className="text-center mt-6 px-6">
              <h3 className="text-lg font-semibold leading-6 text-gray-900">{person.name}</h3>
              <p className="mt-2 text-sm font-medium text-indigo-600">{person.role}</p>
              <p className="mt-4 text-sm text-gray-500">{person.about}</p>
            </div>
            <div className="mt-4 mb-6 flex space-x-4">
              <a href={person.social.linkedin} className="text-gray-500 hover:text-indigo-600 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.451 20.452H16.98v-5.569c0-1.328-.026-3.036-1.851-3.036-1.853 0-2.136 1.448-2.136 2.944v5.661H9.417V9h3.227v1.561h.046c.449-.849 1.547-1.746 3.184-1.746 3.404 0 4.032 2.238 4.032 5.149v6.487zM5.337 7.433A1.861 1.861 0 0 1 3.471 5.57a1.862 1.862 0 1 1 3.724 0 1.86 1.86 0 0 1-1.858 1.863zm1.795 13.019H3.54V9h3.592v11.452zM22.225 0H1.771A1.772 1.772 0 0 0 0 1.771v20.453A1.771 1.771 0 0 0 1.771 24h20.453A1.772 1.772 0 0 0 24 22.225V1.771A1.772 1.772 0 0 0 22.225 0z" />
                </svg>
              </a>
              <a href={person.social.twitter} className="text-gray-500 hover:text-indigo-600 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.604 1.794-1.56 2.163-2.724-.949.56-2.005.97-3.127 1.19-.896-.959-2.173-1.56-3.59-1.56-2.717 0-4.92 2.204-4.92 4.917 0 .39.044.765.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.423.722-.666 1.561-.666 2.475 0 1.71.87 3.223 2.188 4.107-.807-.026-1.566-.248-2.228-.616v.061c0 2.386 1.698 4.374 3.95 4.828-.413.111-.849.171-1.296.171-.314 0-.622-.03-.923-.086.623 1.943 2.432 3.36 4.574 3.399-1.677 1.312-3.791 2.097-6.087 2.097-.395 0-.786-.023-1.17-.067 2.17 1.393 4.742 2.209 7.514 2.209 9.014 0 13.946-7.468 13.946-13.945 0-.213-.005-.425-.014-.636.961-.695 1.796-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href={person.social.facebook} className="text-gray-500 hover:text-indigo-600 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.675 0H1.325C.593 0 0 .592 0 1.324v21.352C0 23.406.593 24 1.325 24H12.82v-9.294H9.692V10.41h3.128V7.796c0-3.1 1.893-4.788 4.656-4.788 1.324 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.797.715-1.797 1.763v2.311h3.59l-.467 3.297h-3.123V24h6.116c.73 0 1.324-.593 1.324-1.324V1.324C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
