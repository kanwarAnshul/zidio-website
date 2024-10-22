import stats from '../../public/images/stats.png'
import stats2 from '../../public/images/stats2.png'
import stats3 from '../../public/images/stats3.png'
import stats4 from '../../public/images/stats4.png'

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      feedback:
        'Zidio Software helped streamline our processes and drastically improve efficiency. Their team was professional, and the software they delivered exceeded our expectations!',
      name: 'John Doe',
      position: 'CTO of TechCorp',
      image:stats
    },
    {
      id: 2,
      feedback:
        'Working with Zidio was an absolute pleasure. Their software development skills are top-notch, and they consistently deliver high-quality results within tight deadlines.',
      name: 'Emily Stone',
      position: 'Founder of Fintech Innovators',
      image:stats2
    },
    {
      id: 3,
      feedback:
        "Zidio's software solutions transformed how we operate. The user experience they crafted has significantly boosted our customer engagement and satisfaction.",
      name: 'Michael Lee',
      position: 'CEO of E-Commerce Solutions',
      image:stats3
    },
    {
      id: 4,
      feedback:
        "Zidio's software solutions transformed how we operate. The user experience they crafted has significantly boosted our customer engagement and satisfaction.",
      name: 'john Lee clark',
      position: 'CEO of E-Commerce Solutions',
      image:stats4
    },
  ]

  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">What Our Clients Say</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Hear from some of our satisfied clients who trust Zidio Software to deliver cutting-edge solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-4 lg:gap-x-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <blockquote className="text-lg font-medium leading-7 text-gray-900">
                <p className="mb-6">“{testimonial.feedback}”</p>
              </blockquote>
              <figcaption className="flex items-center mt-6">
                <img className="h-12 w-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                <div className="ml-4">
                  <div className="text-base font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                </div>
              </figcaption>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
